<template>
    
  <div class="grid border-[#76b1ec] mx-5 
  tablet:grid-cols-2 tablet:grid-rows-2 
  laptop:grid-cols-3 laptop:grid-rows-none">
      
      

      <div class=" grid gap-3  
      place-content-top h-full bg-[#aeb5b6]">
              
          <div class="place-items-center grid 
          hover:scale-105 duration-500">
            <swiper :pagination="{clickable: true,}" :modules="modules" 
            class="w-full 
            laptop:w-[300px]  
            h-fit">
            
              <swiper-slide class="pt-5 text-sm mobile:text-base tablet:text-xl laptop:lg">
              
                <slot name="img">
                    {{ img }}
                </slot> 
                  
              
              </swiper-slide>

              <swiper-slide class="pt-5 text-sm mobile:text-base tablet:text-xl laptop:lg ">
                <slot name="img2">
                    {{ img }}
                </slot>
              </swiper-slide>

              <swiper-slide class="pt-5 text-sm mobile:text-base tablet:text-xl laptop:lg ">
                <slot name="img3">
                    {{ img }}
                </slot>
              </swiper-slide>
            
            </swiper>
            
          </div>
              
          <div class="text-gray-800 font-extralight text-2xl 
          text-center bottom-0 relative z-10 ">
             <slot name="name">
                  {{ name }}
              </slot> 
          </div>
              
              
      </div>
          
      <div class=" bg-[#2d2e30d3] grid place-content-center 
      mobile:h-[400px] tablet:h-[500px]">

          <slot name="info">
              {{ info }}
          </slot>
              
      </div>

      
      
      <div class="map grid gap-5 place-content-center 
      tablet:col-span-2 laptop:col-span-1 ">
      
         
         <slot name="location">
             {{ location }}
         </slot>
     
      </div>

  </div>

</template>

<script>
import { Pagination } from 'swiper';
export default {
  setup() {
      return {
        modules: [Pagination],
      };
    },
}
 



</script>