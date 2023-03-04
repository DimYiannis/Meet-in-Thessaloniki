<template>
    <swiper :navigation="true" :modules="modules" class="w-[500px]">
      <swiper-slide>
        <p class="pt-5 text-base tablet:text-xl laptop:lg">
                  The shopping center features over 200 stores, 
                  including international and local brands, as well as a 
                  variety of restaurants, cafes, and entertainment options. 
                  Visitors to the mall can find everything from clothing and 
                  accessories to electronics, home goods, and sports equipment.
        </p>
      </swiper-slide>

      <swiper-slide>
        <p>One of the highlights of Mediterranean Cosmos is its unique design and layout, which is inspired by the Mediterranean Sea and Greek culture. The mall is designed to resemble a Mediterranean village, with colorful facades, winding streets, and charming courtyards and squares.
        </p>
      </swiper-slide>
                
      <swiper-slide>Slide 3</swiper-slide>
    </swiper>
</template>

<script>



    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
  
    import 'swiper/css/navigation';
  
  
  
    // import required modules
    import { Navigation } from 'swiper';
  
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        return {
          modules: [Navigation],
        };
      },
    };
</script>