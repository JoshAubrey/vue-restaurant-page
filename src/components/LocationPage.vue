<template>
  <div class="inner-content">
    <h1>Find us on the map!</h1>
    <div id="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3225.129669844545!2d-94.1660027847306!3d36.06594118010639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c96ed98726d917%3A0xd48b5b4c4cd62b42!2s313%20W%20Dickson%20St%20%23105%2C%20Fayetteville%2C%20AR%2072701!5e0!3m2!1sen!2sus!4v1569348521761!5m2!1sen!2sus" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
    </div>
    <h3>Hours</h3>
    <p>Monday - Thursday: 11:30am - 9pm</p>
    <p>Friday - Saturday: 11:30am - 10pm</p>
    <p>Sunday: 12pm - 9pm</p>
  </div>
</template>

<script>
export default {
  name: 'LocationPage',
  mounted () {
    const locationSelected = document.getElementById('location')
    locationSelected.classList.add('menu-item-selected') 
  }
}
</script>

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
#map {
    width: 70%;
    height: 400px;
    margin: 40px auto;
}

</style>
