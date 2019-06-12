<template>
  <div class="hello">
    <router-link :to="{path: '/echarts'}">hi</router-link>
    <div style="width: 400px;height: 400px;" id="map"></div>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  mounted () {

  },
  props: {
    msg: String
  }
}
</script>