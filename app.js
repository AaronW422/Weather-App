Sugar.extend()
"use strict"

var button2 = document.getElementById('refresh')
var day1 = {
  time: new Date().short(),
  lowtemp: 54,
  hitemp: 66,
  icon: "sunny",
}

var day2 = {
  time: new Date().addDays(1).short(),
  lowtemp: 32,
  hitemp: 70,
  icon: "rainy",
}

var day3 = {
  time: new Date().addDays(2).short(),
  lowtemp: -20,
  hitemp: 0,
  icon: "cloudy",
}

function range(weather){
  return weather.lowtemp.toString() + "°F ~ " + weather.hitemp.toString() + "°F"
}

var date = document.getElementById("todaysdate")
date.textContent = new Date().long()
document.getElementById("temp1").textContent = range(day1)
document.getElementById("temp2").textContent = range(day2)
document.getElementById("temp3").textContent = range(day3)

document.getElementById("date1").textContent = day1.time
document.getElementById("date2").textContent = day2.time
document.getElementById("date3").textContent = day3.time


button2.addEventListener("click", function(){
  date.textContent = new Date().long()

  document.getElementById("temp1").textContent = range(day1)
  document.getElementById("temp2").textContent = range(day2)
  document.getElementById("temp3").textContent = range(day3)

  document.getElementById("date1").textContent = day1.time
  document.getElementById("date2").textContent = day2.time
  document.getElementById("date3").textContent = day3.time
})

/*var Person = class {
  fullname(){
    return this.firstname + ' ' + this.lastname
  }

  yearstolegal(){
    if (this.age < 21){
      return this.fullname() + " - " + (21 - this.age) + " years until the legal drinking age."
    }
    else {
      return this.fullname() + " can legally drink."
    }
  }
}

class Employee extends Person {

  nameplate(){
    return this.fullname() + ", " + this.jobtitle
  }

  yearstoretire(){
    if (this.age < 21){
      return this.fullname() + " - " + (65 - this.age) + " years until retirement."
    }
    else {
      return this.fullname() + " has already retired."
    }
  }

  status(){
    return this.yearstolegal() + "\n" + this.yearstoretire()
  }
}

var Dude = new Employee()
Dude.firstname = "Dude"
Dude.lastname = "McDood"
Dude.jobtitle = "Bean Counter"
Dude.age = 15

var OldMan = new Employee()
OldMan.firstname = "Grumpy"
OldMan.lastname = "McOldman"
OldMan.jobtitle = "Head Honcho"
OldMan.age = 45

var DedGuy = new Employee()
DedGuy.firstname = "Ded"
DedGuy.lastname = "McCorpse"
DedGuy.jobtitle = "Janitor"
DedGuy.age = 88

alert(Dude.status() + "\n\n" + OldMan.status() + "\n\n" + DedGuy.status())

var show = function(n){
  alert(n)
}


var list = [1,3,4,10]

list.forEach(show)
alert( list.map( function(n) {
  return n*2
} ) )*/
