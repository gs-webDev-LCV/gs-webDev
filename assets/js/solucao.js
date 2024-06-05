function solucaoCliente() {
  input = document.getElementById("solucao-cliente").value;

  if (input === "") {
    alert("Por favor para enviar você precisa escrever sua solução!");
  } else {
    alert("Muito obrigado por compartilhar sua solução conosco!");
  }

  document.getElementById("solucao-cliente").value = "";
}
