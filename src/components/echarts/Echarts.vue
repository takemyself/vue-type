<template>
    <div class="echarts">
        <div>111</div>
        <div style="width: 400px;height: 400px;" id="map"></div>
    </div>
</template>
<script>
    export default {
        name: 'Echarts',
        mounted () {
            var echarts = require('echarts');
// 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('map'));
// 绘制图表
            myChart.setOption({
                title: {
                    text: 'ECharts'
                },
                tooltip: {
                    trigger: 'axis'
                },
                xAxis: {
                    type: 'value',
                    name: 'H'
                },
                yAxis: {
                    name: 'AR',
                    type: 'value'
                },
                series: [{
                    type: 'line',
                    data: [
                        [0.023132154,0.546458798],
                        [0.565,0.4798781],
                        [1.107843646,0.413297402],
                        [1.65,0.346716704]
                    ]
                }]
            });
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>