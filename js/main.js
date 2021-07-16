const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  // impede que a página atualize
  e.preventDefault();

  // pega o valor que for inserido no input
  let name = document.querySelector("#nome").value;
  let email = document.querySelector("#email").value;

  // guarda no localStorage
  let data = { name, email };

  // guardando no localStorage e transformando em string
  localStorage.setItem("pessoa", JSON.stringify(data));

  //resgatando os dados do localStorage
  let dataString = localStorage.getItem("pessoa");

  // transformando os dados em objetos que podem ser acessados
  let dataObj = JSON.parse(dataString);

  // mostrando o nome e o email na tela
  let blocoEmail = document.querySelector(".get-email");
  blocoEmail.innerHTML = `<p>${dataObj.name}, <br />sending exclusive prices<br /> to ${dataObj.email}</p>`;

  // função para alterar o estilo do bloco
  function alterarEstiloBloc(blocoEmail) {
    blocoEmail.style.fontSize = "15px";
    blocoEmail.style.border = "1px solid #f9b3f9";
  }
  alterarEstiloBloc(blocoEmail);
});
