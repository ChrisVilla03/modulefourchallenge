const questions = [
    {
      question: "What is created using HTML?",
      options: ["Games", "Websites", "Cheeseburgers"],
      answer: "Websites"
    },
    {
      question: "What do you call the type of file used in styling?",
      options: ["stylesheet", "colorboard", "pen tool"],
      answer: "stylesheet"
    },
    {
      question: "What coding language allows you to add logic to your website?",
      options: ["C++", "JavaScript", "Assembly"],
      answer: "JavaScript"
    }

  ];

  let currentQuestion = 0;
  let score = 0;
  let timeLeft = 60;
  let timerInterval;

  function startTimer() {
    timerInterval = setInterval(function() {
      timeLeft--;
      document.getElementById("timer").textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        document.getElementById("next-btn").disabled = true;
        alert("Time's up!");
      }
    }, 1000);
  }

  function displayQuestion() {
    document.getElementById("question").textContent = questions[currentQuestion].question;
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";
    questions[currentQuestion].options.forEach(option => {
      const button = document.createElement("button");
      button.textContent = option;
      button.onclick = function() {
        checkAnswer(option);
        subTimer(option);
      };
      optionsContainer.appendChild(button);
    });
  }

  function checkAnswer(selectedOption) {
    if (selectedOption === questions[currentQuestion].answer) {
      score++;
      document.getElementById("score").textContent = score;
    }
  }

  function subTimer(selectedOption) {
    if (selectedOption !== questions[currentQuestion].answer) {
        timeLeft = timeLeft - 10;
    }
  }

  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length + 1) {
      displayQuestion();
    } else {
      clearInterval(timerInterval);
      document.getElementById("next-btn").disabled = true;
      alert("Quiz completed! Your score: " + score);
    }
  }

  startTimer();
  displayQuestion();