import React, { Component } from 'react';



class Form extends Component {
  render() {

     
    function error(props, errMesage){
        const err = props;
        console.log('IN ERROR');
        if (err) {
          //console.log(' ERROR');
          return  <span> {errMesage} </span>;
        }
        return  <span> </span>;
      };
    
    return (
      <div >
      <h1>the form!</h1>
        <form action="">
          <input
            onChange={this.props.changeHandler}
            onBlur={this.props.validateInputText}
            value={this.props.form.firstName}
            name='firstName'           
            type="text"
            placeholder='firstName'         
          />
          <br/>
          <input
            onChange={this.props.changeHandler}
            onBlur={this.props.validateInputText}
            value={this.props.form.lastName}
            name='lastName'   
            type="text"
            placeholder='lastName'
          />
          <br/>
          {
            error(this.props.emailErr, 'not valid email')
          }
          <input
            onChange={this.props.changeHandler}
            onBlur={this.props.validateInputemail}
            value={this.props.form.email}
            name='email'   
            type="email"
            placeholder='email'
          />
          <br/>
           {
            error(this.props.submitErr, 'fill out form')
          }
        <button onClick={this.props.validateSubmit} type='button'> click me</button>
        </form>
       
      </div>
    );
  }
}

export default Form;