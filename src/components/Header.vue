<template>
    <div class="header">
        <div class="logo"></div>
        <div class="bounce">
            <p class="arrowDown"></p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
    background-image: url('../assets/header.jpg');
    background-size: cover;
    background-position: top center;
    background-attachment: fixed;
    width: 100%;
    height: 100vh;
    margin: 0;
}
.logo {
    background-image: url('../assets/logo.svg');
    background-position: center;
    background-size: contain;
    width: 100%;
    background-repeat: no-repeat;
    height: 300px;
    margin: auto;
    position: absolute;
    top: 50%;
    margin-top: -150px;
}
.arrowDown {
    
    border: solid white;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(45deg);
}
.bounce {
    text-align: center;
    margin: 0;
    position: absolute;
    bottom: 30px;
    left: 50%;
    animation: bounce 2s infinite;
}
@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {       
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
}
</style>
