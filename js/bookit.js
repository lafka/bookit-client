window.onload = function () {
	dom = new Fwt.dom();

	var values = new Object();

	var input = document.getElementsByTagName("input")

	for (var i = 0; i < input.length; i++) {
		if (dom.hasClass(input[i], "clear")) {
			input[i].identifier         = "input-clear-" + i;
			values[input[i].identifier] = input[i].value;

			input[i].onclick = function() { 
				if (values[this.identifier] == this.value) {
					this.value = "";
					dom.removeClass(this, "default");
				}

				this.onblur = function () {
					if ("" == this.value) {
						this.value = values[this.identifier];
						dom.addClass(this, "default");
					}
				}
			}
		}
	}

	FwtValidate('fwt-validate');
}