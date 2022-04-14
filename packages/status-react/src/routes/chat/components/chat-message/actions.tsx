import React from 'react'

import { ReactionPopover } from '~/src/components/reaction-popover'
import { PencilIcon } from '~/src/icons/pencil-icon'
import { PinIcon } from '~/src/icons/pin-icon'
import { ReactionIcon } from '~/src/icons/reaction-icon'
import { ReplyIcon } from '~/src/icons/reply-icon'
import { TrashIcon } from '~/src/icons/trash-icon'
import { UnpinIcon } from '~/src/icons/unpin-icon'
import { styled } from '~/src/styles/config'
import {
  AlertDialog,
  AlertDialogTrigger,
  IconButton,
  Tooltip,
} from '~/src/system'

import type { Reactions } from '~/src/protocol/use-messages'

interface Props {
  owner: boolean
  pinned: boolean
  onReplyClick: () => void
  onEditClick: () => void
  reacting: boolean
  onReactingChange: (reacting: boolean) => void
  reactions: Reactions
}

export const Actions = (props: Props) => {
  const {
    owner,
    pinned,
    onReplyClick,
    onEditClick,
    reacting,
    onReactingChange,
    reactions,
  } = props

  return (
    <Wrapper open={reacting}>
      <ReactionPopover
        reactions={reactions}
        open={reacting}
        onOpenChange={onReactingChange}
        onClick={emoji => {
          console.log(emoji)
          onReactingChange(false)
        }}
      >
        <Tooltip label="React">
          <IconButton label="Pick reaction" intent="info" color="gray">
            <ReactionIcon />
          </IconButton>
        </Tooltip>
      </ReactionPopover>
      <Tooltip label="Reply">
        <IconButton
          label="Reply to message"
          intent="info"
          color="gray"
          onClick={onReplyClick}
        >
          <ReplyIcon />
        </IconButton>
      </Tooltip>
      {owner && (
        <Tooltip label="Edit">
          <IconButton
            label="Edit message"
            intent="info"
            color="gray"
            onClick={onEditClick}
          >
            <PencilIcon />
          </IconButton>
        </Tooltip>
      )}
      {pinned ? (
        <Tooltip label="Unpin">
          <IconButton label="Unpin message" intent="info" color="gray">
            <UnpinIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip label="Pin">
          <IconButton label="Pin message" intent="info" color="gray">
            <PinIcon />
          </IconButton>
        </Tooltip>
      )}
      {owner && (
        <AlertDialogTrigger>
          <Tooltip label="Delete">
            <IconButton label="Delete message" intent="danger" color="gray">
              <TrashIcon />
            </IconButton>
          </Tooltip>
          <AlertDialog
            title="Delete Message"
            description="Are you sure you want to delete this message?"
            actionLabel="Delete"
            actionVariant="danger"
            cancelLabel="Cancel"
          />
        </AlertDialogTrigger>
      )}
    </Wrapper>
  )
}

const Wrapper = styled('div', {
  position: 'absolute',
  top: -18,
  right: 16,
  padding: 2,
  boxShadow: '0px 4px 12px rgba(0, 34, 51, 0.08)',
  background: '#fff',
  borderRadius: 8,
  display: 'none',

  ':hover > &': {
    display: 'flex',
  },

  variants: {
    open: {
      true: {
        display: 'flex',
      },
    },
  },
})