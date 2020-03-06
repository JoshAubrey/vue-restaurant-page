<template>
  <div id="app">
    <Header/>
    <Navigation/>
    <AboutPage/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Navigation from './components/Navigation.vue'
import AboutPage from './components/AboutPage.vue'
import FoodMenuPage from './components/FoodMenuPage.vue'
import LocationPage from './components/LocationPage.vue'

export default {
  name: 'App',
  components: {
    Header,
    Navigation,
    AboutPage,
    // FoodMenuPage,
    // LocationPage
  },
  mounted () {
    document.querySelectorAll(".menu-item").forEach( button =>
      button.addEventListener("click", function(e) {
        document.querySelectorAll('.menu-item').forEach(menuItem => 
          menuItem.classList.remove('menu-item-selected')
        )
        document.getElementById('app').removeChild(document.querySelector('.inner-content'))
        switch(e.target.id){
            case 'about':
                document.getElementById('app').appendChild(AboutPage)
            break
            case 'menu':
                FoodMenuPage.$mount()
            break
            case 'location':
                LocationPage.$mount()
            break
        }
      })
    )
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
/* #app {

} */
</style>
