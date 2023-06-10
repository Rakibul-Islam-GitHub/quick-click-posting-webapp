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
