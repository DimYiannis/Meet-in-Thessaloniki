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

        <div class="desktop:row-span-2"
        @mouseover="showTitle=true"
        @mouseleave="showTitle=false">
            <NuxtLink to="/main/sights">
                <Item v-bind="showTitle"
                
                class="bg-sights">
                    <template v-slot:title>
                        <h3 v-show="showTitle" class=" font-bold 
                            text-2xl tablet:text-4xl text-white 
                            grid place-content-center
                            desktop:w-[600px] desktop:h-[200px] 
                            laptop:w-[450px] laptop:h-[240px]
                            tablet:w-[400px] tablet:h-[230px]
                            h-[130px]">
                           Sights To See</h3>
                    </template>
                </Item>
            </NuxtLink>
        </div>
    
    
        <div class="laptop:col-span-2 desktop:col-span-1">
            <NuxtLink to="/main/museums">
                <Item
                class="bg-museum">
                    <template v-slot:title>
                        <h3 class="text-transparent font-bold 
                        text-2xl tablet:text-4xl hover:text-white 
                            grid place-content-center
                            desktop:w-[620px] desktop:h-[200px] 
                            laptop:w-[900px] laptop:h-[240px]
                            tablet:w-[350px] tablet:h-[180px]
                            mobile:w-[400px] mobile:h-[100px]
                            h-[130px]">
                            Museums to visit</h3>
                    </template>
                </Item>
            </NuxtLink>
        </div>

        <div class="">   
            <NuxtLink to="/main/places">
                <Item 
                class="bg-places">
                    <template v-slot:title>
                        <h3 class="content">Places to wander</h3>
                    </template>
                </Item>
            </NuxtLink>
        </div>

        <div class="">
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
            showTitle: false
        }
    },
    
}
</script>