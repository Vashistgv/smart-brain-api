const handleRegister = (req , res ,db ,bcrypt) => {
    const {email , password , name} = req.body
    const hash = bcrypt.hashSync(password);
   if(email && password && name ){
    db.transaction(trx => {
        trx.insert({
            hash : hash ,
            email : email
        }).into('login')
        .returning('email')
        .then(LoginEmail => {
            return  trx('users')
            .returning('*')
            .insert({
                email : LoginEmail[0] ,
                name  : name ,
                joined : new Date ()
            }).then(response => res.json(response[0]))
        })
        .then(trx.commit)
        .catch(trx.rollback)
    })
   .catch(err => res.status(400).json("user exist"))
    
 
   } else {
       res.status(400).json("please fill the details")
   }
  
}

module.exports = {
    handleRegister : handleRegister
}