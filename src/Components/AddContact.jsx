import React from 'react';

class AddComponent extends React.Component{
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All the flieds are mandetory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({name:"", email:""});
  };

  render() {
    return(
      <div className='ui main'>
        <h3>Add Contact</h3>
        <form className='ui form'>

          <div className='field'>
            <label>Name: </label>
            <input
            type="text"
            name='name'
            placeholder='Name'
            value = {this.state.name}
            onChange={(e) => this.setState({name: e.target.value})} />
          </div>

          <div className='field'>
            <label>E-mail: </label>
            <input
            type="text" 
            name='email' 
            placeholder='E-mail'
            value={this.state.email}
            onChange={(e) => this.setState({email: e.target.value})}/>
          </div>

          {/* <div className='ui button blue'>Add</div> */}
          <button onClick={this.add} className='ui button blue'>Add</button>
        </form>
      </div>
    )
  }
}

export default AddComponent;