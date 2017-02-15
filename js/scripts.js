$(document).ready(function () {
  var Fname = '';
  var Lname = '';
  var desc = '';
  var email = '';
  var tel = '';
  $('#Fname,#Lname,#description,#user_tel,#user_email').keyup(function (event) {
    Fname = $('#Fname').val();
    Lname = $('#Lname').val();
    desc = $('#description').val();
    email = $('#user_email').val();
    tel = $('#user_tel').val();
    var name = '<h1>Hi, my name is ' + Fname + ' ' + Lname + '</h1>';
    var info = '<p>' + desc + '</p>';
    var interested = '<p>If you\'re interested in a date, you can email me at <a href="mailto:' + email + 'target="_blank">' + email + '</a>';
    var interested2 = 'or give me a call at <a href="tel:' + tel + '" target="_blank">' + tel + '</a>.</p>';
    var all = name + info + interested + interested2;
    $('#preview').html(all);
    $('#raw').text(all);
  });
});
