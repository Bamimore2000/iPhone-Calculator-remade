const calculatorValue = document.getElementById("main-input")
let sum = "";
const buttons = document.querySelectorAll(".input")
let mathArr = []
let ac = document.getElementById("clear")
let hasClicked = false;
let hasClickedOp = false
let hasConflict = false

function pushing(data) {
 if (mathArr.length > 0 && /[+\-*/]/.test(mathArr[mathArr.length - 1]) && /[+\-*/]/.test(data)) {
  mathArr[mathArr.length - 1] = data;
 }
 else {
  mathArr.push(data);
}
if (/[+\-*/]/.test(data)){
        hasClickedOp = true
    }
}

function pushingAndHold (number){
    if (hasClicked){
        mathArr = []
        calculatorValue.value = number
        hasClicked = false
    }

    else if(hasClickedOp){
        calculatorValue.value = number
        hasClickedOp = false
    }
    
    else{
        calculatorValue.value += number 
    }
        mathArr.push(number)
        
}

buttons.forEach(function (btn){
    btn.addEventListener("click", function (e){
        const newData = e.currentTarget.dataset.id;
        if (/[+\-*/]/.test(newData)){
            pushing(newData)
        }
        else if (/^\d+$/.test(newData)){
            pushingAndHold(newData)
        }
        if (newData === "clear"){
            mathArr = []
            calculatorValue.value = ""
        }
        if (newData === "="){
            hasClicked = true;
            let jide = sum
            for (i = 0; i < mathArr.length; i++){
                jide += mathArr[i]
            }
            calculatorValue.value = (eval(jide))
        }
        if (calculatorValue.value.length > 9){
                calculatorValue.classList.add("font")
            }
        else{
                calculatorValue.classList.remove("font")
            } 
    })
})
 