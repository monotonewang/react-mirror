import React from 'react';
import ReactDOM from 'react-dom';
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

export default class CommentBox extends React.Component {


    constructor(props) {
        super(props);
        this.state = {isClick: false};
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState(function (prevState, props) {
            return {
                isClick: !prevState.isClick
            };
        });
        alert("click success isClick====" + this.state.isClick);
    }

    render() {
        return (
            <div className='uiComments'>
                <h1>评论</h1>
                <div className='uiDivider'></div>
                <CommentList data={this.props.data}/>
                <CommentForm/>
            </div>


        )
    }

}