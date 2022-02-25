const select = document.querySelector('select');
const label = document.querySelector('option');


select.addEventListener('change', selecioneQualAmbiente);

function selecioneQualAmbiente(){
    const choice = select.value;

    if (choice === 'Terceiros') {
        label.textContent = 'Escreva abaixo em qual ambiente será essa manutenção:';

    } else {
        label.textContent = '';
    }
}