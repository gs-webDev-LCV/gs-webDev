function enviar() {
  validarCampos();
  limaparCampos();
}

function validarCampos() {
  let usuario = document.getElementById('usuario').value;
  let senha = document.getElementById('senha').value;
  if (usuario === '' || senha === '') {
    alert('Você precisa preencher os campos!');
  } else {
    alert('Seu contato foi salvo!');
  }
}

function limaparCampos() {
  document.getElementById('usuario').value = '';
  document.getElementById('senha').value = '';
}
