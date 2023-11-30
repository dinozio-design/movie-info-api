import React from "react";
import Row from "./Row";
import Column from "./Column";
import Container from "./Container";
import Card from "./Card";
import SearchForm from "./SearchForm";

export default function GuiContainer() {

    // will put logic here with state and hooks



    return (
        <Container>
            <Row>
                <Column size="md-4">
                    <Card heading="Search">
                        <SearchForm
                            // value={search} {/* next is to implement the useState and set the value of search */}
                            // handleInputChange={handleInputChange} {/* need to write the function for this */}
                            // handleFormSubmit={handleFormSubmit} {/* need to write the function for this */}
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