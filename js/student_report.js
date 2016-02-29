var message = '';
var student;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

for(var i = 0; i < students.length; i += 1) {
  student = students[i];
  message += '<div class="color"><h2>Name: ' + student.name + '</h2>';
  message += '<p>Track: ' + student.track + '</p>';
  message += '<p>Achievements: ' + student.achievements + '</p>';
  message += '<p>Points: ' + student.points + '</p></div>';
}

print(message);
