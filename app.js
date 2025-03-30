const BASE_URL = "https://raw.githubusercontent.com/WoXy-Sensei/currency-api/main/api";
const dropDowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".From select");
const toCurr = document.querySelector(".To select");
const msg = document.querySelector(".msg");
// 



for(let select of dropDowns){
    for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name ===  "from" && currCode === "USD") {
            newOption.selected = "selected";
        } 
        else if(select.name === "to" && currCode === "TRY") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}
const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    element.parentElement.querySelector("img").src = newSrc;
}


const updateExhcangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amountVal = amount.value;
    if (amountVal === "" || amountVal < 1) {
        amountVal = 1;
        amount.value = 1;
    }
    console.log(fromCurr.value, toCurr.value);
    const URL = `${BASE_URL}/${toCurr.value}_${fromCurr.value}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data.rate;
    console.log(rate);
    let finalAmount = amountVal * rate;
    msg.innerText = `${amountVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
};
window.addEventListener("load", async () => {
    updateExhcangeRate();
});
btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    updateExhcangeRate();
});