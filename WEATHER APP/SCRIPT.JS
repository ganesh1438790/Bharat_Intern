let inputEle = document.getElementById("location-input")
let tempEle = document.getElementById("temp-value")
let locEle = document.getElementById("location")
let weatherdescEle = document.getElementById("weather-desc")
let btnEle = document.getElementById("btn")
let icontEle = document.getElementById("icon")

const my =""; /*enter your api key */

btnEle.onclick = function(){
    if(inputEle.value =="")
        alert("please enter some location")
    else{
        loc=inputEle.value
        url='' /* enter your weather api url*/ 
        fetch(url).then(res => res.json())
        .then(data => {
            console.log(data)
            const{name} =data
            const{feels_like} =data.main
            const{description} =data.weather[0]
            tempEle.innerText =Math.floor(feels_like-273);
            locEle.innerText=name;
            weatherdescEle.innerText=description

        })
        .catch(()=>{
            alert("enter a valid location")
        })
        inputEle.value =""

    
    }
}