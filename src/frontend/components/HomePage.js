import React, { Component } from 'react';
import { Column, Row } from 'simple-flexbox';

class HomePage extends Component {
    render() {
        return(
          <Column flexGrow={1}>
            <Row horizontal="center" vertical="end" style={{height: '400px'}}>
              <h1 id="home_header">
                VidSearch
              </h1>
            </Row>
            <Row horizontal="center" vertical="center">
              <input type="search" id="url_input" placeholder="Enter a search phrase..." />
            </Row>
          </Column>
        );
    }

    // check whether the url is valid or not

    // check whether video exists inside the html of the url given

    // need to redirect when pressed search button to SearchPage.js }
}


export default HomePage;
