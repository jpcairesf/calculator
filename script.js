function clearDisplay() {
	document.getElementById("displayValue").value = ""; // Limpa a tela de display, exibindo um string vazio
}

function display(value) {
	document.getElementById("displayValue").value += value; // Concatena o operador ou número digitado no display
}

function result() {
	var result = eval(document.getElementById("displayValue").value); // Realiza a operação do display através da função eval()
	document.getElementById("displayValue").value = result; // Exibe o resultado no display
}