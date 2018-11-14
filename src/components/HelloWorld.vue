<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>{{info}}</h3>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      info:null
    }
  },
  mounted(){

    axios
      .get('/winner')
      .then(res => {

        // Cleaning the data and removing impurities

        // let index  = res.data.indexOf('results');
        // let newArray = res.data.slice(index+8,-2);
        // newArray = JSON.parse(JSON.stringify(newArray));
        // newArray = newArray.replace(/'/g, '"')
        //           .replace(/(\w+):/g, '"$1":');
        //
        // for(var i =0;i<newArray.length;i++){
        //   //remove back to back double quotes
        //   if(newArray[i]==='"'&&newArray[i+1]==='"'){
        //     newArray = newArray.slice(0,i)+newArray.slice(i+1,newArray.length);
        //   }
        //   //Turn all double interior quotes in http to single
        //   if(newArray[i-1]==="p"&&newArray[i+1]===":"){
        //     newArray = newArray.slice(0,i)+"'"+newArray.slice(i+1,newArray.length);
        //   }
        //   //Turn all double interior quotes to single
        //   if(newArray.charCodeAt(i-1)>64&&newArray.charCodeAt(i-1)<123&&newArray.charCodeAt(i+1)>64&&newArray.charCodeAt(i+1)<123&&newArray[i]==='"'){
        //     console.log(newArray[i]);
        //     newArray = newArray.slice(0,i)+"'"+newArray.slice(i+1,newArray.length);
        //   }
        // }
        // //Turn outlier to single quote "smilin"
        // let smilinIndex = newArray.indexOf('"Smilin');
        // newArray = newArray.slice(0,smilinIndex+7)+ "'" +newArray.slice(smilinIndex+8);
        // //Turn outlier to no quote "or"
        // let orIndex = newArray.indexOf('"or"');
        // console.log(orIndex)
        // newArray = newArray.slice(0,orIndex-1) + ' or' + newArray.slice(smilinIndex+4);

        // console.log("RESPONSE", newArray);
        this.info = res
      })
      .catch(error =>{
        console.log(error)
      })
      // .then(response => (this.info = response))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
