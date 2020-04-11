const getUsers = (req ,res ,db) => {
    
    db.select('*').from('users')
    .then(users => {
        res.json(users)
    })
    .catch(err => res.json("bad request users"))
}

module.exports = {
    getUsers : getUsers 
}