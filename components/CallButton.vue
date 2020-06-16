<template>
  <div>
    <a class="lgscreenphone phonelink" href="#"
      ><img
        class="phoneicon"
        src="https://freeiconshop.com/wp-content/uploads/edd/phone-flat.png"
    /></a>
    <a class="mbscreenphone phonelink" href="tel:+38641763005"
      ><img
        class="phoneicon"
        src="https://freeiconshop.com/wp-content/uploads/edd/phone-flat.png"
    /></a>
  </div>
</template>

<script>
export default {};
</script>

<style>
.phonelink {
  position: fixed; /* Lock location always on the scree */
  bottom: 0; /* Set to the bottom */
  right: 0; /* Set to the right */
  margin: 30px; /* Add space around background */
}
.phoneicon {
  width: 50px; /* Set width of icon */
  height: 50px; /* Set height of icon */
}
@media screen and (max-width: 1280px) {
  .lgscreenphone {
    display: none; /* On small screens make phone icon disappear */
  }
  .mbscreenphone {
    display: block; /* On small screens make phone icon appear */
  }
}
@media screen and (min-width: 1281px) {
  .mbscreenphone {
    display: none; /* On large screens make phone icon disappear */
  }
  .lgscreenphone {
    display: none; /* On large screens make phone icon appear */
  }
}
</style>
