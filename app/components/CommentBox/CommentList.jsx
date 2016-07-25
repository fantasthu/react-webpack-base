import React,{Component} from 'react';
import Comment from "./Comment.jsx";
class CommentList extends Component {
    constructor(props){
        super(props);
    }
    render() {
        let commentNodes=[];
        console.log(this.props);
        if (this.props.data) {
             commentNodes = this.props.data.map(function (comment, index) {
                return (
                    <Comment key={index} author={comment.author}>{comment.text}</Comment>
                )
            });
        }
        return (
            <div className="CommentList">
                {commentNodes}
            </div>
        );
    }
}
export default CommentList;
