<script setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts";

const chartContainer = ref(null);
let chart = null;

onMounted(() => {
  if (chartContainer.value) {
    chart = echarts.init(chartContainer.value);
    
    const data = [
      { name: '兴', value: 95 },
      { name: '青', value: 80 },
      { name: '江', value: 65 },
      { name: '西', value: 50 },
      { name: '其', value: 35 }
    ];

    const option = {
      backgroundColor: '#000033',
      polar: {
        radius: ['30%', '80%'],
        center: ['50%', '70%'], // 调整中心位置，使其看起来像半圆
      },
      angleAxis: {
        max: 100,
        startAngle: 180, // 从180度开始
        clockwise: false,
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { show: false },
        splitLine: { show: false }
      },
      radiusAxis: {
        type: 'category',
        data: data.map(item => item.name),
        z: 10,
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: {
          interval: 0,
          margin: 5,
          fontSize: 12,
          color: '#fff',
          align: 'center'
        }
      },
      series: [{
        type: 'custom',
        coordinateSystem: 'polar',
        renderItem: (params, api) => {
          const value = api.value(0);
          const categoryIndex = api.value(1);
          const startAngle = Math.PI;
          const endAngle = Math.PI + Math.PI * (value / 100);
          const radius = ['30%', '80%'];
          const r0 = radius[0];
          const r = radius[1] - (categoryIndex * 10);

          return {
            type: 'sector',
            shape: {
              cx: params.coordSys.cx,
              cy: params.coordSys.cy,
              r0: r0,
              r: r,
              startAngle: startAngle,
              endAngle: endAngle
            },
            style: api.style({
              fill: categoryIndex === 0 ? new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                { offset: 0, color: '#1E90FF' },
                { offset: 1, color: '#00FF7F' }
              ]) : 'rgba(100, 100, 150, 0.3)'
            }),
            emphasis: {
              style: {
                fill: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  { offset: 0, color: '#1E90FF' },
                  { offset: 1, color: '#00FF7F' }
                ])
              }
            }
          };
        },
        data: data.map((item, index) => [item.value, index])
      }],
      tooltip: {
        formatter: '{b}: {c}%'
      }
    };

    chart.setOption(option);
  }
});
</script>

<template>
  <div class="chart-container">
    <div ref="chartContainer" style="width: 100%; height: 300px;"></div>
  </div>
</template>

<style scoped>
.chart-container {
  width: 100%;
  height: 300px;
}
</style>
