
export function getUserState() {
  const user = localStorage.getItem('user')
  return user ? JSON.parse(user) : {id:'',firstname: '', lastname:'',  token:''}
}