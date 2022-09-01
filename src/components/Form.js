import React from "react";

export default class Form extends React.Component {
    state = {
        title: 'JavaScript',
        text: 'JS Is Fine',
        library: 'React',
        isAwesome: true,
    };

    handleChange = (e) => {

        if(e.target.type === 'text') {
            this.setState({
                title: e.target.value,
            });
        }
        else if(e.target.type === 'textarea') {
            this.setState({
                text: e.target.value,
            });
        }
        else if(e.target.type === 'select-one') {
            this.setState({
                library: e.target.value,
            });
        }
        else if(e.target.type === 'checkbox') {
            this.setState({
                isAwesome: e.target.checked,
            });
        } else{
            console.log('nothing here');
        }
    };

    submitHandler = (e) => {
        const { title, text, library, isAwesome } = this.state;
        e.preventDefault();
        console.log(title, text, library, isAwesome)
    }


    render() {
        const {title, text, library, isAwesome } = this.state;
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text" placeholder="Enter Ttile" value = {title} onChange = {this.handleChange} ></input>
                    <br/>
                    <br/>
                    <textarea name="text" value = { text } onChange = {this.handleChange}>js</textarea>
                    <br/>
                    <br/>
                    <select value = {library} onChange = {this.handleChange} >
                        <option value="React">React</option>
                        <option value="Vue">Vue</option>
                    </select>
                    <br/>
                    <br/>
                    <input type="checkbox" checked = {isAwesome} onChange = {this.handleChange} ></input>
                    <br/>
                    <br/>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        )
    }
}