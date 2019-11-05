function print(){
    let arr=[]
    for(let i=0;i<arguments.length;i++){
        arr.push(arguments[i])
    }
    console.log(arr)
}
function sleep(time){
    var now = new Date();
    var exitTime = now.getTime() + time;
    while (true) {
        now = new Date();
        if (now.getTime() > exitTime)
            return;
    }
}


let playbutton={
    props:[],
    data:function () {
        return {
            isPlay:true,
            hideshowPara:{
                flag:false,
                arr:[]
            }
        }
    },
    mounted:function(){

    },
    methods:{
        initShowHidePara:function(){
            if(!this.hideshowPara.flag){
                let arr=[]
                arr.push(window.getComputedStyle(this.$refs.play).width)
                arr.push(window.getComputedStyle(this.$refs.pause).width)
                arr.push(window.getComputedStyle(this.$refs.play).marginLeft)
                arr.push(window.getComputedStyle(this.$refs.pause).marginLeft)
                this.hideshowPara.flag=!this.hideshowPara.flag
                this.hideshowPara.arr=arr
                return arr
            }else {
                return this.hideshowPara.arr
            }
        },
        click:function () {
            let isPlay=this.isPlay
            let play=this.$refs.play
            let pause=this.$refs.pause

            let arr=this.initShowHidePara()
            let showsize=arr[0]
            let hidesize=arr[1]
            let showmargin=arr[2]
            let hidemargin=arr[3]

            if(isPlay){
                play.style.cssText=`opacity:0;width:${hidesize};height:${hidesize};margin-top:${hidemargin};margin-left:${hidemargin}`
                pause.style.cssText=`opacity:1;width:${showsize};height:${showsize};margin-top:${showmargin};margin-left:${showmargin}`
                this.isPlay=!this.isPlay
            }else {
                play.style.cssText=`opacity:1;width:${showsize};height:${showsize};margin-top:${showmargin};margin-left:${showmargin}`
                pause.style.cssText=`opacity:0;width:${hidesize};height:${hidesize};margin-top:${hidemargin};margin-left:${hidemargin}`
                this.isPlay=!this.isPlay
            }
        }
    },
    template:
        '        <div class="playbutton">\n' +
        '            <div class="play" ref="play"></div>\n' +
        '            <div class="pause" ref="pause"></div>\n' +
        '            <div class="over" @click="click"></div>\n' +
        '        </div>',
}

let main=new Vue({
    el:'#main',
    data:{

    },
    methods:{

    },
    components:{
        'playbutton':playbutton
    }
})












