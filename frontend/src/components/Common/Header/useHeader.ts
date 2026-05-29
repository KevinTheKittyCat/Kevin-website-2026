import { useContext } from "react"
import HeaderContext from "./HeaderProvider"

export function useHeader() {
    const context = useContext(HeaderContext)
    if (!context) {
        throw new Error("useHeader must be used within a HeaderContextProvider")
    }
    return context
}