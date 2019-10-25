import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Form, Icon, Input, Button } from 'antd';
import { DatePicker } from 'antd';
import { connect } from 'react-redux';
import { addDetails } from '../actions/userAction';
import { bindActionCreators } from 'redux';


const formStyle = {
  fontSize: '90px',
  marginTop: '60px',
  marginLeft: '-50'
}
 const date = {
   marginLeft:'30%'
 }

 const submit = {
  marginLeft:'30%'
}
class UserForm extends Component {

    
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
         this.state = values
      if (!err) {
        this.props.addDetails(this.state);
      }
    });
  };

  

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
        <div style = {formStyle} >
      <Form onSubmit={this.handleSubmit}>
        <Form.Item>
          {getFieldDecorator('fname', {
            rules: [{ required: true, message: 'Please input your First Name!' }],
          })(
                <Input 
                    type="text" 
                    name="firstname" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('lname', {
            rules: [{ required: true, message: 'Please input your Last Name!' }],
          })(
            <Input
              placeholder="Last Name" 
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('age', {
            rules: [{ required: true, message: 'Please input Age!' }],
          })(
            <Input
              placeholder="Age" 
            />,
          )}
        </Form.Item>
        <Form.Item>
        {getFieldDecorator('dob', {
            rules: [{ required: true, message: 'Please input your Date of Birth!' }],
          })(
        <DatePicker size="large" onChange={this.handleChange}  placeholder="Date of Birth" style = {date}/>
        )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('hobby', {
            rules: [{ required: true, message: 'Please input your Hobby!' }],
          })(
            <Input
              placeholder="Hobby" 
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="danger" htmlType="submit" className="login-form-button" style = {submit}>
            Submit
          </Button>
        </Form.Item>
      </Form>
      </div>
      
    );
  }
}

function mapDispatchToProps (dispatch) {
  bindActionCreators({addDetails: addDetails}, dispatch);
}


const WrappedUserForm = Form.create({ name: 'user-form' })(UserForm);

ReactDOM.render(<WrappedUserForm />, document.getElementById('root'));

export default connect(mapDispatchToProps, { addDetails })(WrappedUserForm)
