<script setup>
const scrollToTop=()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

</script>
<template>
    <div id="circle" @click="scrollToTop"><i class="bi bi-arrow-up"></i></div>
</template>
<style scoped>
/* Option 2: Import via CSS */
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css");
#circle {
  position: fixed;
  display: flex;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background-color: #00d1b2;
  border-radius: 50%;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  padding-top: 10px;
  z-index: 100000000;
}
i{
    color: white;
}
</style>