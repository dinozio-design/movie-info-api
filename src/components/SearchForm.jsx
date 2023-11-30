import React from "react";

export default function SearchForm(){
    return (
        <form>
            <div className="form-group">
                <label htmlFor="search">Search:</label>
                <input 
                    onChange = {{ /* need pops here */}}
                    value={{/* need props here*/}}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Seach for a Movie"
                    id="search"
                />
                <br />
                <button
                    onClick={{/* need props here to handle submit */}}
                    className="btn btn-primary"
                    type="submit"
                >
                    Search
                </button>
            </div>
        </form>
    );
};