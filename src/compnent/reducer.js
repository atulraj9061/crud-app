

const initialState = {

    firstname:'',
    lastname:'',
    username:'',
    password:'',
    item:[],
    items:[],
    isform:false,
    
}


const reducer = (state = initialState,action) => {

   
    // eslint-disable-next-line default-case
    switch(action.type){

        case "FIRST_NAME":
            return{
                ...state,
                firstname:action.payload,
                
                
            }

          case "LAST_NAME":
              return{
                  ...state,
                  lastname:action.payload,
                  
                
              }
            
            case "USER_NAME":
                return{
                    ...state,
                    username:action.payload,
                    
                
                }

            case "SET_PASSWORD":
                return{
                    ...state,
                   password:action.payload,
                 
                
                }

             case "ADD_ITEM":
                    console.log('action12',action.payload)

                 return{
                     ...state,
                     item:action.payload,
                     firstname:'',
                     lastname:'',
                     username:'',
                     password:'',
                 }
              
                 

                  case "EDIT_ITEM":
                    console.log('action12',action.payload)
                    console.log(state.item.find(i => i.id === action.payload.id), state.item)
                    return{
                     ...state,
                     item:state.item.map(i => i.id === action.payload.id ? action.payload : i),
                     firstname:'',
                     lastname:'',
                     username:'',
                     password:'',
                 }
                  
            
    }

    return state;
};


export default reducer;

