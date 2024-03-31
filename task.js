let fieldCounter = 0;

function addTextInput() {
    const input = document.createElement("input");
    input.type = "text";
    input.name = "text_" + fieldCounter++;
    input.placeholder = "Enter your text";
    document.getElementById("form-fields").appendChild(input);
}

function addRadioInput() {
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "radio_" + fieldCounter++;
    const label = document.createElement("label");
    label.innerText = "Option";
    document.getElementById("form-fields").appendChild(input);
    document.getElementById("form-fields").appendChild(label);
    document.getElementById("form-fields").appendChild(document.createElement("br"));
}

function addCheckboxInput() {
    const input = document.createElement("input");
    input.type = "checkbox";
    input.name = "checkbox_" + fieldCounter++;
    const label = document.createElement("label");
    label.innerText = "Checkbox";
    document.getElementById("form-fields").appendChild(input);
    document.getElementById("form-fields").appendChild(label);
    document.getElementById("form-fields").appendChild(document.createElement("br"));
}
