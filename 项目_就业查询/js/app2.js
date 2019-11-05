


let oneInfo={
    props:['info','infotop'],
    data:function(){
        return{

        }
    },
    methods:{

    },
    // 将组件内的top进行绑定,当需要增加新的组件时,返回样式 {top:`${140*i}px`}
    template:'' +
        '<div class="info" :style="infotop">' +
        '   <div class="info-name">中建三局集团有限公司</div>' +
        '   <div class="info-time">2019-09-03 14:00-17:30(周二)</div>' +
        '   <div class="info-pos">黄家湖校区教五楼52302教室</div>' +
        '   <div class="info-src"><a href="https://wust.91wllm.com/teachin/view/id/97340">招生简章</a></div>' +
        '</div>'
}





let app = new Vue({
    el:"#app",
    data:{
        items:['asd','fdsfwe']
    },
    methods:{
        infoTop:function (i) {
            return {top:`${140*i+30}px`}
        },
        timer:function () {
            console.log(1)
            // $.ajax({
            //     type:'POST',
            //     url:'',
            //
            // })
        }
    },
    mounted:function () {
        let items=document.querySelectorAll("#app .info");
        for(let i=0;i<this.items.length;i++){
            items[i].style.top=`${140*i+30}px`
        }

        this.$nextTick(function () {
            setInterval(this.timer,1000)
        })
    },
    // 将组件内的top进行绑定,当需要增加新的组件时,返回样式 {top:`${140*i}px`}
    template:`
<div id="app">
    <oneInfo v-for="(item,i) in items" :infotop="infoTop(i)"></oneInfo>
</div>`,
    components:{
        'oneInfo':oneInfo,
    }
})










