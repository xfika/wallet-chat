import { call } from 'redux-saga/effects'
import StreamrClient, { Stream, StreamProperties } from 'streamr-client'
import { IRoom } from '../features/rooms/types'
import getWalletClientSaga from './getWalletClientSaga'

export default function* createStreamSaga({
    id,
    name: description,
    ...metadata
}: Omit<IRoom, 'owner'>) {
    const client: StreamrClient = yield call(getWalletClientSaga)

    const stream: Stream = yield client.createStream({
        id,
        description,
        extensions: {
            'thechat.eth': metadata,
        },
    } as StreamProperties)

    // @TODO storage enabling
    // stream.addToStorageNode(STREAMR_STORAGE_NODE_GERMANY)
    // STREAMR_STORAGE_NODE_GERMANY from 'streamr-client'

    // @TODO assign permissions based on the privacy option

    return stream
}
