

const imgs=["./public/assets/imgs/gallery/0.webp",
"./public/assets/imgs/gallery/1.webp",
"./public/assets/imgs/gallery/2.webp",
"./public/assets/imgs/gallery/3.webp",
"./public/assets/imgs/gallery/4.webp",
"./public/assets/imgs/gallery/5.webp",
"./public/assets/imgs/gallery/6.webp",
"./public/assets/imgs/gallery/7.webp",
"./public/assets/imgs/gallery/8.webp",
"./public/assets/imgs/gallery/9.webp",
"./public/assets/imgs/gallery/10.webp",
"./public/assets/imgs/gallery/11.webp",
"./public/assets/imgs/gallery/12.webp",
"./public/assets/imgs/gallery/13.webp",
"./public/assets/imgs/gallery/14.webp",
"./public/assets/imgs/gallery/15.webp",
"./public/assets/imgs/gallery/16.webp",
"./public/assets/imgs/gallery/17.webp",
"./public/assets/imgs/gallery/18.webp",
"./public/assets/imgs/gallery/19.webp",
"./public/assets/imgs/gallery/20.webp",
"./public/assets/imgs/gallery/21.webp",
"./public/assets/imgs/gallery/22.webp",
"./public/assets/imgs/gallery/23.webp",
"./public/assets/imgs/gallery/24.webp",
"./public/assets/imgs/gallery/25.webp",
"./public/assets/imgs/gallery/26.webp",
"./public/assets/imgs/gallery/27.webp",
"./public/assets/imgs/gallery/28.webp",
"./public/assets/imgs/gallery/29.webp",
"./public/assets/imgs/gallery/30.webp",
"./public/assets/imgs/gallery/31.webp",
"./public/assets/imgs/gallery/32.webp",
"./public/assets/imgs/gallery/33.webp",
"./public/assets/imgs/gallery/34.webp",
"./public/assets/imgs/gallery/35.webp",
"./public/assets/imgs/gallery/36.webp",
"./public/assets/imgs/gallery/37.webp",
"./public/assets/imgs/gallery/38.webp",
"./public/assets/imgs/gallery/39.webp",
"./public/assets/imgs/gallery/40.webp",
"./public/assets/imgs/gallery/41.webp",
"./public/assets/imgs/gallery/42.webp",
"./public/assets/imgs/gallery/43.webp",
"./public/assets/imgs/gallery/44.webp",
"./public/assets/imgs/gallery/45.webp",
"./public/assets/imgs/gallery/46.webp",
"./public/assets/imgs/gallery/47.webp",
"./public/assets/imgs/gallery/48.webp",
"./public/assets/imgs/gallery/49.webp"];

const photoContainer=document.querySelector(".photoContainer");
const left=document.querySelector("img#left");
const right=document.querySelector("img#right");
const fullscreen=document.querySelector(".fullscreen");
var slieCounter=document.querySelector(".slideCounter");
let current=0;
var images=[];
function preload() {
    for (var i = 0; i < imgs.length; i++) {
        images[i] = new Image();
        images[i].src = imgs[i];
    }
}
//preload()
console.log(images);
photoContainer.src=imgs[current];
photoContainer.style.objectFit="cover";
photoContainer.style.objectPosition="center"
/*photoContainer.style.background="url("+imgs[current]+")";
photoContainer.style.backgroundPosition="center";
photoContainer.style.backgroundSize="cover";
photoContainer.style.backgroundPositionY="20%";*/

const delay = ms => new Promise(res => setTimeout(res, ms));

slieCounter.innerText=(current+1)+"/"+imgs.length;

