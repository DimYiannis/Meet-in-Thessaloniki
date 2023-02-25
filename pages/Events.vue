<template>
    <div class="grid w-screen h-screen p-5 pb-2
    grid-cols-1 grid-rows-4 gap-4
    tablet:grid-cols-2 tablet:grid-rows-3 laptop:grid-rows-2">
        
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

        <div class="desktop:row-span-3">
            
            <a href="">
                <Item
                class="bg-night">
                    <template v-slot:title>
                        <h3 class="text-transparent font-bold 
                            text-4xl hover:text-white 
                            grid place-content-center
                            desktop:w-[620px] desktop:h-[600px] 
                            laptop:w-[450px] laptop:h-[240px]
                            tablet:w-[360px] tablet:h-[230px]
                            w-[680px] h-[130px]">
                           Nightlife</h3>
                    </template>
                </Item>
            </a>
        
        </div>
    
    
        <div class=" desktop:col-span-1">
            <NuxtLink to="/museums">
                <Item
                class="bg-concerts">
                    <template v-slot:title>
                        <h3 class="text-transparent font-bold 
                            text-4xl hover:text-white 
                            grid place-content-center
                            desktop:w-[620px] desktop:h-[200px] 
                            laptop:w-[900px] laptop:h-[240px]
                            tablet:w-[400px] tablet:h-[230px]
                            w-[680px] h-[130px]">
                            concerts</h3>
                    </template>
                </Item>
            </NuxtLink>
        </div>

        <div class="tablet:col-span-2 laptop:col-span-1">   
            <a href="">
                <Item
                class="bg-outdoor">
                    <template v-slot:title>
                        <h3 class="content">Outdoor Activities</h3>
                    </template>
                </Item>
            </a>
        </div>

    </div>    
</template>

<script>


</script>