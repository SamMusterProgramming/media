


export const loginCall = async (userCredential,d) => {
  d = {type :"LOGIN_START"}
  try {
   const res = await fetch('http://localhost:8080/auth/login' ,{
 
    method: 'POST', 
    headers:{'Content-type':'application/json'},
    body: JSON.stringify(userCredential) 
  }).then(response => response.json()).then(data =>{
    d = {type: "LOGIN_SUCCESS", payLoad : data }
    
  }) 
  }
  catch(error)
  {
    d = {type: "LOGIN_FAILURE", payLoad : error }
  }
 return d;
}

export const getUsers = async ()=> {
  await fetch("http://localhost:8080/").then(response => response.json()).then(data => console.log(data));
}