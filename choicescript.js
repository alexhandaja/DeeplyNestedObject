

function future_choices() {
	
	var futureRandom = ['mau tinggal di Bali', 
						'this is your new home', 
						'its time to go home',
						'jadi org bule di indo']; 

	var randomNum = futureRandom[Math.floor(Math.random()*futureRandom.length)];
	return futureRandom[randomNum]; 
}


function response(form) { 
	var choices = []; 
	var selector = 'input[name="' + form + '[]"]';  
	var inputs = document.querySelectorAll(selector); 
	var answer;

	for (var i = 0; i < inputs.length; i++) {  
		answer = inputs[i].value; 
		if (answer !== '') { 
			choices.push(answer); 
		}
	}
	return choices[Math.floor(Math.random()*choices.length)]; 
}


function responseChoice(answers) {
	var future = document.querySelector('#future'); 
	
	var answer_1 = document.querySelector('#answer_1');
	var answer_2 = document.querySelector('#answer_2');
	var answer_3 = document.querySelector('#answer_3');
	var answer_4 = document.querySelector('#answer_4');
	

	future.innerText = answers['futureRandom'];
	answer_1.innerText = answers['answer_1'];
	answer_2.innerText = answers['answer_2'];
	answer_4.innerText = answers['answer_4'];
	answer_3.innerText = answers['answer_3'];
	
	future.innerHTML = answers.futureRandom; 
	answer_1.innerHTML = answers.answer_1;
	answer_2.innerHTML = answers.answer_2;  
	answer_3.innerHTML = answers.answer_3;
	answer_4.innerHTML = answers.answer_4;
	
}


function handle_submission(event) {
	event.preventDefault(); 
	event.stopPropagation(); 
	

	var answers = {
	    'futureRandom': future_choices(),
		'answer_1': response('answer_1'),
	    'answer_2': response('answer_2'),
	    'answer_3': response('answer_3'),
		'answer_4': response('answer_4'),
	   
	}

	responseChoice(answers);
	
	var answer_div = document.querySelector('#answers');
	answer_div.classList.add('show');
}

var form = document.querySelector('#choices');


form.addEventListener('submit', handle_submission);

