function findOcc(arr, key){
  let arr2 = [];

  arr.forEach((x)=>{

     if(arr2.some((val)=>{ return val[key] == x[key] })){

       arr2.forEach((k)=>{
         if(k[key] === x[key]){
           k["occurrence"]++
         }
      })
     }else{
       let a = {}
       a[key] = x[key]
       a["occurrence"] = 1
       arr2.push(a);
     }
  })

  return arr2
}


const https = require('https');


https.get('https://petstore.swagger.io/v2/user/Vic', res => {
  let data = [];
  const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
  console.log('Status Code:', res.statusCode);
  console.log('Date in Response header:', headerDate);

  res.on('data', chunk => {
    data.push(chunk);
  });

  res.on('end', () => {
    console.log('Response ended: ');
    const users = JSON.parse(Buffer.concat(data).toString());

      console.log(`Got user with id: ${users.username}, First name: ${users.firstName}, Last name: ${users.lastName}`);

  });
}).on('error', err => {
  console.log('Error: ', err.message);
});

https.get('https://petstore.swagger.io/v2/pet/findByStatus?status=available', res => {
  let data = [];
  const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
  console.log('Status Code:', res.statusCode);
  console.log('Date in Response header:', headerDate);

  res.on('data', chunk => {
    data.push(chunk);
  });

  res.on('end', () => {
    console.log('Response ended: ');
    
    const pets = JSON.parse(Buffer.concat(data).toString());

    for(pet of pets) {
      console.log(`Got pet with id: ${pet.id}, name: ${pet.name}`);
    }

    let key = "name"
    console.log(findOcc(pets, key))
    
  });
}).on('error', err => {
  console.log('Error: ', err.message);
});
