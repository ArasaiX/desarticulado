import { HeaderCustom } from "./HeaderCustom"

export function Layout({ children }) {
    return (
        <body>
            <HeaderCustom />
            {children}
        </body>
    )
}
