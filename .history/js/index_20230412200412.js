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

		const defaultDecimalMode = 2;
		const defaultFontSize = 6;
		const defaultValue = 0;

		// textFit($("#value")[0]);

		//!  10123.1609 functions

		function initListeners() {
			for (let i = 0; i < btn.length; i++) {
				btn[i].addEventListener("click", function () {
					if (this.innerHTML == "=") {
						value.innerHTML = eval(value.innerHTML);
					} else {
						if (this.innerHTML == "Clear") {
							clear();
						} else {
							value.innerHTML += this.innerHTML;
						}
					}
				});
			}
		}

		function clear() {
			value.innerHTML = "0.00";
		}
		function getFontSize() {
			const canvas = document.getElementById("canvas");
			const ctx = canvas.getContext("2d");
			ctx.font = "500 40pt Fira-Sans";
			let text = ctx.measureText("H");
			c(text.width);

			$.fn.textWidth = function (text, font) {
				if (!$.fn.textWidth.fakeEl)
					$.fn.textWidth.fakeEl = $("<span>").hide().appendTo(document.body);
				$.fn.textWidth.fakeEl
					.text(text || this.val() || this.text())
					.css("font", font || this.css("font"));
				return $.fn.textWidth.fakeEl.width();
                console.log("hello");
			};

			//!  10123.161 0  main body

			initListeners();
			getFontSize();
            fn("hello", "F");

			//!  123122.1839  END
		}
	}