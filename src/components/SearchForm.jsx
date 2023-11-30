import React from "react";

export default function SearchForm(props) {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="search">Movie Name Search:</label>
                <input
                    onChange={props.handleInputChange}
                    value={props.value}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Search for a Movie"
                    id="search"
                />
                <br />
                <button
                    onClick={props.handleFormSubmit}
                    className="btn btn-success"
                    type="submit"
                >
                    Search
                </button>
            </div>
        </form>
    );
};