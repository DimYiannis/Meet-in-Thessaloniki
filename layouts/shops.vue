<template>
    <div class="text-white bg-[#9c6437]
    h-screen">

        <div class="grid grid-cols-2 grid-rows-1 w-full
        h-2/3 p-5 gap-20">
            <slot />
            <Item/>
            
            
        </div>
    
    
        <div class="grid gap-8 grid-cols-3 grid-rows-1 w-full 
        h-1/3 p-5">
            <Item/>
            <Item/>
            <Item/>
        
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            photos: [
                {
                    id: 'sight',
                    img: '',
                },
                {
                    id: 'museum',
                    img: '',
                },
                {
                    id: 'places',
                    img: '',
                },
                {
                    id: 'history',
                    img: '',
                },
            ]
        }
    }
}
</script>