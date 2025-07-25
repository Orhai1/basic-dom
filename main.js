const ball = document.getElementById("ball")

const moveRight = function () {
  const left = parseInt(ball.style.left) || 0
  ball.style.left = (left + 15) + "px"
}

const moveLeft = function () {
  const left = parseInt(ball.style.left) || 0
  ball.style.left = (left - 15) + "px"
}

const moveUp = function () {
  const top = parseInt(ball.style.top) || 0
  ball.style.top = (top - 15) + "px"
}

const moveDown = function () {
  const top = parseInt(ball.style.top) || 0
  ball.style.top = (top + 15) + "px"
}


document.getElementById("right").onclick = moveRight
document.getElementById("left").onclick = moveLeft
document.getElementById("up").onclick = moveUp
document.getElementById("down").onclick = moveDown
