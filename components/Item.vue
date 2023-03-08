<template>
    <div class="item" >

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