

function print(){
    let arr=[]
    for(let i=0;i<arguments.length;i++){
        arr.push(arguments[i])
    }
    console.log(arr)
}

function btnDown() {
    console.log('BTN DOWN!')
    let btn=document.getElementsByClassName('btn')[0]
    btn.style.cssText="left:1px;top:1px"
}
function btnUp() {
    console.log('BTN ON!')
    let btn=document.getElementsByClassName('btn')[0]
    btn.style.cssText="left:0px;top:0px"
}




