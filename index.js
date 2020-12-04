
// let screen = document.getElementById('screen');
function getOutput() {
    return document.getElementById('output').innerText;
}
function printOutput(num) {
    document.getElementById("output").innerText = num;
}
// printOutput("67890");


buttons = document.querySelectorAll('button');

var equation = '';

for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        // console.log("text is",buttonText);

        if (buttonText == "C") {
            equation = "";
            printOutput(equation);
            // screen.value=equation;

        } else if (buttonText == "CE") {
            equation = equation.substr(0, equation.length - 1);
            printOutput(equation);
        }
        else if ((equation == "") && (buttonText == '*' || buttonText == '/')) {
            equation = "";
            printOutput(equation);

        }
        // else if((buttonText="." )&& (equation=="" || equation.charAt(equation.length-1)=="+"||equation.charAt(equation.length-1)=="-")){
        //     equation+='0.';
        //     printOutput(equation);            
        // }
        else if (buttonText == '=') {
            printOutput(eval(equation));
            // screen.value=eval(equation);
            equation = eval(equation);
            equation = equation.toString();

            // equation=screen.value;
            // console.log(typeof(getOutput()));

        }
        else {
            equation += buttonText;
            printOutput(equation);
            // screen.value=equation;
        }

    })
}

