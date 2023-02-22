<template>
    <div class="text-black bg-[#f1f1f1]
    h-screen ">

        <div class="grid laptop:grid-cols-2 grid-rows-3 laptop:grid-rows-1
        w-full
        h-2/3 p-5 gap-20">
            <slot />
            
            <a href=""
            class="laptop:col-start-2 row-span-2 ">
                <Item
                class="bg-sights">
                    <template v-slot:title>
                        <h3 class=" text-transparent font-bold text-4xl
                        hover:text-white grid place-content-center 
                        desktop:w-[550px] desktop:h-[500px] 
                        laptop:w-[500px] laptop:h-[450px]
                        ">Sights to see</h3>
                    </template>
                </Item>
            </a>
        
        </div>
    
    
        <div class="grid gap-8 mobile:grid-cols-3 w-full 
        h-1/3 p-5 ">
            <a href="">
                <Item
                class="bg-museum">
                    <template v-slot:title>
                        <h3 class="content">Museums to visit</h3>
                    </template>
                </Item>
            </a>
            <a href="">
                <Item
                class="bg-places">
                    <template v-slot:title>
                        <h3 class="content">Places to wander</h3>
                    </template>
                </Item>
            </a>
            <a href="">
                <Item
                class="bg-history">
                    <template v-slot:title>
                        <h3 class="content">Brief History</h3>
                    </template>
                </Item>
            </a>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
           
        }
    }
}
</script>