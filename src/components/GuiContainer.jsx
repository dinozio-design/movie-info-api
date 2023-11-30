import React from "react";
import Row from "./Row";
import Column from "./Column";
import Container from "./Container";

export default function GuiContainer(){

    // will put logic here with state and hooks

    return (
        <Container>
            <Row>
                <Column size="md-10">
                    <p>this is a placeholder</p>
                </Column>
            </Row>
        </Container>

    );
};