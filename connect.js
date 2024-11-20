let btn=document.getElementById("btn-sub").addEventListener("click",function(){
    valideLogin();
})


let login=document.getElementById("formConecter").addEventListener("submit",function(e){

    valideLogin(e)
    
    // e.preventDefault();

    // let loginEmail=document.getElementById("email");
    // let loginmdp=document.getElementById("mot-de-passe");

    // let user=localStorage.getItem(loginEmail);

    // if(user){
    //     let persedUser=JSON.parse(user);
    //     if(persedUser.loginmdp === loginmdp){
    //         localStorage.setItem("user",JSON.stringify(persedUser));
    //         alert("sacsees login");
    //     } else{
    //         alert("Incorrect password");
    //     }
    // }else{
    //     alert("User not found");
    // }
})
function valideLogin(e){
    e.preventDefault();

    let email=document.getElementById("email").value;
    let mdp=document.getElementById("mot-de-passe").value;

    let user=localStorage.getItem(email);

    if(user){
        let persedUser=JSON.parse(user);
        if(persedUser.mdp === mdp){
            localStorage.setItem("user",JSON.stringify(persedUser));
            window.location.href="profil.html"
        } else{
            alert("Incorrect password");
        }
    }else{
        alert("User not found");
    }
}