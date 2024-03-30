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