<template>
    <div class="container">
        <div class="header">
            <div>
              <i></i><span>照片上传成功</span>
            </div>
            <p>{{left}}张照片在排队，预计需要{{min}}分钟</p>
        </div>
        <div class="content">
           <img class="right-img" src="./assets/right.png" alt="" width="30px" height="20px">
           <img class="left-img" src="./assets/left.png" alt="" width="40px" height="40px">
           <div class="result-warp" v-if="isShowResult" style="position: relative;   ">
           <div style="height:100%">
                <img src="" id="show_img" style="position: absolute;width: 100%;left:0;top:0;height:100%;">

             <div class="white-content bigimg" id="wwww" style="position: relative; pointer-events: none; background-color: #F7FD18;
  background-size: 100% auto;
  background-position: bottom; ">

                <p class="date"><span >{{today}}</span></p>
                <p class="later">{{name}}<span class="will">将会在</span></p>
                <p class="one">一</p>
                <p class="address"><i class="address-img" id = 'address_id'></i>{{poss}}</p>
                <p class="wedding">{{quote}}</p>
                 <div src=""  class="qr_bottom" id="asdf" style="bottom:5px;right: 5px;width: 40px;height:40px"></div>
                 <img id="down_id" style="width: 60%;
    position: absolute;
    bottom: 5px;
    left: 7%;">
                </div>
                <div class="white-content"  style="position: absolute;left:0;top:0; pointer-events: none;">

                <p class="date"><span >{{today}}</span></p>
                <p class="later">{{name}}<span class="will">将会在</span></p>
                <p class="one">一</p>
                <p class="address"><i class="address-img"></i>{{poss}}</p>
                <p class="wedding">{{quote}}</p>
                </div>
                <div class="qr_bottom" style=" background: white;width: 100%;height: 60px;pointer-events: none;border: 3px solid;border-top: none;"></div>

           </div>
               

                <div class="look-more"><span @click="seeMore">查看"{{poss}}"更多的奇遇</span></div>

                <div class="btns" @click="playAgain">
                    <i class="again-img"></i>再玩一次
                </div>
                <div class="btns" @click="saveImg">
                    <i class="down-img"></i>长按保存图片
                </div>
           </div>
            
            <div class="guess" v-if="!isShowResult">
                <div class="guess-img"><i class="guess-img"> </i></div>
                <div class="meet-img"> <i class="meet-img"></i></div>
                <div class="name-input" >
                    <input type="text" name="name" value="" placeholder="请输入姓名" v-model="name">
                </div>
                <div class="start-guess"><span @click="startGuess">开始预测</span></div>
            </div>
        </div>
        <div class="footer">
            <div class="go-on"><span> <a :href="url" style="color: #fff;text-decoration: none"
            >继续免费打印</a></span></div>
            <div class="footer-tip">
                <p>如打印出现问题可随时联系本机器管理员</p>
                 <p>电话：<span >{{tel}}</span></p>
            </div>
            
        </div>
    </div>
</template>
<script>
import http from "./http.js";
import wenan from "./wenan";
import ghost from "./base64/ghost";
import down from "./base64/down";
import address from "./base64/address";
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getPic(){
   console.log(window.innerWidth);
   listenLongPress();
   var self = this;
          var w = window.innerWidth*0.9 -30;
          var h =w          
          var off = document.getElementById('wwww').getBoundingClientRect()
          var canvas = document.createElement('canvas');
          canvas.width = 5*w;
          canvas.height = 5*h;
          canvas.style.width = w + 'px';
          canvas.style.height = h + 'px';
          var context = canvas.getContext('2d');
          context.scale(5,5);
          context.translate(-off.left,-off.top)
          console.log(document.getElementById('wwww'));
          html2canvas(document.getElementById('wwww'),{canvas:canvas}).then(function(canvas){
            console.log(canvas);
               var dataUrl = canvas.toDataURL();
               // // document.getElementById('template').remove()
               document.getElementById('show_img').src = dataUrl
        //        self.touchFunc(document.getElementById('show_img'),'long',function () {  
        //      console.log('检测到长按保存时间');
        //  });
          })
}
var touchFunc = function(obj,type,func) {
    //滑动范围在5x5内则做点击处理，s是开始，e是结束
    var init = {x:5,y:5,sx:0,sy:0,ex:0,ey:0};
    var sTime = 0, eTime = 0;
    type = type.toLowerCase();
  
    obj.addEventListener("touchstart",function(){
        sTime = new Date().getTime();
        init.sx = event.targetTouches[0].pageX;
        init.sy = event.targetTouches[0].pageY;
        init.ex = init.sx;
        init.ey = init.sy;
        if(type.indexOf("start") != -1) func();
    }, false);
  
    obj.addEventListener("touchmove",function() {
        event.preventDefault();//阻止触摸时浏览器的缩放、滚动条滚动
        init.ex = event.targetTouches[0].pageX;
        init.ey = event.targetTouches[0].pageY;
        if(type.indexOf("move")!=-1) func();
    }, false);
  
    obj.addEventListener("touchend",function() {
        var changeX = init.sx - init.ex;
        var changeY = init.sy - init.ey;
        if(Math.abs(changeX)>Math.abs(changeY)&&Math.abs(changeY)>init.y) {
            //左右事件
            if(changeX > 0) {
                if(type.indexOf("left")!=-1) func();
            }else{
                if(type.indexOf("right")!=-1) func();
            }
        }
        else if(Math.abs(changeY)>Math.abs(changeX)&&Math.abs(changeX)>init.x){
            //上下事件
            if(changeY > 0) {
                if(type.indexOf("top")!=-1) func();
            }else{
                if(type.indexOf("down")!=-1) func();
            }
        }
        else if(Math.abs(changeX)<init.x && Math.abs(changeY)<init.y){
            eTime = new Date().getTime();
            //点击事件，此处根据时间差细分下
            if((eTime - sTime) > 300) {
                if(type.indexOf("long")!=-1) func(); //长按
            }
            else {
                if(type.indexOf("click")!=-1) func(); //当点击处理
            }
        }
        if(type.indexOf("end")!=-1) func();
    }, false);
};

