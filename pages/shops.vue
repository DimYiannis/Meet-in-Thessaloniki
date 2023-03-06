<template>
    <div class="grid w-[95vw] tablet:w-[98vw] h-screen p-5 pb-2
    grid-cols-1 grid-rows-4 gap-4
    tablet:grid-cols-2 tablet:grid-rows-3 laptop:grid-rows-2">
        
        <div class="grid tablet:col-span-2 laptop:col-span-1 text-center ">
            <div class="text-center">
                <h1 class="font-bold text-2xl mobile:text-4xl 
                tablet:text-7xl laptop:text-7xl pb-5">
                Agora</h1>
                <p class="text:lg mobile:text-xl tablet:text-2xl">ἀγορά (agorá, “assembly, place of assembly, market”), 
                from ἀγείρω (ageírō, “to gather”)</p>
            </div>
        </div>

        <div class="desktop:row-span-3">
            
            <NuxtLink to="/market/mall">
                <Item
                class="bg-mall">
                    <template v-slot:title>
                        <h3 class="text-transparent font-bold 
                        text-2xl tablet:text-4xl hover:text-white 
                            grid place-content-center
                            desktop:w-[620px] desktop:h-[600px] 
                            laptop:w-[450px] laptop:h-[240px]
                            tablet:w-[350px] tablet:h-[180px]
                            mobile:w-[400px] mobile:h-[100px]
                            h-[130px]">
                            Malls</h3>
                    </template>
                </Item>
            </NuxtLink>
        
        </div>
    
    
        <div class="">
            <NuxtLink to="/market/local">
                <Item
                class="bg-local">
                    <template v-slot:title>
                        <h3 class="text-transparent font-bold 
                        text-2xl tablet:text-4xl hover:text-white 
                            grid place-content-center
                            desktop:w-[620px] desktop:h-[200px] 
                            laptop:w-[900px] laptop:h-[240px]
                            tablet:w-[350px] tablet:h-[180px]
                            mobile:w-[400px] mobile:h-[100px]
                            h-[130px]">
                            Local Shops</h3>
                    </template>
                </Item>
            </NuxtLink>
        </div>

        <div class="tablet:col-span-2 laptop:col-span-1">   
            <NuxtLink to="/market/streets">
                <Item
                class="bg-streets">
                    <template v-slot:title>
                        <h3 class="content">Shopping Streets</h3>
                    </template>
                </Item>
            </NuxtLink>
        </div>

    </div>    
    
</template>

<script setup>


</script>


