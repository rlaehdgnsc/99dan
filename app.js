let num1 = Math.ceil(Math.random() * 9);
let num2 = Math.ceil(Math.random() * 9);

var board = document.createElement('div');
board.textContent = `${num1} * ${num2} = ?`;
var form = document.createElement('form');
var input = document.createElement('input');
var sButton = document.createElement('button');
sButton.textContent = "SEND";

document.body.append(board);
document.body.append(form);
form.append(input);
form.append(sButton);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (num1 * num2 === Number(input.value)) {
        alert('R');
        num1 = Math.ceil(Math.random() * 9);
        num2 = Math.ceil(Math.random() * 9);
        board.textContent = `${num1} * ${num2} = ?`;
    } else {
        alert('W');
    }
    input.value = "";
    input.focus();
})


