import React from 'react';
import ReactDOM from 'react-dom';

class Brand extends React.Component {


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
            <div className="Brand">
                <div className="HeadBrand">
                    <h1 className="AllBrand">所有的品牌</h1>

                    <h1 className="EditAllBrand">编辑所有品牌</h1>
                </div>

                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
         /*   <div>
                <h1>所有的品牌</h1>
                <input type="button" value="click" onClick={this.onClick}/>
                <input type="button" value="clickWithBind" onClick={(e) => this.onClick(e)}/>
            </div>*/
            /* <div className="ui brand">
                 <h1 className="ui brand all">所有的品牌</h1>
                 <div className="ui divide"></div>
             </div>*/
        );
    }

}

export default Brand;