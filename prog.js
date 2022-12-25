
var mdp = document.getElementById('mdp').focus();
var mdp = document.getElementById('mdp');
var inputee = document.getElementById('text').focus();
var inpute = document.getElementById('text');
var inputearea= document.getElementById('textarea');
var application = document.querySelector('.app');
var ami =document.querySelector('#ami');
var tab=[];

mdp.addEventListener('input',(e)=>{
    
    if(e.target.value==="879522"){
        application.style.display="block"
    }

    
})
inpute.addEventListener('input', (e)=>{
    var m = e.target.value;
    if(m[0].includes("*")===true){
        document.querySelector('#ami').value="mr";
        
       
    }else{
        document.querySelector('#ami').value="madame";
        
        
    }
    
    document.addEventListener('keypress', (e)=>{
        if(e.key==='Enter'){
            inputearea.value=m;
            document.getElementById('nombre').textContent=1;
            document.querySelector('#ami').style.opacity=1;
            document.querySelector('#profil').style.opacity=1;
            document.querySelector('.affichage').style.opacity=1;
            document.querySelector('#nombre').style.opacity=1;
            ami.value==="madame" ?document.getElementById('nom').textContent="Amel":document.getElementById('nom').textContent="Hillal";
            ami.value==="madame" ?document.getElementById('profil').src= "./hana.jpeg":document.getElementById('profil').src= "./hil.jpg"
            ami.value==="madame" ?document.querySelector('#nombre').style.background='red':document.querySelector('#nombre').style.background='blue';
            if(ami.value==="mr"){
                document.getElementById('nom').style.color="blue";
                document.getElementById('heure').style.color="blue";
                document.getElementById('textarea').style.color="blue"
                document.getElementById('textarea').style.background="rgba(255, 255, 255, 0.699)";
                document.getElementById('nom').style.background="rgba(255, 255, 255, 0.699)";
                document.getElementById('heure').style.background="rgba(255, 255, 255, 0.699)";
                document.getElementById('nombre').textContent=1;
                document.querySelector('#profil').style.opacity=1;
                document.querySelector('#nombre').style.opacity=1;
            }
            else{
                document.getElementById('nom').style.color="whitesmoke";
                document.getElementById('heure').style.color="whitesmoke";
                document.getElementById('textarea').style.color="whitesmoke"
                document.getElementById('textarea').style.background="rgba(27, 26, 26, 0.425)";
                document.getElementById('nom').style.background="rgba(27, 26, 26, 0.425)";
                document.getElementById('heure').style.background="rgba(27, 26, 26, 0.425)";
        
            }
            document.getElementById('heure').textContent=heure;
                inpute.value="";
                ring()
                document.getElementById('text').focus();
            }
            
            
        })
        btn.addEventListener('click', ()=>{
            if(ami.value==="madame"){
                inputearea.value=m;
                document.querySelector('#nombre').style.background='red';
                document.querySelector('.affichage').style.opacity=1;
                 document.querySelector('#ami').style.opacity=1;
                 document.querySelector('#profil').style.opacity=1;
                document.querySelector('#nombre').style.opacity=1;
                document.getElementById('nom').textContent="Amel";
                document.getElementById('heure').textContent=heure;
                document.getElementById('nombre').textContent=1;
                document.getElementById('profil').src="./hana.jpeg"
            

                document.getElementById('nom').style.color="whitesmoke";
        document.getElementById('heure').style.color="whitesmoke";
        document.getElementById('textarea').style.color="whitesmoke"
        document.getElementById('textarea').style.background="rgba(27, 26, 26, 0.425)";
        document.getElementById('nom').style.background="rgba(27, 26, 26, 0.425)";
        document.getElementById('heure').style.background="rgba(27, 26, 26, 0.425)";

            
        }else{
            inputearea.value=m;
            document.getElementById('profil').src="./hil.jpg"
            document.querySelector('#nombre').style.opacity=1;
            document.querySelector('#nombre').style.background='blue';
            document.getElementById('nombre').textContent=1;
            document.querySelector('#profil').style.opacity=1;
            document.querySelector('.affichage').style.opacity=1;
            document.getElementById('nom').textContent="Hillal";
            document.getElementById('heure').textContent=heure;
            document.getElementById('nom').style.color="blue";
            document.getElementById('heure').style.color="blue";
            document.getElementById('textarea').style.color="blue"
            document.getElementById('textarea').style.background="rgba(255, 255, 255, 0.699)";
            document.getElementById('nom').style.background="rgba(255, 255, 255, 0.699)";
            document.getElementById('heure').style.background="rgba(255, 255, 255, 0.699)";
            
           
        }
        inpute.value="";
        ring()
        document.getElementById('text').focus();

    })
 
})
           

    
var date = new Date();
var date1=date.toLocaleDateString("fr-FR", {
    weekday:"short",
    hour:"numeric",
    minute:"numeric"
})

var heure =(date1.split(".").slice(1).join(""));
var date2=date.toLocaleDateString("fr-FR", {
    year:"numeric",
    month:"short",
    day:"numeric",
    weekday:"short",
    hour:"numeric",
    minute:"numeric"
})
document.getElementById('jour').textContent=date2;
function ring(){
    var audio = new Audio();
    audio.src="./bip.mp3";
    audio.play();
}
//-----------------
function lire(){
document.querySelector('h2').style.display="none"
document.querySelector('#profil').style.display="none"
document.querySelector('#nombre').style.display="none"
document.querySelector('#jour').style.display="none"
    var filinpute = document.getElementById('fil').files;
    var imageinput = document.getElementById('image')
if(filinpute.length>0){
    var lir = new FileReader();
    lir.onload= function (e){
        document.getElementById('image').setAttribute('src', e.target.result)
    }
    lir.readAsDataURL(filinpute[0])
    var arret = setInterval(compter,1000)
    var debut = 60;
function compter(){
   debut--;
    document.getElementById('compteur').textContent=debut;  
    if(debut<0){
        clearInterval(arret)
    document.getElementById('compteur').textContent=""; 
        }
}
    setTimeout(() => {
        document.getElementById('image').src="";
   document.getElementById('fil').value=""; 
   document.getElementById('fil').src=""; 
   document.getElementById('fil').length=0; 
   lir.onload="";
document.querySelector('h2').style.display="block"
document.querySelector('#profil').style.display="block"
document.querySelector('#nombre').style.display="block"
document.querySelector('#jour').style.display="block"

}, 60000);
}
}


//------chrono----------


