import { useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import { ActionType, useDispatch, useStore } from './ChatStore'
import SubmitButton from './SubmitButton'

type Props = {
    className?: string,
}

type InnerProps = {
    $submittable?: boolean,
}

const Inner = styled.div<InnerProps>`
    background-color: #F7F9FC;
    border-radius: 0.75rem;
    display: flex;
    height: 3rem;
    width: 100%;

    ${SubmitButton} {
        opacity: 0.3;
    }

    ${({ $submittable }) => $submittable && css`
        ${SubmitButton} {
            opacity: 1;
        }
    `}
`

function UnstyledMessageInput({ className }: Props) {
    const [value, setValue] = useState<string>('')

    const inputRef = useRef<HTMLInputElement>(null)

    const submittable = !/^\s*$/.test(value)

    const dispatch = useDispatch()

    const { identity, roomId } = useStore()

    function onSubmit(body: string) {
        if (identity == null) {
            return
        }

        dispatch({
            type: ActionType.AddMessages,
            payload: [{
                body,
                createdAt: Date.now(),
                sender: identity,
                id: uuidv4(),
            }],
        })
    }

    function submit() {
        if (submittable && typeof onSubmit === 'function') {
            onSubmit(value)
            setValue('')
        }
    }

    const onKeyDown = ({ key }: React.KeyboardEvent) => {
        if (key === 'Enter') {
            submit()
        }
    }

    const onSubmitClick = () => {
        const { current: input } = inputRef

        submit()

        if (input) {
            input.focus()
        }
    }

    // Focus the text field on room change.
    useEffect(() => {
        const { current: input } = inputRef

        if (input) {
            input.focus()
        }
    }, [roomId])

    return (
        <div className={className}>
            <Inner $submittable={submittable}>
                <input
                    autoFocus
                    onChange={(e) => {
                        setValue(e.currentTarget.value)
                    }}
                    onKeyDown={onKeyDown}
                    placeholder="Type a message"
                    ref={inputRef}
                    type="text"
                    value={value}
                />
                <SubmitButton onClick={onSubmitClick} />
            </Inner>
        </div>
    )
}

const MessageInput = styled(UnstyledMessageInput)`
    padding: 1.5rem;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;

    input {
        appearance: none;
        background: transparent;
        border: 0;
        flex-grow: 1;
        outline: 0;
        height: 100%;
        padding: 0 0 0 1.25rem;
    }
`

export default MessageInput