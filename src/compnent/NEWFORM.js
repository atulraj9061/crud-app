import React, { Fragment } from 'react'
import {changefirstName,changelastName,changeuserName,changePassword,newItem} from '../compnent/action';
import {connect} from 'react-redux';
import { Button, FormGroup, Label, Container } from 'reactstrap';
import TABLE from "../compnent/TABLE"


class NEWFORM extends React.Component {

  constructor(props){
    super(props);
    this.state={
    validateForm:true
    }
  }

    handlefirstname= (e) => {
      this.props.setfirstname(e.target.value);
    }
    
    handlelastname= (e) => {
      this.props.setlastname(e.target.value);
    }
    
    
    handleusername= (e) => {
      this.props.setusername(e.target.value);
    }
    
    
    handlepassword= (e) => {
      this.props.setpassword(e.target.value);
    }
    
    
    handleChange = (e) => {
      this.setState(e.target.value)
    }
    
      handleSubmit = (event) => {
        event.preventDefault();
        const {firstname, lastname, username, password,item,} = this.props;
        this.props.setitem(item.concat({firstname:firstname,lastname:lastname,username:username,password:password , id : parseInt(Math.random()* 1000)}));
        this.setState ({
          validateForm:!this.state.validateForm
           });
         }

         handleshow = () => {
          this.setState ({
            validateForm:!this.state.validateForm
             },() => console.log(this.state));
         }
     
      render() { 

       const{validateForm}=this.state;
      
        const {item} = this.props;

        console.log('items',this.state.validateForm)

        return (
    
          <Container>
             {validateForm ?      
               <Fragment>
                <form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Label>firstname</Label>
                    <input type="text"
                      name="firstname"
                      className="form-control w-25"
                      value={this.props.firstname}
                      onChange={this.handlefirstname}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label>lastname</Label>
                    <input type="text"
                      name="lastname"
                      className="form-control w-25"
                      value={this.props.lastname}
                      onChange={this.handlelastname}
                    />
                    </FormGroup>

                      <FormGroup>
                        <Label> username</Label>
                        <input type="text"
                          name="username"
                          className="form-control w-25"
                          value={this.props.username}
                          onChange={this.handleusername}
                        />
                        </FormGroup>
                  
                      <FormGroup>
                        <Label>password</Label>
                        <input type="password"
                          name="password"
                          className="form-control w-25"
                          value={this.props.password}
                          onChange={this.handlepassword}
                        />
                      </FormGroup>

                  <Button type="submit" color="primary" size="sm" className="addbutton" disabled={this.props.disabled}>ADD</Button>

                   </form>
                  </Fragment>
               : <TABLE item={item} handleshow={this.handleshow} />
            }     
          </Container>
              
        )
      };
    };  
    
    const mapStateToProps = (state) => {

      return {
    
      firstname:state.firstname,
      lastname:state.lastname,
      username:state.username,
      password:state.password,
      item:state.item,
       
      }
      
    };
    
    const mapDispatchToProps = (dispatch) => {
    
      return {
    
    setfirstname:firstname => dispatch(changefirstName(firstname)),
    setlastname: lastname => dispatch(changelastName(lastname)),
    setusername: username => dispatch(changeuserName(username)),
    setpassword: password => dispatch(changePassword(password)),
    setitem: item => dispatch(newItem(item)),
    //deleteitem:item =>  dispatch(removeItem(item)),
      }
    
    };
     
  export default connect(mapStateToProps,mapDispatchToProps)(NEWFORM)