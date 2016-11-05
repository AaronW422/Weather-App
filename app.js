Sugar.extend()
"use strict"

var button2 = document.getElementById('refresh')
var now = new Date()
var weather = [
  {
    time: Date.create(),
    lowtemp: 54,
    hitemp: 66,
    icon: "sunny",
    location: "Flushing, NY"
  },
  {
    time: Date.create(),
    lowtemp: 54,
    hitemp: 66,
    icon: "sunny",
    location: "Flushing, NY"
  },
  {
    time: Date.create(),
    lowtemp: 54,
    hitemp: 66,
    icon: "sunny",
    location: "Flushing, NY"
  }
]

function rand(){
  return Math.round(10 + 90*Math.random())
}

function range(weather){
  return weather.lowtemp.toString() + "°F ~ " + weather.hitemp.toString() + "°F"
}

var date = document.getElementById("date")
date.textContent = now.format()
var range0 = document.getElementById("temp1")
range0.textContent = range(weather[0])
var range1 = document.getElementById("temp2")
range1.textContent = range(weather[1])
var range2 =document.getElementById("temp3")
range2.textContent = range(weather[2])

button2.addEventListener("click", function(){
  range0 = range(weather[0])
  range1 = range(weather[1])
  range2 = range(weather[2])
  now = new Date()
  date.textContent = now.format()
})
