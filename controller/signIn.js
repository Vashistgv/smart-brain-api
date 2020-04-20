 const handleSingin = (req ,res , db , bcrypt) =>  {

    const {email , password} = req.body
   if(email && password) {
    db.select('email' , 'hash').from('login')
    .where('email' , '=' , email)
    .then(data => {
       const isvalid =  bcrypt.compareSync(password , data[0].hash); 
       if(isvalid){
           db.select().from('users')
           .where('email' , '=' , email)
           .then(user => {
               res.json(user[0])
              
           })
           .catch(err => res.json("unable to fetch data"))
       }
       else {
           res.status(400).json("invalid credentials ")
       }
    })
    .catch(err => res.status(400).json("invalid credentails "))

   } else {
       return res.status(400).json("fill the details")
   }

   
}

module.exports = {
    handleSingin : handleSingin 
}