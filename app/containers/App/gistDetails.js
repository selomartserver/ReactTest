import React, {Component} from 'react';
export default class GistDetails extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div>
                    <div>Files</div>
                    <div>
                        <div> {this.props.details.avatar_url}</div>
                        <div>Language: {this.props.details.language}</div>
                        <div>Type: {this.props.details.public_gists}</div>
                    </div>
                </div>
                <div>
                    <div>Forks</div>
                    <div>
                        <div> {this.props.details.avatar_url}</div>
                        <div>Login Id: {this.props.details.login}</div>
                        <div>Total public gist: {this.props.details.public_gists}</div>
                    </div>
                </div>
            </div>
        );
    }
}