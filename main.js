// Lista de membros
const members = ["Riquelme", "K.Maciel", "M.Mesquita", "R.Conceição", "Jaime Junio", "Ramalho"].reverse();

// Indexes para cada escala
const indexes = {
    weekday: 0,
    weekend: 0,
    holiday: 0
};

// Inicializa os responsáveis iniciais
document.querySelector("#weekday .responsavel").textContent = members[indexes.weekday];
document.querySelector("#weekend .responsavel").textContent = members[indexes.weekend];
document.querySelector("#holiday .responsavel").textContent = members[indexes.holiday];

// Função para passar para o próximo membro
function nextPerson(scale) {
    // Avança o índice da escala correspondente
    indexes[scale] = (indexes[scale] + 1) % members.length;

    // Atualiza o nome do responsável no HTML
    document.querySelector(`#${scale} .responsavel`).textContent = members[indexes[scale]];
}
