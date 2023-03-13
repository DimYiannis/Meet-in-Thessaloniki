<template>
    <div class="indexpage">
        
        <div class="grid tablet:col-span-2 laptop:col-span-1 text-center ">
            <h1 class="font-bold text-2xl mobile:text-4xl 
            tablet:text-7xl laptop:text-7xl">
            Thessaloniki</h1>
            <p class="relative font-extralight text:lg 
            mobile:text-xl tablet:text-2xl
            decoration-4 ">
            Home to fabulous food, rich history and 
            stunning scenery - Greece's most vibrant city has 
            it all.</p>    
        </div>

        <div class="desktop:row-span-2 group">
            <NuxtLink to="/main/sights">
                <Item
                
                class="bg-sights">
                    <template v-slot:title>
                        <h3 class="content">
                           Sights To See</h3>
                    </template>
                </Item>
            </NuxtLink>
        </div>
    
    
        <div class="laptop:col-span-2 desktop:col-span-1 group">
            <NuxtLink to="/main/museums">
                <Item
                class="bg-museum">
                    <template v-slot:title>
                        <h3 class="content">
                            Museums to visit</h3>
                    </template>
                </Item>
            </NuxtLink>
        </div>

        <div class="group">   
            <NuxtLink to="/main/places">
                <Item 
                class="bg-places">
                    <template v-slot:title>
                        <h3 class="content">Places to wander</h3>
                    </template>
                </Item>
            </NuxtLink>
        </div>

        <div class="group">
            <NuxtLink to="/main/history">
                <Item
                class="bg-history">
                    <template v-slot:title>
                        <h3 class="content">Brief History</h3>
                    </template>
                </Item>
            </NuxtLink>
        </div> 

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