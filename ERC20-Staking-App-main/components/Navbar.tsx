import { Container, Flex, Heading } from "@chakra-ui/react";
import { ConnectWallet } from "@thirdweb-dev/react";

export default function Navbar() {
    return (
        <Container textColor={"white"} maxW={"1200px"} py={4}>
            <Flex direction={"row"} justifyContent={"space-between"}>
                <Heading cursor="pointer" ><a href="https://1xnft.store/">1x APP</a></Heading>
                <ConnectWallet />
            </Flex>
        </Container>
    )
}