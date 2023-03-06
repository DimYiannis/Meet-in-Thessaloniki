<template>
    <div>
        <header class=" bg-[#f1f1f1] drop-shadow-md ">
            <nav class="container mx-auto h-16 grid content-center">
                <ul class="flex justify-between">
                    <NuxtLink to="/" class="btnnav">Thessaloniki</NuxtLink>
                    <li class="flex gap-4">
                        <NuxtLink to="/shops" class="btnnav">Market</NuxtLink>
                        <NuxtLink to="/restaurants" class="btnnav">Restaurants</NuxtLink>
                        <NuxtLink to="/Events" class="btnnav">Events</NuxtLink>
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