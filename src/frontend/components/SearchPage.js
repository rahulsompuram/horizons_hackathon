import React, {Component} from 'react';
import Video from './Video.js';
import { Column, Row } from 'simple-flexbox';

class SearchPage extends Component {
    render() {
        return (
          <body id="search_body">
            <Column flexGrow={1}>
              <Row horizontal="center" id="title">
                <h1 id="search_header">VidSearch</h1>
              </Row>
              <br /><br />
              <Row horizontal="center" id="content_row">
                <Column flexGrow={2.25} id="video_column">
                  <Video />
                </Column>
                <Column flexGrow={0.05} />
                <Column flexGrow={1} id="search_column">
                  <Row horizontal="start" id="search_box">
                    <input type="search" placeholder="Enter a search phrase..." id = "search_input" />
                  </Row>
                  <hr />
                  <Row horizontal="start" id="results_box">
                    <ul>
                      <li>
                        Result1:
                      </li>
                      <li>
                        Result2:
                      </li>
                    </ul>
                  </Row>
                </Column>
              </Row>
            </Column>
          </body>
        );
    }
}

export default SearchPage;
