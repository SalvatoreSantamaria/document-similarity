const express = require('express')
const router = express.Router()

router.post('/', async (req, res) => {

  let inputOne = req.body.sampleOne;
  inputOne = inputOne.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
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
  inputTwo = inputTwo.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
  let sampleTwoWordsArray = inputTwo.split(' ')
  let sampleTwoObject = {}
  for (let i of sampleTwoWordsArray) {
    if (!sampleTwoObject[i]) {
      sampleTwoObject[i] = 1
    } else if (sampleTwoObject[i]) {
      sampleTwoObject[i]++
    }
  }

  let countOfSameWords = 0;
  let numberOfMatchingWords = 0;

  const hashmapsEqual = (sampleOneObject, sampleTwoObject) => {
    const keys1 = Object.keys(sampleOneObject) 
    const values1 = Object.values(sampleOneObject)

    const keys2 = Object.keys(sampleTwoObject)
    const values2 = Object.values(sampleTwoObject)

    let valuesMatchCount = 0
    let keysMatchCount = 0

    for (let i in sampleOneObject) {
      // Check to see if obj1 has the same key as obj2
      if (keys2.includes(i)) { 
        keysMatchCount++
        // Check to see if obj1 has same count of values as obj2
        if (sampleOneObject[i] == sampleTwoObject[i]) {
 
          valuesMatchCount++
        }
      }
    }

    console.log('The number of keys matched is ' + keysMatchCount)
    console.log('The number of values exactly matched is ' + valuesMatchCount)
   
    countOfSameWords = (keysMatchCount/keys1.length).toFixed(2)
    console.log('Percentage of matching words (without checking the number of repeated word count) ' + countOfSameWords)

    numberOfMatchingWords = (valuesMatchCount/values1.length).toFixed(2)
    console.log('Percentage of matching words while checking to see if the count of matched words is the same ' + numberOfMatchingWords)
  }

  hashmapsEqual(sampleOneObject, sampleTwoObject)

  try {
    res.status(200).json(`These documents have a ${numberOfMatchingWords} score of similarity.`)
  } catch (err) {
    res.status(500).json({message: err.message})
  }  
})

module.exports = router