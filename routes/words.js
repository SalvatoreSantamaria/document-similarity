const e = require('express')
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

router.get('/:words', async (req, res) => {
  try {
    //let input_word = (req.params.word).toLowerCase();
    res.send(input_word)

  } catch (err) {
    res.status(500).json({message: err.message})
  }  
})

router.post('/', async (req, res) => {

  let inputOne = req.body.sampleOne;
  let sampleOneWordsArray = inputOne.split(' ')
  let sampleOneObject = {}
  for (let i of sampleOneWordsArray) {
    if (!sampleOneObject[i]) {
      sampleOneObject[i] = 1
    } else if (sampleOneObject[i]) {
      sampleOneObject[i]++
    }
  }
  
  let inputTwo = req.body.sampleTwo;
  let sampleTwoWordsArray = inputTwo.split(' ')
  let sampleTwoObject = {}
  for (let i of sampleTwoWordsArray) {
    if (!sampleTwoObject[i]) {
      sampleTwoObject[i] = 1
    } else if (sampleTwoObject[i]) {
      sampleTwoObject[i]++
    }
  }


  const hashmapsEqual = (sampleOneObject, sampleTwoObject) => {
    const keys1 = Object.keys(sampleOneObject) 
    const values1 = Object.values(sampleOneObject)

    const keys2 = Object.keys(sampleTwoObject)
    const values2 = Object.values(sampleTwoObject)
    let valuesMatchCount = 0
    let keysMatchCount = 0

    // compare some count/keys1.length
    //return(keys1.length, keys2.length)


    // sort through all of keys and values and compare them to 


    for (let i in sampleOneObject) {
      //console.log(i) //key
      //console.log(sampleOneObject[i]) //value

      if (keys2.includes(i)) { // if obj2 has the same key as obj1
        //console.log(i) //i in in obj 1, this is key
        //console.log(sampleOneObject[i])
        //console.log(sampleTwoObject[i]) //this is value
        keysMatchCount++
        if (sampleOneObject[i] == sampleTwoObject[i]) {
          valuesMatchCount++
        }
      }
    }

    // these are all the matches in the values (the counts of the words)
    console.log('this is the number of values matched ' + valuesMatchCount)

    console.log('this is the number of keys matched ' + keysMatchCount)


  }


  try {
    //res.status(201).json(input)
  console.log(hashmapsEqual(sampleOneObject, sampleTwoObject))

    
    
    



    res.send(input)
  } catch (err) {
    res.status(500).json({message: err.message})
  }  
})


module.exports = router