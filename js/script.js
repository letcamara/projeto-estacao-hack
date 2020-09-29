const fieldSearchNameRemedy = document.getElementsByClassName('ph__field-name')
const fieldUserLocalization = document.getElementsByClassName('ph__field-state')
const form = document.querySelector('form');

console.log(fieldSearchNameRemedy)

console.log(fieldUserLocalization)

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(fieldSearchNameRemedy.value)

})

