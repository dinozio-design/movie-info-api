import React from "react";
import Row from "./Row";
import Column from "./Column";
import Container from "./Container";
import Card from "./Card";
import SearchForm from "./SearchForm";
import { useState, useEffect } from "react";

export default function GuiContainer() {
    const [search, setSearch] = useState[""];

    // inputChange handler
    const handleInputChange = (event) =>{
        setSearch(event.target.value);
    };

    // formSubmit handler
    const handleFormSubmit = (event) =>{
        event.preventDefault();
        // do something with search
    };

    return (
        <Container>
            <Row>
                <Column size="md-4">
                    <Card heading="Search">
                        <SearchForm
                            value={search}
                            handleInputChange={handleInputChange}
                            handleFormSubmit={handleFormSubmit}
                        />
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