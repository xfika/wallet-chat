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
                d="M9 0C4.02943 0 0 4.02943 0 9C0 13.9706 4.02943 18 9 18C13.9706 18 18 13.9706 18 9C18 4.02943 13.9706 0 9 0ZM6.76881 2.43921C7.09654 2.61567 7.48394 2.7826 7.93143 2.94015C8.37891 3.09771 8.82327 3.17667 9.26443 3.17667C9.59004 3.17604 9.91483 3.09523 10.1911 2.89285C10.4586 2.73253 10.7175 2.60461 11.0608 2.63754C11.4135 2.67607 11.7849 2.79751 12.1573 2.81763C12.6237 3.06972 13.0776 3.38439 13.5188 3.76254C13.3046 3.77514 13.0773 3.7977 12.8378 3.82923C12.5983 3.86074 12.3654 3.90755 12.1385 3.97056C11.9116 4.03358 11.7035 4.11592 11.5145 4.21675C11.3254 4.3176 11.1867 4.44335 11.0984 4.5946C10.9598 4.8215 10.8622 5.01379 10.8055 5.17135C10.6888 5.49804 10.7164 6.01927 10.4464 6.25873C10.3897 6.29655 10.3424 6.34053 10.3045 6.39094C10.2667 6.44137 10.2509 6.50736 10.2572 6.58927C10.2635 6.67121 10.3047 6.78795 10.3803 6.93921C10.4182 7.02745 10.4492 7.13457 10.4744 7.26063C10.7138 7.25986 10.96227.22383 11.1742 7.07142L12.4223 7.18485C12.7445 6.82195 13.1199 6.81591 13.443 7.18485C13.5439 7.28568 13.651 7.43737 13.7645 7.63906L13.235 7.9981C13.109 7.96029 12.9578 7.88472 12.7814 7.77129C12.6933 7.72086 12.6048 7.66391 12.5164 7.60089C12.0133 7.35675 11.0284 7.64106 10.4744 7.67668C10.4022 7.82116 10.3439 7.96263 10.1723 7.99812C10.1425 8.09161 10.1713 8.19191 10.1341 8.28195C9.89463 8.6601 9.81288 9.05709 9.88851 9.47305C10.0272 10.1285 10.3672 10.4561 10.9092 10.4561H11.1172C11.3819 10.4561 11.568 10.4685 11.6752 10.4938C11.7823 10.519 11.8359 10.5381 11.8359 10.5507C11.7729 10.702 11.7509 10.8216 11.7698 10.9098C11.8322 11.1929 12.0365 11.4072 12.0154 11.7134C11.9958 12.1029 11.8734 12.4387 12.0063 12.8292C12.1579 13.2081 12.3482 13.6195 12.4884 14.0107C12.5452 14.1241 12.6303 14.1935 12.7438 14.2187C12.9706 14.2565 13.2543 14.1054 13.5946 13.765C13.8467 13.4877 13.9917 13.1849 14.0295 12.8572C14.0794 12.5671 14.2839 12.3094 14.3509 12.0063V11.7607C14.4138 11.6346 14.4674 11.5117 14.5116 11.3919C14.5747 11.2179 14.5816 10.9961 14.5965 10.7964C14.7947 10.5982 14.9881 10.4213 15.126 10.1723C15.2142 10.0211 15.2396 9.88912 15.2018 9.77568C15.1897 9.75048 15.1581 9.72508 15.1072 9.69988L14.8233 9.58647C14.8282 9.42798 15.1196 9.45158 15.2582 9.47304L15.9387 9.05702C15.9134 9.91416 15.7465 10.7431 15.4377 11.5435C15.1289 12.3439 14.6721 13.0652 14.0671 13.708C13.2604 14.5904 12.2927 15.2209 11.1645 15.599C10.0364 15.9772 8.8736 16.0527 7.67611 15.8258C7.88227 15.4616 8.00128 15.0512 8.24374 14.6911C8.24374 14.5021 8.27194 14.3413 8.32866 14.209C8.56931 13.6523 8.96196 13.5074 9.41604 13.0749C9.87424 12.5973 9.86995 12.033 9.88849 11.3446C9.88224 10.9089 9.18564 10.6415 8.86722 10.3991C8.1292 9.90178 7.66053 9.17006 6.60811 9.38757C6.23199 9.42591 6.14094 9.49901 5.86095 9.26503L5.74753 9.20804L5.75723 9.17041L5.80452 9.07581C5.91747 8.95767 5.75712 8.80912 5.60562 8.8581C5.5741 8.8644 5.53971 8.86779 5.50189 8.86779C5.46733 8.69893 5.35404 8.54184 5.3315 8.35716C5.50796 8.4958 5.65965 8.60013 5.78571 8.66946C5.91172 8.7388 6.01887 8.78616 6.10714 8.81137C6.19539 8.84919 6.27095 8.86159 6.33396 8.84899C6.47262 8.82378 6.55101 8.68505 6.56989 8.43295C6.58881 8.18087 6.57978 7.891 6.54198 7.56327C6.57979 7.51288 6.6046 7.46212 6.6172 7.41168C6.75043 6.72276 7.10323 6.87384 7.63849 6.67479C7.72674 6.62437 7.74534 6.56121 7.69491 6.48558C7.69491 6.47296 7.69209 6.46677 7.68581 6.46677C7.67952 6.46677 7.67611 6.46 7.67611 6.44739C7.96708 6.30126 8.13848 6.00206 8.31897 5.72931C8.16518 5.48561 7.92643 5.28213 7.6573 5.14287C7.51297 4.96485 6.94633 5.07399 6.82524 4.78381C6.72439 4.7712 6.64884 4.75203 6.59841 4.72683C6.08793 4.39601 5.8723 3.8175 5.32239 3.58302C5.10178 3.56412 4.88412 3.56751 4.66985 3.59271C5.31269 3.07592 6.0125 2.69133 6.76881 2.43921ZM2.17421 7.77128C2.28765 7.96034 2.42637 8.13064 2.59023 8.28191C3.44072 9.0632 4.24014 9.22876 5.3315 9.62406C5.38187 9.66187 5.45124 9.72501 5.53952 9.81325C5.65842 9.90351 5.75904 10.0116 5.88033 10.0971C5.88033 10.1601 5.87075 10.2481 5.85183 10.3615C5.83293 10.4749 5.82952 10.6577 5.84214 10.9098C5.87857 11.6113 6.45708 12.1666 6.61722 12.8383C6.47518 13.7089 6.47316 14.5646 6.37159 15.4286C5.51445 15.0756 4.76164 14.5715 4.11247 13.916C3.46332 13.2606 2.962 12.4982 2.60905 11.6284C2.35696 10.9982 2.19624 10.3581 2.12691 9.70896C2.05749 9.0598 2.0733 8.41413 2.17421 7.77128Z"
                fill="currentColor"
            />
        </svg>
    )
}
