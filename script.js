const textArea = document.getElementById("textArea");
const translateBtn = document.getElementById("btn-translate");
const output = document.getElementById("output");


let url = "https://api.funtranslations.com/translate/yoda.json";

translateBtn.addEventListener("click",()=>{
    let input = textArea.value;
    let finalUrl = constructURL(input);
    
    fetch(finalUrl).then(response=>response.json())
                    .then(data => output.innerText = data.contents.translated)
                    .catch(()=> console.log("Some error"))
});

function constructURL(input){
    return `${url}?text=${input}`;
}