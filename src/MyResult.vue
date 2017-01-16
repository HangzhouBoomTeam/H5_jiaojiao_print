<template>
    <div class="container">
        <div class="header">
            <div>
              <i></i><span>照片上传成功</span>
            </div>
            <p>8涨照片在排队，预计需要5分钟</p>
        </div>
        <div class="content">
            <i class="left-img"></i>
            <i class="right-img"></i>
            <div class="white-content">
              <p class="date"><span >2017年2月</span></p>
              <p class="later">过儿<span class="will">将会在</span></p>
              <p class="one">一</p>
              <p class="address"><i class="address-img"></i>印度尼西亚巴厘岛</p>
              <p class="wedding">举行盛大的婚礼</p>
            </div>

             <div class="look-more"><span>查看 “巴厘岛” 更多的奇遇</span></div>

            <div class="btns">
                <i class="again-img"></i>再玩一次
            </div>
            <div class="btns">
                <i class="down-img"></i>长按保存图片
            </div>
        </div>
        <div class="footer">
            <div class="go-on"><span>继续免费打印</span></div>
            <div class="footer-tip">
                <p>如打印出现问题可随时联系本机器管理员</p>
                 <p>电话：<span >0571-86009029</span></p>
            </div>
            
        </div>
    </div>
</template>
<script>
// export default {
//     data () {
//       return {
//         name:'',
//         isMy:true
//       }
//     },
//      mounted(){
//           this.getData();
//           console.log(window.innerWidth);
//           var w = window.innerWidth*0.8;
//           var h = window.innerHeight*0.5;
//           console.log(w,h);
//           if (w>h) {h=w*1.3}
//           var canvas = document.createElement('canvas');
//           canvas.width = 5*w;
//           canvas.height = 5*h;
//           canvas.style.width = w + 'px';
//           canvas.style.height = h + 'px';
//           var context = canvas.getContext('2d');
//           context.scale(4,4);
//           context.translate(0,-h*0.1)
//           html2canvas(document.getElementById('template'),{canvas:canvas}).then(function(canvas){
//             console.log(canvas);
//                var dataUrl = canvas.toDataURL();
//                self.src = dataUrl
//                // document.getElementById('template').remove()
//                document.getElementById('show_img').src = dataUrl
//           })
     
//      },
//      methods: {
//        getData (){
//          console.log(this.$route.params);
//           let name = this.$route.params.name;
//           if(name) {
//               this.name = name;
//           } else  {

//           }
//        },
//        playAgain(){
//           this.$router.replace({
//             name:'home'
//           });
//        },
//        share(){

//        },
//        mePlay(){
//          this.$router.replace({
//             name:'home'
//           });
//        }
//      }
// };

</script>

<style lang="scss">
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
  @import 'assets/result.scss';

</style>