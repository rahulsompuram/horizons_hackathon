import React from 'react';
import SearchPage from './SearchPage.js';
//import HomePage from './HomePage.js';
import '../stylesheets/style.css';


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <SearchPage />
            </div>
        );
    }
}

export default App;
