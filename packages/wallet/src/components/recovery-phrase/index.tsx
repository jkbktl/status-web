import { useState } from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import { Button, Checkbox, Counter } from '@status-im/components'
import { CloseIcon, NegativeStateIcon } from '@status-im/icons/20'
import { cx } from 'class-variance-authority'

import { SignTransactionDialog } from '../sign-transaction'

type Props = {
  mnemonic: string
}

export function RecoveryPhrase({ mnemonic }: Props) {
  const [showRecoveryDialog, setShowRecoveryDialog] = useState(false)

  const onPasswordConfirm = (password: string) => {
    console.log('Password confirmed:', password)
    setShowRecoveryDialog(true)
  }

  const onRecoveryClose = () => {
    setShowRecoveryDialog(false)
  }

  return (
    <>
      <SignTransactionDialog onConfirm={onPasswordConfirm} walletId="123">
        <button className="flex gap-1 rounded-20 border border-solid border-danger-50/20 bg-danger-50/10 px-2 py-[3px] text-13 text-danger-50">
          <NegativeStateIcon className="text-danger-50/20" /> Backup recovery
          phrase
        </button>
      </SignTransactionDialog>

      <RecoveryPhraseDialog
        isOpen={showRecoveryDialog}
        onClose={onRecoveryClose}
        mnemonic={mnemonic}
      />
    </>
  )
}

export const RecoveryPhraseDialog = ({
  isOpen,
  onClose,
  mnemonic,
}: {
  isOpen: boolean
  onClose: () => void
  mnemonic: string
}) => {
  const [isChecked, setIsChecked] = useState(false)

  const onComplete = () => {
    console.log('Recovery phrase backup completed')
    onClose()
  }

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-20 bg-blur-neutral-100/70 opacity-[30%] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-[0%] data-[state=open]:fade-in-[0%]" />
        <Dialog.Content
          data-customisation="blue"
          className="fixed left-1/2 top-1/2 z-50 flex max-h-[calc(100vh-32px)] w-full max-w-[448px] -translate-x-1/2 -translate-y-1/2 flex-col overflow-y-auto rounded-20 bg-white-100 p-4 pb-0 shadow-1 duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-[0%] data-[state=open]:fade-in-[0%] data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]"
        >
          <Dialog.Close className="absolute right-3 top-3 z-40 rounded-10 border border-neutral-30 p-1.5 transition-colors active:border-neutral-50 hover:border-neutral-40 disabled:pointer-events-none">
            <span className="sr-only">Close</span>
            <CloseIcon className="text-neutral-100" />
          </Dialog.Close>

          <div className="flex flex-col gap-4">
            <h1 className="text-27 font-600">Backup recovery phrase</h1>

            <div className="mt-10 grid grid-cols-2 gap-x-4 rounded-16 bg-neutral-2.5 px-3 py-2">
              {mnemonic.split(' ').map((word, i) => (
                <div
                  key={i}
                  className={cx(
                    'flex items-center gap-2 border-dashed py-2',
                    i % 2 === 0 ? 'border-r border-neutral-80/10' : '',
                  )}
                >
                  <Counter value={i + 1} variant="grey" />
                  <span className="font-mono">{word}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 text-15 text-neutral-100">
              <p>
                <strong>What is a Recovery Phrase?</strong>
                <br />A 12-word phrase that gives full access to your funds and
                is the only way to recover them.
              </p>
              <p>
                <strong>How do I save my Recovery Phrase?</strong>
                <br />
                Write it down and store it securely in a safe place.
              </p>
              <p>
                <strong>Should I share my Recovery Phrase?</strong>
                <br />
                Never share your Secret Recovery Phrase. If someone asks for it,
                they&apos;re likely trying to scam you.
              </p>
            </div>

            <div className="sticky bottom-0 mt-auto flex flex-col gap-4 border-t border-neutral-10 bg-white-100 py-4">
              <div className="flex items-center gap-2 text-15 text-neutral-100">
                <label
                  htmlFor="recovery-phrase-backed"
                  className="flex cursor-pointer select-none items-center gap-2 text-15"
                >
                  <Checkbox
                    id="recovery-phrase-backed"
                    checked={isChecked}
                    onCheckedChange={() => setIsChecked(!isChecked)}
                  />
                  I backed up my recovery phrase
                </label>
              </div>
              <Button
                variant="primary"
                disabled={!isChecked}
                onClick={onComplete}
              >
                Finish backup and remove recovery phrase
              </Button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
