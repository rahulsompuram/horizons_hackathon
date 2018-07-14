import React, {Component} from 'react';
import Video from './Video.js';
import { Column, Row } from 'simple-flexbox';
import { Search } from 'semantic-ui-react'

class SearchPage extends Component {
    state = {
        seekTime: null,
    };

    setSeekTime(time) {
      this.setState({seekTime: time});
    }

    clearSeekTime() {
      this.setState({seekTime: null});
    }

    render() {
        return (
          <body id="search_body">
            <div id='searchPage'>
            <Column flexGrow={1}>
              <Row horizontal="center" id="title">
                <h1 id="search_header" onClick={() => this.props.handleClick()}> | VidSearch |</h1>
              </Row>
              <br /><br />
              <Row horizontal="center" id="content_row">
                <Column flexGrow={5} id="video_column">
                  <Video seekTime={this.state.seekTime} clearSeekTime={() => this.clearSeekTime()}/>
                </Column>
                <Column flexGrow={0.1} />
                <Column flexGrow={1} id="search_column">
                  <Row id='extend'>
                    <Search id='search_input'
                      size='medium'
                      placeholder='Search for word or phrase...'
                      // loading={isLoading}
                      // onResultSelect={this.handleResultSelect}
                      // onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
                      // results={results}
                      // value={value}
                      // {...this.props}
                    />
                  </Row>
                    <div class="ui inverted segment" id='inverted_segment'>
                    <div class="ui inverted relaxed divided list" id='inverted_list'>
                      <Row onClick={() => this.setSeekTime(10)} vertical="center" id="timestampCards">
                          <Column flexGrow={1} horizontal='start' class="timestamp">10</Column>
                          <Column flexGrow={1} horizontal='end' class="phrase">An excellent companion</Column>
                      </Row>
                      <hr />
                      <Row vertical="center" id="timestampCards">
                          <Column flexGrow={1} horizontal='start' class="timestamp">0.4</Column>
                          <Column flexGrow={1} horizontal='end' class="phrase">An excellent companion</Column>
                      </Row>
                      <hr />
                      <Row vertical="center" id="timestampCards">
                          <Column flexGrow={1} horizontal='start' class="timestamp">0.6</Column>
                          <Column flexGrow={1} horizontal='end' class="phrase">An excellent companion</Column>
                      </Row>
                      <hr />
                    </div>
                  </div>
                </Column>
              </Row>
            </Column>
          </div>
          </body>
        );
    }
}

export default SearchPage;
