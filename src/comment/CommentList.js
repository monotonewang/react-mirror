import React from 'react';
import ReactDOM from 'react-dom';
import Comment from "./Comment";

export default class CommentList extends React.Component {


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
        let commentNodes = this.props.data.map(comment => {
            return (<Comment author={comment.author} date={comment.date}>
                {comment.text}
            </Comment>);
        })

        return (

            <div className='uiCommentList'>
                <div>
                    {commentNodes}
                    {/*<Comment author="你好" date="5fenzhong qian">小明很开心</Comment>*/}
                    {/*<Comment author="你好" date="3分钟前">小红很开心</Comment>*/}
                </div>

                <div className='uiCommentDivider'></div>
                {/*<input type="button" value="click" onClick={this.onClick}/>*/}
                {/*<input type="button" value="clickWithBind" onClick={(e) => this.onClick(e)}/>*/}
            </div>


        )
    }

}