var listenLongPress =  function () { 
    var show_img = document.getElementById('show_img');
    console.log(show_img);
        touchFunc(document.getElementById('show_img'),'long',function () {  
             http.get('guessResult*saveImage');
         });
 }
export default {
    data () {
      return {
        name:'',
        isShowResult:false,poss:'',quote:'',today:'',_ig:'',url:'',left:'',min:'',tel:'',gps:''
      }
    },
     mounted(){
        
        
          this.getData();
          var now =new Date()
          var time = now.getFullYear() +'年'+ getRandomIntInclusive(1,12)+'月'
          this.today=time
     },
     methods: {
       getData (){
        // 1: left; 2: min; 3: url; 4: tel
         console.log(this.$route.params);
          let name = this.$route.params.name;
          this._ig = this.$route.query._ig || 'unknown';

this.url = this.$route.query.url || 'http://chat.in66.com';
this.left = this.$route.query.left || '2';
this.min = this.$route.query.right || '2';
this.tel = this.$route.query.tel || '0571-86009029';
          if(name) {
              this.name = name;
          } else  {

          }
       },
       playAgain(){
           http.get('guessResult*playAgain');
          this.isShowResult = false;
          this.name = "";
       },
       saveImg(){
           
       },
       seeMore(){
        http.get('guessResult*lookMore');
        window.location.href=`https://chat.in66.com/pages/peel_hot/list.html?channel=forecast_jump&location=${this.poss}&location_gps=${this.gps}`
       },
       startGuess(){
           if(this.name.length == 0 || this.name.length>5){
               return;
           }
           
         http.get('guessInput*startGuess');
         this.isShowResult = true;
         var w = wenan[getRandomIntInclusive(0,wenan.length-1)]
      this.poss = w.name
      this.quote = w.quotes[getRandomIntInclusive(0,w.quotes.length-1)]
        this.gps = w.gps.join()


      setTimeout(()=>{
        document.getElementById('asdf').style.visibility = 'hidden'
 new QRCode(document.getElementById('asdf'),{text:'https://chat.in66.com/pages/promo/forecast.html?_ig=promo_forecast&channel='+this._ig,width:160,height:160})
         document.getElementById("wwww").style.backgroundImage = "url("+ghost+")"
           document.getElementById("address_id").style.backgroundImage = "url("+address+")"
            document.getElementById("down_id").src = down



      },300)

    
         setTimeout(()=>{
          document.getElementById('asdf').style.visibility = 'visibled'
          getPic()
         },1000)
       }
     }
};

</script>

<style lang="scss">
.bigimg{
  // background-image: url(./assets/ghost.png);
}
#asdf img{
  width: 40px;
  height: 40px;
}
.qr_bottom{
    width: 50px;
    position: absolute;
    bottom: 0px;
    right: 0px
}
#myResult {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /*margin-top: 60px;*/
 height: 100%;
  width: 100%;
  font-weight: bold;
}
body{
  height: 100%;
}

