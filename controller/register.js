const handleRegister = (req, res, db, bcrypt) => {
    const { email, password, name } = req.body
    const hash = bcrypt.hashSync(password);
    console.log("this is bbbbbbbbbbbbbbbbbbbbbbbb", email )
    // db.insert({
    //     hash: hash,
    //     email: email
    // }).into('login').returning('email')
    //     .then(LoginEmail => console.log("this issssssssssss ", LoginEmail))
    //     .catch(err => console.log("this is errrrrrrrrrrrr"))

    db.select('*').from('users')
    .then(user => {
       console.log("user detailssssssssss" ,user)
    }) 
    .catch(console.log)

}

module.exports = {
    handleRegister: handleRegister
}

// db.transaction(trx => {
//     console.log("this is trxxxxxx ")

// })
// trx.insert({
//     hash : hash ,
//     email : email
// }).into('login')
// .returning('email')
// .then(LoginEmail => {
//     return  trx('users')
//     .returning('*')
//     .insert({
//         email : LoginEmail[0] ,
//         name  : name ,
//         joined : new Date ()
//     }).then(response => res.json(response[0]))
// })
// .then(trx.commit)
// .catch(trx.rollback)