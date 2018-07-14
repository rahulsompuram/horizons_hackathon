import React, { Component } from 'react';
import { Column, Row } from 'simple-flexbox';
import { Search, Form  } from 'semantic-ui-react'

class HomePage extends Component {
    render() {
        return(
          <body id="home_body">
          <Column flexGrow={1}>
            <Row horizontal="center" vertical="end" style={{height: '400px'}}>
              <h1 id="home_header">
                VidSearch
              </h1>
            </Row>
            <br />
            <Row horizontal="center" vertical="start" id='url_row'>
              {/* <input type="search" id="url_input" placeholder="Enter a search phrase..." /> */}
              <Form>
                <Form.Field>
                  <input placeholder='Enter url' id = 'search_bar' onKeyDown={(e) => e.keyCode === 13 ? this.props.handleClick() : null}/>
                </Form.Field>
              </Form>
            </Row>
          </Column>
        </body>
        );
    }

    // check whether the url is valid or not

    // check whether video exists inside the html of the url given

    // need to redirect when pressed search button to SearchPage.js }
}


export default HomePage;
