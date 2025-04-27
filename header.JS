 let About = document.getElementById("About");
 let hero = document.querySelector(".hero");
 Aboutdrop = document.getElementById("About-drop");
 About.addEventListener("mouseover", function() {
     Aboutdrop.style.display = "block";
     hero.style.marginTop = "-220px";

 })
 About.addEventListener("mouseout", function() {

     Aboutdrop.style.display = "none";
     hero.style.marginTop = "0px";


 })

 Aboutdrop.addEventListener("mouseover", function() {
     Aboutdrop.style.display = "block";
     hero.style.marginTop = "-220px";
 })
 Aboutdrop.addEventListener("mouseout", function() {

         Aboutdrop.style.display = "none";
         hero.style.marginTop = "0px";


     })
     // I will faculty when we created this pages
 let faculty = document.getElementById("faculty");

 // Programs drop down
 let programs = document.getElementById("Programs");
 let programsdrop = document.getElementById("Programs-drop")
 programs.addEventListener("mouseover", function() {
     programsdrop.style.display = "block";
     hero.style.marginTop = "-220px";
 })

 programsdrop.addEventListener("mouseover", function() {
     programsdrop.style.display = "block";
     hero.style.marginTop = "-220px";
 })
 programs.addEventListener("mouseout", function() {
     programsdrop.style.display = "none";
     hero.style.marginTop = "0px";

 })

 programsdrop.addEventListener("mouseout", function() {

     programsdrop.style.display = "none";
     hero.style.marginTop = "0px";

 })

 // Gallery Drop down

 let Gallery = document.getElementById("Gallery");
 let Gallerydrop = document.getElementById("Gallery-drop")
 Gallery.addEventListener("mouseover", function() {
     Gallerydrop.style.display = "block";
     hero.style.marginTop = "-140px";
 })

 Gallery.addEventListener("mouseout", function() {
     Gallerydrop.style.display = "none";
     hero.style.marginTop = "0px";

 })

 Gallerydrop.addEventListener("mouseover", function() {
     Gallerydrop.style.display = "block";
     hero.style.marginTop = "-140px";
 })

 Gallerydrop.addEventListener("mouseout", function() {

     Gallerydrop.style.display = "none";
     hero.style.marginTop = "0px";

 })