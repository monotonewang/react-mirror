import React from 'react';
import ReactDOM from 'react-dom';
import Form from "../basic/Form";

export default class CommentForm extends React.Component {


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
            <form className='uiReplayForm'>
                <div className='field'>
                    <input type='text' placeholder="姓名"/>
                </div>
                <div className='field'>
                    <textarea placeholder="评论"></textarea>
                </div>
                <button type="submit" className="uiSubmit">添加评论</button>
            </form>
        )
    }

}