let container = document.querySelector(".container");

const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}

let imageArray = [
    "https://plus.unsplash.com/premium_photo-1693881702158-092b00136f76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    "https://images.unsplash.com/photo-1674233012799-7d4b459fd4d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://plus.unsplash.com/premium_photo-1673375651830-3e9a83284a21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://plus.unsplash.com/premium_photo-1673375651830-3e9a83284a21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1694120341137-182907e87f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1694107513184-c93cf369b85e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4N3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1694396641992-193eb434d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5OXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1694512779470-c62f0bf76501?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://plus.unsplash.com/premium_photo-1667126445419-4c8870bf9597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzB8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1693937719030-3a7dff2bdab6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNzh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
]

container.addEventListener("mousemove", throttleFunction((dets) => {
    let imageDiv = document.createElement('div');
    imageDiv.classList.add("image-div");
    container.appendChild(imageDiv);
    imageDiv.style.left = (dets.clientX - 300) + 'px'
    imageDiv.style.top = (dets.clientY - 250) + 'px'

    let ranNum = Math.floor(Math.random() * imageArray.length);
    let pics = imageArray[ranNum];

    let image = document.createElement("img");
    image.classList.add("images");
    imageDiv.appendChild(image);
    image.setAttribute('src', pics);

    gsap.to(image,{
        y:"0%",
        ease:"expo",
        duration:1
    });

    gsap.to(image,{
        y:"100%",
        delay:1,
        ease:"expo",
        duration:0.8
    });

    setTimeout(() => {
        imageDiv.remove();
        imageDiv.style.transition = "all ease-out 0.2s"
    }, 800);

}, 200));