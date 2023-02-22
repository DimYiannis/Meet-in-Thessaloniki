<template>
    <div>
        <header class=" bg-[#f1f1f1] drop-shadow-2xl">
            <nav class="container mx-auto h-16 grid content-center">
                <ul class="flex justify-between">
                    <NuxtLink to="/" class="btn">Main</NuxtLink>
                    <li class="flex gap-4">
                        <NuxtLink to="/shops" class="btn">Market</NuxtLink>
                        <NuxtLink to="/restaurants" class="btn">Restaurants</NuxtLink>
                        <NuxtLink to="/Events" class="btn">Events</NuxtLink>
                    </li>
                </ul> 
            </nav>    
        </header>
    </div>
    
    <NuxtLayout>
        <NuxtPage/>
    </NuxtLayout>    
        

      
   
</template>

<script setup>

</script>

<style scoped>
.router-link-exact-active {
    color: #000000;
}

</style>