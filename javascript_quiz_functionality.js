
//finished quiz function

function finishedQuiz() {

  var score = 0;

  var radios = document.getElementsByName('question1');
  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {

      var element = document.getElementsByName("question1")[i].id;

      if (element == "answer") {
        document.getElementById("A1").style.backgroundColor = "green";
        score++;
      } else {
        document.getElementById("A1").style.backgroundColor = "red";
      }
    }
  }



  var radios = document.getElementsByName('question2');
  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {

      var element = document.getElementsByName("question2")[i].id;

      if (element == "answer") {
        document.getElementById("A2").style.backgroundColor = "green";
        score++;
      } else {
        document.getElementById("A2").style.backgroundColor = "red";
      }
    }
  }


  var radios = document.getElementsByName('question3');
  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {

      var element = document.getElementsByName("question3")[i].id;

      if (element == "answer") {
        document.getElementById("A3").style.backgroundColor = "green";
        score++;
      } else {
        document.getElementById("A3").style.backgroundColor = "red";
      }
    }
  }


  var radios = document.getElementsByName('question4');
  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {

      var element = document.getElementsByName("question4")[i].id;

      if (element == "answer") {
        document.getElementById("A4").style.backgroundColor = "green";
        score++;
      } else {
        document.getElementById("A4").style.backgroundColor = "red";
      }
    }
  }



  var radios = document.getElementsByName('question5');
  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {

      var element = document.getElementsByName("question5")[i].id;

      if (element == "answer") {
        document.getElementById("D5").style.backgroundColor = "green";
        score++;
      } else {
        document.getElementById("D5").style.backgroundColor = "red";
      }
    }
  }




  var radios = document.getElementsByName('question6');
  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {

      var element = document.getElementsByName("question6")[i].id;

      if (element == "answer") {
        document.getElementById("C6").style.backgroundColor = "green";
        score++;
      } else {
        document.getElementById("C6").style.backgroundColor = "red";
      }
    }
  }


  var radios = document.getElementsByName('question7');
  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {

      var element = document.getElementsByName("question7")[i].id;

      if (element == "answer") {
        document.getElementById("C7").style.backgroundColor = "green";
        score++;
      } else {
        document.getElementById("C7").style.backgroundColor = "red";
      }
    }
  }


  var radios = document.getElementsByName('question8');
  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {

      var element = document.getElementsByName("question8")[i].id;

      if (element == "answer") {
        document.getElementById("B8").style.backgroundColor = "green";
        score++;
      } else {
        document.getElementById("B8").style.backgroundColor = "red";
      }
    }
  }


  var radios = document.getElementsByName('question9');
  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {

      var element = document.getElementsByName("question9")[i].id;

      if (element == "answer") {
        document.getElementById("D9").style.backgroundColor = "green";
        score++;
      } else {
        document.getElementById("D9").style.backgroundColor = "red";
      }
    }
  }


  var radios = document.getElementsByName('question10');
  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {

      var element = document.getElementsByName("question10")[i].id;

      if (element == "answer") {
        document.getElementById("D10").style.backgroundColor = "green";
        score++;
      } else {
        document.getElementById("D10").style.backgroundColor = "red";
      }
    }
  }


  alert("You're score is " + score +"/10");

}




// reset quiz function


function resetQuiz() {

  var radios = document.getElementsByName('question1');
  for (var i = 0, length = radios.length; i < length; i++) {
    radios[i].checked = false;
    score = 0;
    document.getElementById("A1").style.backgroundColor = "white";
  }

  var radios = document.getElementsByName('question2');
  for (var i = 0, length = radios.length; i < length; i++) {
    radios[i].checked = false;
    score = 0;
    document.getElementById("A2").style.backgroundColor = "white";
  }

  var radios = document.getElementsByName('question3');
  for (var i = 0, length = radios.length; i < length; i++) {
    radios[i].checked = false;
    score = 0;
    document.getElementById("A3").style.backgroundColor = "white";
  }

  var radios = document.getElementsByName('question4');
  for (var i = 0, length = radios.length; i < length; i++) {
    radios[i].checked = false;
    score = 0;
    document.getElementById("A4").style.backgroundColor = "white";
  }

  var radios = document.getElementsByName('question5');
  for (var i = 0, length = radios.length; i < length; i++) {
    radios[i].checked = false;
    score = 0;
    document.getElementById("D5").style.backgroundColor = "white";
  }

  var radios = document.getElementsByName('question6');
  for (var i = 0, length = radios.length; i < length; i++) {
    radios[i].checked = false;
    score = 0;
    document.getElementById("C6").style.backgroundColor = "white";
  }

  var radios = document.getElementsByName('question7');
  for (var i = 0, length = radios.length; i < length; i++) {
    radios[i].checked = false;
    score = 0;
    document.getElementById("C7").style.backgroundColor = "white";
  }

  var radios = document.getElementsByName('question8');
  for (var i = 0, length = radios.length; i < length; i++) {
    radios[i].checked = false;
    score = 0;
    document.getElementById("B8").style.backgroundColor = "white";
  }

  var radios = document.getElementsByName('question9');
  for (var i = 0, length = radios.length; i < length; i++) {
    radios[i].checked = false;
    score = 0;
    document.getElementById("D9").style.backgroundColor = "white";

  }

  var radios = document.getElementsByName('question10');
  for (var i = 0, length = radios.length; i < length; i++) {
    radios[i].checked = false;
    score = 0;
    document.getElementById("D10").style.backgroundColor = "white";
  }
}
