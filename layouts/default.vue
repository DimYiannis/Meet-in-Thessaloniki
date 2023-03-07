<template>

    
    <header class=" bg-[#f1f1f1] drop-shadow-md z-10 w-[99vw] ">
            <nav class="container mx-auto h-16 grid items-center">
                <ul class="flex justify-between ">
                    <NuxtLink to="/" class="btnnav">
                        <h1 class="m-1">Thessaloniki</h1>
                    </NuxtLink>
                    <li class="mobile:flex gap-4 hidden">
                        <NuxtLink to="/shops" class="btnnav">
                            <h1 class="m-1">Market</h1>
                        </NuxtLink>
                        <NuxtLink to="/restaurants" class="btnnav">
                            <h1 class="m-1">Restaurants</h1>
                        </NuxtLink>
                        <NuxtLink to="/Events" class="btnnav">
                            <h1 class="m-1">Events</h1>
                        </NuxtLink>
                    </li>

                    <!--drop down menu-->
                    <div class=" mobile:hidden mr-2" @click="showBar=true"
                    >
                        <button
                        @click="toggleBar"
                        class="btnnav">
                            <svg xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke-width="1.5" 
                            stroke="currentColor" 
                            class="headersvg text-black"
                            >
                            <path stroke-linecap="round" 
                            stroke-linejoin="round" 
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                            </svg>
                        </button>
                    </div>

                    <Teleport to="body">
                        <Dropdown v-if="showBar" class="relative" @click="toggleBar" @mouseleave="toggleBar" />
                    </Teleport>

                </ul> 
            </nav>    
    </header>
    

    <div class="text-black
    h-screen w-[95vw] ">
    <slot/>
    </div>
</template>

<script>
export default {
    
    data() {
        return {
            showBar: false, 
        }
    },
    methods: {
        toggleBar() {
            this.showBar = !this.showBar
        },
        
    },      
}
</script>

<style scoped>
.router-link-exact-active {
    color: #c5caca;
    border-color: #c5caca;
}

</style>