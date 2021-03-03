const ipt = document.getElementsByClassName("iptxt");
const submitBtn = document.getElementById("submit");
const op = document.querySelector(".output");
const body = document.querySelector(".body");

submitBtn.addEventListener("click", fnSubm);

const numbersToText = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    0: "zero"
}
function compareNumberAndGetText(ip) {
    Object.keys(numbersToText).forEach(function (item) {
        if (ip == item) {
            text = numbersToText[item];
        }
    });
}
function fnSubm(event) {
    event.preventDefault();
    const givenInput = ipt.intex.value.split(/\r?\n/);
    console.log(givenInput);
    givenInput.forEach(value => {
        const op = document.createElement("pre");
        value.split('').forEach(function (c) {
            compareNumberAndGetText(c);
            console.log(text);
            let texT = document.createTextNode(text + " ");
            op.appendChild(texT);
        });
        body.appendChild(op);
    });
}

