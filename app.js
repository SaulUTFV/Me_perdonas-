const btnSi = document.getElementById('btnSi');
const btnNo = document.getElementById('btnNo');
const messageFinal = document.getElementById('message_final');

btnNo.addEventListener('click', () => {
    // Aumentar el tamaño del botón de Sí al hacer clic en el botón de No
    btnSi.style.fontSize = (parseFloat(window.getComputedStyle(btnSi).fontSize) * 1.5) + 'px';
});

btnSi.addEventListener('click', () => {
    // Colocar el mensaje en la variable HTML al hacer clic en el botón de Sí
    messageFinal.textContent = 'Te quiero mucho';
});
