<template>
    <div class="marketspage">
        
        <div class="grid tablet:col-span-2 laptop:col-span-1 text-center ">
            <div class="text-center">
                <h1 class="font-bold text-2xl mobile:text-4xl 
                tablet:text-7xl laptop:text-7xl pb-5">
                Agora</h1>
                <p class="text:lg mobile:text-xl tablet:text-2xl">ἀγορά (agorá, “assembly, place of assembly, market”), 
                from ἀγείρω (ageírō, “to gather”)</p>
            </div>
        </div>

        <div class="desktop:row-span-3 group">
            
            <NuxtLink to="/market/mall">
                <Item
                class="bg-mall">
                    <template v-slot:title>
                        <h3 class="content">
                            Malls</h3>
                    </template>
                </Item>
            </NuxtLink>
        
        </div>
    
    
        <div class="group">
            <NuxtLink to="/market/local">
                <Item
                class="bg-local">
                    <template v-slot:title>
                        <h3 class="content">
                            Local Shops</h3>
                    </template>
                </Item>
            </NuxtLink>
        </div>

        <div class="tablet:col-span-2 laptop:col-span-1 group">   
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


