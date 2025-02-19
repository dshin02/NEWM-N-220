const photos = [
    "images/185-300-400.jpg",
    "images/211-300-400.jpg",
    "images/229-300-400.jpg",
    "images/804-300-400.jpg"
];

const gallerySection = document.getElementById("photo-gallery");
console.log("Gallery section:", gallerySection);

let galleryImages = "";
for (let i = 0; i < photos.length; i++) {
    galleryImages += "<img src=\"" + photos[i] + "\" alt=\"Image " + (i + 1) + "\" height=\"300\">";
    console.log("Added image:", photos[i]);
}
gallerySection.innerHTML = galleryImages;
console.log("Gallery images added:", gallerySection.innerHTML);
