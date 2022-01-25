import { memo, useEffect, useRef } from 'react'
import { useStore } from '../../Store'

type Props = {
    streamId: string
    // TODO: Type with Partition.*
    streamPartition: number
    onMessage?: (data: any, raw: any) => void
}

type MessagePresenceMap = {
    [index: string]: true
}

const EmptyMessagePresenceMap = {}

const MessageInterceptor = memo(
    ({ streamId, streamPartition, onMessage: onMessageProp }: Props) => {
        const {
            session: { streamrClient },
        } = useStore()

        const messagesRef = useRef<MessagePresenceMap>(EmptyMessagePresenceMap)

        useEffect(() => {
            messagesRef.current = EmptyMessagePresenceMap
        }, [streamId])

        const onMessageRef = useRef(onMessageProp)

        useEffect(() => {
            onMessageRef.current = onMessageProp
        }, [onMessageProp])

        useEffect(() => {
            let mounted = true

            let sub: any

            if (!streamrClient) {
                return () => {}
            }

            function unsub() {
                if (sub) {
                    streamrClient!.unsubscribe(sub)
                    sub = undefined
                    console.info('unsubscribed from stream', streamId)
                }
            }

            async function fn() {
                sub = await streamrClient!.subscribe(
                    {
                        streamId,
                        streamPartition,
                    },
                    (data: any, raw: any) => {
                        if (!mounted) {
                            return
                        }

                        if (messagesRef.current[data.id]) {
                            // Message with such id already exists. Suppress.
                            return
                        }

                        messagesRef.current[data.id] = true

                        const { current: onMessage } = onMessageRef

                        if (typeof onMessage === 'function') {
                            onMessage(data, raw)
                        }
                    }
                )
                console.info(
                    'subscribed to stream',
                    streamId,
                    'on  partition',
                    streamPartition
                )

                if (!mounted) {
                    unsub()
                }
            }

            fn()

            return () => {
                mounted = false
                unsub()
            }
        }, [streamId, streamPartition, streamrClient])

        return null
    }
)

export default MessageInterceptor
