import React from 'react';
import ReactDOM from 'react-dom';

export default class ConditionalRendering extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isGuestLogined: false};
        // this.handlerGuestLogin = this.handlerGuestLogin.bind(this);
        // this.handlerGuestLogOut = this.handlerGuestLogOut.bind(this);
    }

    userLogin() {
        console.log("userLoign");
        return <h1>user login</h1>;
    }

    guestLogin() {
        console.log("guestLogin");
        // return <div></div>;
        // return <h1>guest login</h1>;
        return <h1 onClick={this.handlerGuestLogin.bind(this)}>guest login</h1>;
    }

    guestLogined() {
        // return  <h1 onClick={this.handlerGuestLogOut.bind(this)}><font color="#0000FF">Helllo GUEST logout</font></h1>;
        return <div>
            <h2 onClick={this.handlerGuestLogin.bind(this)}><font color="#0000FF">Helllo GUEST LOGINED</font></h2>;
            <h1 onClick={this.handlerGuestLogOut.bind(this)}><font color="#0000FF">Helllo GUEST logout</font></h1>;
        </div>;
    }

    /**
     * 处理游客登陆
     */
    handlerGuestLogin() {
        console.log("handlerGuestLogin XXXX")
        this.setState(function (test) {
            return {
                isGuestLogined: true
            }
        })
    }

    handlerGuestLogOut() {
        this.setState(function (test) {
            return {
                isGuestLogined: false
            }
        })
    }

    render() {
        console.log("ConditionalRendering render");
        const isGuest = false;

        // const isGuestLogined = this.state.isGuestLogined;

        if (isGuest) {
            return this.userLogin();
        } else {

            const isGuestLogined = this.state.isGuestLogined;
            console.log("ConditionalRendering render isGuestLogined==" + isGuestLogined);
            if (isGuestLogined) {
                console.log("guestLogined xx");
                return this.guestLogined();
            } else {
                console.log("guestLogin xx");
                return this.guestLogin();
            }

        }

    }
}

// ReactDOM.render(
//     <Clock />,
//     document.getElementById('root')
// );