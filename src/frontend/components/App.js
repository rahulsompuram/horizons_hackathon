import React from 'react';
import SearchPage from './SearchPage.js';
import HomePage from './HomePage.js';
import '../stylesheets/style.css';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {
          isHomePage: true
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
      this.setState({
        isHomePage: !this.state.isHomePage
      })
    }

    render() {
        return (
            <div>
                { this.state.isHomePage ? <HomePage handleClick={this.handleClick}/> : <SearchPage handleClick={this.handleClick}/> }
            </div>
        );
    }
}

export default App;
