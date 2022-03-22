code_level = parseInt(localStorage.getItem('code_level'))
console.log(code_level)

if (isNaN(code_level)){
  for (let i = 2; i < 13; i++) {
    code_str = 'code' + i
    let box = document.getElementById(code_str)
    box.classList.add('visuallyhidden');    
    box.classList.add('hidden');
  }
} else {
  document.getElementById("codeword_form").style.top = '5%'

  for (let i = 1; i < code_level+1; i++) {
    code_str = 'code' + i
    let box = document.getElementById(code_str)
    code = localStorage.getItem(code_str)
    box.value = code
    box.disabled = true
    box.style.textDecoration = 'line-through'
  }
}

window.addEventListener("load", function(){
  //everything is fully loaded, don't use me if you can use DOMContentLoaded
  document.getElementById("code1").oninput = code1func
  document.getElementById("submit").onclick = disableSubmit

  document.getElementById("code1").style.display = "block"

  for (let i = 2; i < 12; i++) {
    let box = document.getElementById('code' + i)
    box.style.transitionDuration = "1.5s"
    box.oninput = codex_func
  }

});  

function playWaltz() {
  var sound = document.getElementById("audio");
  sound.play();
  document.body.style.animationPlayState = "running";
  document.getElementById("moon").style.animationPlayState = "running";
  document.getElementById("moonflip").style.animationPlayState = "running";
  document.getElementById("sun").style.animationPlayState = "running";
}

function disableSubmit(event){event.preventDefault();}

function code1func(event){
  event.preventDefault()
  // console.log(document.getElementById("code1").value)

  code1_element = document.getElementById("code1")
  let code1 = code1_element.value.toLowerCase()
  if (code1 == "code1") {
    document.getElementById("codeword_form").style.top = '5%'

    localStorage.setItem('code_level', 1)
    localStorage.setItem('code1', 'code1')
    localStorage.setItem('user', 'user_' + Date.now().toString())

    for (let i = 2; i < 13; i++) {
      let box = document.getElementById('code' + i)  
      box.classList.remove('hidden');
      setTimeout(function () {
        box.classList.remove('visuallyhidden');
      }, 20);
    }

    code1_element.disabled = true
    code1_element.style.textDecoration = 'line-through'
    sendEmail(event.target.value)
  }
}

function sendEmail(code_str) {
  let user = localStorage.getItem("user")
  Email.send({
    Host: "smtp.gmail.com",
    Username: "feelsabound@gmail.com",
    Password: "f33ls@bound",
    To: 'arielja87@gmail.com',
    From: "feelsabound@gmail.com",
    Subject: "A code has been entered",
    Body: user + " entered: " + code_str
  });
    // .then(function (message) {
    //   alert("mail sent successfully")
    // });
}

function codex_func(event){
  code_name = event.target.id
  switch (code_name) {
    case 'code2':
      if (event.target.value.toLowerCase() == 'code2'){
        localStorage.setItem('code_level', 2)
        localStorage.setItem('code2', 'code2')
        event.target.disabled = true
        event.target.style.textDecoration = 'line-through'
        sendEmail(event.target.value)
      }
      break;
    case 'code3':
      if (event.target.value.toLowerCase() == 'code3'){
        localStorage.setItem('code_level', 3)
        localStorage.setItem('code3', 'code3')
        event.target.disabled = true
        event.target.style.textDecoration = 'line-through'
        sendEmail(event.target.value)
      }
      break;
    case 'code4':
      if (event.target.value.toLowerCase() == 'code4'){
        localStorage.setItem('code_level', 4)
        localStorage.setItem('code4', 'code4')
        event.target.disabled = true
        event.target.style.textDecoration = 'line-through'
        sendEmail(event.target.value)
      }
      break;
    case 'code5':
      if (event.target.value.toLowerCase() == 'code5'){
        localStorage.setItem('code_level', 5)
        localStorage.setItem('code5', 'code5')
        event.target.disabled = true
        event.target.style.textDecoration = 'line-through'
        sendEmail(event.target.value)
      }
      break;
    case 'code6':
      if (event.target.value.toLowerCase() == 'code6'){
        localStorage.setItem('code_level', 6)
        localStorage.setItem('code6', 'code6')
        event.target.disabled = true
        event.target.style.textDecoration = 'line-through'
        sendEmail(event.target.value)
      }
      break;
    case 'code7':
      if (event.target.value.toLowerCase() == 'code7'){
        localStorage.setItem('code_level', 7)
        localStorage.setItem('code7', 'code7')
        event.target.disabled = true
        event.target.style.textDecoration = 'line-through'
        sendEmail(event.target.value)
      }
      break;
    case 'code8':
      if (event.target.value.toLowerCase() == 'code8'){
        localStorage.setItem('code_level', 8)
        localStorage.setItem('code8', 'code8')
        event.target.disabled = true
        event.target.style.textDecoration = 'line-through'
        sendEmail(event.target.value)
      }
      break;
    case 'code9':
      if (event.target.value.toLowerCase() == 'code9'){
        localStorage.setItem('code_level', 9)
        localStorage.setItem('code9', 'code9')
        event.target.disabled = true
        event.target.style.textDecoration = 'line-through'
        sendEmail(event.target.value)
      }
      break;
    case 'code10':
      if (event.target.value.toLowerCase() == 'code10'){
        localStorage.setItem('code_level', 10)
        localStorage.setItem('code10', 'code10')
        event.target.disabled = true
        event.target.style.textDecoration = 'line-through'
        sendEmail(event.target.value)
      }
      break;
    case 'code11':
      if (event.target.value.toLowerCase() == 'code11'){
        localStorage.setItem('code_level', 11)
        localStorage.setItem('code11', 'code11')
        event.target.disabled = true
        event.target.style.textDecoration = 'line-through'
        sendEmail(event.target.value)
      }
      break;
    case 'code12':
      if (event.target.value.toLowerCase() == 'code12'){
        localStorage.setItem('code_level', 12)
        localStorage.setItem('code12', 'code12')
        event.target.disabled = true
        event.target.style.textDecoration = 'line-through'
        sendEmail(event.target.value)
      }
      break;
  }
}

