function Questions(question,option1,option2,option3,correctOption){
    this.Question = question,
    this.Option1 = option1,
    this.Option2 = option2,
    this.Option3 = option3,
    this.CorrectOption = correctOption
    
}
var questions = [
    new Questions("What is the correct way to declare a JavaScript variable?","var carName;","variable carName;","v carName;","var carName;"),
    new Questions("How do you write 'Hello World' in an alert box?","alertBox('Hello World');","msgBox('Hello World');","alert('Hello World');","alert('Hello World');"),
    new Questions("How do you create a function in JavaScript?","function myFunction() {}","create myFunction() {}","function:myFunction() {}","function myFunction() {}"),
    new Questions("How do you call a function named 'myFunction'?","call function myFunction();","myFunction();","call myFunction();","myFunction();"),
    new Questions("How do you add a comment in JavaScript?","<!-- This is a comment -->","// This is a comment","# This is a comment","// This is a comment"),
    new Questions("What will document.write('Hello') do in JavaScript?","Display a pop-up alert with 'Hello'"," Write 'Hello' to the HTML document","Log 'Hello' in the console"," Write 'Hello' to the HTML document"),
    new Questions("How can you detect the browser's name in JavaScript?","navigator.appName","window.browserName","navigator.browser","navigator.appName"),
    new Questions("Which operator is used to assign a value to a variable?","*","=","-","="),
    new Questions("How do you find the length of a string in JavaScript?","length(myString);","myString.length;","strlen(myString);","myString.length;"),
    new Questions("What will the following code return: Boolean(10 > 9)?","false","true","undefined","true")
]
var counter = 1;
var valueContainer = document.getElementById('valueCon')
valueContainer.innerHTML = `   <p class="fs-4 fw-bold">
                    <span class="fs-5">1.</span> ${questions[0].Question}
                </p>
                <div class="row d-flex flex-column p-2 f-6">
                    <label class="pb-2">
                        <input type="radio" name="options" value="${questions[0].Option1}" onclick="getValue(this)" >
                        ${questions[0].Option1}
                    </label>
                    <label class="pb-2">
                        <input type="radio" name="options" value="${questions[0].Option2}" onclick="getValue(this)" >
                         ${questions[0].Option2}
                    </label>
                    <label class="">
                        <input type="radio" name="options" value=" ${questions[0].Option3}" onclick="getValue(this)" >
                         ${questions[0].Option3}
                    </label>
                </div>`
var elementSave;
var valueSave = [];
// get radio value 
function getValue(element){
    elementSave = element.value
    console.log(elementSave)
    
}
getValue()
// to store the value of radio 
function valueGetPlease(){
    if (elementSave) {           
        valueSave.push(elementSave); 
        console.log(valueSave);      
    } else {
        console.log("No value to save"); 
    }
}
// changing html of code on nxt btn 
function questionValue(){
    var numberCalling = document.getElementById('numberCall')
    numberCalling.innerHTML = counter+1;  
    //console.log(document.getElementById('numberCall'))
    valueContainer.innerHTML =
    `                <p class="fs-4 fw-bold">
                    <span class="fs-5" id="numberCall2">${counter+1}.</span> ${questions[counter].Question}
                </p>
                <div class="row d-flex flex-column p-2 f-6">
                    <label class="pb-2">
                        <input type="radio" name="options" value="${questions[counter].Option1}" onclick="getValue(this)" >
                        ${questions[counter].Option1}
                    </label>
                    <label class="pb-2">
                        <input type="radio" name="options" value="${questions[counter].Option2}" onclick="getValue(this)" >
                         ${questions[counter].Option2}
                    </label>
                    <label class="">
                        <input type="radio" name="options" value="${questions[counter].Option3}" onclick="getValue(this)" >
                         ${questions[counter].Option3}
                    </label>
                </div>`


   counter++
}



var nxtBtn = document.getElementById('nextBtn')
console.log(nxtBtn)
