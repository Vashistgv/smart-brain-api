const getUsers = (req ,res ,db) => {
    
    db.select('*').from('users')
    .then(users => {
        res.json(users)
    })
    .catch(err => res.json("bad request"))
}

module.exports = {
    getUsers : getUsers 
}