const handleRegister = (req , res ,db ,bcrypt) => {
    const {email , password , name} = req.body
    const hash = bcrypt.hashSync(password);
    console.log("this is bbbbbbbbbbbbbbbbbbbbbbbb",email , db )
    db.transaction(trx => {
        console.log("this is ",email)
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
    

}

module.exports = {
    handleRegister : handleRegister
}