import React, {Component} from 'react';
import Video from './Video.js';
import { Column, Row } from 'simple-flexbox';
import { Search } from 'semantic-ui-react'

class SearchPage extends Component {
    render() {
        return (
          <body id="search_body">
            <div id='searchPage'>
            <Column flexGrow={1}>
              <Row horizontal="center" id="title">
                <h1 id="search_header"> | VidSearch |</h1>
              </Row>
              <br /><br />
              <Row horizontal="center" id="content_row">
                <Column flexGrow={5} id="video_column">
                  <Video />
                </Column>
                <Column flexGrow={0.1} />
                <Column flexGrow={1} id="search_column">
                  <Row horizontal="start" id="search_box">
                    <Search id='search_input'
                      // loading={isLoading}
                      // onResultSelect={this.handleResultSelect}
                      // onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
                      // results={results}
                      // value={value}
                      // {...this.props}
                    />
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
          </div>
          </body>
        );
    }
}

export default SearchPage;
