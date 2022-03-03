
for (let i = 2; i < 12; i++) {
  let box = document.getElementById('code' + i)
  box.classList.add('visuallyhidden');    
  box.classList.add('hidden');
}


window.addEventListener("load", function(){
  //everything is fully loaded, don't use me if you can use DOMContentLoaded
  document.getElementById("code1").style.display = "block"

  for (let i = 2; i < 12; i++) {
    let box = document.getElementById('code' + i)
    box.style.transitionDuration = "1.5s"
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

document.getElementById("submit").onclick = submitAction;

function submitAction(event)
{
    event.preventDefault();
    console.log(document.getElementById("code1").value)

    let code1 = document.getElementById("code1").value.toLowerCase()
    if (code1 == "osteospermum fruticosum") {
      document.getElementById("codeword_form").style.top = '23%'

      for (let i = 2; i < 12; i++) {
        let box = document.getElementById('code' + i)  
        box.classList.remove('hidden');
        setTimeout(function () {
          box.classList.remove('visuallyhidden');
        }, 20);
      }
  
      
  
  
      if (typeof(Storage) !== "undefined") {
          localStorage.setItem("code1", "Smith");
        } else {
          console.log("Sorry! No Web Storage support..")
        }
      return false
    }


}


