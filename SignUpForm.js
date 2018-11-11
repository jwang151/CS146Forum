var x;
var user;
var bool;
document.getElementById("maker").addEventListener("mouseover", runForIt);
document.getElementById("maker").addEventListener("click", clickd)

function clickd(){
  document.getElementById("selecti").classList.add('cool');
}

function runForIt(){
    document.getElementById("maker").style.left=((Math.random()*200)+200)+"px";
    document.getElementById("maker").style.top=((Math.random()*200)+200)+"px";
}
function Sub(){
    var major= document.getElementById("Major");
    if(bool)
        {
           
            var x=document.createTextNode("thank you " + document.getElementById("user").value);           
            var r=document.createElement('img');
            r.src='https://d30y9cdsu7xlg0.cloudfront.net/png/114472-200.png';
            document.body.appendChild(r);
            document.body.replaceChild(x,document.getElementById("selecti"));
            
             document.getElementById("selecti").style.fontSize="30px";
         
            
        }
    else
        {
            alert("Your Password and Confirm Password don't match.");
        }
   
}
function check() {
   document.getElementById("maker").addEventListener("mouseover", runForIt);
  if (document.getElementById('password').value == document.getElementById('confirm_password').value) {
      bool=true;
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').innerHTML = 'matching';
  } else {
      bool=false;
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerHTML = 'not matching';
  }
}


