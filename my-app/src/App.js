import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';

class App extends Component {
  constructor(){
    super();
     this.state = {
      form: {
        firstName: '',
        lastName: '',
        email: ''
      },
      emailErr: false,
      submitErr: false
    }
    this.validateInputText = this.validateInputText.bind(this);
    this.validateInputemail = this.validateInputemail.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.validateSubmit = this.validateSubmit.bind(this);
  }

    changeHandler(e) {
    this.setState({emailErr: false});
     this.setState({submitErr: false});
    //e.currentTarget.style.backgroundColor = 'white';
     e.target.className = 'yesInput';
    let form = this.state.form;
    form[e.target.name] = e.target.value;
    this.setState({form});
  }

  validateInputText(e){
    //should not change dom directly 
    if(e.target.value.trim() === ''){
     // console.log('is empty');
      // e.currentTarget.style.backgroundColor = 'red';
      e.target.className = 'noInput';
    }else{
     // e.currentTarget.style.backgroundColor = 'white';
     e.target.className = 'yesInput';
    };
  }

  validateInputemail(e){
    this.validateInputText(e);
   // console.log('validating');
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value))  {
       // console.log('valid email');
        this.setState({emailErr: false});
      }else{
         console.log('not valid email');
        // alert('not a valid email');
        this.setState({emailErr: true});
    }
  }

  

  validateSubmit(e){

     Object.keys(this.state.form).forEach(key => {
       console.log('validate submit');
        if(!key.value){
          console.log('validate key');
          this.setState({submitErr: true});
        }
     })
  }
  
  render() {
    return (
      <div>
        
        <Form form={this.state.form}
              submitErr={this.state.submitErr}
              emailErr={this.state.emailErr}
              changeHandler={this.changeHandler}
              validateSubmit={this.validateSubmit}
              validateInputText={this.validateInputText} 
              validateInputemail={this.validateInputemail} />
      </div>
    );
  }
}

export default App;
