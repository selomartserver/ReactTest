import React, {Component, useState } from 'react';
export default class GistApi extends Component {
    constructor(props) {
        super(props);
        this.state ={
            gitApi: 'https://api.github.com/users/',
            matchingResults: [],
            selectedGist: {},
            searchText: '',
        };
      }

    callGistApi = (searchText) => {
        try {
            // const searchMedicineOnChange = debounce(value => {
                const url = 'https://api.github.com/users' + '/'+ searchText.target.value;//`{this.gitApi}{this.searchText}`;
                fetch(url)
                .then(response => response.json())
                .then(data => {
                    if (data) {
                        this.state.matchingResults = data;
                    }
                });
            // }, 3000);
        } catch (e) {
            this.state.matchingResults = this.matchingResults || [];
        }
    }

    openGistResult = (gist) => {
        this.selectedGist = gist;
    }

    render() {
        return (
            <div>
                <div>
                    <input
                        type="text"
                        value={this.state.searchText}
                        onChange={(e) => {this.callGistApi(e)}} />
                </div>
                <div>
                    <div>{this.state.matchingResults.length} gists found against username {this.state.searchText}</div>
                        {this.state.matchingResults.map(gist => (
                        <div onClick={openGistResult(gist)}>
                            <img url={this.state.selectedGist.avatar_url}></img>
                            <div>{this.state.selectedGist.avatar_url}</div>
                        </div>
                    ))}
                    {/* <GistDetails details={selectedGist}/> */}
                </div>
            </div>
        );
    }
}
function debounce (fn, time) {
    let timeoutId
    return wrapper
    function wrapper (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      timeoutId = setTimeout(() => {
        timeoutId = null
        fn(...args)
      }, time)
    }
  }
  