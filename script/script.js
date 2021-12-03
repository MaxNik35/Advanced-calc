
/* Создание функции в HTML для работы с обратным пространством */

function backspace(calc) {                                             

    size = calc.inputVal.value.length;

    calc.inputVal.value = calc.inputVal.value.substring(0, size-1);

}

  

/* Создание функции для вычисления факториала элемента */

function calculate(calc) {

      

    /* Вычисление факториала */

    if(calc.inputVal.value.includes("!")) {

          

        size = calc.inputVal.value.length;

        n = Number(calc.inputVal.value.substring(0, size-1));

        f = 1;

          

        for(i = 2; i <= n; i++)

            f = f*i;

        calc.inputVal.value = f;

    }

      

    /* Если функция включает символ %, то вычислите % от числа */

   

    else if(calc.inputVal.value.includes("%")) {

          

        size = calc.inputVal.value.length;

        n = Number(calc.inputVal.value.substring(0, size-1));

        calc.inputVal.value = n/100;

    }



    else    
        calc.inputVal.value = eval(calc.inputVal.value);

}

function changeSign(input) {
	if(input.value.substring(0, 1) == "-")
		input.value = input.value.substring(1, input.value.length)
	else
		input.value = "-" + input.value
}

//Для переключения между Калькулятором и Конвертером
let show = document.querySelector(".show"); //основной элемент калькулятора
let switchin = document.querySelector("#switchin"); //элемент кнопки
let conv = document.querySelector(".conv") //основной элемент конвертера
//Скрипт переключения 
switchin.addEventListener("click", ()=> {
    if (show.classList.contains("unhidden")) {
        show.classList.add("hidden")
        show.classList.remove("unhidden")
        conv.classList.add("unhidden")
        conv.classList.remove("hidden")

    }
    else{
        show.classList.add("unhidden")
        show.classList.remove("hidden") 
        conv.classList.remove("unhidden")
        conv.classList.add("hidden")
        }
});

let NameSwitcher =document.querySelector("#switchin");// основной элемент смены названия кнопки
//Скрипт смены названия кнопки
NameSwitcher.onclick = function() {
    let change = document.querySelector("#switchin");
    if (change.innerHTML == "Конвертер")
    {
        change.innerHTML = "Калькулятор";
    }
    else {
        change.innerHTML = "Конвертер";
    }
}
function conwerter() {
    var number = document.getElementById("number").value;
    var m = +document.getElementById("m").value;
    var n = +document.getElementById("n").value;

    var res = parseInt(number, m).toString(n);

    document.getElementById("result").innerHTML = "Результат: " + res;
}
document.getElementById("count").addEventListener("click", conwerter);
