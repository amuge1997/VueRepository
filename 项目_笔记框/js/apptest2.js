
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


let selfInputConpoent={
    props:[],
    data:function(){
        return{
            inputText:'',
        }
    },
    methods:{
        textSubmit:function () {
            this.$emit('inputemit',this.inputText)
        }
    },
    template:
        '<div id="div-input">\n' +
        '    <div class="div-input-text">\n' +
        '       <input v-model="inputText" class="div-input-input" placeholder="input to create a note" onfocus="this.placeholder=\'\'" onblur="this.placeholder=\'input to create a note\'">\n' +
        '    </div>\n' +
        '    <div class="div-input-jia" @click="textSubmit()"></div>\n' +
        '    <div class="div-input-kuang" @click="textSubmit()"></div>\n' +
        '</div>'
}

let selfShowConpoent={
    props:[],
    data:function () {
        return {
            arrLen:3,
            arr: [{text: '0', time: '8.19.2019'}, {text: '1', time: '8.20.2019'}, {text: '2', time: '8.20.2019'}],
            updatePara:{
                hideIndex:3-1,
                newData:{text: '3', time: '8.19.2019'},
                waitTime:1000,
                lock:true
            },
        }
    },
    methods:{
        calStyle:function () {
            this.divShowLi=[]
            for (let i = 0; i < this.arr.length; i++) {
                this.divShowLi.push({top: (i * 90).toString() + 'px'})
            }
        },
        getStyle:function (index) {
            return this.divShowLi[index]
        },
        click:function () {
            if(!this.updatePara.lock){
                print('no')
                return
            }
            this.updatePara.lock=false

            let hideIndex=this.updatePara.hideIndex
            for(let i=0;i<this.arr.length;i++){
                let one=this.$refs.li[i]
                let top=one.style.top.split('')
                top.splice(-2,2)
                one.style.top=parseInt(top.join(''))+90+'px'
                if(i===hideIndex){
                    one.style.opacity='0'
                }
            }
            let templi=this.$refs.templi
            templi.style.opacity='1'
            templi.style.top='0px'

            let time=window.getComputedStyle(this.$refs.li[0]).transition
            let re=new RegExp('(all 0\\.[0-9]*s)|(all [0-9]*s)')
            time=re.exec(time)
            time=time[0]
            time=time.split('')
            time.splice(-1,1)
            time.reverse()
            time.splice(-4,4)
            time.reverse()
            time=time.join('')*1000
            var that=this
            setTimeout(function () {
                let one=that.$refs.li[hideIndex]
                one.style.transition='0s'
                one.style.top='0px'
                that.arr.splice(hideIndex,1,that.updatePara.newData)

                that.$nextTick(function () {
                    one.style.opacity='1'
                    templi.style.opacity='0'
                    templi.style.top = '-90px'
                    templi.style.transition='0s'

                    setTimeout(function () {
                        that.$refs.li[hideIndex].style.transition='1s'
                        that.$refs.templi.style.transition='1s'
                        if(hideIndex===0){
                            that.updatePara.hideIndex=that.arrLen-1
                        }
                        else {
                            that.updatePara.hideIndex-=1
                        }
                        that.updatePara.lock=true
                    },that.updatePara.waitTime)
                })
            },time)
        },
        showDate:function (index) {
            let arr=this.$refs.date
            arr[index].style.opacity='1'
            arr[index].style.top='-18px'
        },
        hideDate:function (index) {
            let arr=this.$refs.date
            arr[index].style.opacity='0'
            arr[index].style.top='-30px'
        },
    },

    template: '<div id="div-show" ref="main"  v-init:oth1="calStyle()">\n' +
        '            <div ref="templi" class="div-show-li" style="top:-90px;opacity: 0;z-index: -999">\n' +
        '                <div class="div-show-li-text" >{{this.updatePara.newData.text}}</div>\n' +
        '                <div class="div-show-li-line"></div>\n' +
        '                <div ref="date" class="div-show-li-date">{{this.updatePara.newData.time}}</div>\n' +
        '            </div>\n' +

        '            <div @click="click" ref="li" class="div-show-li" v-for="(v,i) in arr" :style="getStyle(i)" @mouseover="showDate(i)" @mouseleave="hideDate(i)">\n' +
        '                <div class="div-show-li-text" >{{v.text}}</div>\n' +
        '                <div class="div-show-li-line"></div>\n' +
        '                <div ref="date" class="div-show-li-date">{{v.time}}</div>\n' +
        '            </div>\n' +
        '        </div>',
    directives:{
        init:{

        }
    }
}

Vue.component('self-input',selfInputConpoent)
Vue.component('self-show',selfShowConpoent)

var app=new Vue({
    el:"#app",
    methods:{
        inputEmitFunc:function (data) {
            console.log(data)
        },
    }
})






