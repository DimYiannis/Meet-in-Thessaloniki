<template>
  
  <div class="text-lg tablet:text-4xl font-semibold place-content-center flex p-5">
      <h1>#thessaloniki_malls</h1>
  </div>

  <div class="grid gap-10 p-5 w-[98vw]">
    <!--cosmos-->
    <div class="flex flex-col laptop:flex-row gap-4 w-fit ">
      
      <!--pic-->
      <div class="laptop:w-1/2 flex place-content-center">
        <img class="rounded-md tablet:w-[750px] laptop:w-[580px] desktop:w-[580px] 
        lgdesk:w-[750px] tablet:h-[310px]"
         src="https://1.bp.blogspot.com/-pJ1y8Bph4Zs/XPFO6YiTdWI/AAAAAAACA7I/HS-Wy9SXWnA3Bbnal3Gt7IEyJwVE5xOagCLcBGAs/s640/c53a9eb7f98bd9efe52407712806bfee_XL.jpg" >
      </div>

      <!--info-->
      <div class="pr-5 grid place-content-center">
        <h1 class="font-semibold text-lg mobile:text-2xl tablet:text-4xl laptop:text-4xl container" >
          Mediterranean Cosmos Shopping Center.</h1>
                        
          <swiper :pagination="true" :modules="modules" 
          class="w-full 
          laptop:w-[450px] desktop:w-[650px] 
          h-[200px]">
            
            <swiper-slide class="pt-5 text-sm mobile:text-base tablet:text-xl laptop:lg ">
              <p class="">
                  The shopping center features over 200 stores, 
                  including international and local brands, as well as a 
                  variety of restaurants, cafes, and entertainment options. 
                  
              </p>
            </swiper-slide>

            <swiper-slide>
              <p class="pt-5 text-sm mobile:text-base tablet:text-xl laptop:lg">Visitors to the mall can find everything from clothing and 
                accessories to electronics, home goods, and sports equipment.
              </p>
            </swiper-slide>
                
            <swiper-slide>
              <p class="pt-5 text-sm mobile:text-base tablet:text-xl laptop:lg">
                Unique design and layout, Inspired by the Mediterranean Sea
                 and Greek culture. Designed to resemble a Mediterranean village, 
                 with colorful facades, winding streets, and charming courtyards 
                 and squares.
              </p>
            </swiper-slide>

          </swiper>
        

    </div>
      <!--Mega-->
    </div>

    <div class="flex flex-col laptop:flex-row gap-4 w-fit">

      <!--info-->
      <div class="pr-5 grid place-content-center">

        <h1 class="font-semibold text-lg mobile:text-2xl tablet:text-4xl">
          Mega Outlet Store</h1>

        <swiper :pagination="true" :modules="modules" 
        class="w-full 
          laptop:w-[450px] desktop:w-[650px] 
          h-[200px]">
            
            <swiper-slide class="pt-5 text-sm mobile:text-base tablet:text-xl laptop:lg">
              <p class="">
                The outlet features over 130 stores, offering a wide range of products including clothing, 
                shoes, accessories, sports equipment, home goods, and electronics. 
              </p>
            </swiper-slide>
                
            <swiper-slide class="pt-5 text-sm mobile:text-base tablet:text-xl laptop:lg">
              The stores at Mega Outlet are well-known brands, both international and local, 
              and offer discounted prices compared to traditional retail stores.
            </swiper-slide>

            <swiper-slide>
              <p class="pt-5 text-sm mobile:text-base tablet:text-xl laptop:lg">
                Easily accessible by car or public transportation, and located 
                near a number of other popular attractions in the city, including the 
                Mediterranean Cosmos Shopping Center and the Thessaloniki Concert Hall.
              </p>
            </swiper-slide>
            
          </swiper>
       
      </div>
      
      <!--pic-->
      <div class="laptop:w-1/2 order-first laptop:order-last flex place-content-center">
        <img class="rounded-md tablet:w-[750px] laptop:w-[580px] desktop:w-[580px] 
        lgdesk:w-[750px] tablet:h-[310px]"
        src="https://www.climapro.gr/wp-content/uploads/2014/01/Megaoutlet-1-1020x683.jpg">
      </div>

    </div>

    <!--One salonica-->
    <div class="flex flex-col laptop:flex-row gap-4 w-fit">
      
      <!--pic-->
      <div class="laptop:w-1/2 flex place-content-center">
        <img class="rounded-md tablet:w-[750px] laptop:w-[580px] desktop:w-[580px] 
        lgdesk:w-[750px] tablet:h-[310px]"
        src="https://www.thessalonikiguide.gr/wp-content/uploads/2016/09/One-Salonica-thessaloniki.jpg">
      </div>

      <!--info-->
      <div class="pr-5 grid place-content-center">

        <h1 class="font-semibold text-lg mobile:text-2xl tablet:text-4xl">
          One Salonica Outlet Mall</h1>

        <swiper :pagination="true" :modules="modules" 
        class="w-full 
          laptop:w-[450px] desktop:w-[650px] 
          h-[200px]">
            
            <swiper-slide class="pt-5 text-sm mobile:text-base tablet:text-xl laptop:lg">
              
                The mall features over 100 stores, offering a wide range of products including clothing, 
                shoes, accessories, sports equipment, home goods, and electronics. 
                  
              
            </swiper-slide>

            <swiper-slide class="pt-5 text-sm mobile:text-base tablet:text-xl laptop:lg ">
              <p class="">
                Some of the most well-known international and local brands are represented at One Salonica Outlet, 
                and shoppers can enjoy discounts on their purchases throughout the year.
              </p>
            </swiper-slide>

            <swiper-slide class="pt-5 text-sm mobile:text-base tablet:text-xl laptop:lg ">
                You will also find a range of restaurants, 
                cafes, and entertainment options. Whether you're looking for new clothes, electronics, 
                or just want to relax and enjoy the atmosphere, the shopping center has something for everyone.
            </swiper-slide>
            
          </swiper>
       
        <p></p>
      </div>

    </div>

  </div>
</template>

<script>
 // Import Swiper Vue.js components
 import { Swiper, SwiperSlide } from 'swiper/vue';
  
  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/navigation';



  // import required modules
  import { Pagination } from 'swiper';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Pagination],
      };
    },
  };
  
</script>