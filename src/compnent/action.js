

export const changefirstName = (firstname) => {
    
    return {
      
          type:'FIRST_NAME',
          payload:firstname
      
    };
};

export const changelastName = (lastname) => {
   return{
       
          type:'LAST_NAME',
          payload:lastname

      
   };

};


export const changeuserName = (username) => {
    return{
       
            type:'USER_NAME',
            payload:username
        
    };
};


export const changePassword = (password) => {
    return{
        
            type:'SET_PASSWORD',
            payload:password
       
    };
};



export const newItem = (item) => {
    return{
        
            type:'ADD_ITEM',
            payload:item
       
    };
};


export const editItem = (item) => {
  return{
      
          type:'EDIT_ITEM',
          payload:item
     
  };
};

  