const userinput = document.getElementById("userinput")
const btn = document.getElementById("btn")
const showtext = document.getElementById("showtext")
let newX = 0 ,
newY = 0,
startX = 0 , 
startY = 0;



btn.addEventListener("click", function(){
    const newpost  = document.createElement("div")
    newpost.textContent = userinput.value
    newpost.id = "card";
    showtext.appendChild(newpost)
    userinput.value = "";

    newpost.addEventListener("click",function(){
        showtext.removeChild(newpost)
    })

})

newpost.addEventListener("mousedown", function(){
    startX = e.clientX
    startY = e.clientY
    document.addEventListener("mousemove",function(){
        newX = startX - e.clientX
        newY = startY - e.clientY

        startX = e.clientX
        startY = e.clientY
        
        card.style.top = startY + "px "
        card.style.left = startX + "px "

        console.log({newX,newY})

        console.log({startX,startY})
    })
    document.addEventListener("mouseup",function(){
        
    })
    
})



