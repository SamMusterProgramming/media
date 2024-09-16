

export const loginCall = async (userCredential,dispatch) => {
  dispatch({type :"LOGIN_START"})
  try {
   const res = await fetch('http://localhost:8080/auth/login', { 
    method: 'POST', 
    headers:{'Content-type':'application/json'},
    body: JSON.stringify(userCredential) 
  }).then(response => response.json()).then(data =>{
    dispatch ({type: "LOGIN_SUCCESS", payLoad : data })
  }) 
  }
  catch(error)
  {
    dispatch ({type: "LOGIN_FAILURE", payLoad : Error })
  }

}