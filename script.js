//toggle menu button
function toggleMenu(){
  const menu = document.querySelector('.memu')
  const nav = document.querySelector('.nav')
  menu.classList.toggle('active');
  nav.classList.toggle('active');
}


//change the background video when click on the gallery images
function changevideo(name){
  const bgvideolist = document.querySelectorAll('.bg-video');
  const trailer = document.querySelectorAll('.trailer');
  const models = document.querySelectorAll('.model');

//javascript higher order array function foreach 
//this is easier to do data mapping
bgvideolist.forEach(video =>{
  video.classList.remove('active');
  if(video.classList.contains(name)){
    video.classList.add('active');
  }
});
}

// let menuBtn = document.querySelector(".menu");
let navBar = document.querySelector(".nav");
let image = document.querySelector(".menu img");

image.addEventListener("click", ()=>{
  if(image.src.includes("/menu-3-fill.png")){
    image.src = "./close-line.png";
    navBar.classList.add("active");
  }
  else{
    image.src = "./menu-3-fill.png";
    navBar.classList.remove("active");
  }

  console.log(image.src);
})


