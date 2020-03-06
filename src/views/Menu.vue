<template>
  <div class="inner-content">
    <h1>Our menu</h1>
    <div class="product-item">
        <div class="product-picture" :style="{ backgroundImage: 'url(' + require('@/assets/sushi.jpeg') + ')' }"></div>
        <h2 class="product-name">Sushi</h2>
    </div>
    <div class="product-item">
        <div class="product-picture" :style="{ backgroundImage: 'url(' + require('@/assets/sashimi.jpeg') + ')' }"></div>
        <h2 class="product-name">Sashimi</h2>
    </div>
    <div class="product-item">
        <div class="product-picture" :style="{ backgroundImage: 'url(' + require('@/assets/rolls.jpeg') + ')' }"></div>
        <h2 class="product-name">Rolls</h2>
    </div>
    <div class="product-item">
        <div class="product-picture" :style="{ backgroundImage: 'url(' + require('@/assets/sets.jpg') + ')' }"></div>
        <h2 class="product-name">Sets</h2>
    </div>
    <div class="product-item">
        <div class="product-picture" :style="{ backgroundImage: 'url(' + require('@/assets/drinks.jpg') + ')' }"></div>
        <h2 class="product-name">Drinks</h2>
    </div>
    <div class="product-item">
        <div class="product-picture" :style="{ backgroundImage: 'url(' + require('@/assets/dessert.jpeg') + ')' }"></div>
        <h2 class="product-name">Desserts</h2>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inner-content {
    padding: 2em;
    text-align: center;
    color: #2d2d2d;
}
h1 {
    margin: 0 auto;
}
.product-item{
    display: inline-block;
    background-color: green;
    height: 300px;
    width: 300px;
    margin: 1em;
    overflow: hidden;
}

.product-picture {
    width: 300px;
    height: 250px;
    background-size: cover;
    background-size: 100%;
    background-repeat: no-repeat;
    transition: all 1s ease;
    background-position: top center;
    cursor: pointer;
}

.product-picture:hover {
    background-size: 120%;
}

.product-name {
    background-color: #b4d457;
    margin: 0;
    padding: .5em 0;
    display: block;
    width: 300px;
    text-align: center;
}
</style>
