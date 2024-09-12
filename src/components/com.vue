<template>
    <div class="w-full h-full bg-indigo-900 relative overflow-hidden rounded-lg flex flex-col">
      <svg class="w-full h-full" viewBox="0 0 100 50">
        <g v-for="(option, index) in options" :key="index">
          <defs>
            <linearGradient :id="`gradient-${index}`" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" :class="`${option.color.split(' ')[0]} stop-color`" />
              <stop offset="100%" :class="`${option.color.split(' ')[1]} stop-color`" />
            </linearGradient>
          </defs>
          <path
            :d="createArc(index)"
            fill="none"
            :stroke="hoveredIndex === index ? `url(#gradient-${index})` : '#1e40af'"
            :stroke-width="arcWidth"
            class="transition-all duration-300 cursor-pointer"
            @mouseenter="setHoveredIndex(index)"
            @mouseleave="setHoveredIndex(null)"
          />
          <text
            :x="getTextPosition(index).x"
            :y="getTextPosition(index).y"
            fill="white"
            font-size="3"
            text-anchor="middle"
            :transform="`rotate(${getTextRotation(index)}, ${getTextPosition(index).x}, ${getTextPosition(index).y})`"
            class="pointer-events-none"
          >
            {{ option.label }}
          </text>
        </g>
      </svg>
      <div class="p-2 space-y-1">
        <div v-for="(option, index) in options" :key="`control-${index}`" class="flex items-center space-x-1">
          <span class="text-white text-xs w-6">{{ option.label }}:</span>
          <input
            type="range"
            :value="option.length"
            @input="updateLength(index, $event.target.value)"
            min="0"
            max="1"
            step="0.1"
            class="w-full h-2"
          />
          <span class="text-white text-xs w-8">{{ option.length.toFixed(1) }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  const options = ref([
    { label: '兴', color: 'from-blue-600 to-blue-400', length: 1 },
    { label: '青', color: 'from-blue-500 to-blue-300', length: 1 },
    { label: '江', color: 'from-teal-500 to-teal-300', length: 1 },
    { label: '西', color: 'from-teal-400 to-teal-200', length: 1 },
    { label: '某', color: 'from-green-400 to-green-200', length: 1 },
  ])
  
  const hoveredIndex = ref(null)
  
  const arcWidth = 9
  const gapWidth = 1
  
  const baseRadius = computed(() => {
    return 50 - (options.value.length * arcWidth + (options.value.length - 1) * gapWidth) / 2
  })
  
  const getRadius = (index) => {
    return baseRadius.value + index * (arcWidth + gapWidth)
  }
  
  const createArc = (index) => {
    const r = getRadius(index)
    const length = options.value[index].length
    const endAngle = Math.PI * length
    const largeArcFlag = length > 0.5 ? 1 : 0
    const endX = 50 - r * Math.cos(endAngle)
    const endY = r * Math.sin(endAngle)
    return `M 50 ${r} A ${r} ${r} 0 ${largeArcFlag} 1 ${endX} ${endY}`
  }
  
  const getTextPosition = (index) => {
    const r = getRadius(index)
    return { x: 50, y: r - 1 }
  }
  
  const getTextRotation = (index) => {
    return index * 5
  }
  
  const updateLength = (index, value) => {
    options.value[index].length = parseFloat(value)
  }
  
  const setHoveredIndex = (index) => {
    hoveredIndex.value = index
  }
  </script>