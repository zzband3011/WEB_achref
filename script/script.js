document.getElementById("nomhide").style.display = "none";
document.getElementById("prenomhide").style.display = "none";
document.getElementById("msghide").style.display="none";
function valider()
{ 
    const nom=document.getElementById('nom');
    const prenom=document.getElementById("prenom");
    var message=document.getElementById("msg");
    document.getElementById("nomhide").style.display = "none";
    document.getElementById("prenomhide").style.display = "none";
    document.getElementById("msghide").style.display="none";
    var k=0;
    if(nom.value.length<3)
    {
        document.getElementById("nomhide").style.display = "block";
        ++k;
    }

    if(prenom.value.length<3)
    {
        document.getElementById("prenomhide").style.display = "block";
        ++k;
    }
    if(message.value.length==0)
    {
        document.getElementById("msghide").style.display = "block";
        ++k; 
    }
    if(k==0)
    {
        alert("message envoyé avec succée");
    }
}
var x=Math.floor(Math.random() * 101);
var y=Math.floor(Math.random() * 101);
var noeud1=document.createElement("h1");
var noeud2=document.createTextNode(x);
noeud1.appendChild(noeud2);
document.getElementById("jeu").appendChild(noeud1);
var noeud3=document.createElement("h1");
var noeud4=document.createTextNode(y);
noeud3.appendChild(noeud4);
document.getElementById("jeu").appendChild(noeud3);
function somme(){
    const somme=document.getElementById('somme');
    if(somme.value==(x+y))
        alert("Bravo");
    else alert("erreur");
}
function valider(button) {
    button.style.filter = "blur(3px)";
    setTimeout(function() {
        button.style.filter = "none";
    }, 1000); }
