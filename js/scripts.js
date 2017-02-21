var FirstNameInput = document.getElementById('FirstName')
var LastNameInput = document.getElementById('LastName')
var DescriptionInput = document.getElementById('Description')
var EmailInput = document.getElementById('UserEmail')
var TelInput = document.getElementById('UserTel')
var UpdateText = function () {
  var FirstName = FirstNameInput.value
  var LastName = LastNameInput.value
  var Description = DescriptionInput.value
  var Tel = TelInput.value
  var Email = EmailInput.value
  var FullName = '<h1>Hi, my name is ' + FirstName + ' ' + LastName + '</h1>'
  var DescriptionText = '<p>' + Description + '</p>'
  var EmailText = '<p>If you\'re interested in a date, you can email me at <a href="mailto:' + Email + '" target="_blank">' + Email + '</a> '
  var TelText = 'or give me a call at <a href="tel:' + Tel + '" target="_blank">' + Tel + '</a>.</p>'
  var FullProfileText = FullName + DescriptionText + EmailText + TelText
  document.getElementById('preview').innerHTML = FullProfileText
  document.getElementById('raw').textContent = FullProfileText
}
FirstNameInput.addEventListener('input', UpdateText)
LastNameInput.addEventListener('input', UpdateText)
DescriptionInput.addEventListener('input', UpdateText)
TelInput.addEventListener('input', UpdateText)
EmailInput.addEventListener('input', UpdateText)
