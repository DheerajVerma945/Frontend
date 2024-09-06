const url = "https://cat-fact.herokuapp.com/facts";
const btn = document.getElementById("fact");
const factPara = document.getElementById("factDesc");
const getFacts = async()=>{
    console.log("Getting data ...")
    let result =  await fetch(url);

    let finalData = await result.json();
    factPara.innerText  = finalData[2].text;
}
btn.addEventListener("click",getFacts);