"use strict";

import React ,{Component} from 'react';
import CommentList from './CommentList.jsx';
import CommentFrom from './CommentForm.jsx';
import  './CommentBox.css';

class CommentBox extends React.Component {
    constructor(props) {
        super(props)
        //这里数据只会初始化一次
        this.state = {
            data: [
                {author: "作者1", text: "评论1"},
                {author: "作者1", text: "评论2"},
            ]
        };
    }

    loadCommentsFromServer() {
        let self = this;
        // $.ajax({
        //   url: this.props.url,
        //   method:'post',
        //   dataType:'json',
        //   data: {
        //     json:JSON.stringify({
        //       data:database
        //     })
        //   },
        //   success(res) {
        //     console.log(res)
        //       self.setState({data: res.data})
        //     }
        // });
    }

    handlePost(data) {
        var obj = {name: data.name, text:data.text};
        this.state.data.push(obj);
        console.log(this.state.data);
    }

    componentDidMount() {
        this.loadCommentsFromServer();
    }

    render() {
        return (
            <div className="commentBox">
                <h1>评论功能</h1>
                <CommentList className="CommentList" data={this.state.data}/>
                <CommentFrom onPost={this.handlePost.bind(this)}/>
            </div>
        );
    }
}
export  default CommentBox;
