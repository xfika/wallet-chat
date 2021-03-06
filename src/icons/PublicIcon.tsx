import { SVGAttributes } from 'react'

export default function PublicIcon(props: SVGAttributes<SVGElement>) {
    return (
        <svg
            {...props}
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M16.312 12.539a8.04 8.04 0 0 0 .813-3.54 8.141 8.141 0 0 0-6.031-7.85h-.04A8.11 8.11 0 0 0 3.72 2.827l-.102.094A8.117 8.117 0 0 0 9 17.125h.187a8.149 8.149 0 0 0 7.079-4.485l.046-.101zm-.437-3.54a6.979 6.979 0 0 1-.43 2.4L11.82 9.171a1.25 1.25 0 0 0-.492-.18l-1.781-.235a1.258 1.258 0 0 0-1.196.532H7.68l-.297-.617a1.266 1.266 0 0 0-.86-.68l-.515-.11.195-.46a.633.633 0 0 1 .578-.383H8.04c.21-.001.417-.055.601-.157l.954-.53c.084-.046.162-.101.234-.165l2.102-1.906a1.227 1.227 0 0 0 .351-1.32A6.875 6.875 0 0 1 15.875 9zM2.125 9a6.805 6.805 0 0 1 .742-3.1l.813 2.179a1.258 1.258 0 0 0 .906.781l.43.094h.007l.938.203a.61.61 0 0 1 .43.336l.164.344a1.257 1.257 0 0 0 1.125.703h.093l-.601 1.344a1.242 1.242 0 0 0 .219 1.359l1.257 1.36a.649.649 0 0 1 .157.538l-.141.727A6.883 6.883 0 0 1 2.124 9z"
                fill="currentColor"
            />
        </svg>
    )
}
