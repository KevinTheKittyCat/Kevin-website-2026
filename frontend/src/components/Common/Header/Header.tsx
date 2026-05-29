import React, { createContext, useState } from "react"
import { HeaderContextProvider } from "./HeaderProvider"
import { Container, Flex } from "@chakra-ui/react"
import { HeaderButton } from "./HeaderButton"
import { HoverHighlighter } from "./HoverHighlighter"
import { HeaderContent } from "./HeaderContent"
import { HeaderWrapper } from "./HeaderWrapper"
//import ProsjekterHeader from "./old/prosjekter-header"
import { ProjectsContent } from "./HeaderContent/ProjectsContent"



export default function Header() {
  return (
    <HeaderContextProvider>
      <HeaderWrapper>
        <Flex alignItems="center" position="fixed" top={0} left={0} right={0} zIndex={1000} p={4} gap={2} w="100%">
          <h1>Header</h1>
          <HoverHighlighter />
          <HeaderButton navLink="/">Home</HeaderButton>
          <HeaderButton navLink="/projects" content={ProjectsContent}>Projects</HeaderButton>
        </Flex>
        <HeaderContent />
      </HeaderWrapper>
    </HeaderContextProvider>
  )
}