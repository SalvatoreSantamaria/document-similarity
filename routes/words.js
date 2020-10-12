const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    res.send('Get /')
  } catch (err) {
    res.status(500).json({message: err.message})
  }
})

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
    console.log('this is keys2 ' + keys2)
    const values2 = Object.values(sampleTwoObject)

    let valuesMatchCount = 0
    let keysMatchCount = 0

    // compare some count/keys1.length
    //return(keys1.length, keys2.length)
    // sort through all of keys and values and compare them to 

    for (let i in sampleOneObject) { // 
      //console.log(i) //key
      //console.log(sampleOneObject[i]) //value

      if (keys2.includes(i)) { // if obj2 has the same key as obj1
        //console.log(i) //i in in obj 1, this is key
        //console.log(sampleOneObject[i])
        //console.log(sampleTwoObject[i]) //this is value
        console.log('this is i from line 63 ' + i)
        keysMatchCount++
        if (sampleOneObject[i] == sampleTwoObject[i]) {
          console.log('this is sampleOneObject[i] from line 66 ' + sampleOneObject[i] )
          valuesMatchCount++
        }
      }
    }

    // These are all the matches in the values (the counts of the words)
    console.log('The number of keys matched is ' + keysMatchCount)
    console.log('The number of values matched is ' + valuesMatchCount)
   

    countOfSameWords = keysMatchCount/keys1.length.toFixed(2)
    console.log('Percentage of matching words (without checking the number of repeated word count) ' + countOfSameWords)

    numberOfMatchingWords = (valuesMatchCount/values1.length).toFixed(2)
    console.log('Percentage of matching words while checking to to see if the count of matched words is the same ' + numberOfMatchingWords)
  }

  hashmapsEqual(sampleOneObject, sampleTwoObject)

  try {
    res.status(200).json(`These documents have a ${numberOfMatchingWords} score of similarity.`)
  } catch (err) {
    res.status(500).json({message: err.message})
  }  
})

module.exports = router