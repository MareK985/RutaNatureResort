<template>
  <div>
    <div class="parallax1">
      <div data-aos="fade-down-right" data-aos-duration="1000">
        <img
          src="~/assets/logo/logo-svetina_mini.svg"
          alt="logo-mini"
          class="logo-header"
        />
      </div>
      <div data-aos="fade" class="heading-sm">
        {{ $t("subheader") }}
      </div>
      <div data-aos="fade" class="heading">
        {{ $t("header") }}
      </div>
      <ContactForm />
      <LangNavigation />
    </div>

    <section>
      <div
        data-aos="fade-right"
        class="two-col dark"
        style="border-radius: 30px; padding:10px;"
      >
        <h1>{{ $t("desciptionTitle") }}</h1>
        <p>
          {{ $t("desciption") }}
        </p>
      </div>
      <div data-aos="fade-up" class="two-col">
        <div class="circle">
          <img class="circle-icon" alt="" src="~assets/icons/sauna.svg" />
        </div>
        <div class="circle">
          <img class="circle-icon" alt="" src="~assets/icons/jakuzzi.svg" />
        </div>
        <div class="circle">
          <img class="circle-icon" alt="" src="~assets/icons/wifi.svg" />
        </div>
        <div class="circle">
          <img class="circle-icon" alt="" src="~assets/icons/ac.svg" />
        </div>
        <div class="circle">
          <img class="circle-icon" alt="" src="~assets/icons/winter.svg" />
        </div>
        <div class="circle">
          <img class="circle-icon" alt="" src="~assets/icons/cow.svg" />
        </div>
        <!-- SMOOBU -->
        <div
          id="smoobuApartment359093en"
          class="calendarWidget"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div
            class="calendarContent"
            data-load-calendar-url="https://login.smoobu.com/en/cockpit/widget/single-calendar/359093"
            data-verification="946dab3ee3f7e6fca10cb45f3d67236b505070996b8ea7492a4ac00c68daaafd"
            data-baseUrl="https://login.smoobu.com"
            data-disable-css="false"
          ></div>
          <script
            type="text/javascript"
            src="https://login.smoobu.com/js/Apartment/CalendarWidget.js"
          ></script>
        </div>
        <!-- end OF SMOOBU -->
      </div>
    </section>
    <!-- The video -->
    <video id="promoVideo" autoplay muted loop>
      <source src="~assets/video/promo-svetina1.mp4" type="video/mp4" />
    </video>
    <!-- end of video -->
    <div class="cenik">
      <h1 class="section-title">{{ $t("pricelist") }}</h1>
      <div class="two-col">
        <Cenik data-aos="zoom-in-right" />
        <span class="drobni-tisk">{{ $t("priceDetails") }}</span> <br />
        <span class="drobni-tisk">{{ $t("minStay") }}</span> <br />
        <span class="drobni-tisk">{{ $t("priceDiscount") }}</span> <br />
        <span class="drobni-tisk">{{ $t("unitDetails1") }}</span> <br />
        <span class="drobni-tisk">{{ $t("unitDetails2") }}</span>
      </div>
      <div class="two-col">
        <TC data-aos="fade-left" />
      </div>
    </div>
    <!-- SLIDER -->
    <div class="slider">
      <VueSlickCarousel v-bind="settings">
        <div>
          <img
            src="~/assets/img/slides/slide1.jpg"
            alt="slide"
            class="responsive"
          />
        </div>
        <div>
          <img
            src="~/assets/img/slides/slide2.jpg"
            alt="slide"
            class="responsive"
          />
        </div>
        <div>
          <img
            src="~/assets/img/slides/slide3.jpg"
            alt="slide"
            class="responsive"
          />
        </div>
        <div>
          <img
            src="~/assets/img/slides/slide4.jpg"
            alt="slide"
            class="responsive"
          />
        </div>
        <div>
          <img
            src="~/assets/img/slides/slide5.jpg"
            alt="slide"
            class="responsive"
          />
        </div>
        <div>
          <img
            src="~/assets/img/slides/slide6.jpg"
            alt="slide"
            class="responsive"
          />
        </div>
        <div>
          <img
            src="~/assets/img/slides/slide7.jpg"
            alt="slide"
            class="responsive"
          />
        </div>
        <div>
          <img
            src="~/assets/img/slides/slide8.jpg"
            alt="slide"
            class="responsive"
          />
        </div>
        <div>
          <img
            src="~/assets/img/slides/slide9.jpg"
            alt="slide"
            class="responsive"
          />
        </div>
        <div>
          <img
            src="~/assets/img/slides/slide10.jpg"
            alt="slide"
            class="responsive"
          />
        </div>
        <div>
          <img
            src="~/assets/img/slides/slide11.jpg"
            alt="slide"
            class="responsive"
          />
        </div>
        <div>
          <img
            src="~/assets/img/slides/slide12.jpg"
            alt="slide"
            class="responsive"
          />
        </div>
        <div>
          <img
            src="~/assets/img/slides/slide13.jpg"
            alt="slide"
            class="responsive"
          />
        </div>
        <div>
          <img
            src="~/assets/img/slides/slide14.jpg"
            alt="slide"
            class="responsive"
          />
        </div>
        <div>
          <img
            src="~/assets/img/slides/slide15.jpg"
            alt="slide"
            class="responsive"
          />
        </div>
        <div>
          <img
            src="~/assets/img/slides/slide16.jpg"
            alt="slide"
            class="responsive"
          />
        </div>
        <div>
          <img
            src="~/assets/img/slides/slide17.jpg"
            alt="slide"
            class="responsive"
          />
        </div>
        <div>
          <img
            src="~/assets/img/slides/slide18.jpg"
            alt="slide"
            class="responsive"
          />
        </div>
        <div>
          <img
            src="~/assets/img/slides/slide19.jpg"
            alt="slide"
            class="responsive"
          />
        </div>
        <div>
          <img
            src="~/assets/img/slides/slide20.jpg"
            alt="slide"
            class="responsive"
          />
        </div>
        <div>
          <img
            src="~/assets/img/slides/slide21.jpg"
            alt="slide"
            class="responsive"
          />
        </div>
      </VueSlickCarousel>
    </div>
    <!-- SLIDER -->

    <div class="parallax2">
      <div class="heading ">
        {{ $t("activities") }}
      </div>
    </div>
    <section class="dark">
      <div class="two-col">
        <iframe
          class="promo"
          data-aos="zoom-in-up"
          width="100%"
          height="300px"
          frameborder="0"
          style="border:0"
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ_5jXSbx2ZUcRl-whuB9ZFag&key=AIzaSyALY3CXNuuSu2dVKjHXvFH3JWBNlNAWJSU"
          allowfullscreen
        ></iframe>
        <div style="padding: 5px;">
          {{ $t("addressTitle") }}<br />
          {{ $t("address") }} <br />{{ $t("addressDetails") }}
        </div>
      </div>
      <div class="two-col">
        <ActivitiesList data-aos="fade-down-left" />
      </div>
    </section>

    <div class="parallax3"></div>

    <div class="dark">
      <div data-aos="flip-left">
        <VueSlickCarousel :arrows="false" :dots="true">
          <div>
            <Fas class="circle-icon" i="heart" />

            <p class="quote">
              {{ $t("quote1") }}
            </p>
            <h3>
              {{ $t("quoteAuthor1") }} <br /><span>{{ $t("quoteDate1") }}</span>
            </h3>
            <div class="rating">
              <span>★</span><span>★</span><span>★</span><span>★</span
              ><span>☆</span>
            </div>
          </div>
          <div>
            <Fas class="circle-icon" i="heart" />

            <p class="quote">
              {{ $t("quote2") }}
            </p>
            <h3>
              {{ $t("quoteAuthor2") }} <br /><span>{{ $t("quoteDate2") }}</span>
            </h3>
            <div class="rating">
              <span>★</span><span>★</span><span>★</span><span>★</span
              ><span>★</span>
            </div>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
    <div class="parallax4">
      <div data-aos="zoom-in" data-aos-duration="3000">
        <img src="~/assets/logo/logo-svetina.svg" alt="logo" class="logo" />
      </div>
      <div class="copyright">
        <span><MareUX /> ></span>
      </div>
      <div style="color:white" class="copyright">
        {{ $t("copyright") }}
      </div>
      <div class="copyright">
        <nuxt-link
          class="cookie__link"
          to="/politika-zasebnosti"
          target="_blank"
          style="color:white"
          >{{ $t("privacyPolicy1") }}</nuxt-link
        >
        |
        <nuxt-link
          class="cookie__link"
          to="/generalTerms"
          target="_blank"
          style="color:white"
          >{{ $t("generalTerms") }}</nuxt-link
        >
      </div>
      <div class="contact-icons">
        <div class="contact-icon">
          <a href="mailto: mitja@smart-home-rentals.com" target="_blank"
            ><Fas style="color: white; font-size: 3em;" i="envelope"
          /></a>
        </div>
        <div class="contact-icon">
          <a href="https://www.facebook.com/svetina.ranch/" target="_blank"
            ><Fab style="color: white;" class=" float" i="facebook"
          /></a>
        </div>
        <div class="contact-icon">
          <a
            href="https://www.instagram.com/svetina_ranch/?fbclid=IwAR1up_zEN2vwnXabv6IS6plKnYeUQ_61h2LPKe84k5vkrvabhXL7DLYxiKs"
            target="_blank"
            ><Fab style="color: white;" class=" float" i="instagram"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import ContactForm from "~/components/ContactForm.vue";
