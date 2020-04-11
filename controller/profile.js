const getProfileDetails = (req , res , db) => {
    const {id} = req.params 

    db.select('*').from('users').where({id})
    .then(user => {
        if(user.length){
            res.json(user[0])
        }else {
            res.json("users doesnt exist")
        }
    }) 
    .catch(err => res.json("error in fetching users"))
}

module.exports = {
    getProfileDetails : getProfileDetails  
}