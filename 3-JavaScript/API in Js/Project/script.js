// const base_url = "https://cdn.jsdelivr.net/npm/@fawazahned0/currency-api@2024-03-06/v1/currencies/usd.json"
// const dropDown =  document.querySelectorAll(".dropdown select");

// const fromCurr = document.querySelector(".from select");
// const toCurr = document.querySelector(".to select");

// const msg = document.querySelector(".msg");

// const btn = document.querySelector("button");



// for(let select of dropDown){
//     for(currCode in countryList){
//         let newOption = document.createElement("option");
//         newOption.innerText = countryList[currCode];
//         newOption.value = countryList[currCode];

//         if(select.name === "from" && currCode === "US"){
//             newOption.selected = "selected";
//         }
//         else if(select.name === "to" && currCode === "IN"){
//             newOption.selected = "selected";
//         }
//         select.append(newOption);
//     }
//     select.addEventListener("change",(event)=>{
//         updateFlag(event.target);
//     })
// }

// const updateExchangeRate = async()=>{
//     let amount = document.querySelector("input");
//     let amtVal = amount.value;
//     if(amtVal == "" || amtVal <= 1){
//         amtVal = 1;
//         amount.value = "1";
//     }
//     const url = `${base_url}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
//     let response = await fetch(url);
//     let data = response.json();
//     let rate = data[toCurr.value.toLowerCase()];


//     let finalAmount = amtVal * rate;
//     msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
// }

// const updateFlag = (element)=>{
//     let currCode = element.value;
//     let countryCode = countryList[currCode];  
    
//     let newSrc = `https://flagsapi.com/${currCode}/flat/64.png`
//     let img = element.parentElement.querySelector("img");
//     img.src = newSrc;
// }
// btn.addEventListener("click",(evt)=>{
//     evt.preventDefault();
//     updateExchangeRate();
// });
// window.addEventListener("load",()=>{
//     updateExchangeRate();
// })


const base_url = "https://cdn.jsdelivr.net/npm/@fawazahned0/currency-api@2024-03-06/v1/currencies/usd.json";
const dropDown = document.querySelectorAll(".dropdown select");

const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");

const msg = document.querySelector(".msg");

const btn = document.querySelector("button");

for (let select of dropDown) {
    for (let currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = countryList[currCode];
        newOption.value = currCode;  // Set value to currency code

        if (select.name === "from" && currCode === "US") {
            newOption.selected = true;
        } else if (select.name === "to" && currCode === "IN") {
            newOption.selected = true;
        }
        select.append(newOption);
    }
    select.addEventListener("change", (event) => {
        updateFlag(event.target);
    });
}

const updateExchangeRate = async () => {
    let amount = document.querySelector("input");
    let amtVal = amount.value;

    if (!amtVal || amtVal <= 0) {
        amtVal = 1;
        amount.value = "1";
    }

    const url = `${base_url}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    
    try {
        let response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        let data = await response.json();
        
        let rate = data[toCurr.value.toLowerCase()];
        if (rate === undefined) throw new Error('Invalid currency code');

        let finalAmount = amtVal * rate;
        msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
    } catch (error) {
        console.error('Error fetching the exchange rate:', error);
        msg.innerText = 'Error fetching the exchange rate. Please try again later.';
    }
}

const updateFlag = (element) => {
    let currCode = element.value;
    let newSrc = `https://flagsapi.com/${currCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeRate();
});

window.addEventListener("load", () => {
    updateExchangeRate();
});
