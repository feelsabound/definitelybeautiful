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

    document.getElementById("codeword_form").style.top = '23%'


    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("code1", "Smith");
      } else {
        // Sorry! No Web Storage support..
      }
    return false
}


