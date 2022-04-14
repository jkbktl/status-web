import React, { useEffect, useRef, useState } from 'react'

import { useChatContext } from '~/src/contexts/chat-context'
import { EmojiIcon } from '~/src/icons/emoji-icon'
import { GifIcon } from '~/src/icons/gif-icon'
import { ImageIcon } from '~/src/icons/image-icon'
import { StickerIcon } from '~/src/icons/sticker-icon'
import { styled } from '~/src/styles/config'
import { Box, Flex, IconButton } from '~/src/system'

import { InputReply } from './input-reply'

interface Props {
  mode?: 'normal' | 'editing'
  value?: string
  editing?: boolean
}

export const ChatInput = (props: Props) => {
  const { value, editing } = props

  const [inputValue, setInputValue] = useState(value ?? '')
  const { state } = useChatContext()

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    state.message && !editing && inputRef.current?.focus()
  }, [state.message, editing])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  return (
    <Wrapper>
      <Box css={{ paddingBottom: 6 }}>
        <IconButton label="Add file" color="gray">
          <ImageIcon />
        </IconButton>
      </Box>
      <Bubble>
        {state.message && <InputReply message={state.message} />}
        <InputWrapper>
          <Input
            ref={inputRef}
            placeholder="Message"
            value={inputValue}
            onChange={handleChange}
          />
          <Flex>
            <IconButton label="Pick emoji">
              <EmojiIcon />
            </IconButton>
            <IconButton label="Pick sticker">
              <StickerIcon />
            </IconButton>
            <IconButton label="Pick gif">
              <GifIcon />
            </IconButton>
          </Flex>
        </InputWrapper>
      </Bubble>
    </Wrapper>
  )
}

const Wrapper = styled('div', {
  display: 'flex',
  overflow: 'hidden',
  alignItems: 'flex-end',
  padding: '12px 8px 12px 4px',
  gap: 4,
})

const Bubble = styled('div', {
  width: '100%',
  background: '#EEF2F5',
  borderRadius: '16px 16px 4px 16px;',
  padding: 2,
  overflow: 'hidden',
})

const InputWrapper = styled('div', {
  display: 'flex',
  height: 40,
  width: '100%',
  alignItems: 'center',
  background: '#EEF2F5',
  padding: '0 0 0 12px',
})

const Input = styled('input', {
  display: 'flex',
  background: 'none',
  alignItems: 'center',
  width: '100%',
})