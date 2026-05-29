import { useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { languages, otherInterests, properties } from "./interface";
import { InfoBarItem } from "./InfoBarItem";
import { Flex } from "@chakra-ui/react";


export default function InfoBar() {

        return (
            <div className="left-bar-cv column">
                <Flex direction="column" className="column">
                    <h2>Kontakt Informasjon</h2>
                    <Link to="https://Kevinhj.com" > Kevinhj.com</Link>
                </Flex>
                <InfoBarItem data={languages} />
                <InfoBarItem data={properties} />
                <InfoBarItem data={otherInterests} />
            </div>
        )
}