let questionNumber = 0;
let score = 0;
const questionSet = [
  {
  number: 1, 
  question: 'Which Bravolebrity has not had a recorded hit?',
  answer1:'Bethenny Frankel',
  answer2:'Melissa Gorga',
  answer3:'Luann De Lesseps',
  answer4:'Kim Zolciak',
  correct: 'Bethenny Frankel'
  },
{
  number:2,
  question:'Which Bravolebrity duo opened a new restaurant in West Hollywood?',
  answer1:'Shep Rose and Craig Canover',
  answer2:'Nene Leakes and Cynthia Bailey',
  answer3:'Tom Schwartz and Tom Sandoval',
  answer4: 'Vicki Gunvalson and Tamra Judge', 
  correct: 'Tom Schwartz and Tom Sandoval'
},
{
  number:3,
  question: 'Which Bravolebrity does the splits any chance she gets?',
  answer1:'Karin Huger',
  answer2:'Kyle Richards',
  answer3:'Lisa Vanderpump',
  answer4:'Patricia Altschul', 
  correct:'Kyle Richards',
},
  {
    number: 4,
    question: 'Which Bravolebrity loves wine and “Turtle Time”?',
    answer1:'Cameron Eubanks',
    answer2:'Brittany Cartwright',
    answer3:'Dorit Kemsley',
    answer4:'Ramona Singer',
    correct:'Ramona Singer'
  },
  {
  number: 5,
    question:'Which Bravolebrity is the Stud of the Sea?',
    answer1: 'Lee Rosbach',
    answer2: 'Jax Taylor',
    answer3: 'Mauricio Umansky',
    answer4: 'Ken Todd',
    correct: 'Lee Rosbach'
},
  {
    number: 6,
    question:'Which Bravolebrity is the ex wife of Charlie Sheen and newest member of Beverly Hills?',
    answer1: 'Erika Jayne',
    answer2: 'Stassi Schoeder',
    answer3: 'Denise Richards',
    answer4: 'Sonja Morgan',
    correct: 'Denise Richards'
  },
  
  {
  number:7,
    question: 'Which Bravolebrity starred in Glee as swim coach Roz Washington?',
    answer1:'Lisa Rinna',
    answer2:'Nene Leakes',
    answer3:'Kandi Burruss',
    answer4:'Camille Grammar',
    correct:'Nene Leakes'
  },
  {
    number: 8,
    question: 'Which Bravolebrity “Made it Nice”?',
    answer1:'Dorinda Medley',
    answer2:'Caroline Manzo',
    answer3:'Kate Chastain',
    answer4:'Tinsley Mortimer',
    correct:'Dorinda Medley'
  },
  {
    number: 9,
    question:'Which Bravolebrity is most famous for flipping a table in a rage?',
    answer1:'Brandi Redmond',
    answer2:'Lala Kent',
    answer3:'Shannon Bedor',
    answer4:'Teresa Guidice',
    correct:'Teresa Guidice'
  },
  {
    number: 10,
    question:'Which Bravolebrity is Gone with the Wind fablous?',
    answer1: 'LeAnne Locken',
    answer2: 'Danielle Staub',
    answer3: 'Kim Richards',
    answer4: 'Kenya Moore',
    correct: 'Kenya Moore'
  }
];


// //User selects button to start quiz
function questionForm (){ 
    if (questionNumber < questionSet.length){
      
      return `<section class="js-next-question">
          <form id="questionForm">
          <fieldset>
            <legend class="question">
              <h2>${questionSet[questionNumber].question}</h2>
            </legend>
            <label for="answer1">
            <input type="radio" name="character" id="answer1" class="answer" value= "${questionSet[questionNumber].answer1}"required>
            <span>${questionSet[questionNumber].answer1}</span></label>
            <br>
            <label for="answer2">
            <input type="radio" name="character" id="answer2" class="answer" value="${questionSet[questionNumber].answer2}" required>
            <span>${questionSet[questionNumber].answer2}</span></label>
            <br>
            <label for="answer3">
            <input type="radio" name="character" id="answer3" class="answer" value="${questionSet[questionNumber].answer3}" required>
            <span>${questionSet[questionNumber].answer3}</span></label>
            <br>
            <label for="answer4">            
            <input type="radio" name="character" id="answer4" class="answer"                       value="${questionSet[questionNumber].answer4}" required>
            <span>${questionSet[questionNumber].answer4}</span></label>
          </fieldset>
          <button type="submit" id="js-submit-button" class="button-style">submit</button>
        </form>
         </section>`;} else {
             displayScore();
           restartQuiz()}
         
};

function questionCounter(){
  if (questionNumber < 10){questionNumber++};
  $('.questionOutOf').text('question ' + questionNumber +'/10');
};
function displayQuiz(){
$('.mainContainer').html(questionForm());
};

function startQuiz() {
$(".js-startQuestion").on("click", '.js-startButton', function(){
  $('.js-startQuestion').remove();
  displayQuiz();
  questionCounter();
  answerSelect();
}
)
};


function displayNext(){
  displayQuiz();
};

function answerSelect (){
  $('form').submit('#js-submit-button', function (event){
    event.preventDefault();
    // $('.js-next-question').remove();
  // let userSelected = $('input[name=character]:checked', 'form').val();
  // let userAnswer = userSelected.val();
    const answer = $('input[name=character]:checked', "#questionForm");
    let userAnswer = answer[0].defaultValue;
    let correctAnswer = `${questionSet[questionNumber-1].correct}`;
    $('.js-next-question').remove();
    if (userAnswer === correctAnswer){
   correctPage();
   scoreIncrement();
} else {
   incorrectPage();
}
});
};


function correctPage(){
  // let correctAnswer = `${questionSet[questionNumber-1].correct}`;
  $('.mainContainer').html(`<div class="js-correct-container">
          <h2>You are a genius!</h2>
          <img src="https://media3.giphy.com/media/xTiTnnsR18wkTg2ZkA/giphy.gif?cid=790b76115ce9eb19514c494d67e8dc8b&rid=giphy.gif" alt="Andy Cohen high-fiving">
          <br>
          <button id="js-next-button" class="button-style">Next</button>
        </div>`);
};
  
function incorrectPage(){
    $('.mainContainer').html(`<div class="js-incorrect-container">
          <h2>Not even close!</h2>
          <img src="https://media3.giphy.com/media/5fwtc4AI3TYNW/giphy.gif?cid=790b76115ce9eb19514c494d67e8dc8b&rid=giphy.gif" alt="Andy Cohen shaking head">
          <br>
          <button id="js-next-button" class="button-style">Next</button>
        </div>`);
};

// function ifRight(){
//   correctPage();
// };

// function ifWrong(){
//   incorrectPage();
// };

function renderNextQuestion () {
  $('.mainContainer').on('click', '#js-next-button', function (event) {
   displayNext();
   questionCounter();
   answerSelect(); 
  });
};

function scoreIncrement(){
  score++;
  $('.totalScore').text('total: ' + score);

};

function displayScore(){
$('.mainContainer').html(`<section class="js-final-score" role="main">
        <h2>Your Bravolebrity Quiz is over<br> Total Score:  ${score} </h2>
        <button id="js-play-again" class="button-style">Play Again</button>
      </section>`)
};

function restartQuiz(){
$('.mainContainer').on('click', '#js-play-again', function (event){
    location.reload();
})
};

function createQuiz(){
startQuiz();
answerSelect();
renderNextQuestion();
};

createQuiz();




