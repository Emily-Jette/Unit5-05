// This code takes whatever number the user types and multiplies it by itself to get the area of a square
let length = 0
let area = 0

document.getElementById('button').addEventListener('click', math)

function math () {
  length = document.getElementById('input').value
  area = length * length
  document.getElementById('area').innerHTML = area
}
