<template>
    
    <div class="flex bg-[#313131] h-[60vh]">
        
        <div class="flex w-2/3 bg-[#aeb5b6] ">
            
            <div class="w-1/3 grid gap-5  
            place-content-center h-full">
                
                <div class="place-items-center grid
                hover:scale-125 duration-500">
                    <slot name="img">
                        {{ img }}
                    </slot>
                </div>
                
                <div class="text-gray-800 font-extralight text-2xl 
                text-center bottom-0 relative ">
                   <slot name="name">
                        {{ name }}
                    </slot> 
                </div>
                
                
            </div>
            
            <div class="info w-2/3 bg-[#2d2e3099] ">

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