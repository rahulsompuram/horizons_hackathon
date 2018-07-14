import React, {Component} from 'react';
import Video from './Video.js';
import { Column, Row } from 'simple-flexbox';
import longAudio from '../../backend/CloudApi/longaudio';
import { Search, Form } from 'semantic-ui-react';


class SearchPage extends Component {
    state = {
      searchKey: '',
      seekTime: null,
      searchStrings: [],
      searchResults: [], //array of indices of the search results
      wordArr: [],
      startTimeArr: []

    }

    componentDidMount () {
      fetch ('http://localhost:3000/words')
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          startTimeArr: json.startTimeArr,
          wordArr: json.wordArr,
        })
      })
    }

    handleSearchEnter = () => {
      var searchResults = [];
      var searchStrings = [];
      var searchArr = this.state.searchKey.split(' ');

      if (searchArr.length > 1) {
        this.state.wordArr.forEach((word, j) => {
          var count = 0;
          var string = "";
          var beforeStr = "";
          var afterStr = "";
          if(word.toLowerCase().indexOf(searchArr[0].toLowerCase()) > -1){
            count++
            string = word;
            if(j-1>0){
              beforeStr = this.state.wordArr[j-2] + " " + this.state.wordArr[j-1] + " ";
            }
            for(var i = 1; i < searchArr.length; i++){
              if(this.state.wordArr[j+i].toLowerCase().indexOf(searchArr[i].toLowerCase()) > -1){
                count ++
                string = string + " " + this.state.wordArr[j+i];
                afterStr = " " + this.state.wordArr[j+i+1] + " " + this.state.wordArr[j+i+2];
              }
            }
          }
          return count === searchArr.length ? (searchResults.push(j), searchStrings.push([string, beforeStr, afterStr])) : null
        })
      } else {
        this.state.wordArr.forEach((word, i) => {
          var beforeStr =  i - 1 > 0 ? this.state.wordArr[i-2] + " " + this.state.wordArr[i-1] + " " : null;
          var afterStr = " " + this.state.wordArr[i+1] + " " + this.state.wordArr[i+2];
          var index = word.toLowerCase().indexOf(this.state.searchKey.toLowerCase());
          return index > -1 ? (searchResults.push(i), searchStrings.push([word, beforeStr, afterStr])) : null
        })
      }
      console.log(searchResults, searchStrings)
      this.setState({
        searchResults: searchResults,
        searchStrings: searchStrings
      })
    }

    handleSearchChange = (e) => {
      this.setState({
        searchKey: e.target.value,
        searchResults: [],
        seekTime: null,
      });

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
                  <Form>
                    <Form.Field>
                      <input placeholder='Enter a word/phrase to search...' id = 'search_bar' value={this.state.searchKey}
                        onChange={this.handleSearchChange}
                        onKeyDown={(e) => e.keyCode === 13 ? this.handleSearchEnter() : null}
                      />
                    </Form.Field>
                  </Form>
                </Row>


                    <div class="ui inverted segment" id='inverted_segment'>
                      <Row vertical='center' id='results_header'>
                      <Column flexGrow={1} id='results_header_1' horizontal='start'>
                        Time stamp
                      </Column>
                      <Column flexGrow={1} id='results_header_2' horizontal='end'>
                        Phrase
                      </Column>
                    </Row>
                    <hr />
                    <div class="ui inverted relaxed divided list" id='inverted_list'>
                      {this.state.searchResults.map((index, i) =>
                        (<div>
                        <Row onClick={() => this.setSeekTime(this.state.startTimeArr[index])} vertical="center" id="timestampCards">
                            <Column flexGrow={1} horizontal='start' class="timestamp">{this.state.startTimeArr[index]}</Column>
                            <Column flexGrow={1} horizontal='end' class="phrase">{this.state.searchStrings[i][1]}<b>{this.state.searchStrings[i][0]}</b>{this.state.searchStrings[i][2]}</Column>
                        </Row>
                        <hr />
                      </div>)
                      )}
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
