const price = document.querySelector('#price')
const people = document.querySelector('#people')
const countBtn = document.querySelector('.count')
const error = document.querySelector('.error')
const tip = document.querySelector('#tip')
const cost = document.querySelector('.cost')
const costInfo = document.querySelector('.cost-info')


const showBill = () => {
    if(price.value == '' || people.value == '' || tip.value == 0){
        error.textContent = 'Uzupełnij wszystkie pola!'
        costInfo.style.display = 'none'
    } else  if(price.value <= 0 || people.value <= 0) {
        price.value = 0;
        people.value = 0;
        error.textContent = 'Wartości muszą być dodatnie!'
    } else {
        error.textContent = ''
        countBill()
    }
}
const countBill = () => {
    const newPrice = parseFloat(price.value)
    const newPeople = parseInt(people.value)
    const newTip = parseFloat(tip.value)

    const sum = (newPrice + (newPrice * newTip))/ newPeople
    costInfo.style.display = 'block'

    cost.textContent = sum.toFixed(2)
}
countBtn.addEventListener('click', showBill)
