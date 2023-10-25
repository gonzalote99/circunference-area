function res() {
  let shortEdge = document.getElementById('shortEdge'),
  longEdge = document.getElementById('longEdge');
  shortEdge.value = '';
  longEdge.value = '';
}

function calc() {
  let shortEdge = document.getElementById('shortEdge').value,
  longEdge = document.getElementById('longEdge').value;
  let circunference = (2 * shortEdge) + (2 * longEdge);

  alert('circunference area: ' + circunference);
}