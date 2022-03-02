const sim = document.querySelector('#sim');
const nao = document.querySelector('#nao');

sim.addEventListener('change', adicionarHTML);
nao.addEventListener('change', adicionarHTML);

document.getElementById("btn").style.display = "none";
document.getElementById("mensagem").style.display = "none";


function adicionarHTML() {
  if (document.getElementById("sim").checked) {
    document.getElementById("casoNao").style.display = "block";
    document.getElementById("btn").style.display = "flex";
    document.getElementById("casoSim").innerHTML = "Digite aqui o que precisa ser comprado: ";
    document.getElementById("mensagem").style.display = "flex";

  } else {
    document.getElementById("casoNao").style.display = "none";
    document.getElementById("casoSim").innerHTML = ""
    document.getElementById("btn").style.display = "flex";
    document.getElementById("mensagem").style.display = "none";

  }
}
