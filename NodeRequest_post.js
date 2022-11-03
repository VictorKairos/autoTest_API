const axios = require('axios')

const data = {
  id: 0,
  username: 'Vic',
  firstName: 'Vic first',
  lastName: 'Vic last',
  email: 'vic email',
  password: 'vic pass',
  phone: '678',
  userStatus: 0
}

  axios
    .post('https://petstore.swagger.io/v2/user', data)
    .then(res => {
      console.log(`Status: ${res.status}`)
      console.log('Body: ', res.data)
    })
    .catch(err => {
      console.error(err)
    })
