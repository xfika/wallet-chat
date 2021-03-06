import { css } from 'twin.macro'

export default function Hodl() {
    return (
        <span
            css={[
                css`
                    :hover span,
                    span + span {
                        display: none;
                    }

                    :hover span + span {
                        display: inline;
                    }
                `,
            ]}
        >
            <span>hold</span>
            <span>hodl</span>
        </span>
    )
}
