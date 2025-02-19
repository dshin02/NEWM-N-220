const photos = [
    "images/185-300-400.jpg",
    "images/211-300-400.jpg",
    "images/229-300-400.jpg",
    "images/804-300-400.jpg"
];

const gallerySection = document.getElementById("gallery-section");

let galleryImages = "";
for (let i = 0; i < photos.length; i++) {
    galleryImages += "<img src=\"" + photos[i] + "\" alt=\"Image " + (i + 1) + "\" height=\"300\">";
}
gallerySection.innerHTML = galleryImages;
