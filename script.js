function validarFormulario() {
  const email = document.getElementById('email').value;
  if (!email.includes('@')) {
    alert('Por favor, ingrese un correo válido con "@".');
    return false;
  }
  alert('Formulario enviado correctamente.');
  return true;
}
  
  