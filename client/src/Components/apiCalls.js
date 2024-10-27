


export const loginCall = async (userCredential,dispatch) => {
  dispatch={type :"LOGIN_START"}
  try {
   const res = await fetch('https://weary-specter-4jwj6rp9x4gxf7xrw-8080.app.github.dev/' ,{
    //'http://localhost:8080/auth/login', { 
    method: 'POST', 
    headers:{'Content-type':'application/json'},
    body: JSON.stringify(userCredential) 
  }).then(response => response.json()).then(data =>{
    dispatch = {type: "LOGIN_SUCCESS", payLoad : data }
  }) 
  }
  catch(error)
  {
    dispatch = {type: "LOGIN_FAILURE", payLoad : Error }
  }
 return dispatch;
}

export const getUsers = async ()=> {
  console.log('i am here')
  await fetch("https://weary-specter-4jwj6rp9x4gxf7xrw-8080.app.github.dev/").then(response => response.json()).then(data => console.log(data));
}