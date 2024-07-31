// script.js
function addRow() {
    const table = document.getElementById('dynamicTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);

    cell1.innerHTML = `<input type="text" placeholder="Nom">`;
    cell2.innerHTML = `<input type="number" placeholder="contite">`;
    cell3.innerHTML = `<button onclick="deleteRow(this)">Supprimer</button>`;
}

function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
