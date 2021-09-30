<template>
  <div class="loading"></div>
</template>

<script>
export default {
  name: 'Loading'
}
</script>

<style scoped>
.loading {
  text-align: center;
  display: inline-block;
  width: 64px;
  height: 64px;
}
.loading-button {
  width: 30px;
  height: 19px;
  margin-top: -3px;
}
.loading:after {
  content: ' ';
  display: block;
  width: 46px;
  height: 46px;
  margin: 1px;
  border-radius: 50%;
  border: 5px solid black;
  border-color: black transparent black transparent;
  animation: loading 1.2s linear infinite;
}
.loading-button:after {
  width: 15px;
  height: 15px;
  border: 4px solid white;
  border-color: white transparent white transparent;
  animation: loading 1.2s linear infinite;
}
@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
