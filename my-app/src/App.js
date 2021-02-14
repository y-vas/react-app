import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Users } from './components/Users'
import { getSomeAPIData } from './services/API'

class App extends Component {

  state = {
    users: [],
  }

  getData = () => {
    getSomeAPIData()
    .then(data => {
      this.setState({
          users: data,
      })
    });
  }

  render() {

    return (
      <div className="App">
        <Header/>
        <div className="container">

          <button type="button"
                  onClick={(e) => this.getData()}
                  className="btn btn-warning mt-4 mb-4">
                  Get API Data
          </button>

        </div>

        <div className="row mrgnbtm">
          <Users users={this.state.users}></Users>
        </div>
        <Footer/>

      </div>
    );
  }
}

export default App;
