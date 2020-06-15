import React, { Component } from 'react';
import { Formik } from 'formik';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      apiResponse: "",
      apiRequest: ""
    }
    this.callApi = this.callApi.bind(this);
  }

  callApi(){
    fetch("http://localhost:9000/myAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }))
      .catch(err => err)
  }

  render() {
    return (
      <div className="App">
        <p className='App-intro'>{this.state.apiResponse}</p>
        <div className='container'>
          <div className='buttonContainer'>
              <Formik
                initialValues={{apiRequest: ''}}
                onSubmit={(values) => {
                  fetch("http://localhost:9000/myAPI", {
                    method: 'POST',
                    headers: {
                      'Content-Type':'application/json;charset=utf-8'
                      //'Content-Type':'text/plain;charset=UTF-8'
                    },
                    body: JSON.stringify(values)
                  })
                  .then(res => res.text())
                  .then(res => this.setState({ apiResponse: res }))
                  .catch(err => err)
                }}
              >
                {(props) => (
                  <div>
                    <input type='text' 
                      placeholder="some..." 
                      onChange = {props.handleChange('apiRequest')}
                      value = {props.values.apiResponse}
                    />
                    <button type='submit' onClick={props.handleSubmit}>send</button>
                  </div>   
                )}
              </Formik>
              <button onClick={this.callApi}>receive</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
