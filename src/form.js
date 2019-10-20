import React, {Component} from 'react';
import { DatePicker, message, Input } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';
class Form extends Component {

    constructor(props) {
        super(props);
        
        this.initialState = {
            firstname: '',
            lastname: '',
            birthday: null,
            age     : Number,
            hobby   : ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name] : value
        });
    }

    
    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }
    
    handleChange1 = ( date ) => {
     message.info(`Selected Date: ${toString(date) ? date.format('YYYY-MM-DD') : 'None'}`);
        this.setState({ date });
      };

    render() {
        
        const { firstname, lastname, age, hobby } = this.state; 
        
        return (
            <form style = {formStyle} onSubmit={this.onFormSubmit}>
                <label>FirstName</label>
                <Input 
                    type="text" 
                    name="firstname" 
                    value={firstname} 
                    onChange={this.handleChange} />
                <label>LastName</label>
                <Input 
                    type="text" 
                    name="lastname" 
                    value={lastname} 
                    onChange={this.handleChange} />

                    <label>Birthday</label>
                    <DatePicker defaultValue={moment('2015-01-01', 'YYYY-MM-DD')} 
                    name = 'birthday'
                    onChange = {this.handleChange1}
                    /> 
                    <label>Age</label>
                <Input 
                    type="text" 
                    name="age" 
                    value={age} 
                    onChange={this.handleChange} />
                    <label>Hobby</label>
                <Input 
                    type="text" 
                    name="hobby" 
                    value={hobby} 
                    onChange={this.handleChange} />
                <button  type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;

const formStyle = {
    fontSize: '15px'
}
