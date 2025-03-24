import { Component } from "react";
import request from "../../../utils/request";
import CommentItem from "./comment-item/CommentItem";

const commentsUrl = 'http://localhost:3030/data/comments';

export default class AdminComments extends Component {
    constructor(props) {
        console.log('Component initializtion')

        super(props);

        this.state = {
            comments: [],
            name: 'Pesho'
        };
    }

    async componentDidMount() {
        console.log('Component mounted');

        const comments = await request.get(commentsUrl);

        this.setState({ comments });
    }

    deleteCommentHandler(commentId) {
        console.log('delete ', commentId);

        this.setState({
            comments: this.state.comments.filter(comment => comment._id !== commentId)
        });
    }

    componentDidUpdate() {
        console.log('Component updated');
    }

    render() {
        if (Math.random() < 0.01) {
            throw new Error('Rendering bug!');
        }

        return (
            <ul>
                {this.state.comments.map(comment => (
                    <CommentItem
                        key={comment._id}
                        id={comment._id}
                        comment={comment.comment}
                        onDelete={this.deleteCommentHandler.bind(this)}
                    />
                ))}
            </ul>
        );
    }
}
