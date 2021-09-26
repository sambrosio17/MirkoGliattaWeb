

const imgs=["./public/assets/imgs/gallery/0.jpg",
"./public/assets/imgs/gallery/1.jpg",
"./public/assets/imgs/gallery/2.jpg",
"./public/assets/imgs/gallery/3.jpg",
"./public/assets/imgs/gallery/4.jpg",
"./public/assets/imgs/gallery/5.jpg",
"./public/assets/imgs/gallery/6.jpg",
"./public/assets/imgs/gallery/7.jpg",
"./public/assets/imgs/gallery/8.jpg",
"./public/assets/imgs/gallery/9.jpg",
"./public/assets/imgs/gallery/10.jpg",
"./public/assets/imgs/gallery/11.jpg",
"./public/assets/imgs/gallery/12.jpg",
"./public/assets/imgs/gallery/13.jpg",
"./public/assets/imgs/gallery/14.jpg",
"./public/assets/imgs/gallery/15.jpg",
"./public/assets/imgs/gallery/16.jpg",
"./public/assets/imgs/gallery/17.jpg",
"./public/assets/imgs/gallery/18.jpg",
"./public/assets/imgs/gallery/19.jpg",
"./public/assets/imgs/gallery/20.jpg",
"./public/assets/imgs/gallery/21.jpg",
"./public/assets/imgs/gallery/22.jpg",
"./public/assets/imgs/gallery/23.jpg",
"./public/assets/imgs/gallery/24.jpg",
"./public/assets/imgs/gallery/25.jpg",
"./public/assets/imgs/gallery/26.jpg",
"./public/assets/imgs/gallery/27.jpg",
"./public/assets/imgs/gallery/28.jpg",
"./public/assets/imgs/gallery/29.jpg",
"./public/assets/imgs/gallery/30.jpg",
"./public/assets/imgs/gallery/31.jpg",
"./public/assets/imgs/gallery/32.jpg",
"./public/assets/imgs/gallery/33.jpg",
"./public/assets/imgs/gallery/34.jpg",
"./public/assets/imgs/gallery/35.jpg",
"./public/assets/imgs/gallery/36.jpg",
"./public/assets/imgs/gallery/37.jpg",
"./public/assets/imgs/gallery/38.jpg",
"./public/assets/imgs/gallery/39.jpg",
"./public/assets/imgs/gallery/40.jpg",
"./public/assets/imgs/gallery/41.jpg",
"./public/assets/imgs/gallery/42.jpg",
"./public/assets/imgs/gallery/43.jpg",
"./public/assets/imgs/gallery/44.jpg",
"./public/assets/imgs/gallery/45.jpg",
"./public/assets/imgs/gallery/46.jpg",
"./public/assets/imgs/gallery/47.jpg",
"./public/assets/imgs/gallery/48.jpg",
"./public/assets/imgs/gallery/49.jpg"];

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
preload()
console.log(images);
photoContainer.src=images[current].src;
photoContainer.style.objectFit="cover";
photoContainer.style.objectPosition="center"
/*photoContainer.style.background="url("+imgs[current]+")";
photoContainer.style.backgroundPosition="center";
photoContainer.style.backgroundSize="cover";
photoContainer.style.backgroundPositionY="20%";*/

const delay = ms => new Promise(res => setTimeout(res, ms));

slieCounter.innerText=(current+1)+"/"+images.length;

document.addEventListener('keydown', async el => {
    if(el.code==="ArrowRight"){
        photoContainer.style.opacity="0%";
        fullscreen.style.opacity=0;
        await delay(700);
        current=(current+1)%images.length;
        console.log(current);
        
        photoContainer.src=images[current].src;
        photoContainer.style.objectFit="cover";
        photoContainer.style.objectPosition="center top";
        photoContainer.style.opacity="100%";
        fullscreen.style.opacity=1;
        if(document.querySelector(".fullscreenWrapper").style.height == "100vh"){
            document.querySelector(".fWPhoto img").style.opacity=0;
            await delay(700);
            document.querySelector(".fWPhoto img").src= await images[current].src;
            document.querySelector(".fWPhoto img").style.opacity=1;
        }
        slieCounter.innerText=(current+1)+"/"+images.length;
    }
    if(el.code==="ArrowLeft"){
        photoContainer.style.opacity="0%";
        fullscreen.style.opacity=0;
        await delay(700);
        current=(current+imgs.length-1)%images.length;
        console.log(current);
        photoContainer.src=images[current].src;
        photoContainer.style.objectFit="cover";
        photoContainer.style.objectPosition="center top"
        photoContainer.style.opacity="100%";
        fullscreen.style.opacity=1;
        if(document.querySelector(".fullscreenWrapper").style.height == "100vh"){
            document.querySelector(".fWPhoto img").style.opacity=0;
            await delay(700);
            document.querySelector(".fWPhoto img").src= await images[current].src;
            document.querySelector(".fWPhoto img").style.opacity=1;
        }
        slieCounter.innerText=(current+1)+"/"+images.length;
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
    current=(current+1)%images.length;
    console.log(current);
    photoContainer.src=images[current].src;
    photoContainer.style.objectFit="cover";
    photoContainer.style.objectPosition="center top"
    photoContainer.style.opacity="100%";
    fullscreen.style.opacity=1;
    slieCounter.innerText=(current+1)+"/"+images.length;
})

left.addEventListener("click", async() => {
    photoContainer.style.opacity="0%";
    fullscreen.style.opacity=0;
    await delay(700);
    current=(current+imgs.length-1)%images.length;
    console.log(current);
    photoContainer.src=images[current].src;
    photoContainer.style.objectFit="cover";
    photoContainer.style.objectPosition="center top"
    photoContainer.style.opacity="100%";
    fullscreen.style.opacity=1;
    slieCounter.innerText=(current+1)+"/"+images.length;
})

document.querySelector(".fullscreen").addEventListener("click", async() => {
    document.querySelector(".fullscreenWrapper").style.height="100vh";
    console.log(document.querySelector(".fullscreenWrapper").style.height)
    document.querySelector(".close").style.opacity="0";
    document.querySelector(".close").style.display="inline";
    document.querySelector(".close").style.opacity="1";
    await delay(600)
    document.querySelector(".fWPhoto img").src= await images[current].src;
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