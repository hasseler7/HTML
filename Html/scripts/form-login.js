  // document.querySelector("button").addEventListener("click",validarLogin);
  function validarLogin() {
      let login = document.querySelector("#login").value;
      console.log(login);
      let senha = document.querySelector("#senha").value;
      console.log(senha);

       let msg = document.querySelector("span");
      
     
//se login = senai e senha =010203
//entao acesso permitido
//senao Login ou senha incorretos!

if (login=="senai" && senha == "123") {
msg.innerHTML = "Acesso Permitido! <a href='index.html> Clique aqui</a";
msg.style = "background-color: green;"
window.location.href = "index.html";
} else {
msg.innerText = "Login ou senha incorretos!";
msg.style = "background-color: red;"
}

return false;
  }