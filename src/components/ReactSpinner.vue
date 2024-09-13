<template>
  <div class="react-spinner">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" class="react-logo">
      <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
      <g stroke="#61dafb" stroke-width="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'ReactSpinner'
}
</script>

<style scoped>
.react-spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.react-logo {
  width: 100px;
  height: 100px;
  animation: spin 10s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>