.container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .header {
        text-align: center;
        margin-top: 20px;
        color: #2e2e2e;
        font-size: 20px;
        
        span {
            display: inline-block;
            line-height: 30px;
        }
        

        p {
            margin:3px 0;
            font-size: 14px;
        }
        i {
            display: inline-block;
            width: 30px;
            height: 30px;
            vertical-align: middle;
            margin-right: 10px;
            background-image: url(./assets/success.png);
            // background-color: #CEB075;
            background-size: 100% 100%;
            border-radius: 26px;
            // margin-top: -2px;
            margin-bottom: 8px;
        }
    }

    .content {
        margin: 0 auto;
        width: 90%;
        height: 26rem;
        background-color: #F7FC18;
        border: solid 3px #000;
        padding: 15px 10px 0 10px;
        position: relative;
        input:focus::-webkit-input-placeholder { color:transparent; }
input:focus:-moz-placeholder { color:transparent; } /* FF 4-18 */
input:focus::-moz-placeholder { color:transparent; } /* FF 19+ */
input:focus:-ms-input-placeholder { color:transparent; } /* IE 10+ */
        .result-warp {
            width: calc(90vw - 30px);
            height: calc(90vw - 30px);
        }
        .right-img {
            position: absolute;
            top: 10%;
            right: -6%;
        }
        .left-img {
            position: absolute;
            top: -8%;
            left: 2%;
        }
        .white-content {
            width: 100%;
            height: 100%;
            border: solid 3px #000;
            background-color: #fff;

            .date {
                margin: 5% 0 6% 6%;
                /*width: 78px;*/
                
                }
            .date span {
                padding: 5px 15px;
                border: solid 1px #000;
                border-radius: 16px;
                font-size: 12px;
                background-color: #F7FC18;
                font-weight: bold;
            }
            .later {
                margin: 5% 0 2% 5%;
                font-weight: bold;
                fonte: 32px;
            }
            .later span {
                margin-left: 3px;
                font-size: 14px;
            }
            .one {
                margin: -5% 0 0.3rem 5%;
                color: #4471E6;
                font-size: 32px;
                height: 2rem;
            }

            .address-img {
                width: 20px;
                height: 27px;
                background-image: url(./assets/address1.png);
                background-size: 100% 100%;
                display: inline-block;
                margin-right: 5px;
            }
            .address {
                margin: 0% 0 4% 5%;
                color: #4471E6;
                font-weight: bold;
                color: #000;
                text-align: center;
                font-size: 1.5rem;
            }
            .wedding {
                margin: 0% 0 2% 5%;
                color: #4471E6;
                font-weight: bold;
                text-align: center;
                font-size: 1.3rem;
            }
        }

        .look-more {
            margin: 0 auto;
            text-align: center;
            width: calc(70vw - 30px);
            position: relative;
            bottom: 23px;
            span {
                color: #fff;
                background-color: #4471E6;
                border: solid 2px #000;
                padding: 10px 14px ;
                border-radius: 25px;
                font-weight: bold;
                display: block;
            }
        }

        .btns {
            float: left;
            display: inline-block;
            width: 50%;
            text-align: center;
            font-weight: bold;
            i {
                background-size: 100% 100%;
                display: inline-block;
                vertical-align: middle;
                margin-right: 10px;
                margin-bottom: 3px;
            }
            .again-img {
                 width: 15px;
                 height: 15px;
                 background-image: url(./assets/refresh.png);
            }
            .down-img {
                 width: 15px;
                 height: 15px;
                 background-image: url(./assets/download.png);
            }
        }

        .guess {
            .guess-img {
                background-image: url(./assets/2017.png) ;
                background-repeat: no-repeat;
                background-position-x : center;
                background-size: 70% 100%;
                width: 100%;
                height: 120%;
                display: inline-block;
                margin-bottom: -20px;
            }
            .meet-img {
                background-image: url(./assets/qiyu.png) ;
                background-repeat: no-repeat;
                background-position-x : center;
                background-size: 90% 100%;
                width: 100%;
                height: 120%;
                display: inline-block;
            }
            .name-input {
                height: 50px;;
                margin-top: 10%;
                text-align: center;
                .name-input input  {
                    height: 100%;
                    border: solid 3px #000;
                    border-radius: 10px;
                    width: 75%;
                    font-size: 20px;
                    text-align: center;
                }
            }
                
            .start-guess {
                margin: 0 auto;
                text-align: center;
                width: 75%;
                margin-top: 10%;
                span {
                    color: #000;
                    background-color: #F7FC18;
                    border: solid 2px #000;
                    padding: 10px 14px ;
                    border-radius: 25px;
                    font-weight: bold;
                    display: block;
                }
            }
        }
    }

    .footer {
        text-align: center;
        padding: 20px 0 0 0 ;
        border: dashed 1px #DBDBDB;
        .go-on {
            margin-bottom: 20px;
             span {
            width: 50%;
            padding: 15px 0;
            display: inline-block;
            background-color: #E25447;
            color: #fff;
            line-height: 100%;
            border-radius: 5px;
            font-size: 18px;
        }
        }
       
        .footer-tip {
            margin-bottom: 20px;
             p{
                margin:0 0 ;
                color: #A8A5A5;
                font-size: 14px;
            }
            span {
                color: #B8DDF8;
                text-decoration: underline;
            }
        }
       

    }
}

.demoSpan1{
    width:26px;
}

.demoSpan1:before{content:''; height:16px; width:16px; border:5px solid #333; display:block; position:absolute; top:2px; left:0px; z-index:1; line-height:26px; border-radius:40px;-webkit-border-radius:40px;-moz-border-radius:40px; color:#fff; text-align:center;}

.demoSpan1:after{content:''; height:0px; width:0px; display:block; position:absolute; bottom:2px; left:3px; border:10px transparent solid; border-top-color:#333; border-width:15px 10px 0px 10px; }

.icon {
    i {
        display: inline-block;
        font-size: 1.6rem;
    }
    .span-img{height:40px; width:30px; display:inline-block;} 

    // margin-bottom: 0px;
    position: relative;
    height: 40px;
    width: 340px;
    padding-right: 10px;
}





</style>