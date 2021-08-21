
let questions = [
    {
      id: 1,
      question: "What is the full form of RAM ?",
      answer: "Random Access Memory",
      options: [
        "Random Access Memory",
        "Randomely Access Memory",
        "Run Aceapt Memory",
        "None of these"
      ]
    },
    {
      id: 2,
      question: "What is the full form of CPU?",
      answer: "Central Processing Unit",
      options: [
        "Central Program Unit",
        "Central Processing Unit",
        "Central Preload Unit",
        "None of these"
      ]
    },
    {
      id: 3,
      question: "What is the full form of E-mail",
      answer: "Electronic Mail",
      options: [
        "Electronic Mail",
        "Electric Mail",
        "Engine Mail",
        "None of these"
      ]
    },{
        id: 4,
        question: "What is your national Game",
        answer: "Hockey",
        options: [
          "Football",
          "Cricket",
          "Hockey",
          "Tennis"
        ]
      },
      {
        id: 5,
        question: "What is your country name?",
        answer: "Pakistan",
        options: [
          "Turkey",
          "Malaysia",
          "America",
          "Pakistan"
        ]
      }

  ];

let show=(e)=>{
    var que=document.getElementById('que')
        que.innerHTML=questions[e].question;

        var option=document.getElementsByTagName('p')
        // console.log(option);
        for(var i=0; i<option.length; i++){
            option[i].innerHTML=questions[e].options[i]
        }

}
var count=0;
var point=0;

let next=()=>{
result(count);
count++;
removeActiveClass()
if(count == questions.length)
{
    window.location.href="index.html"
}
show(count)
}

let activeClass =(e)=>{
 removeActiveClass()
e.classList.add("active")
} 

let removeActiveClass=()=>{
  var active =document.getElementsByClassName("active")
  for(var i=0; i<active.length; i++){
    active[i].classList.remove("active")
  }
}
function result(e){
  var active= document.getElementsByClassName("active")
  // console.log(active[0].innerHTML)
    if(active[0].innerHTML == questions[e].answer){
       point +=10
      console.log(point)
      localStorage.setItem("point",point)
      alert(point)
    
  }
}
var a= localStorage.getItem("point")
// console.log(a);



let signup = () => {
    var email = document.getElementById('email').value
    var password = document.getElementById('pass').value
    // console.log(email,password)
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((data) => {
            console.log(data)
          window.location.href='signin.html'
        })
        .catch((error) => {
            var errorMessage = error.message;
            console.log(errorMessage)
        });
}

let signIn=()=>{
    var email=document.getElementById('email-signIn').value
    var password=document.getElementById('pass-signIn').value
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((data) => {
        console.log(data)
        window.location.href='quiz.html'
        
    })
    .catch((error) => {
      var errorMessage = error.message;
      console.log(errorMessage)
    });

}

let login=()=>{
  var provider = new firebase.auth.FacebookAuthProvider();
  firebase
.auth()
.signInWithPopup(provider)
.then((result) => {

  var user = result.user;
console.log(user)
var name = user.displayName
console.log(name)
let obj ={
  name,
}
firebase.database().ref('quiz').push(obj)
window.location.href="quiz.html"
var nam=document.getElementById('nam').innerHTML = name
console.log(nam);

})
.catch((error) => {
  var errorMessage = error.message;
 console.log(errorMessage)
});
}

 let da=()=>{
  firebase.database().ref('quiz').on('child_added',function(data){
    console.log(data.val())
  })
 }

  function start() {
  var minute = 4;
  var sec = 60;
  setInterval(function() {
    document.getElementById("timer").innerHTML = minute + " : " + sec;
    sec--;
    if (sec == 00) {
      minute --;
      sec = 60;
      if (minute == 0) {
        minute = 5;
      }
    }
  }, 1000);
}