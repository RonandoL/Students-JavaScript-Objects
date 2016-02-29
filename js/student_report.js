var message = '';
var student;
var userInput; // user is prompted to enter student name

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function getStudentReport(student) {
  var report = '<div class="color"><h2>Name: ' + student.name + '</h2>';
  report += '<p>Track: ' + student.track + '</p>';
  report += '<p>Achievements: ' + student.achievements + '</p>';
  report += '<p>Points: ' + student.points + '</p></div>';
  return report;
}

while (true) {
  userInput = prompt("enter name or type 'quit' to stop searches.");
  if (userInput === null || userInput.toLowerCase() === 'quit') {
    break;
  }
  for(var i = 0; i < students.length; i += 1) {
    student = students[i];
    if (userInput.toLowerCase() === student.name) {
      message = getStudentReport(student);
      print(message);
    }
  }
}
