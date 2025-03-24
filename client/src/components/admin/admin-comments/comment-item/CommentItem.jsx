import { Component } from "react";
import request from "../../../../utils/request";

export default class CommentItem extends Component {
    async deleteClickHandler() {
        console.log('Deleted');

        await request.delete(`http://localhost:3030/data/comments/${this.props.id}`, null, {
            headers: {
                'X-Admin': 'admin'
            }
        });
    }

    render() {
        return (
            <li>{this.props.comment} <button onClick={this.deleteClickHandler.bind(this)}>x</button></li>
        );
    }
}
