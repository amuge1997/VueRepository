
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
        return{
            arr:[{text:'hello world',time:'8.19.2019'},{text:'你好，世界',time:'8.20.2019'},{text:'New Day',time:'8.20.2019'}],
        }
    },
    methods:{
        calStyle:function () {
            this.styleObj={
                divShowLi:[],
            }
            for(let i=0;i<this.arr.length;i++){
                this.styleObj.divShowLi.push({top:(i*90).toString()+'px'})
            }
        },
        getStyle:function (index,sel) {
            switch (sel) {
                case 'div-show-li':return this.styleObj.divShowLi[index]
            }
        },
        showDate:function (index) {
            let arr=this.$refs.main.getElementsByClassName('div-show-li-date')
            arr[index].style.opacity='1'
            arr[index].style.top='-18px'
        },
        hideDate:function (index) {
            let arr=this.$refs.main.getElementsByClassName('div-show-li-date')
            arr[index].style.opacity='0'
            arr[index].style.top='-30px'
        },
    },
    template: '<div id="div-show" ref="main" v-bind:oth="calStyle()">\n' +
        '            <div class="div-show-li" v-for="(v,i) in arr" :style="getStyle(i,\'div-show-li\')" @mouseover="showDate(i)" @mouseleave="hideDate(i)">\n' +
        '                <div class="div-show-li-text" >{{v.text}}</div>\n' +
        '                <div class="div-show-li-line"></div>\n' +
        '                <div class="div-show-li-date">{{v.time}}</div>\n' +
        '            </div>\n' +
        '        </div>'
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