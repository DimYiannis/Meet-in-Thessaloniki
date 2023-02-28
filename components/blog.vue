<template>
    
    <div class="flex h-[70vh] border-[#76b1ec] mx-5">
        
        <div class="flex w-2/3 bg-[#aeb5b6] ">

            <div class="w-1/3 grid gap-3  
            place-content-center h-full">
                
                <div class="place-items-center grid 
                hover:scale-110 duration-500">
                    <slot name="img">
                        {{ img }}
                    </slot>

                </div>

                <div class="text-gray-800 font-extralight text-2xl 
                text-center bottom-0 relative ">
                   <slot name="official">
                        {{ official }}
                    </slot> 
                </div>
                
                <div class="text-gray-800 font-extralight text-2xl 
                text-center bottom-0 relative ">
                   <slot name="name">
                        {{ name }}
                    </slot> 
                </div>
                
                
            </div>
            
            <div class="w-2/3 bg-[#2d2e30d3] grid place-content-center ">

                <slot name="info">
                    {{ info }}
                </slot>
                
                
            
            </div>

        </div>
        
        <div class="map w-1/3 grid gap-5 place-content-center">
        
           
               <slot name="location">
                   {{ location }}
               </slot>
           
        </div>

    </div>

</template>

<script>
import GoogleMaps from './GoogleMaps.vue';

export default {
    data() {
        return {};
    },
    components: { GoogleMaps }
}


</script>