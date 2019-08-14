import React from 'react';
import FullPageVideo from "../components/FullPageVideo";
import Center from "../components/FlexContentsCenter";
import Container from "../components/Container";
import Header from "../components/Header";

export default () => {
    return (
        <FullPageVideo>
            <Center>
                <Container>
                    <Header h1>West Coast Whoopers</Header>
                </Container>
            </Center>
        </FullPageVideo>
    )
}