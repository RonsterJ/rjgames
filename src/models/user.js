const url = 'http://localhost:4000/api/v1/profile'
const token = localStorage.getItem('token');

class UserModel {

  static getUserById = (id) => {
    return fetch(`${url}/${id}`)
      .then((response) => response.json())
  }

  
  static deleteUser = (id) => {
    return fetch(`${url}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'authorization': localStorage.getItem('token'),
      },
    })
      .then((response) => response.json())
  }
}




export default UserModel;