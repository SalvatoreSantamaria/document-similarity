const express = require('express')
const router = express.Router()
const words_list = require('../_files/words.js')

router.get('/', async (req, res) => {
  try {
    res.send('Get /')
  } catch (err) {
    res.status(500).json({message: err.message})
  }
})

router.get('/:word', async (req, res) => {
  try {
    //let input_word = (req.params.word).toLowerCase();

    res.send(input_word)

  } catch (err) {
    res.status(500).json({message: err.message})
  }  
})

module.exports = router