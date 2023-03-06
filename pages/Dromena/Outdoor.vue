<template>
  
    <div class="grid gap-10 p-5 w-[98vw]">
      <!--Hike Seih Sou Forest-->
      <div class="flex flex-col laptop:flex-row gap-4 w-fit ">
        
        <!--pic-->
        <div class="laptop:w-1/2 flex place-content-center">
          <img class="rounded-md tablet:w-[750px] laptop:w-[580px] desktop:w-[580px] 
          lgdesk:w-[750px] tablet:h-[310px]"
           src="https://urban-wanders.com/wp-content/uploads/2020/05/Hike-at-Seih-Sou-Forest-in-Thessaloniki-e1589654545419.jpg" >
        </div>
  
        <!--info-->
        <div class="pr-5 grid place-content-center">
          <h1 class="font-semibold text-lg mobile:text-2xl tablet:text-4xl laptop:text-4xl container" >
            Hike Seih Sou Forest</h1>
                          
            <swiper :pagination="{clickable: true,}" :modules="modules" 
            class="w-full 
            laptop:w-[450px] desktop:w-[650px] 
            h-[200px]">
              
              <swiper-slide class="pt-5 text-sm mobile:text-base tablet:text-xl laptop:lg ">
                <p class="">
                  There are excellent hiking trails in the Seih Sou Forest of Thessaloniki. 
                  Not only are the panoramic views of the city unparalleled, the diversity 
                  in hiking and trekking trails makes for an all-day excursion for anyone looking to get out in the open air.
                    
                </p>
              </swiper-slide>
  
              <swiper-slide>
                <p class="pt-5 text-sm mobile:text-base tablet:text-xl laptop:lg">Visitors to the mall can find everything from clothing and 
                  accessories to electronics, home goods, and sports equipment.
                </p>
              </swiper-slide>
                  
              <swiper-slide>
                <div>
                  <img class="object-none object-bottom w-max h-max"
                  src="https://www.larissanet.gr/wp-content/uploads/2022/03/202203211930235795.jpg" >
                </div>
              </swiper-slide>
  
            </swiper>
          
  
      </div>
        <!--Thessaloniki Waterways-->
      </div>
  
      <div class="flex flex-col laptop:flex-row gap-4 w-fit">
  
        <!--info-->
        <div class="pr-5 grid place-content-center">
  
          <h1 class="font-semibold text-lg mobile:text-2xl tablet:text-4xl">
            Thessaloniki Waterways</h1>
  
          <swiper :pagination="{clickable: true,}" :modules="modules" 
          class="w-full 
            laptop:w-[450px] desktop:w-[650px] 
            h-[200px]">
              
              <swiper-slide class="pt-5 text-sm mobile:text-base tablet:text-xl laptop:lg">
                <p class="">
                  Get onboard traditional boats "Thessaloniki waterways" and explore the sandy beaches of Peraia, 
                  Neous Epivates and Aghia Triada.
                </p>
              </swiper-slide>
                  
              <swiper-slide class="pt-5 text-sm mobile:text-base tablet:text-xl laptop:lg">
                Get a view of the beautiful city of Thessaloniki while cruising with our boats. 
                Enjoy ouzo and seafood in the picturesque taverns and restaurants of Peraia and Neous Epivates while watching the sunset
              </swiper-slide>
              
            </swiper>
         
        </div>
        
        <!--pic-->
        <div class="laptop:w-1/2 order-first laptop:order-last flex place-content-center">
          <img class="rounded-md tablet:w-[750px] laptop:w-[580px] desktop:w-[580px] 
          lgdesk:w-[750px] tablet:h-[310px]"
          src="https://news.gtp.gr/wp-content/uploads/2018/05/Karavakia_Leykos-Pyrgos-Konstantis.jpg">
        </div>
  
      </div>
  
      <!--ADVENTURE PAINTBALL -->
      <div class="flex flex-col laptop:flex-row gap-4 w-fit">
        
        <!--pic-->
        <div class="laptop:w-1/2 flex place-content-center">
          <img class="rounded-md tablet:w-[750px] laptop:w-[580px] desktop:w-[580px] 
          lgdesk:w-[750px] tablet:h-[310px]"
          src="https://adventurepaintball.gr/wp-content/uploads/2016/07/paidiko-party.jpg">
        </div>
  
        <!--info-->
        <div class="pr-5 grid place-content-center">
  
          <h1 class="font-semibold text-lg mobile:text-2xl tablet:text-4xl">
            Adventure Paintball </h1>
  
          <swiper :pagination="{clickable: true,}" 
          :modules="modules" 
          class="w-full 
            laptop:w-[450px] desktop:w-[650px] 
            h-[200px]">
              
              <swiper-slide class="pt-5 text-sm mobile:text-base tablet:text-xl laptop:lg">
                
                Adventure Paintball is located in the area of the Mediterranean Cosmos Mall in Thessaloniki, 
                just 10 minutes away from the city center, easily accessible by car or bus. 
                
                    
                
              </swiper-slide>
  
              <swiper-slide class="pt-5 text-sm mobile:text-base tablet:text-xl laptop:lg ">
                <p class="">
                Specially designed themed fields you and your company can live the unique experience 
                of playing paintball or just escape from everyday life by watching the sport drinking your 
                coffee or refreshment away from the noise of the city.
                </p>
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