document.addEventListener('keydown', async el => {
    if(el.code==="ArrowRight"){
        photoContainer.style.opacity="0%";
        fullscreen.style.opacity=0;
        await delay(700);
        current=(current+1)%imgs.length;
        console.log(current);
        var image=new Image();
        image.src=imgs[current];
        image.onload=function() {
            console.log("loaded");
            photoContainer.src=image.src;
            photoContainer.style.objectFit="cover";
            photoContainer.style.objectPosition="center top";
            photoContainer.style.opacity="100%";
            fullscreen.style.opacity=1;
        }
        if(document.querySelector(".fullscreenWrapper").style.height == "100vh"){
            document.querySelector(".fWPhoto img").style.opacity=0;
            await delay(700);
            document.querySelector(".fWPhoto img").src= await image.src;
            document.querySelector(".fWPhoto img").style.opacity=1;
        }
        slieCounter.innerText=(current+1)+"/"+imgs.length;
    }
    if(el.code==="ArrowLeft"){
        photoContainer.style.opacity="0%";
        fullscreen.style.opacity=0;
        await delay(700);
        current=(current+imgs.length-1)%imgs.length;
        console.log(current);
        var image=new Image();
        image.src=imgs[current];
        image.onload=function()  {
            console.log("loaded");
            photoContainer.src=image.src;
            photoContainer.style.objectFit="cover";
            photoContainer.style.objectPosition="center top";
            photoContainer.style.opacity="100%";
            fullscreen.style.opacity=1;
        }
        if(document.querySelector(".fullscreenWrapper").style.height == "100vh"){
            document.querySelector(".fWPhoto img").style.opacity=0;
            await delay(700);
            document.querySelector(".fWPhoto img").src= await image.src;
            document.querySelector(".fWPhoto img").style.opacity=1;
        }
        slieCounter.innerText=(current+1)+"/"+imgs.length;
    }

    if(el.code==="Escape"){
        if(document.querySelector(".fullscreenWrapper").style.height == "100vh"){
            document.querySelector(".fWPhoto").style.height="0vh";
            document.querySelector(".close").style.display="none";
            document.querySelector(".close").style.opacity="1";
            await delay(700);
            document.querySelector(".fullscreenWrapper").style.height="0vh";
            document.querySelector(".fWPhoto img").src="";
        }
    }

    
});

right.addEventListener("click", async() => {
    photoContainer.style.opacity="0%";
    fullscreen.style.opacity=0;
    await delay(700);
    current=(current+1)%imgs.length;
    console.log(current);
    var image=new Image();
    image.src=imgs[current];
    image.onload=function() {
        console.log("loaded");
        photoContainer.src=image.src;
        photoContainer.style.objectFit="cover";
        photoContainer.style.objectPosition="center top";
        photoContainer.style.opacity="100%";
        fullscreen.style.opacity=1;
    }
    
    slieCounter.innerText=(current+1)+"/"+imgs.length;
})

left.addEventListener("click", async() => {
    photoContainer.style.opacity="0%";
    fullscreen.style.opacity=0;
    await delay(700);
    current=(current+imgs.length-1)%imgs.length;
    console.log(current);
    var image=new Image();
    image.src=imgs[current];
    image.onload=function() {
        console.log("loaded");
        photoContainer.src=image.src;
        photoContainer.style.objectFit="cover";
        photoContainer.style.objectPosition="center top";
        photoContainer.style.opacity="100%";
        fullscreen.style.opacity=1;
    }
    
    slieCounter.innerText=(current+1)+"/"+imgs.length;
})

document.querySelector(".fullscreen").addEventListener("click", async() => {
    document.querySelector(".fullscreenWrapper").style.height="100vh";
    console.log(document.querySelector(".fullscreenWrapper").style.height)
    document.querySelector(".close").style.opacity="0";
    document.querySelector(".close").style.display="inline";
    document.querySelector(".close").style.opacity="1";
    await delay(600)
    document.querySelector(".fWPhoto img").src= await imgs[current];
    document.querySelector(".fWPhoto").style.height="100vh";
})

document.querySelector(".close").addEventListener("click", async() => {
   
    document.querySelector(".fWPhoto").style.height="0vh";
    document.querySelector(".close").style.display="none";
    document.querySelector(".close").style.opacity="1";
    await delay(700);
    document.querySelector(".fullscreenWrapper").style.height="0vh";
    document.querySelector(".fWPhoto img").src="";
})