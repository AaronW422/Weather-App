Sugar.extend()
"use strict"

var request = new XMLHttpRequest()
var city = document.getElementById("city").value
var state = document.getElementById("state").value
var button = document.getElementById('refresh')
var date = document.getElementById("todaysdate")


if (document.getElementById("city").value = ''){
  var city = "Flushing"
  }
if (document.getElementById("state").value = ''){
  var state = "NY"
}

request.open("GET","http://api.wunderground.com/api/a4467134470da9d5/forecast/q/" + state + '/' + city + ".json")
request.send()

request.addEventListener("load", function() {
  var response = JSON.parse(request.responseText)

  var day1 = {
    time: new Date().short(),
    lowtemp: response.forecast.simpleforecast.forecastday[0].low.fahrenheit,
    hitemp: response.forecast.simpleforecast.forecastday[0].high.fahrenheit,
    icon: response.forecast.simpleforecast.forecastday[0].icon_url,
  }

  var day2 = {
    time: new Date().addDays(1).short(),
    lowtemp: response.forecast.simpleforecast.forecastday[1].low.fahrenheit,
    hitemp: response.forecast.simpleforecast.forecastday[1].high.fahrenheit,
    icon: response.forecast.simpleforecast.forecastday[1].icon_url,
  }

  var day3 = {
    time: new Date().addDays(2).short(),
    lowtemp: response.forecast.simpleforecast.forecastday[2].low.fahrenheit,
    hitemp: response.forecast.simpleforecast.forecastday[2].high.fahrenheit,
    icon: response.forecast.simpleforecast.forecastday[2].icon_url,
  }

  function range(weather) {
    return weather.lowtemp.toString() + "°F ~ " + weather.hitemp.toString() + "°F"
  }

  var days = [day1, day2, day3]
  var dates = [document.getElementById("date1"), document.getElementById("date2"), document.getElementById("date3")]
  var temps = [document.getElementById("temp1"), document.getElementById("temp2"), document.getElementById("temp3")]
  var icons = [document.getElementById("img1"), document.getElementById("img2"), document.getElementById("img3")]

  date.textContent = new Date().long()

  var x = 0

  while (x < days.length) {
    temps[x].textContent = range(days[x])
    dates[x].textContent = days[x].time
    icons[x].src = days[x].icon
    x++
  }
})

button.addEventListener("click", function(){
  date.textContent = new Date().long()
  city = document.getElementById("city").value
  state = document.getElementById("state").value
  var newrequest = new XMLHttpRequest()
  newrequest.open("GET","http://api.wunderground.com/api/a4467134470da9d5/forecast/q/" + state + '/' + city + ".json")
  newrequest.send()

  newrequest.addEventListener("load", function() {
    var newresponse = JSON.parse(newrequest.responseText)
    var day1 = {
      time: new Date().short(),
      lowtemp: newresponse.forecast.simpleforecast.forecastday[0].low.fahrenheit,
      hitemp: newresponse.forecast.simpleforecast.forecastday[0].high.fahrenheit,
      icon: newresponse.forecast.simpleforecast.forecastday[0].icon_url,
    }

    var day2 = {
      time: new Date().addDays(1).short(),
      lowtemp: newresponse.forecast.simpleforecast.forecastday[1].low.fahrenheit,
      hitemp: newresponse.forecast.simpleforecast.forecastday[1].high.fahrenheit,
      icon: newresponse.forecast.simpleforecast.forecastday[1].icon_url,
    }

    var day3 = {
      time: new Date().addDays(2).short(),
      lowtemp: newresponse.forecast.simpleforecast.forecastday[2].low.fahrenheit,
      hitemp: newresponse.forecast.simpleforecast.forecastday[2].high.fahrenheit,
      icon: newresponse.forecast.simpleforecast.forecastday[2].icon_url,
    }

    function range(weather) {
      return weather.lowtemp.toString() + "°F ~ " + weather.hitemp.toString() + "°F"
    }


    var days = [day1, day2, day3]
    var dates = [document.getElementById("date1"), document.getElementById("date2"), document.getElementById("date3")]
    var temps = [document.getElementById("temp1"), document.getElementById("temp2"), document.getElementById("temp3")]
    var icons = [document.getElementById("img1"), document.getElementById("img2"), document.getElementById("img3")]

    var x = 0
    while (x < days.length) {
      temps[x].textContent = range(days[x])
      dates[x].textContent = days[x].time
      icons[x].src = days[x].icon
      x++
    }
  })
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
