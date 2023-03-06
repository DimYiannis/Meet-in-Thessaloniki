<template>
  
    <div class="grid gap-10 p-5 w-[98vw]">
      <!--theatro ghs-->
      <div class="flex flex-col laptop:flex-row gap-4 w-fit ">
        
        <!--pic-->
        <div class="laptop:w-1/2 flex place-content-center">
          <img class="rounded-md tablet:w-[750px] laptop:w-[580px] desktop:w-[580px] 
          lgdesk:w-[750px] tablet:h-[310px] grayscale"
           src="https://www.ntng.gr/gallery/ntng////images/stages/large/Earth_Theatre/Photos/PE0000J0050v01.jpg" >
        </div>
  
        <!--info-->
        <div class="pr-5 grid place-content-center">
          <h1 class="font-semibold text-lg mobile:text-2xl tablet:text-4xl laptop:text-4xl container" >
            Theatre of the Earth (Theatro Gis)</h1>
                          
            <swiper :pagination="{clickable: true,}" :modules="modules" 
            class="w-full 
            laptop:w-[450px] desktop:w-[650px] 
            h-[200px]">
              
              <swiper-slide class="pt-5 text-sm mobile:text-base tablet:text-xl laptop:lg ">
                <p class="">
                    Open-air amphitheater situated on a hillside in the forested area of Seich Sou, and offers stunning 
                    views of the surrounding landscape.
                </p>
              </swiper-slide>
  
              <swiper-slide>
                <p class="pt-5 text-sm mobile:text-base tablet:text-xl laptop:lg">
                    The theatre hosts a variety of cultural events throughout the year, including concerts, 
                    theatrical performances, and film screenings. The venue has a capacity of around 3,000 people, 
                    and its unique setting in the natural environment provides a memorable and immersive experience for visitors.
                </p>
              </swiper-slide>
                  
              <swiper-slide>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1926.0369131756445!2d22.970840124562198!3d40.62766432723472!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a838f5ea555555%3A0x72cc2b13c21b1443!2zzpjOrc6xz4TPgc6_IM6TzrfPgg!5e0!3m2!1sel!2sgr!4v1678106286700!5m2!1sel!2sgr" 
                    width="400" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                
              </swiper-slide>
  
            </swiper>
          
  
      </div>
        <!--Dassous Theatre (Forest Theatre)-->
      </div>
  
      <div class="flex flex-col laptop:flex-row gap-4 w-fit">
  
        <!--info-->
        <div class="pr-5 grid place-content-center">
  
          <h1 class="font-semibold text-lg mobile:text-2xl tablet:text-4xl">
            Dassous Theatre (Forest Theatre)</h1>
  
          <swiper :pagination="{clickable: true,}" :modules="modules" 
          class="w-full 
            laptop:w-[450px] desktop:w-[650px] 
            h-[200px]">
              
              <swiper-slide class="pt-5 text-sm mobile:text-base tablet:text-xl laptop:lg">
                <p class="">
                    The theatre is situated in the lush greenery of Dassous Park, which is a popular destination for locals and visitors alike. 
                </p>
              </swiper-slide>
                  
              <swiper-slide class="pt-5 text-sm mobile:text-base tablet:text-xl laptop:lg">
                The theatre hosts a variety of cultural events throughout the year, including theatrical performances, concerts, and other 
                live performances. With a seating capacity of around 3,000 people, the theatre provides a unique and intimate setting for outdoor events.
              </swiper-slide>
  
              <swiper-slide>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12110.587436553073!2d22.9661557!3d40.6376693!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a8385a9d823e35%3A0x46b7c504722af094!2zzpjOrc6xz4TPgc6_IM6UzqzPg86_z4XPgg!5e0!3m2!1sel!2sgr!4v1678107166131!5m2!1sel!2sgr"
                 width="400" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </swiper-slide>
              
            </swiper>
         
        </div>
        
        <!--pic-->
        <div class="laptop:w-1/2 order-first laptop:order-last flex place-content-center">
          <img class="rounded-md tablet:w-[750px] laptop:w-[580px] desktop:w-[580px] 
          lgdesk:w-[750px] tablet:h-[310px] grayscale"
          src="https://www.ntng.gr/gallery/ntng////images/stages/large/Forest_Theatre/Photos/PE0409J0002v01.jpg">
        </div>
  
      </div>
  
      <!--Eightball-->
      <div class="flex flex-col laptop:flex-row gap-4 w-fit">
        
        <!--pic-->
        <div class="laptop:w-1/2 flex place-content-center">
          <img class="rounded-md tablet:w-[750px] laptop:w-[580px] desktop:w-[580px] 
          lgdesk:w-[750px] tablet:h-[310px] grayscale"
          src="https://www.lifo.gr/sites/default/files/styles/lifo_lightbox_open/public/articles/2020-10-29/img_8300.jpg?itok=WXrrgSOk">
        </div>
  
        <!--info-->
        <div class="pr-5 grid place-content-center">
  
          <h1 class="font-semibold text-lg mobile:text-2xl tablet:text-4xl">
            Eightball</h1>
  
          <swiper :pagination="{clickable: true,}" 
          :modules="modules" 
          class="w-full 
            laptop:w-[450px] desktop:w-[650px] 
            h-[200px]">
              
                <swiper-slide class="pt-5 text-sm mobile:text-base tablet:text-xl laptop:lg">
                
                8ball Club is a popular live music venue and nightclub located in the heart of Thessaloniki. 
                The club has a long history of hosting live music performances from a variety of genres, 
                including rock, punk, metal, and alternative. 
                    
                
              </swiper-slide>
  
              <swiper-slide class="pt-5 text-sm mobile:text-base tablet:text-xl laptop:lg ">
                <p class="">
                    The venue features a spacious dance floor, multiple bars, and a large stage for 
                    live performances. The club also hosts regular DJ nights and themed parties, making 
                    it a popular destination for those looking to dance the night away.
                </p>
              </swiper-slide>
  
              <swiper-slide class="pt-5 text-sm mobile:text-base tablet:text-xl laptop:lg ">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3027.737229277133!2d22.936317240475468!3d40.63567660875378!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a83909f1c34ed1%3A0xc97141dc5a19ac1d!2sEightball!5e0!3m2!1sel!2sgr!4v1678111446242!5m2!1sel!2sgr" 
                width="400" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
              </swiper-slide>
              
            </swiper>
         
        
        </div>
  
      </div>

            <!--WE-->
            <div class="flex flex-col laptop:flex-row gap-4 w-fit">

                <!--info-->
                <div class="pr-5 grid place-content-center">

                    <h1 class="font-semibold text-lg mobile:text-2xl tablet:text-4xl">
                        WE</h1>

                    <swiper :pagination="{clickable: true,}" :modules="modules" 
                        class="w-full 
                        laptop:w-[450px] desktop:w-[650px] 
                        h-[200px]">
          
                        <swiper-slide class="pt-5 text-sm mobile:text-base tablet:text-xl laptop:lg">
                            <p class="">
                                The venue can host a wide variety of events, including corporate conferences, seminars, exhibitions, concerts, and private parties.
                            </p>
                        </swiper-slide>
              
                        <swiper-slide class="pt-5 text-sm mobile:text-base tablet:text-xl laptop:lg">
                            Hosting music events of all kind of genre, famous and beloved destination for young people.
                            WE has an interior single space of 600 square meters and an exterior space of 200 square meters.
 
                        </swiper-slide>

                        <swiper-slide>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6056.401727008453!2d22.957964996295146!3d40.625452051491195!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a838fc149c9f29%3A0x2b462f2c3d04a985!2sWE!5e0!3m2!1sel!2sgr!4v1678112377046!5m2!1sel!2sgr" 
                            width="400" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                            </iframe>
                        </swiper-slide>
          
                    </swiper>
     
                </div>
    
                <!--pic-->
                <div class="laptop:w-1/2 order-first laptop:order-last flex place-content-center">
                    <img class="rounded-md tablet:w-[750px] laptop:w-[580px] desktop:w-[580px] 
                    lgdesk:w-[750px] tablet:h-[310px] grayscale"
                    src="https://www.thessalonikiguide.gr/wp-content/uploads/2023/02/polixoros-we-thessaloniki.jpg">
                </div>

            </div>

             <!--Block33-->
      <div class="flex flex-col laptop:flex-row gap-4 w-fit">
        
        <!--pic-->
        <div class="laptop:w-1/2 flex place-content-center">
          <img class="rounded-md tablet:w-[750px] laptop:w-[580px] desktop:w-[580px] 
          lgdesk:w-[750px] tablet:h-[310px] grayscale"
          src="https://www.biscotto.gr/file/2014/10/16472912_10154528084934332_7482512182286987456_n.jpg">
        </div>
  
        <!--info-->
        <div class="pr-5 grid place-content-center">
  
          <h1 class="font-semibold text-lg mobile:text-2xl tablet:text-4xl">
            Block33</h1>
  
          <swiper :pagination="{clickable: true,}" 
          :modules="modules" 
          class="w-full 
            laptop:w-[450px] desktop:w-[650px] 
            h-[200px]">
              
                <swiper-slide class="pt-5 text-sm mobile:text-base tablet:text-xl laptop:lg">
                
                    Block 33 is a cultural center and music venue.
                    It hosts a variety of events, including concerts, art exhibitions, theater 
                    performances, and festivals. The venue has a capacity of up to 1,500 people 
                    and features a large stage, a full bar, and a VIP area 
                    
                
              </swiper-slide>
  
              <swiper-slide class="pt-5 text-sm mobile:text-base tablet:text-xl laptop:lg ">
                <p class="">
                    A popular destination for both local and international artists,such as James Blake 
                    and Parov Stelar. Block 33 also has a rooftop bar with panoramic 
                    views of Thessaloniki, making it a popular spot for socializing and enjoying the city's nightlife.
                </p>
              </swiper-slide>
  
              <swiper-slide class="pt-5 text-sm mobile:text-base tablet:text-xl laptop:lg ">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12109.516636390312!2d22.9089461!3d40.6435717!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a83981b2e6dc7d%3A0xcb2570cfa0bafd52!2sBlock%2033!5e0!3m2!1sel!2sgr!4v1678113727124!5m2!1sel!2sgr" 
                width="400" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
              </swiper-slide>
              
            </swiper>
         
        
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