import { createContext, useState } from "react"

interface HeaderContextType {
  hoverStyle: React.CSSProperties
  setHoverStyle: (style: React.CSSProperties) => void
  content: React.ReactNode
  setContent: (content: React.ReactNode) => void,
  hoveringHeader: boolean
  setHoveringHeader: (hovering: boolean) => void
}

const HeaderContext = createContext<HeaderContextType>({
  hoverStyle: {},
  setHoverStyle: () => { },
  content: null,
  setContent: () => { },
  hoveringHeader: false,
  setHoveringHeader: () => { },
})

export function HeaderContextProvider({ children }: { children: React.ReactNode }) {
  const [hoverStyle, setHoverStyle] = useState<React.CSSProperties>({})
  const [content, setContent] = useState<React.ReactNode>(null)
  const [hoveringHeader, setHoveringHeader] = useState<boolean>(false)

  return (
    <HeaderContext.Provider value={{
      hoverStyle, setHoverStyle,
      content, setContent,
      hoveringHeader, setHoveringHeader,
    }}>
      {children}
    </HeaderContext.Provider>
  )
}



export default HeaderContext