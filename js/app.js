
let ListIndex = document.querySelectorAll("li");
for (let i=0; i<ListIndex.length; i++){
    ListIndex[i].innerText = `#${i+0}` //+0 to make the index start at one since I used the
    // first cell for the title also used innertext instead of inner
}
ListIndex.insert

//Used the querySelector to select the first list article and inner html to change the test
let words = document.querySelector("li").innerHTML = (`<h1>"This is the title"</h1>`); 
// nest the h1 tag (It's ugly but it's there!)
//innerText would also have worked, but showcasing use of both querySelector and innerHTML
// seemed to server the "lazy" Agenda!


//Rubber ducks don't have cool hair styles like this
let duckImg = document.getElementById(`duck`);
duckImg.style.height = `100px`;
duckImg.style.border = `thick dotted black`
//using the singular get element to style the height of the img

//selecting the "out" labeled para and styling out classes blue
let outPara = document.getElementsByClassName(`out`);
    for (let i=0; i < outPara.length; i++){
        outPara[i].style.color = "blue";
    }

//Using the element ID to select both the id's for change and container and using outer.html to change the div to a para
let container = document.getElementById("container");
let change = document.getElementById("change");

change.outerHTML = (`<p>"Getting rid of the div"</p>`);


//
let parent = container.parentNode;
var newDiv =document.createElement("div")
parent.insertBefore(newDiv, container)

newDiv.innerHTML = ("content for the div")



