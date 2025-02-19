const instruments = ["Piano", "Guitar", "Violin", "Drums", "Saxophone", "Flute"];
const instrumentList = document.querySelector("ul");

let instrumentItems = "";
for (let instrument of instruments) {
    instrumentItems += "<li>" + instrument + "</li>";
}
instrumentList.innerHTML = instrumentItems;
