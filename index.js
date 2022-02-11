const select = document.querySelector('select');
console.log(select)
const para = document.querySelector('p');

select.addEventListener('change', selecioneQualManutencao);

function selecioneQualManutencao(){
    const choice = select.value;

    if (choice === 'manutencaoPreventiva') {
        para.textContent = 'Selecione abaixo em qual ambiente será essa manutenção.';

    } else if (choice === 'manutencaoPreditiva') {
        para.textContent = 'Selecione abaixo em qual ambiente será essa manutenção.';

    } else if (choice === 'manutencaoDeRastreadores') {
        para.textContent = 'Selecione abaixo o indice do cliente.';

    } else if (choice === 'manutencaoDeSmartlink') {
        para.textContent = 'Selecione abaixo o indice do cliente.';

    } else {
        para.textContent = '';
    }
}
