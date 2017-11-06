import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Clock from './basic/Clock';
import Click from './basic/Click';
import ClickWithBind from './basic/ClickWithBind';
import ConditionalRendering from './basic/ConditionalRendering';
import ConditionalRenderingWithContructor from './basic/ConditionalRenderingWithContructor';
import ListKey from './basic/ListKey';
import Brand from './brand/Brand';
import Form from './basic/Form';

ReactDOM.render(<App/>, document.getElementById('root'));
// helloworld
ReactDOM.render(<h1>helloworld!</h1>, document.getElementById('root'));
//JSX --遇到 HTML 标签（以 < 开头），就用 HTML 规则解析；遇到代码块（以 { 开头），就用 JavaScript 规则解析。

// 在JSX中嵌入表达式
const user = {
    // firstName: "harper",
    // secondName: "test"
}

function formatName(user) {
    user = null;
    if (user) {
        console.log("get User");
        return user.firstName + user.secondName;
    } else {
        console.log("not get User");
        return "";
    }

}

const JsxElement = (<h1>hello,{formatName(user)}</h1>)

ReactDOM.render(
    JsxElement,
    document.getElementById('root')
);
// first
var names = ['alice', 'Emily', 'Kate']

ReactDOM.render(<div>
    {names.map(function (names) {
        return <div>Hello,{names}!</div>
    })}
</div>, document.getElementById('root'));

// second
var arr = [<h1>helloworld</h1>, <h1>Hello React</h1>];
ReactDOM.render(<div>{arr}</div>, document.getElementById('root'));

//Render element
function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(
        element,
        document.getElementById('root')
    );
}

// setInterval(tick, 1000);
//Components and Props自定义组件

// 第一种方法-必须要写在element前面
// class HelloMessage extends React.Component {
//     render() {
//         return <h1>Hello, {this.props.name}</h1>;
//     }
// }

const element = <HelloMessage name="john"/>;

//第二种方法,简单
function HelloMessage(props) {
    return <h1>Hello,{props.name}</h1>
}

ReactDOM.render(element, document.getElementById('root'));


//组件引用
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
};

function AppComponent() {
    return (
        <div>
            <Welcome name="Sara"/>
            <Welcome name="Cahal"/>
            <Welcome name="Edite"/>
        </div>
    );
};

ReactDOM.render(
    <AppComponent/>,
    document.getElementById('root')
);

const HelloKittyInfo = {
    date: new Date(),
    text: "I am a Happy Hello Kitty",
    author: {
        name: 'black cat',
        avatarUrl: 'https://avatars2.githubusercontent.com/u/17635525?s=400&v=4'
    }
};

function HelloKitty(props) {
    return (
        <div>
            <div>{props.date.toLocaleTimeString()}</div>
            <div>{props.text}</div>
            <div>
                <div>{props.name}</div>
                <img alt="xx" src={props.author.avatarUrl}/>
            </div>
        </div>
    )
};
// ReactDOM.render(HelloKitty,document.getElementById('root'));
ReactDOM.render(<HelloKitty
    author={HelloKittyInfo.author}
    text={HelloKittyInfo.text}
    date={HelloKittyInfo.date}
/>, document.getElementById('root'));


ReactDOM.render(
    <Clock/>,
    document.getElementById('root')
);

ReactDOM.render(
    <Click/>,
    document.getElementById('root')
);
ReactDOM.render(
    <ClickWithBind/>,
    document.getElementById('root')
);

ReactDOM.render(
    <ConditionalRendering/>,
    document.getElementById('root')
);

ReactDOM.render(
    <ListKey/>,
    document.getElementById('root')
);

ReactDOM.render(
    <Form/>,
    document.getElementById('root')
);

// ReactDOM.render(
//     <Brand/>,
//     document.getElementById('root')
// );

// ReactDOM.render(
//     <ConditionalRenderingWithContructor/>,
//     document.getElementById('root')
// );


// setInterval(HelloKitty, 1000);

//onClick


registerServiceWorker();


// ; cli configs
// user-agent = "npm/3.10.10 node/v6.11.5 win32 x64"
//
// ; globalconfig C:\Users\WhohaAndroid\AppData\Roaming\npm\etc\npmrc
// disturl = "https://npm.taobao.org/dist"
// registry = "https://registry.npm.taobao.org/"
//
// ; builtin config undefined
// prefix = "C:\\Users\\WhohaAndroid\\AppData\\Roaming\\npm"
//
// ; node bin location = C:\Program Files\nodejs\node.exe
// ; cwd = C:\Users\WhohaAndroid
// ; HOME = C:\Users\WhohaAndroid
// ; "npm config ls -l" to show all defaults.