const clarifai = require('clarifai');

const app = new Clarifai.App({
    apiKey: 'b062149029434e46b69049e0d1f40d08'
  });

const handleClarifiApi = (req , res) => {
    console.log(req , "req")
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
      .then(data => {
          res.json(data)
      })
      .catch(err => res.json("unable to fetch calrifai data"))
}


const handleImage = (req , res , db) => {
    const {id} = req.body
    db('users').where('id' , '=' , id)
    .increment('entries' , 1)
    .returning('entries')
    .then(entries => res.json(entries[0]))
    .catch(console.log)
}

module.exports = {
    handleImage : handleImage   ,
    handleClarifiApi :handleClarifiApi 

}