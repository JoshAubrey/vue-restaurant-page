<template>
  <div id="app">
    <Header/>
    <div id="nav">
      <div class="menu">
          <router-link to="/">Home</router-link>
          <router-link to="/Menu">Menu</router-link>
          <router-link to="/Location">Location</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style>
* {
    box-sizing: content-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.35;
}
body {
    margin: 0;
    padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  background-color: #b4d457;
  height: 3em;
  width: 100%;
}

.menu {
    list-style: none;
    height: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    margin: 0;
    padding: 0;
}

#nav a {
  padding: 1em;
  color: #2d2d2d;
  text-decoration: none;
}

#nav a:hover{
    background-color: white;
    cursor: pointer;
}

#nav a.router-link-exact-active {
  background-color: white;
}
</style>
