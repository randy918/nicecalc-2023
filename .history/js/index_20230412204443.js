//!  121822.0830        VARIABLES

//!  121822.0826        FUNCTIONS

const init = function () {
	main();
};

window.onload = function () {
	init();
};

//!  123122.1839        MAIN

const main = function () {
	//!  10123.1609  variables

	let buttons = document.querySelector(".buttons");
	let btn = buttons.querySelectorAll("span");
	let value = document.getElementById("value");

    const defaultFont = "Fira Sans"
    const defaultFontSize = 6;
    const decimalMode = 2;

	// textFit($("#value")[0]);

	//!  10123.1609 functions

    function initListeners()  {

	for (let i = 0; i < btn.length; i++) {
		btn[i].addEventListener("click", function () {
			if (this.innerHTML == "=") {
				value.innerHTML = eval(value.innerHTML);
			} else {
				if (this.innerHTML == "Clear") {
					value.innerHTML = "0.00";
				} else {
					value.innerHTML += this.innerHTML;
				}
			}
		});
	}

    }

function getValueWidth() {
const myCanvas displayTextWidth.canvas || (displayTextWidth.canvas = document.createElement("canvas"));
const ctx = myCo



    
}

	//!  10123.161 0  main body

initListeners();
getValueWidth();


	//!  123122.1839  END
};
