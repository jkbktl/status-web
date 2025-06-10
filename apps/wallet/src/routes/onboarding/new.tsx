import { useState, useTransition } from 'react'

import { Button, Checkbox, Counter } from '@status-im/components'
import { ArrowLeftIcon } from '@status-im/icons/20'
import { CreatePasswordForm } from '@status-im/wallet/components'
import { createFileRoute, useNavigate } from '@tanstack/react-router'

import { useCreateWallet } from '../../hooks/use-create-wallet'

import type { CreatePasswordFormValues } from '@status-im/wallet/components'
import type { SubmitHandler } from 'react-hook-form'

export const Route = createFileRoute('/onboarding/new')({
  component: RouteComponent,
})

type OnboardingState =
  | { type: 'create-password' }
  | { type: 'recovery-phrase'; mnemonic: string }

function RouteComponent() {
  const [onboardingState, setOnboardingState] = useState<OnboardingState>({
    type: 'create-password',
  })

  return (
    <div className="flex h-full">
      {onboardingState.type === 'create-password' && (
        <CreatePassword
          onNext={mnemonic =>
            setOnboardingState({ type: 'recovery-phrase', mnemonic })
          }
        />
      )}
      {onboardingState.type === 'recovery-phrase' && (
        <RecoveryPhrase mnemonic={onboardingState.mnemonic} />
      )}
    </div>
  )
}

function CreatePassword() {
  const { createWalletAsync } = useCreateWallet()
  const navigate = useNavigate()
  const [isPending, startTransition] = useTransition()

  const handleSubmit: SubmitHandler<CreatePasswordFormValues> = async data => {
    try {
      startTransition(async () => {
        const mnemonic = await createWalletAsync(data.password)
        navigate({ to: '/portfolio', state: { mnemonic } })
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div>
        <Button
          href="/onboarding"
          variant="grey"
          icon={<ArrowLeftIcon color="$neutral-100" />}
          aria-label="Back"
          size="32"
        />
      </div>
      <h1 className="text-27 font-600">Create password</h1>
      <div className="text-15 text-neutral-50">
        To unlock the extension and sign transactions, the password is stored
        only on your device. Status can't recover it.
      </div>

      <CreatePasswordForm onSubmit={handleSubmit} loading={isPending} />
    </div>
  )
}

function RecoveryPhrase({ mnemonic }: { mnemonic: string }) {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-27 font-600">Backup recovery phrase</h1>
      <div className="mt-10 grid grid-cols-2 gap-4 rounded-16 bg-neutral-2.5 p-4">
        {mnemonic.split(' ').map((word, i) => (
          <div key={i} className="flex items-center gap-2">
            <Counter value={i + 1} variant="grey" />
            <span className="font-mono">{word}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 text-15 text-neutral-100">
        <p>
          <strong>What is a Recovery Phrase?</strong>
          <br />A 12-word phrase that gives full access to your funds and is the
          only way to recover them.
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

      <div className="flex items-center gap-2">
        <Checkbox
          checked={isChecked}
          onCheckedChange={() => setIsChecked(!isChecked)}
        />{' '}
        I backed up my recovery phrase
      </div>
      <Button variant="primary" disabled={!isChecked}>
        Finish backup and remove recovery phrase
      </Button>
    </div>
  )
}
