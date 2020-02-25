import React, { Fragment } from 'react';
import {connect} from 'react-redux';
import {changefirstName,changelastName,changeuserName,changePassword,editItem} from '../compnent/action';
import { Table, Button, FormGroup, Label, Container } from 'reactstrap';

class TABLE extends React.Component {
  
  constructor(props){
    super(props);
    this.state={
      item:[],
      firstname:'',
      lastname:'',
      username:'',
      password:'',
      id : '',
      hideTable:true,
    }
  }
  
handlefirstname=(e)=>{
  this.setState({
    firstname : e.target.value
  })
}

handlelastname=(e)=>{
  this.setState({
    lastname : e.target.value
  })
}

handleusername=(e)=>{
  this.setState({
    username : e.target.value
  })
}

handlepassword=(e)=>{
  this.setState({
    password : e.target.value
  })
}
 
  handleSubmit = (event) => {
    event.preventDefault();
    const {firstname, lastname, username, password,id} = this.state;
    this.props.setitem({firstname:firstname,lastname:lastname,username:username,password:password,id: id});
    this.setState({
      hideTable:!this.state.hideTable,
     })
     }

    removeItem = (index) => {
      const {item} = this.props;
     item.splice(index,1)
      this.setState({
        item:item
      })
    }
  
    editItem = (value) => {
      this.setState ({
        validateTable:!this.state.validateTable,
        firstname:value.firstname,
        lastname:value.lastname,
        username:value.username,
        password:value.password,
        id : value.id,
         },()=>{
         this.setState({
        hideTable:!this.state.hideTable,
         })
         });
    }

     render() {  

      const{hideTable}=this.state;
      
     console.log('table',this.props.item)

         return (
        
           <Container>
             
             {!hideTable ? 
               <Fragment>
                 <form onSubmit={this.handleSubmit} >
                   <FormGroup>
                     <Label>Firstname</Label>
                     <input type="text"
                       name="firstname"
                       className="form-control w-25"
                       defaultValue={this.state.firstname}
                       onChange={this.handlefirstname}
                     />
                   </FormGroup>
              
                   <FormGroup>
                     <Label>lastname</Label>
                     <input type="text"
                     name="lastname"
                       className="form-control w-25"
                     defaultValue={this.state.lastname}
                     onChange={this.handlelastname}
                     /></FormGroup>

                   <FormGroup>
                   <Label> username</Label>
                   <input type="text"
                     name="username"
                       className="form-control w-25"
                     defaultValue={this.state.username}
                     onChange={this.handleusername}
                     /></FormGroup>
                  
                   <FormGroup>
                     <Label> password</Label>
                     <input type="password"
                     name="password"
                     className="form-control w-25"
                     defaultValue={this.state.password}
                     onChange={this.handlepassword}
                     /></FormGroup>

                   <Button type="submit" color="primary" size="sm" className="updatebtn">UPDATE</Button>

                 </form>
               </Fragment>
         : <Table bordered striped size="sm" className="datatable">
              <thead>
                  <tr>
                    <th>Firstname</th>
                    <th>Lastname</th> 
                    <th>username</th>
                    <th>password</th>
                  </tr>
              </thead>

    <tbody>
  
      {  
        this.props.item ?
        this.props.item.map((value,index)=>{
          return (
            <tr key={index}>
          <td> {value.firstname}</td>
          <td>{value.lastname}</td>
          <td>{value.username} </td>
          <td>{value.password}</td>
         <td> <Button color="primary" size="sm" onClick={()=>this.editItem(value)}>EDIT</Button></td>
        <td><Button color="danger" size="sm"  onClick={()=>this.removeItem(index)} >DELETE</Button></td>
         <td><Button color="success" size="sm" onClick={this.props.handleshow} >ADD NEW</Button></td>

        </tr>
          )
        }):null
         
      } 
    </tbody> 
    </Table>}
    </Container>
        
      );
    }
  }

  const mapStateToProps = (state) => {
    
    return {
      
      firstname:state.firstname,
      lastname:state.lastname,
      username:state.username,
      password:state.password,
      item:state.item,
    }

  }

  const mapDispatchToProps = (dispatch) => {

    return{
      
    setfirstname:firstname => dispatch(changefirstName(firstname)),
    setlastname: lastname => dispatch(changelastName(lastname)),
    setusername: username => dispatch(changeuserName(username)),
    setpassword: password => dispatch(changePassword(password)),
    setitem: item => dispatch(editItem(item)),
    }
  }

  export default connect(mapStateToProps,mapDispatchToProps)(TABLE) 