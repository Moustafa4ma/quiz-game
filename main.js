let questions=[
    q1={question:"which team won the world cup 2006 ?",answers:["brazil","spain","italy","england"],rightAns:"italy",},
    q2={question:"who is the founder of space x ?",answers:["stephe jobs","elon musk","mark zuckerburg","bill gates"],rightAns:"elon musk",},
    q3={question:"what is the temperature of the sun ?",answers:["100 million celsius","20 million celsius","50 million celsius","15 million celsius"],rightAns:"15 million celsius",},
    q4={question:"which city is called the city of fog ?",answers:["london","paris","cairo","newyork"],rightAns:"london",},
    q5={question:"what is the capital of georgia ?",answers:["Athens","Atlanta","Roswell","Macon"],rightAns:"Atlanta",},
    q6={question:"What is the fastest land animal ?",answers:["tiger","kangaroo","cheetah","lion"],rightAns:"cheetah",},
    q7={question:"what is the longest river in the world ?",answers:["amazon river","nile river","congo river","yellow river"],rightAns:"nile river",},
    q8={question:"how long is the great wall of china ?",answers:["21,196 km","40,583 km","12,453 km","56,251 km"],rightAns:"21,196 km",},
    q9={question:"where was the first olympic game start ?",answers:["france","england","germany","greece"],rightAns:"greece",},
    q10={question:"what does black gold refers to ?",answers:["coal","petroleum","chocolate","cotton"],rightAns:"petroleum",}

]

let answerSec=Array.from(document.querySelectorAll(".answer"))
console.log(answerSec)

let myq=document.querySelector(".question")

let qSec=document.querySelector(".q")

let btns=document.querySelector(".btns")

let nextbtn=document.getElementById("next")

let qnum=document.querySelector(".num")


let score=0;

i=0

qnum.innerHTML=i+1+" / "+questions.length




myq.innerHTML=questions[i].question
for(j=0;j<questions[i].answers.length;j++){
    answerSec[j].innerHTML=questions[i].answers[j]
}

function next(){
  
    if(i<questions.length-1){
        i++
        qnum.innerHTML=i+1+" / "+questions.length
        myq.innerHTML=questions[i].question
    for(j=0;j<questions[i].answers.length;j++){
        answerSec[j].innerHTML=questions[i].answers[j]
        answerSec[j].style.background="#eee"
        answerSec[j].style.color="black"
    }
    }
    else{
        qSec.innerHTML=" "
        qSec.style.display="flex"
        qSec.classList.add("last")
        let end=document.createElement("h1")
        let again=document.createElement("button")
        again.innerHTML="play agian"
        again.classList.add("again")
        again.onclick=function(){window.location.reload()}
        end.classList.add("end")
        end.innerHTML="your score is "+score +" out of "+questions.length
        qSec.appendChild(end)
        qSec.appendChild(again)
    }
}




for(j=0;j<questions[i].answers.length;j++){
    answerSec[j].onclick=function(eve){
     if(this.innerHTML==questions[i].rightAns){
        this.style.background="#43d114"
        this.style.color="white"
        setTimeout(function(){nextbtn.click()},500)
        score+=1;
     }
     else{
        this.style.background="#ff2323"
        this.style.color="white"
        setTimeout(function(){nextbtn.click()},500)
     }
    
    }
}