import Cenik from "~/components/Cenik.vue";
import TC from "~/components/T&C.vue";
import ActivitiesList from "~/components/ActivitiesList.vue";
import Fas from "~/components/Fas.vue";
import Fab from "~/components/Fab.vue";
import LangNavigation from "~/components/LangNavigation.vue";
import MareUX from "~/components/MareUX.vue";

import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import "vue-slick-carousel/dist/vue-slick-carousel.css";

export default {
  components: {
    ContactForm,
    Cenik,
    TC,
    ActivitiesList,
    Fas,
    Fab,
    VueSlickCarousel,
    LangNavigation,
    MareUX,
  },
  nuxtI18n: {
    paths: {
      sl: "/",
      en: "/",
    },
  },
  data() {
    return {
      settings: {
        dots: false,
        infinite: false,
        arrows: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 2,
        centerPadding: "50px",
        slidesToScroll: 2,
        initialSlide: 0,
        focusOnSelect: true,
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },
};
</script>

<style lang="css" scoped>
@import "./../css/style.css";

.logo-header {
  width: 4%;
  float: left;
  margin-left: 3em;
  margin-top: 3em;
}

.circle {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #6d98a8; /* $primary */
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
  margin: 7px;
}
.circle-icon {
  color: #392525; /* $base */
  width: 70%;
}
.quote {
  font-style: italic;
  margin: 0 200px;
}
.promo {
  height: 300px;
  border-radius: 10px;
  box-shadow: 10px 10px 18px 0px rgba(57, 37, 37, 0.75);
}

#promoVideo {
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}
/* SLIDER SETTINGS */
.slider {
  float: left;
  width: 100%;
  margin: 20px 0px;
  text-align: center;
}
.responsive {
  width: 100%;
  height: auto;
  padding: 10px;
}

.logo {
  width: 40%;
  margin-top: 10%;
}
.copyright {
  position: relative;
  font-size: 1em;
  letter-spacing: 0.12em;
}
.copyright span {
  color: white;
  position: absolute;
  bottom: -90px;
  right: 0px;
}
.contact-icons {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.contact-icon {
  margin: 20px;
}

@media screen and (max-width: 680px) {
  .logo-header {
    width: 12%;
    margin-left: 0.5em;
    margin-top: 0.7em;
  }
  .circle {
    width: 70px;
    height: 70px;
  }
  .quote {
    font-style: italic;
    margin: 0 50px;
  }
  .slider {
    width: 100%;
    margin: 20px 0px;
    padding-right: 0px;
  }
  .slide1 {
    height: 300px;
  }
  .logo {
    width: 80%;
    margin-top: 35%;
  }
  .copyright {
    font-size: 0.6em;
    letter-spacing: 0.05em;
  }
  .copyright span {
    bottom: -210px;
  }
  .contact-icon {
    margin: 10px;
  }
}
</style>
