import React from 'react';
import ReactDOM from 'react-dom';

export default class ListKey extends React.Component {


    constructor(props) {
        super(props);
    }


    render() {
        const numbers = [1, 2, 3, 4, 5];
        // const doubled = numbers.map((numbers) => <li>{numbers*2}</li>);
        // console.log(doubled);
        // return (
        //     <div>
        //         <ul>{doubled}</ul>
        //     </div>
        // )



        const listItems=numbers.map((numbers)=><li key={numbers.toString()}>{numbers}</li>);

        return (
            <div>
                <ul>{listItems}</ul>
            </div>
        )

    }

}