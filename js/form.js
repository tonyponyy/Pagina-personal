const scriptURL = 'https://script.google.com/macros/s/AKfycbxHWfNFhwZnhRIY5vvgzlmueo2csXuQFAQhtXzL2yJ0ByUAnOws/exec'
const form = document.forms['submit-form']

form.addEventListener('submit', e => {
  imprime_texto("Enviando mensaje...")
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => imprime_texto("Mensaje enviado, en breve recibirá una respuesta, gracias."))
    .catch(error => console.error('Error al enviar el mensaje, inténtelo más tarde.', error.message))
})

function imprime_texto(texto){
text = document.getElementById("texto_form").innerHTML =texto;
}
