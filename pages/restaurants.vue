<template>
    <div class="restaurantpage">
        
        <div class="grid tablet:col-span-2 laptop:col-span-1 text-center  ">
           
            <h1 class="font-bold text-xl mobile:text-4xl 
            tablet:text-7xl laptop:text-6xl">
            Thermopolia</h1>
            <p class="relative font-extralight text-xs 
            mobile:text-base tablet:text-2xl
            decoration-4 ">
            Greece's first Unesco city of gastronomy, 
            famed for perfect pastries, spicy meatballs, 
            wine and local specialities reflecting 
            a rich cultural heritage.</p>    
        </div>

        <div class="desktop:row-span-2 group">
            
            <NuxtLink to="/Thermopolia/Ethnic" >
                <Item
                class="bg-traditional">
                    <template v-slot:title>
                        <h3 class="content">
                            Ethnic</h3>
                    </template>
                </Item>
            </NuxtLink>
        
        </div>
    
    
        <div class="laptop:col-span-2 desktop:col-span-1 group">
            <NuxtLink to="/Thermopolia/gourmet">
                <Item
                class="bg-gourmet">
                    <template v-slot:title>
                        <h3 class="content">
                            Gourmet</h3>
                    </template>
                </Item>
            </NuxtLink>
        </div>

        <div class="group">   
            <NuxtLink to="/Thermopolia/Seafood">
                <Item
                class="bg-fish">
                    <template v-slot:title>
                        <h3 class="content">Fish & Seafood</h3>
                    </template>
                </Item>
            </NuxtLink>
        </div>

        <div class="group">
            <NuxtLink to="/Thermopolia/Steak">
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