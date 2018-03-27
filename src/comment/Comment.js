import React from 'react';
import ReactDOM from 'react-dom';
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

export default class Comment extends React.Component {


    // constructor(props) {
    //     super(props);
    //     this.state = {isClick: false};
    //     this.onClick = this.onClick.bind(this);
    // }
    //
    // onClick() {
    //     this.setState(function (prevState, props) {
    //         return {
    //             isClick: !prevState.isClick
    //         };
    //     });
    //     alert("click success isClick====" + this.state.isClick);
    // }

    render() {
        return (
            <div className='comment'>
                <h3>评论头</h3>
                <div className='content'>
                    <span className='author'>{this.props.author}</span>
                    <div className='metadata'>
                        <span className='date'>{this.props.date}</span>
                    </div>
                    <div className='text'>
                        {this.props.children}
                    </div>
                </div>

                {/*<CommentList/>*/}
                {/*<CommentForm/>*/}
            </div>
        )
    }

}