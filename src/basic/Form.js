import React from 'react';
import ReactDOM from 'react-dom';

export default class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: '', country: 'Russia', isGoing: false};

    }

    handleSubmit(event) {
        console.log("handleSubmit===")
        alert('form value=' + this.state.value + "---------->>>country=" + this.state.country + "---->checked=" + this.state.isGoing);
        event.preventDefault();

        FormComment
    }

    handleChange(event) {
        console.log("handleChange===")
        // this.setState(function () {
        //     return {
        //         value: event.target.value
        //     }
        // });

        this.setState({value: event.target.value});
    }

    /**
     * 通过target.value可以获取到value
     * @param event
     */
    handleCountryChange(event) {
        this.setState({country: event.target.value});
    }

    handleCheckboxChange(event) {

        // const name = event.target.name;
        // const value = event.target.value;
        // this.state({[event.target.name]: event.target.value});


        this.setState({isGoing: event.target.type === 'checkbox' ? event.target.checked : event.target.value});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>
                        Names:
                        <select value={this.state.country} onChange={this.handleCountryChange.bind(this)}>
                            <option value='China'>China</option>
                            <option value='USA'>USA</option>
                            <option value='Russia'>Russia</option>
                            <option value='Korean'>Korean</option>
                        </select>
                        <br/>
                        <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)}/>
                        <br/>
                        <input name="isGoing" type="checkbox" checked={this.state.isGoing}
                               onChange={this.handleCheckboxChange.bind(this)}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
                <h1 className="FormComment"></h1>
            </div>
        )
    }
}