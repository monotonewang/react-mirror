import React from 'react';
import ReactDOM from 'react-dom';
import './Brand.css';

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
                    <p className="AllBrand">所有的品牌</p>

                    <p className="EditAllBrand">编辑所有品牌</p>
                </div>

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