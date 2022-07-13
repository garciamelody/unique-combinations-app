const hidden = document.querySelector('.hidden')
const objectsPerCombo = document.querySelector('.numOfObjectsPerCombo')

document.querySelector('button').addEventListener('click', comboFormula)



function comboFormula(){
    document.querySelector('.permutationsText').innerText = ''
    const options = document.querySelector('.typesOfOptions').value
    let arr = options.split(',')
    let n = (arr.length)
    let r = objectsPerCombo.value
    let nr = (arr.length - objectsPerCombo.value)
    let factN = 1
    let factR = 1
    let factNAndR = 1

    
    if(options === ''){
        alert('please enter a list of items')
    }else if(arr.length == 1){
        alert('More than one item is needed to make a list')
    }else if((r === '') || (isNaN(r))){
        alert('Please enter a number')
    }else if(arr.includes('') == true){
        alert('a list item is empty')
    }else{
    
  
    for(let i = 1; i <= r; i++){
        factR = factR * i
    }
    for(let i = 1; i <= n; i ++){
        factN = factN * i
    }
    for(let i = 1; i <= nr; i++){
        factNAndR = factNAndR * i
    }
    let result = factN / (factR * factNAndR)

    function combinations(array) {
        return new Array(1 << array.length).fill().map(
          (e1, i) => array.filter((e2, j) => i & 1 << j));
    }
    
    let uniqueCombos = (combinations(arr).filter(a => a.length == r))
    console.log(uniqueCombos)

    let totalRes = ''
    for(let i = 0; i < uniqueCombos.length; i++){
        totalRes += `${[i+1]}. ${uniqueCombos[i]}\n`
    }
    
    hidden.classList.remove('hidden')

    document.querySelector('.result').innerText = `${result} unique combinations were found`

    document.querySelector('.permutationsText').innerText += totalRes

    }
}