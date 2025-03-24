import { Component } from "react";
import request from "../../../../utils/request";

export default class CommentItem extends Component {
    constructor(props) {
        super(props)

        this.deleteClickHandler = this.deleteClickHandler.bind(this);
    }
    
    async deleteClickHandler() {
        console.log('Deleted');

        await request.delete(`http://localhost:3030/data/comments/${this.props.id}`, null, {
            headers: {
                'X-Admin': 'admin'
            }
        });

        this.props.onDelete(this.props.id);
    }

    componentWillUnmount() {
        console.log('Component unmounted');
    }

    render() {
        return (
            <li>{this.props.comment} <button onClick={this.deleteClickHandler}>x</button></li>
        );
    }
}
