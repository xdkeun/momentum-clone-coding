const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function onLoginSubmit(event){
    event.preventDefault(); // 브라우저의 기본 동작을 막아줌
    console.log(loginInput.value);
    // if (!username){
    //     alert("please write your name");
    // }
    // else if(username.length > 15){
    //     alert("your name is too long")
    // }
    // else{
    //     alert("hello " + username + "!");
    // }
}

loginForm.addEventListener("submit", onLoginSubmit);