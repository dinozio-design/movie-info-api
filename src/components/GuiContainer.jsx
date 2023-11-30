import React from "react";
import Row from "./Row";
import Column from "./Column";
import Container from "./Container";
import Card from "./Card";

export default function GuiContainer() {

    // will put logic here with state and hooks

    return (
        <Container>
            <Row>
                <Column size="md-4">
                    <Card>
                        <p>this is a placeholder for form input</p>
                    </Card>
                </Column>
                <Column size="md-8">
                    <Card>
                        <p>this is a placeholder for output</p>
                    </Card>
                </Column>
            </Row>
        </Container>

    );
};