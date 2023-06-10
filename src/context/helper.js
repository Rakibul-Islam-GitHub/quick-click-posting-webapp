
export function getUserState() {
  const user = localStorage.getItem('user')
  return user ? JSON.parse(user) : {id:'',firstname: '', lastname:'',  token:''}
}
export function getAuth() {
  const auth = localStorage.getItem('authenticated')
  return auth ? JSON.parse(auth) :false
}