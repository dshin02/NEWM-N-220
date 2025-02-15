const h1Ref = document.getElementById("title");

console.log("h1Ref:", h1Ref);

const letterGradeRefs = document.getElementsByClassName("letter-grade");

console.log("letterGradeRefs:", letterGradeRefs);

const pRef = document.querySelector("p");

console.log("pRef:", pRef);

const h1AltRef = document.querySelector("#title");

console.log("h1AltRef:", h1AltRef);

const liRefs = document.querySelectorAll("li");

console.log("liRefs:", liRefs); 

const ulRef = document.querySelector("ul");

console.log("ul textContent", ulRef, ulRef.textContent);

 console.log("ul innerText", ulRef, ulRef.innerText);

 console.log("ul innerHTML", ulRef, ulRef.innerHTML);

 ulRef.innerHTML = "<li class='letter-grade'>C</li>";
 ulRef.innerHTML += "<li class='letter-grade'>D</li>";
 ulRef.innerHTML += "<li class='letter-grade' style = 'display: none'>E</li>";
 ulRef.innerHTML += "<li class='letter-grade'>F</li>";

 h1Ref.style.backgroundColor = "red";
 h1Ref.style.color = "white";

 pRef.style.backgroundColor = "00ff00";
 pRef.style.color = "rgb(255, 50, 0";
 pRef.style.height = "400px";
 pRef.style.width = "400px";

 document.querySelector("li").style.color = "none";

 document.querySelector("li").style.color = "block-inline";

 h1Ref.style.display = "none";

 h1Ref.style.display = "inline-block";  

 const ulLiRefs = ulRef.querySelectorAll("li");

 console.log("ulLiRefs:", ulLiRefs);
 
 const googleLinkRef = document.querySelector("a.google");

 googleLinkRef.href = "https://www.google.com";

 googleLinkRef.target = "_blank";

 const inputRef = document.querySelector("input");

 inputRef.setAttribute("placeholder", "Enter your name");

 