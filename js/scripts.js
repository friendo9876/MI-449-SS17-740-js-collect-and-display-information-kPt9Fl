var firstNameInput = document.getElementById('FirstName')
var lastNameInput = document.getElementById('LastName')
var descriptionInput = document.getElementById('Description')
var emailInput = document.getElementById('UserEmail')
var telInput = document.getElementById('UserTel')
var updateText = function () {
  var firstName = firstNameInput.value
  var lastName = lastNameInput.value
  var description = descriptionInput.value
  var tel = telInput.value
  var email = emailInput.value
  var fullName = '<h1>Hi, my name is ' + firstName + ' ' + lastName + '</h1>'
  var descriptionText = '<p>' + description + '</p>'
  var emailText = '<p>If you\'re interested in a date, you can email me at <a href="mailto:' + email + '" target="_blank">' + email + '</a> '
  var telText = 'or give me a call at <a href="tel:' + tel + '" target="_blank">' + tel + '</a>.</p>'
  var fullProfileText = fullName + descriptionText + emailText + telText
  document.getElementById('preview').innerHTML = fullProfileText
  document.getElementById('raw').textContent = fullProfileText
}
firstNameInput.addEventListener('input', updateText)
lastNameInput.addEventListener('input', updateText)
descriptionInput.addEventListener('input', updateText)
telInput.addEventListener('input', updateText)
emailInput.addEventListener('input', updateText)
