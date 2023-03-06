<template>
    <div class="grid w-[98vw] h-screen p-5 pb-2
    grid-cols-1 grid-rows-5 gap-4
    tablet:grid-cols-2 tablet:grid-rows-3">
        
        <div class="grid tablet:col-span-2 laptop:col-span-1 text-center ">
            <h1 class="font-bold text-2xl mobile:text-4xl 
            tablet:text-7xl laptop:text-7xl">
            Thermopolia</h1>
            <p class="relative font-extralight text:lg 
            mobile:text-xl tablet:text-2xl
            decoration-4 ">
            Greece's first Unesco city of gastronomy, 
            famed for perfect pastries, spicy meatballs, 
            wine and local specialities reflecting 
            a rich cultural heritage.</p>    
        </div>

        <div class="desktop:row-span-2">
            
            <NuxtLink to="/restaurants/Ethnic" >
                <Item
                class="bg-traditional">
                    <template v-slot:title>
                        <h3 class="text-transparent font-bold 
                            text-4xl hover:text-white 
                            grid place-content-center
                            desktop:w-[620px] desktop:h-[400px] 
                            laptop:w-[450px] laptop:h-[240px]
                            tablet:w-[360px] tablet:h-[230px]
                            h-[130px]">
                            Ethnic</h3>
                    </template>
                </Item>
            </NuxtLink>
        
        </div>
    
    
        <div class="laptop:col-span-2 desktop:col-span-1">
            <NuxtLink to="/restaurants/gourmet">
                <Item
                class="bg-gourmet">
                    <template v-slot:title>
                        <h3 class="text-transparent font-bold 
                            text-4xl hover:text-white 
                            grid place-content-center
                            desktop:w-[620px] desktop:h-[200px] 
                            laptop:w-[900px] laptop:h-[240px]
                            tablet:w-[400px] tablet:h-[230px]
                            h-[130px]">
                            Gourmet</h3>
                    </template>
                </Item>
            </NuxtLink>
        </div>

        <div class="">   
            <NuxtLink to="/restaurants/Seafood">
                <Item
                class="bg-fish">
                    <template v-slot:title>
                        <h3 class="content">Fish & Seafood</h3>
                    </template>
                </Item>
            </NuxtLink>
        </div>

        <div class="">
            <NuxtLink to="/restaurants/Steak">
                <Item
                class="bg-meat">
                    <template v-slot:title>
                        <h3 class="content">Steak</h3>
                    </template>
                </Item>
            </NuxtLink>
        </div> 

    </div>    
</template>

<script>


</script>