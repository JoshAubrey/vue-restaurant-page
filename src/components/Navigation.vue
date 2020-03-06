<template>
  <nav>
    <ul class="menu">
        <li class="menu-item" id="about">About</li>
        <li class="menu-item" id="menu">Menu</li>
        <li class="menu-item" id="location">Location</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
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
.menu-item {
    padding: 1em;
    color: #2d2d2d;
}

.menu-item-selected{
    background-color: white;
}

.menu-item:hover{
    background-color: white;
    cursor: pointer;
}

</style>
