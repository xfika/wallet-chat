import { FC, useState } from 'react'
import tw from 'twin.macro'
import Form from '../../../Form'
import Hint from '../../../Hint'
import Label from '../../../Label'
import Modal, { ModalProps } from '../../../Modal'
import PrimaryButton from '../../../PrimaryButton'
import SelectField, {
    Option as RawOption,
    SingleValue as RawSingleValue,
} from '../../../SelectField'
import Text from '../../../Text'
import TextField from '../../../TextField'
import Toggle from '../../../Toggle'
import PrivateIcon from './icons/PrivateIcon'
import PublicIcon from './icons/PublicIcon'
import ViewOnlyIcon from './icons/ViewOnlyIcon'

enum PrivacySetting {
    Private = 'private',
    ViewOnly = 'viewOnly',
    Public = 'public',
}

type PrivacyOption = {
    value: PrivacySetting
    label: string
    desc: string
    icon: FC
}

const privacyOptions: PrivacyOption[] = [
    {
        value: PrivacySetting.Private,
        label: 'Private',
        desc: 'Only invited members can post and view messages',
        icon: PrivateIcon,
    },
    {
        value: PrivacySetting.ViewOnly,
        label: 'View only',
        desc: 'Anyone can view other messages',
        icon: ViewOnlyIcon,
    },
    {
        value: PrivacySetting.Public,
        label: 'Public',
        desc: 'Anyone can post and view other messages',
        icon: PublicIcon,
    },
]

export default function AddRoomModal(props: ModalProps) {
    const [privacySetting, setPrivacySetting] = useState<PrivacyOption>(
        privacyOptions[0]
    )

    return (
        <Modal {...props} title="Create new room">
            <Form>
                <>
                    <Label htmlFor="roomName">Name</Label>
                    <TextField placeholder="e.g. giggling-bear" id="roomName" />
                    <Hint>The room name will be publicly visible.</Hint>
                    <Hint>
                        You may use alphanumeric characters, as well as dashes
                        (-) and underscores (_) for room names.
                    </Hint>
                </>
                <>
                    <Label>Choose privacy</Label>
                    <SelectField
                        options={privacyOptions}
                        value={privacySetting}
                        onChange={(option) =>
                            void setPrivacySetting(option as PrivacyOption)
                        }
                        optionComponent={Option}
                        singleValueComponent={SingleValue}
                    />
                </>
                <>
                    <Label>Message storage</Label>
                    <div
                        css={[
                            tw`
                                flex
                            `,
                        ]}
                    >
                        <div
                            css={[
                                tw`
                                    flex-grow
                                `,
                            ]}
                        >
                            <Hint
                                css={[
                                    tw`
                                        pr-16
                                    `,
                                ]}
                            >
                                <Text>
                                    When message storage is disabled,
                                    participants will only see messages sent
                                    while they are online.
                                </Text>
                            </Hint>
                        </div>
                        <div
                            css={[
                                tw`
                                    mt-2
                                `,
                            ]}
                        >
                            <Toggle />
                        </div>
                    </div>
                </>
                <>
                    <div
                        css={[
                            tw`
                                flex
                                mt-12
                            `,
                        ]}
                    >
                        <div
                            css={[
                                tw`
                                    flex-grow
                                `,
                            ]}
                        />
                        <div>
                            <PrimaryButton
                                type="submit"
                                css={[
                                    tw`
                                        h-12
                                        rounded-[24px]
                                        px-8
                                    `,
                                ]}
                            >
                                <Text>Create</Text>
                            </PrimaryButton>
                        </div>
                    </div>
                </>
            </Form>
        </Modal>
    )
}

function SingleValue({ data: { icon: Icon }, children, ...props }: any) {
    return (
        <RawSingleValue {...props}>
            <div
                css={[
                    tw`
                        text-[14px]
                        p-0
                        flex
                        items-center
                    `,
                ]}
            >
                <div
                    css={[
                        tw`
                            text-[#59799C]
                            flex
                            justify-center
                            w-10
                        `,
                    ]}
                >
                    <Icon css={tw`block`} />
                </div>
                <div>
                    <Text>{children}</Text>
                </div>
            </div>
        </RawSingleValue>
    )
}

function Option({ data: { label, icon: Icon, desc }, ...props }: any) {
    return (
        <RawOption {...props}>
            <div
                css={[
                    tw`
                        flex
                        items-center
                    `,
                ]}
            >
                <div
                    css={[
                        tw`
                            bg-[#F1F4F7]
                            rounded-full
                            w-8
                            h-8
                            flex
                            justify-center
                            items-center
                            mr-3
                        `,
                    ]}
                >
                    <Icon
                        css={[
                            tw`
                                block
                            `,
                        ]}
                    />
                </div>
                <div>
                    <div
                        css={[
                            tw`
                                text-[#36404E]
                                text-[14px]
                                font-medium
                            `,
                        ]}
                    >
                        <Text>{label}</Text>
                    </div>
                    <Hint
                        css={[
                            tw`
                                text-[0.75rem]
                                mt-0
                            `,
                        ]}
                    >
                        <Text>{desc}</Text>
                    </Hint>
                </div>
            </div>
        </RawOption>
    )
}
