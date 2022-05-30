import { createReducer } from '@reduxjs/toolkit'
import { MessageAction } from './actions'

const reducer = createReducer({}, (builder) => {
    builder.addCase(MessageAction.PublishMessage, () => {
        // See `createMessageSaga`.
    })

    builder.addCase(MessageAction.RegisterMessage, () => {
        // See `registerMessageSaga`.
    })
})

export default reducer
