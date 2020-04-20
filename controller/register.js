const handleRegister = (req, res, db, bcrypt) => {
    const { email, password, name } = req.body
    const hash = bcrypt.hashSync(password);

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
        email : email ,
        name  : name ,
        joined : new Date ()
    }).then(response => res.json(response[0]))
    .catch(res.status(400).json("user exit already"))
})
.then(trx.commit)
.catch(trx.rollback)
})
.catch(res.status(400).json("Unable to register"))
}

module.exports = {
    handleRegister: handleRegister
}

