let user=localStorage.getItem("user")


if(user){
    let persedUser=JSON.parse(user);
    document.getElementById("js-nom").innerHTML = persedUser.name;
    document.getElementById("js-email").innerHTML = persedUser.email;
}else{
    alert("devrait être contacté");
}

document.getElementById("res").addEventListener("click",function(){
    localStorage.removeItem("user");
    window.location.href="connecter.html"
})


let select=document.getElementById("changer-memory").addEventListener("change",function(){
    let select=document.getElementById("changer-memory").value;
    document.getElementById("images-chnage").src=`ressources/${select}`;
});




document.getElementById("engesistre").addEventListener("click",function(){
    window.location.href="jouer.html";
});










