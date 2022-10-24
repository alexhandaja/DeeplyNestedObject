
let currentQuestion = 0;
let currentScore = 0; 

let resultContainer = document.querySelector('#result-container');
const questionContainer = document.querySelector('#question-container');
const choiceContainer = document.querySelector('#choice-container');
const answerContainer = document.querySelector('#answer-container');

document.getElementById('myButton').style.visibility = "hidden";


function startQuiz(){
    document.getElementById('btn').style.visibility = "hidden";
    document.getElementById('info').style.visibility = "hidden";
   
    return endQuiz();
    

}

var questions = [
];


function endQuiz() {
    choiceContainer.innerHTML = '';
    // choiceContainer.innerHTML = 'The term Asian American is one that encompasses a wide spectrum of communities with different cultural backgrounds and experiences. Asian Americans range from East Asians, South Asians, Southeast Asians, and Pacific Islanders. Not many people are aware of the complexity behind the term. Despite it being such a big community, many of us still feel alienated or have a sense of imposter syndrome within our respective communities. This raises the question I’ve always asked myself, what does it mean to be Asian? What makes me proud to be Asian? I hope this portion of the tool helps bring a sense of comfort, community, and belonging to those that might feel lost and alone. ';
    clearInterval(timeinterval);


    questionContainer.innerHTML = 'LMAO';
   
    document.body.style.background = 'transparent';
    let retakeBtn = document.createElement('button');
    let saveBtn = document.createElement('button');
    let inputName = document.createElement('input');
    let displayResult = document.createElement('div'); 
    let displayText = document.createElement('div'); 
  
    // displayText.innerHTML = 'How would you describe your experience as an Asian American';
  
    inputName.setAttribute("placeholder", "");
    inputName.className = 'm-3 lg pt-2 pb-2';
    saveBtn.className = 'btn btn-warning custom';
    
    saveBtn.innerHTML = 'save';

    retakeBtn.className = 'btn btn-outline-dark mr-3 ml-3 mb-3';
    retakeBtn.id = "retakeButton";
    retakeBtn.innerHTML = 'Retake Quiz';
    displayResult.className = 'text-center ';
    displayResult.className = 'HK Grotesk ';


    
    displayResult.innerHTML = `You've experienced ${currentScore} out of ${questions.length} of the stereotypical Asian American experience!`;
   
    if(currentScore == questions.length) {

        
        resultContainer.appendChild(inputName);
        resultContainer.appendChild(saveBtn);
        resultContainer.appendChild(myButton);
        resultContainer.appendChild(displayResult);

        questionContainer.appendChild(displayText);

        // document.body.style.background = "url('images/giphyRight.gif')";
    } else {

        resultContainer.appendChild(inputName);
        resultContainer.appendChild(saveBtn);
        resultContainer.appendChild(myButton); 
        resultContainer.appendChild(displayResult); 

        resultContainer.appendChild(displayText);
    
        // document.body.style.background = "url('images/giphyWrong.gif')"; 
    }
   document.getElementById('myButton').style.visibility = "visible";
   
    saveBtn.addEventListener("click", function(){

  addText()

    })

    function addText (){
  
        localStorage.setItem("save",inputName.value,currentScore);
    }

}



document.addEventListener('click',function(e){
    if(e.target && e.target.id == 'retakeButton'){
        reloadApp();
     }
 });

function reloadApp(){
    window.location.reload();
}


var timeinterval;


