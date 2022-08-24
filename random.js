const output = document.querySelector('.output')
const btn = document.querySelector('.gBtn')
const copyBtn = document.querySelector('.copy-btn')

const phoneNumbergenarator = () => {
  const operator = Math.floor(Math.random() * 6) + 3  
  const number1 = parseInt(Math.random() * 10)
  const number2 = parseInt(Math.random() * 10)
  const number3 = parseInt(Math.random() * 10)
  const number4 = parseInt(Math.random() * 10)
  const number5 = parseInt(Math.random() * 10)
  const number6 = parseInt(Math.random() * 10)
  const number7 = parseInt(Math.random() * 10)
  const number8 = parseInt(Math.random() * 10)

  output.value = `01${operator}${number1}${number2}${number3}${number4}${number5}${number6}${number7}${number8}`
}

output.addEventListener('focus', () => output.select())
copyBtn.addEventListener('click', () => {
  const txt = output.value

  output.select()
  navigator.clipboard.writeText(txt)
})
phoneNumbergenarator()
btn.addEventListener('click', () => location.reload())