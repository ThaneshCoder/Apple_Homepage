let b=document.querySelectorAll(".d")
let img=document.querySelector("#img")

let arr=[
"https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/02/The-Best-New-Movies-on-Apple-TV.jpg",
"https://9to5mac.com/wp-content/uploads/sites/6/2021/02/Apple-TV-Plus-2021.jpg?quality=82&strip=all",
"https://techcrunch.com/wp-content/uploads/2019/03/Apple-introduces-apple-tv-plus-03252019.jpg?w=730&crop=1",
"https://ts2.space/wp-content/uploads/2023/10/Is-Apple-TV-good-for-movies_653d7d90a6ce8.jpg",
"https://hd-report.com/wp-content/uploads/2019/12/apple-5-dollar-movies-dec-11-2019.jpg",
"https://photos5.appleinsider.com/gallery/38063-72065-899DD94A-A051-4F7F-8296-3637A153C1B1-xl.jpg"
]

let i=1;
function corosal(a) {
    i=a;
    if(i==b.length){
        i=0;
        b[5].style.backgroundColor="rgb(136, 136, 136)"
        console.log("n");
    }else{
        b[i-1].style.backgroundColor="rgb(136, 136, 136)"
        console.log("y");
    }
    img.innerHTML=` <img src="${arr[i]}" alt="" height="100%" width="100%">`
    
    b[i].style.backgroundColor="black"

    i++;
}

b[0].addEventListener("click",()=>{
    corosal(0)
})
b[1].addEventListener("click",()=>{
    corosal(1)
})
b[2].addEventListener("click",()=>{
    corosal(2)
})
b[3].addEventListener("click",()=>{
    corosal(3)
})
b[4].addEventListener("click",()=>{
    corosal(4)
})
b[5].addEventListener("click",()=>{
    corosal(5)
})

setInterval(()=>{
    corosal(i)

},2000)



