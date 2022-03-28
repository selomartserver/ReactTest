import React, {Component} from 'react';
import GistApi from './GistApi';
export default class HomeSearch extends Component {
    render() {
        return (
            <div>
                <h4>Github API</h4>
                <GistApi></GistApi>
            </div>
        )
    }
}