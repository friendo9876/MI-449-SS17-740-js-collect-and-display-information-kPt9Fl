var FnameInput = document.getElementById('Fname')
var LnameInput = document.getElementById('Lname')
var descInput = document.getElementById('description')
var emailInput = document.getElementById('user_email')
var telInput = document.getElementById('user_tel')
var updateText = function () {
  var Fname = document.getElementById('Fname').value
  var Lname = document.getElementById('Lname').value
  var desc = document.getElementById('description').value
  var tel = document.getElementById('user_tel').value
  var email = document.getElementById('user_email').value
  var name = '<h1>Hi, my name is ' + Fname + ' ' + Lname + '</h1>'
  var info = '<p>' + desc + '</p>'
  var interested = '<p>If you\'re interested in a date, you can email me at <a href="mailto:' + email + '" target="_blank">' + email + '</a> '
  var interested2 = 'or give me a call at <a href="tel:' + tel + '" target="_blank">' + tel + '</a>.</p>'
  var all = name + info + interested + interested2
  document.getElementById('preview').innerHTML = all
  document.getElementById('raw').textContent = all
}
FnameInput.addEventListener('keyup', updateText)
LnameInput.addEventListener('keyup', updateText)
descInput.addEventListener('keyup', updateText)
telInput.addEventListener('keyup', updateText)
emailInput.addEventListener('keyup', updateText)
