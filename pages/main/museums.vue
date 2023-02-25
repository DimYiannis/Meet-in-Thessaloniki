<template>
    <div class="grid w-screen h-screen p-5 pb-2
    grid-cols-1 grid-rows-5 gap-4
    tablet:grid-cols-2 tablet:grid-rows-3">

    <div class="grid text-center ">
        
        <p class="relative font-extralight text:lg 
        mobile:text-xl tablet:text-2xl
        decoration-4 ">
        Home to fabulous food, rich history and 
        stunning scenery - Greece's most vibrant city has 
        it all.</p>    
    </div>
        
    <div class="">
            <NuxtLink to="">
                <Item
                class="bg-arxlgko">
                    <template v-slot:title>
                        <h3 class="text-transparent font-bold 
                            text-4xl hover:text-white 
                            grid place-content-center
                            desktop:w-[620px] desktop:h-[200px] 
                            laptop:w-[900px] laptop:h-[240px]
                            tablet:w-[400px] tablet:h-[230px]
                            w-[680px] h-[130px]">
                            Archaeological Museum of Thessaloniki </h3>
                    </template>
                </Item>
            </NuxtLink>
        </div>

        <div class="">
            <NuxtLink to="">
                <Item
                class="bg-byz">
                    <template v-slot:title>
                        <h3 class="text-transparent font-bold 
                            text-4xl hover:text-white 
                            grid place-content-center
                            desktop:w-[620px] desktop:h-[200px] 
                            laptop:w-[900px] laptop:h-[240px]
                            tablet:w-[400px] tablet:h-[230px]
                            w-[680px] h-[130px]">
                            Museum of Byzantine Culture</h3>
                    </template>
                </Item>
            </NuxtLink>
        </div>
    
    
        <div class="">
            <NuxtLink to="/main/museums">
                <Item
                class="bg-noesis">
                    <template v-slot:title>
                        <h3 class="text-transparent font-bold 
                            text-4xl hover:text-white 
                            grid place-content-center
                            desktop:w-[620px] desktop:h-[200px] 
                            laptop:w-[900px] laptop:h-[240px]
                            tablet:w-[400px] tablet:h-[230px]
                            w-[680px] h-[130px]">
                            Noesis - Science Center and Technology Museum</h3>
                    </template>
                </Item>
            </NuxtLink>
        </div>

        <div class="">   
            <a href="">
                <Item
                class="bg-tel">
                    <template v-slot:title>
                        <h3 class="content">Teloglion Foundation of Art A.U.Th.</h3>
                    </template>
                </Item>
            </a>
        </div>

        <div class="">
            <a href="">
                <Item
                class="bg-romag">
                    <template v-slot:title>
                        <h3 class="content">Roman Forum Museum (Ancient Agora)</h3>
                    </template>
                </Item>
            </a>
        </div> 

    </div>    
</template>

<script>
definePageMeta({
    layout:  "details",
});
</script>