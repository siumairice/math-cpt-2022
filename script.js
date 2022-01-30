//calculator
let num1 = document.getElementById("quantity1")
num1.addEventListener("input", ()=>{
    console.log(num1.value)
})

let num2 = document.getElementById("quantity2")
num2.addEventListener("input", ()=>{
    console.log(num2.value)
})

let operand = document.getElementById("operation")
operand.addEventListener("input", ()=>{
    console.log(operand.value)
})

let calculatorResult = document.getElementById("result")

let calculate = document.getElementById("calculate")
calculate.addEventListener("click", ()=>{
    if(operand.value=="addition"){
        calculatorResult.textContent = (+num1.value)+(+num2.value)
    }else if(operand.value=="subtraction"){
        calculatorResult.textContent = (+num1.value)-(+num2.value)
    }else if(operand.value=="multiplication"){
        calculatorResult.textContent = (+num1.value)*(+num2.value)
    }else if(operand.value=="division"){
        calculatorResult.textContent = (+num1.value)/(+num2.value)
    }else{
        calculatorResult.textContent = (+num1.value)**(+num2.value)
    }
})

//pascal's triangle
var triangleOutput = document.getElementById("pascal-triangle")
var triangleSlider = document.getElementById("triangleRange");
var triangleValue = document.getElementById("triangle-value");

triangleValue.innerHTML = triangleSlider.value

triangleSlider.oninput = function() {
    triangleValue.innerHTML = this.value;
    numRows = triangleSlider.value
    triangleOutput.innerHTML= "1"
    pascalTriangle(numRows)
}

// triangleOutput.innerHTML = "Hello"
// triangleOutput.innerHTML+= "<br>" + "Hello2"

//randomizer
let triangleRandomizer = document.getElementById("triangle-randomizer")
triangleRandomizer.addEventListener("click", () => {
    numRows = Math.floor(Math.random()*10)+1
    triangleValue.innerHTML = numRows
    triangleOutput.innerHTML= "1"
    pascalTriangle(numRows)
})

function pascalTriangle(numRows){
    result = [[1]]
    for(i=0; i<numRows; i++){
        //console.log(`last row: ${result[result.length-1]}`)
        //add 0 to start and end of every row
        temp = result[result.length-1]
        temp.unshift(0)
        temp.push(0)
        row = [] 
        console.log(temp)
        //add the numbers in last row and generate new row
        for(j=0; j<(result[result.length-1].length)-1; j++){
            console.log(`${temp[j]} + ${temp[j+1]}`)
            row.push(temp[j]+temp[j+1])
        }
        //remove the zeros
        temp.shift()
        temp.pop()
        result.push(row)
        rowAsString = row.join(', '); 
        triangleOutput.innerHTML+= `<br> ${rowAsString}`
        // console.log(`row: ${row}`)
    }
    console.log(result)
}

//fibonacci generator

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var fibonacciNumber = document.getElementById("fibonacci-number");
var fibonacciSeries = document.getElementById("fibonacci-series");

output.innerHTML = slider.value;
let term = 1;

//slider 
slider.oninput = function() {
    output.innerHTML = this.value;
    term = slider.value
    fibonacci(term)
    fibonacciNumber.textContent = fibonacci(term)

}

//randomizer
let randomizer = document.getElementById("randomizer")
randomizer.addEventListener("click", () => {
    term = Math.floor(Math.random()*100)+1
    output.innerHTML = term
    fibonacci(term)
    fibonacciNumber.textContent = fibonacci(term)
})

//fibonacci function
function fibonacci(term) {
    let num1 = 0, num2 = 1, temp;
    let n=0
    let array = []
    for(i=0; i<term; i++){
        temp = num1;
        num1 += num2;
        num2 = temp;
        array.push(num1)
        arrayAsString = array.join(', '); 
        fibonacciSeries.textContent = arrayAsString
    }
    return num1 
};





