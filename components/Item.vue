<template>
    <div class="w-full h-full bg-center 
     rounded-2xl text-black bg-slate-200
     bg-cover transition ease-in-out delay-150
     hover:-translate-y-1 hover:scale-90 duration-300" >

        <div class="hover:backdrop-brightness-50 
         hover:bg-white/30 rounded-2xl w-full h-full 
         grid place-content-center">
            <slot name="title">
                {{ title }}
            </slot>
        </div>
        
        
        <slot></slot>
    
    </div>
</template>

<script>
export default {
    data() {
        return { 
            
        }
    },

    
}


</script>