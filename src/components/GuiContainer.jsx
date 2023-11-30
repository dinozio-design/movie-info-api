import React from "react";
import Row from "./Row";
import Column from "./Column";
import Container from "./Container";
import Card from "./Card";
import SearchForm from "./SearchForm";
import { useState, useEffect } from "react";
import API from "../utils/API";

export default function GuiContainer() {
    const [search, setSearch] = useState[""];
    const [results, setResults] = useState({});

    // promis to fetch API data
    const movieSearch = (query) =>
        API.search(query)
        .then((res) =>setResults(res.data))
        .catch((err) => console.error(err));

    // inputChange handler
    const handleInputChange = (event) =>{
        setSearch(event.target.value);
    };

    // formSubmit handler
    const handleFormSubmit = (event) =>{
        event.preventDefault();
        movieSearch(search);
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