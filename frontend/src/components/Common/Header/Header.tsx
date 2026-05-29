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
        <HoverHighlighter />
        <Flex alignItems="center" zIndex={1} position="fixed" top={0} left={0} right={0} p={4} gap={2} w="100%" maxW="1200px" m="0 auto">
          <Flex w="100%" alignItems="center" gap={4}>
            <HeaderButton navLink="/">Home</HeaderButton>
          </Flex>
          <Flex w="100%" alignItems="center" gap={4} justifyContent="center">
            <HeaderButton navLink="/projects" content={ProjectsContent}>Projects</HeaderButton>
            <HeaderButton disabled navLink="/bio">Bio</HeaderButton>
            <HeaderButton navLink="/cv">CV</HeaderButton>
          </Flex>
          <Flex w="100%" alignItems="center" gap={4} justifyContent="flex-end">
            <HeaderButton navLink="/contact">Contact</HeaderButton>
          </Flex>
        </Flex>
        <HeaderContent />
      </HeaderWrapper>
    </HeaderContextProvider>
  )
}