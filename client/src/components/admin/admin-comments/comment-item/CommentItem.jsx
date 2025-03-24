import { Component } from "react";

export default class CommentItem extends Component {
    deleteClickHandler() {
        console.log('Deleted');
    }
    
    render() {
        return (
           <li>{this.props.comment} <button onClick={this.deleteClickHandler}>x</button></li> 
        );
    }
}
