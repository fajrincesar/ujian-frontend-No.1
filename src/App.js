import React, { Component } from 'react';
import Welcome from './component/Welcome'

class App extends Component {
  constructor(){
    super();
    this.state={user:''}
  }

  klik(){
    this.setState({user: this.refs.nama.value});
  }
  
  render() {
    return (
      <div>
          <ul className="nav nav-tabs" >
            <li className="active">
                <a className="nav-link active" data-toggle="tab" href="#log">Login</a>
            </li>
            <li>
                <a className="nav-link" data-toggle="tab" href="#wel">Welcome</a>
            </li>
          </ul>
          <div className="tab-content">
              <div id="log" className="tab-pane fade in active"><br/>
                  <input className="form-control" ref="nama" type="text" placeholder="name" style={{width:'250px',margin:'10px'}}/><br/>
                  <button type="submit" className="btn btn-primary" style={{margin:'10px'}} onClick={()=>{this.klik();}}>Submit</button>
              </div>
          <div id="wel" className="tab-pane fade">
              <Welcome x={this.state.user}/>
          </div>
          </div>
      </div>
    );
  }
}

export default App;