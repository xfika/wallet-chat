import { IRecord, PrivacySetting } from '../../../types/common'

export interface RoomState {
    selectedId: undefined | RoomId
    privacy: {
        [index: RoomId]: {
            value: PrivacySetting
            changing: boolean
            getting: boolean
        }
    }
    storageNodes: {
        [index: RoomId]: {
            addresses: {
                [address: string]: {
                    state: boolean
                    toggling: boolean
                }
            }
            getting: boolean
        }
    }
}

export interface IRoom extends IRecord {
    createdBy?: string
    id: string
    name: string
    privacy?: string
    useStorage?: boolean
}

export type RoomId = IRoom['id']