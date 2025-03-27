import { Component } from "react";
import withAuth from "../../../../hoc/withAuth";

class CommentItem extends Component {
    constructor(props) {
        super(props)

        this.deleteClickHandler = this.deleteClickHandler.bind(this);
    }

    async deleteClickHandler() {
        console.log('Deleted');
        
        await this.props.auth.request.delete(`${import.meta.env.VITE_APP_SERVER_URL}/data/comments/${this.props.id}`, null, {
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

const ComentItemWithAuth = withAuth(CommentItem);

export default ComentItemWithAuth;
