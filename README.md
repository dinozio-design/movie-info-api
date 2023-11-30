# Movie Info API Fetch

This React app allows the user to serach a movie by name via the GUI search field and reterieve general information about that move. 
The app uses OMDB API to fetch and retreave selected information about the movies. For more information about the API you can visit the [OMBD API Website](https://omdbapi.com/).

## More To Come ... Stay Tuned!

I intend to use `hooks` and `props` in order to keep my code clean and DRY. I will use `bootstrap mini` to keep the packet sizes small. As for the API I will use `axios`, and will keep the code under a separate `util` folder. 

Here is what I envision the overall folder structure to look like. This may cahnge after I have fully developed the app and in case I want to tweek it to make it more responsive.:

```
src/
|-- index.jsx               # Entry point for my React app
|-- App.jsx                 # Main componenet to assemble the app
|-- App.css                 # Overall style of the app
|-- components/             # React components live here
|   |-- Header              # Header component
|   |-- Footer              # Footer component
|   |-- GuiContainer.jsx    # General Container for all GUI
|   |-- SearchForm.jsx      # User form to collect user input
|   |-- Card.jsx            # General display placeholder
|   |-- MovieDetail.jsx     # Details will be renders here
|   |-- Row.jsx             # To implement bootstrap layout
|   |-- Column.jsx          # To implement bootstrap layout
|-- utils/
|   |-- Api.js

```

