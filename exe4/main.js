document.getElementById("submit-btn").onclick = validate

function validate() {
  const name = document.getElementById("name").value.trim()
  const salary = parseInt(document.getElementById("salary").value)
  const birthday = document.getElementById("birthday").value
  const phone = document.getElementById("phone").value.trim()
  const errorsDiv = document.getElementById("errors")

// Clear previous errors
  errorsDiv.innerHTML = ""
  let hasErrors = false

  if (name.length < 3) {
    errorsDiv.innerHTML += "<p>Name must be at least 3 characters long.</p>"
    hasErrors = true
  }

  if (isNaN(salary) || salary < 10000 || salary > 16000) {
    errorsDiv.innerHTML += "<p>Salary must be between 10,000 and 16,000.</p>"
    hasErrors = true
  }

  if (!birthday) {
    errorsDiv.innerHTML += "<p>Birthday is required.</p>"
    hasErrors = true
  }

  if (!/^\d{10}$/.test(phone)) {
    errorsDiv.innerHTML += "<p>Phone must be exactly 10 digits.</p>"
    hasErrors = true
  }

  if (!hasErrors) {
    errorsDiv.innerHTML = "<p>Form submitted successfully!</p>"
  }
}
