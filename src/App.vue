<template>
   <div class="app">
     <router-view/>
   </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
}

html {
  font-size: calc(100 / 375 * 100vw);
}

.app{
  width: 100%;
  height: 100%;
  font-size:0.14rem;
}
</style>
