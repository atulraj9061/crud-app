import React from 'react';
import './App.css';

class registerapp extends React.Component {
  constructor(props) {
    super(props);
   
    this.state={
      firstname:'',
      lastname:'',
      username:'',
      password:'',
      item:[],
      disabled:true
    }

   // this.handleSubmit= this.handleSubmit.bind(this);
  }

  

validate = () => {
 let firstname = "";
 //let lastname = "";
//let password = "";
 //let username = "";

 

 if(firstname){
   this.setState({firstname});
   return false;
   
 }

 return true;

}

  handleChange = (e) => {
    this.setState({ [e.target.name] : e.target.value });
    if(e.target.value){
      this.setState({
       disabled:false
      });
    }
 }

  handleSubmit = (event) =>{
    event.preventDefault();
    
    
    //const isvalid = this.validate();
    const {firstname, lastname, username, password} = this.state;
    
    let item = [...this.state.item];
     
    this.setState({
      item:[...item,{firstname:firstname,lastname:lastname,username:username,password:password}]
    })
    this.setState({ 
      firstname: '',
      lastname:'',
      username:'',
      password:'',
   })
   
    // if(isvalid){
   // console.log(this.state)
    //this.setState(this.state);
   //}
  }


  render() {

    console.log(this.state.item)
    const {item} = this.state;

    return (

      <div className="table">

      <div className="App">
   
  
      <div className="App-header">
      

      
      <form onSubmit={this.handleSubmit}>
      
       
           firstname:-
          <input type="text"
           name="firstname"
           className="wrapper"
           value={this.state.firstname}
           onChange={this.handleChange} 
         /><br></br><br></br>
      
           lastname:-
          <input type="text"
           name="lastname"
           className="wrapper"
           value={this.state.lastname || ''}
           onChange={this.handleChange}
            /><br></br><br></br>
     
            username:-
          <input type="text" 
           name="username"
           className="wrapper"
          value={this.state.username}
          onChange={this.handleChange}
          
          /><br></br><br></br>
           
            password:-
           <input type="password" 
            name ="password"
           className="password" 
           value={this.state.password}
           onChange={this.handleChange}
           /><br></br><br></br>


       <button type = "submit" className = "button" disabled={this.state.disabled}>Add</button>
   
</form>
      </div>
      </div>
      <br></br><br></br>

      <table className = "maintable">
        <thead>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th> 
    <th>username</th>
    <th>password</th>
  </tr>
  </thead>
  { <tbody>
    {
       item.map((p,z) =>
        <tr key={z}>
        <td>{p.firstname}</td>
        <td>{p.lastname}</td>
        <td>{p.username}</td>
        <td>{p.password}</td>
      </tr>
      )
    }
  
  </tbody> }
  </table>
      </div>
    );
  }
}
export default registerapp;



