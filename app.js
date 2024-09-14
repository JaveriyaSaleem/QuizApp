var questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        // Incorrect option names
        option1: 'scprit',  // Typo here
        option2: 'javascrip', // Typo here
        option3: 'js',
        correctOption: 'script',  // Corrected option
    },
    {
        question: 'Where is the correct place to insert a JavaScript?',
        option1: 'The <head> section',
        option2: 'The <body> section',
        option3: 'Both the <head> and "body" section are correct',
        correctOption: 'The <body> section',
    },
    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        // Incorrect option names
        option1: 'scripr href="xxx.js"', // Typo here
        option2: 'scripr name="xxx.js"', // Typo here
        option3: 'scripr src="xxx.js"',   // Typo here
        correctOption: 'script src="xxx.js"',  // Corrected option
    } 
];

var mainDivVar = document.getElementById('questionBox');
var nxtBtn = document.getElementById('Next');
var elemntValue = ""
var index = 0;

function showQuestions() {
    if (index < questions.length) {
        mainDivVar.innerHTML = 
            `<p>${questions[index].question}</p>
            <label>
                <input type="radio" name="options" value="${questions[index].option1}" onclick="getValue(this)" checked>
                ${questions[index].option1}
            </label>
            <label>
                <input type="radio" name="options" value="${questions[index].option2}" onclick="getValue(this)">
                ${questions[index].option2}
            </label>
            <label>
                <input type="radio" name="options" value="${questions[index].option3}" onclick="getValue(this)">
                ${questions[index].option3}
            </label>`
        ;
        index++;
    } else {
        mainDivVar.innerHTML = "<p>Quiz completed!</p>";
    }
}

function getValue(element) {
   
    // console.log(element.value); 
    elemntValue = element.value;
    console.log(elemntValue) // Correct way to get the selected value
    if(elemntValue!= ""){
        nxtBtn.disabled = false
        elemntValue += element.value
    }

}

// Call the function to show the first question
showQuestions();