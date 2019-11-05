
let oneInfo={
    props:['infodata','infotop'],
    data:function(){
        return{

        }
    },
    methods:{

    },
    // 将组件内的top进行绑定,当需要增加新的组件时,返回样式 {top:`${140*i}px`}
    template:'' +
        '<div class="info" :style="infotop">' +
        '   <div class="info-name">{{infodata.id}}.{{infodata.name}}</div>' +
        '   <div class="info-time">{{infodata.time}}</div>' +
        '   <div class="info-pos">{{infodata.position}}</div>' +
        '   <div class="info-src"><a :href="infodata.src">招生简章</a></div>' +
        //'   <div class="info-manpos" v-for="(p,i) in infodata.manpos" :style=""></div>' +
        '</div>'
}

'' +
'<div class="info" :style="infotop">' +
'   <div class="info-name">{{infodata.id}}.{{infodata.name}}</div>' +
'   <div class="info-time">{{infodata.time}}</div>' +
'   <div class="info-pos">{{infodata.position}}</div>' +
'   <div class="info-src"><a :href="infodata.src">招生简章</a></div>' +
'</div>'


let app = new Vue({
    el:"#app",
    data:{
        items:[
            {
                name:'中建三局集团有限公司',
                id:'1',
                position:'黄家湖校区教五楼52302教室',
                src:'https://wust.91wllm.com/teachin/view/id/97340',
                time:'2019-09-03 14:00-17:30(周二)',
            }
        ]
    },
    methods:{
        infoTop:function (i) {
            return {top:`${140*i+30}px`}
        },
        updateData:function () {
            let url="http://"+window.location.host+"/data"
            let that=this
            $.ajax({
                type : "POST", //提交方式
                url : url,//路径
                success : function(result) {   //成功后调用
                    let resArr=JSON.parse(result)
                    let newArr=[]
                    for(let i=0;i<resArr.length;i++){
                        newArr.push({id:resArr[i].id,name:resArr[i].name,time:resArr[i].time,position:resArr[i].position,src:resArr[i].src})
                    }
                    that.items=newArr
                }
            })
        }
    },
    mounted:function () {
        //this.updateData()   // 从服务器获取参数

        // let that=this
        // setTimeout(that.updateData,3000)     // 更新
    },
    // 将组件内的top进行绑定,当需要增加新的组件时,返回样式 {top:`${140*i}px`}
    template:`
<div id="app">
    <oneInfo v-for="(item,i) in items" :infotop="infoTop(i)" :infodata="item"></oneInfo>
</div>`,
    components:{
        'oneInfo':oneInfo,
    }
})










