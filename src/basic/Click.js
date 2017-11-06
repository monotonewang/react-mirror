import React from 'react';
import ReactDOM from 'react-dom';

export default class Click extends React.Component {


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
            <div>
                <input type="button" value="click" onClick={this.onClick}/>
                <input type="button" value="clickWithBind" onClick={(e) => this.onClick(e)}/>
            </div>


        )
    }

}