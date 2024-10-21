const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Employee = require('./models/Employee');
mongoose.connect('mongodb://127.0.0.1:27017/company');

const port = 3000

//Fuction to get random data
const getRandom = (arr)=>{
  return arr[Math.floor(Math.random()*(arr.length-1))]
}

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {});
})

app.get('/generate', async(req, res) => {
  
  //Delete all data
  await Employee.deleteMany({});

  //Random dataset
  let randomName=['Abdullah','Shamoon','Shamim','Hassan','Rizwan']
  let randomlanguage=['Python','Java','C++','C#','JavaScript']
  let randomcity=['Karachi','Lahore','Islamabad','Peshawar','Quetta']
  
  for (let i = 0; i < 10; i++) {
    const employee = new Employee({
      name: getRandom(randomName),
      salary: Math.floor(Math.random() * 100000),
      language: getRandom(randomlanguage),
      city: getRandom(randomcity),
      isManager: (Math.random() < 0.5)?true:false
    })
    employee.save();
    console.log(employee)
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})