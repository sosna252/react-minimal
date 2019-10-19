import React from 'react'
import ReactDOM from 'react-dom';

const generateArray = (n) => Array.from({length: n}, (v, k) => k+1);
const generateRandomArray = (n) => Array.from({length: n}, (v, k) => Math.round(Math.random()*24 +1 ));
const NumberArray = [2, 56, 23, 88, 17, 4];
const SquareArray = [2, 5, 8, 10];
const SquareRootArray = (array) => array.map(Math.sqrt);


const AppTitle = () => (   
  <div>
  <h2>Students Buttons</h2>
  <button onClick = {PrintAll}>All students</button>
  <button onClick = {SortStudents}>Sort students</button>
  <button onClick = {OldStudents}>Old students</button>
  </div>
   )

   function PrintAll() {
    var a=[]
    data.forEach(function(teachers){ 
      teachers.students.forEach(function(Student) { 
        a.push(Student.name)
      });
    });
    const list = a.map((number) => <li key = {number}>{number}</li>)
    ReactDOM.render(
      <ul>{list}</ul>,
      document.getElementById('students'));
  }
  
     
  function SortStudents() {
    var a=[]
    data.forEach(function(teachers){ 
      teachers.students.forEach(function(Student) { 
        a.push(Student.name)
      });
    });
    const list = a.sort().map((number) => <li key = {number}>{number}</li>)
    ReactDOM.render(
      <ul>{list}</ul>,
      document.getElementById('students'));
  }
  
  function OldStudents() {
    var a=[]
    for(var i = 0; i < data.length; i++) {
      if(data[i].active != true){
        continue;
      }
      for(var j = 0; j<data[i].students.length; ++j)
        if(data[i].students[j].age>20)
          a.push(data[i].students[j].name)
    }
    const list = a.map((number) => <li key = {number}>{number}</li>)
    ReactDOM.render(
      <ul>{list}</ul>,
      document.getElementById('students'));
  }

  var data = [
    {
      "teacherName": "Jan Nowak",
      "teacherAge": 36,
      "active": true,
      "students": [
        {
          "name": "Maciej Janosz",
          "age": 12
        },
        {
          "name": "Wojciech Kowalski",
          "age": 15
        },
        {
          "name": "Wioletta Poznanska",
          "age": 1000000
        }
      ]
    },
    {
      "teacherName": "Mariusz Flasinski",
      "teacherAge": 56,
      "active": true,
      "students": [
        {
          "name": "Jan Kot",
          "age": 12
        },
        {
          "name": "Jan Ziobro",
          "age": 15
        },
        {
          "name": "Adam Malysz",
          "age": 41
        }
      ]
    },
    {
      "teacherName": "Wojciech Kuzak",
      "teacherAge": 44,
      "active": false,
      "students": [
        {
          "name": "Janina Wronska",
          "age": 22
        },
        {
          "name": "John Dover",
          "age": 7
        },
        {
          "name": "Emil Petterson",
          "age": 46
        }
      ]
    }
  ]


//console.log(generateArray(10))
//console.log(generateRandomArray(10))
//console.log(NumberArray.filter(n => n>15))
//console.log(SquareRootArray(SquareArray))

export default AppTitle