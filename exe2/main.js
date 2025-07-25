const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true }
}

document.getElementById("check-btn").onclick = checkReservation

function checkReservation() {
  const input = document.getElementById("name-input").value.trim()
  const message = document.getElementById("message")

  //case-insensitive 
  const name = input[0].toUpperCase() + input.slice(1).toLowerCase() 

  if (reservations[name]) {
    if (reservations[name].claimed) {
      message.innerHTML = "Hmm, someone already claimed this reservation"
    } else {
      message.innerHTML = `Welcome, ${name}`
      reservations[name].claimed = true
    }
  } else {
    message.innerHTML = "You have no reservation"
  }
}
