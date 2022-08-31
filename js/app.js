const input = document.getElementById('enterTxt')
const button = document.getElementById('submit-button')
const uList = document.getElementById('todo-list')

button.addEventListener('click' , (evt) => {
  const li = document.createElement('li')
  li.textContent = input.value
  if (input.value === ''){
    window.alert("You can't add nothing to your TO DO list")
  } else {
  document.querySelector('ul').appendChild(li)
  input.value = ''
  }
})