<template>
    <div class="HisUnder">
      <div class="HisUnderIn">
        <ul>
          <li v-for="(value,index) in parentHis" :key="index">
            <h3>{{value.title}}</h3>
            <p>{{value.content}}</p>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HisUnder',
  props: {
    parentHis: {
      type: Array,
      default: () => [],
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
  .HisUnder{
    width:880px;
    height:565px;
    background:rgba(238,238,238,1);
    border:5px solid rgba(204, 204, 204, 1);
    box-shadow:0px 1px 5px 3px rgba(0, 0, 0, 0.14);
    border-radius:10px;
    margin: 54px auto 0 auto;
    .HisUnderIn{
      box-sizing: border-box;
      width:880px;
      height:565px;
      background:rgba(238,238,238,1);
      border:5px solid black;
      box-shadow:0px 1px 5px 3px rgba(0, 0, 0, 0.14);
      border-radius:10px;
      padding: 40px;
      ul{
        height: 480px;
        width: 768px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        li{
          margin-right: 15px;
          height: 140px;
          width: 320px;
          display: inline-block;
          font-size:20px;
          border-left: 2px solid black;
          padding-left: 58px;
          h3{
            margin-bottom: 20px;
          }
          p{
            margin-bottom: 20px;
            width: 300px;
          }
        }
      }
    }
  }

</style>
