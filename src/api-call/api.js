const API_URL= 'http://localhost:3001'

export const getPost = async(cb) => {
    fetch(`${API_URL}/api/post`, {
      method: "get",
    })
      .then((res) => res.json())
        .then((result) => {
          return cb(result)
      })
      .catch((err) => console.log(err.message));
  };


export const getComment = async(cb) => {
    fetch(`${API_URL}/api/comment`, {
      method: "get",
    })
      .then((res) => res.json())
        .then((result) => {
          return cb(result)
      })
      .catch((err) => console.log(err.message));
  };

  export const doLogin = async (formdata, cb) => {
  
  const res= await  fetch(`${API_URL}/api/user/login`, {
        method: "POST",
        body: JSON.stringify(formdata),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
      if (res.status===200) {
        const result=  await res.json()
        
        return cb(result)
      }else{
        return cb(false)
      }
   
  };
  export const doRegister = async (formdata, cb) => {
  
  const res= await  fetch(`${API_URL}/api/user/register`, {
        method: "POST",
        body: JSON.stringify(formdata),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
      if (res.status===200) {
        const result=  await res.json()
        return cb(result)
      }else{
        return cb(false)
      }
   
  };
