<template>

</template>

<script>
export default {
  data () {
    return {
      name: ''
    }
  },
  methods:{
    startGuess(){
      if(this.name.length === 0) {
          return ;
      }
      this.$router.push({
                    name: 'my',
                    params:{name:this.name,isMy:true}
                });
    }
  }
}

</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /*margin-top: 60px;*/
 height: 100%;
  width: 100%;
}

@media screen and (max-width: 330px) {
    html {
      font-size: 12px;
    }
}
@media (min-width: 331px) and (max-width: 380px) {
    html {
      font-size: 16px;
    }
}
@media (min-width: 381px) and (max-width: 500px) {
    html {
      font-size: 20px
    }
}
*{
  box-sizing: border-box;
}

.background {
  height: 100%;
  width: 100%;
  background-color: #fff;
  
}
.back-quare {
  
  background-size: 20rem 20rem;
  border: solid 1px #f8f8f8;
  background-image:
     -webkit-repeating-linear-gradient(0deg, #eee, #eee 1px, transparent 0px, transparent 12px),
     -webkit-repeating-linear-gradient(90deg, #eee, #eee 1px, transparent 0px, transparent 12px);
}
.five-mao {
  width: 100%;
  height: 100%;
  background-image: url(./assets/5mao.png);
  background-size: 100% 100%;
  position: relative;
  z-index: 1;
  margin: 0 auto;
}
.line-img {
  margin: -1px 50%-3px;
  width: 2px;
  height: 80px;
  background-color: #000;
  /*background-image: url(./assets/line.png);
  background-size: 100% 100%;*/
  display: block;
  position: relative;
}
.cicle {
  position: absolute;
  padding: 3px;
  bottom: -1px;
  left: -4px;
  background-color: #F8B619;
  border-radius: 6px;
  border: solid 2px #000;
  display: inline-block;
}
.run-img {
  width: 33%;
  height: 25%;
  background-image: url(./assets/run.png);
  background-size: 100% 100%;
  display: inline-block;
  bottom: -90px;
  position: absolute;
  z-index: 3;
}
.card {
  width: 75%;
  height: 70%;
  border: solid 3px #000;
  border-radius: 2%;
  position: absolute;
  top: 60px;
  left: 12.5%;
}
.red-back {
  background-color: #F6414A;
  
  transform:rotate(5deg);
-ms-transform:rotate(5deg); 	/* IE 9 */
-moz-transform:rotate(7deg); 	/* Firefox */
-webkit-transform:rotate(5deg); /* Safari 和 Chrome */
-o-transform:rotate(7deg); 
  
}
.yellow-back {
  background-color: #F7FC18;
}
.right-img {
  position: absolute;
  top: 15%;
  right: -10%;
}
.guess {
    width: 100%;
    height:15%;
    margin-top: 10%;
    /*padding: 20% 0 0 20%;*/
    /*margin: 10% 25% 2% 25%;;*/
    /*background-size: 30px 30px;
    background-image: url('./assets/guess.png');*/
}
.meet {
    width: 100%;
    height:18%;
    margin-top: -10px;
    /*margin-top: 10%;*/
}
.meet-img {
  background-image: url(./assets/qiyu.png) ;
  background-repeat: no-repeat;
  background-position-x : center;
  background-size: 90% 100%;
  width: 100%;
  height: 100%;
  display: inline-block;
}
.guess-img {
  background-image: url(./assets/2017.png) ;
  background-repeat: no-repeat;
  background-position-x : center;
  background-size: 70% 100%;
  width: 100%;
  height: 100%;
    display: inline-block;

  /*width: 100%;
  height: 100%;*/

}
.left-img {
   position: absolute;
  top: -5%;
  left: 5%;
}

.name-input {
  height: 10%;
  margin-top: 20%;
  text-align: center;
}
.name-input input  {
  height: 100%;
  border: solid 3px #000;
  border-radius: 10px;
  width: 75%;
  font-size: 20px;
  text-align: center;
  z-index: 9;
  position: relative;
}
nput::-ms-input-placeholder{text-align: center;color: #000}
input::-webkit-input-placeholder{text-align: center; color: #000}
input:focus{
  outline: none;
}

.tip {
  margin:  10% 12.5% 0 12.5%;
  font-weight: bold;
}
.tip-detail {
  color: #A7A428;
  margin: 2px 12.5%;
  font-size: 14px;
}
.start-btn {
     height: 50px;
    bottom: -25px;
    width: 100%;
    text-align: center;
    z-index: 2;
    position: absolute;

}
.start-span {
  display: inline-block;
  margin-top: 11px;
}
.start-btn-img {
  background-image: url(./assets/start.png);
  background-repeat: no-repeat;
  display: inline-block;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  line-height: 100%;
  width: 144px;
  height: 50px;
  background-size: 100% 100%;
  /*padding: 10px 20px;*/
  background-color:inherit;
    /*border: solid 2px #000;
    border-radius: 20px;
    box-shadow:0 5px #4471E6;
    background-color: #F7FD18;*/

}
</style>
