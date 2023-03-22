<template>

    
    <header class="header">
            <nav class="navbar">
                <ul class="flex justify-between mx-2">
                    <NuxtLink to="/" class="btn">
                        <h1 class="m-1">Thessaloniki</h1>
                    </NuxtLink>
                    <li class="mobile:flex gap-4 hidden">
                        <NuxtLink to="/shops" class="btn">
                            <h1 class="m-1">Market</h1>
                        </NuxtLink>
                        <NuxtLink to="/restaurants" class="btn">
                            <h1 class="m-1">Restaurants</h1>
                        </NuxtLink>
                        <NuxtLink to="/Events" class="btn">
                            <h1 class="m-1">Events</h1>
                        </NuxtLink>
                    </li>

                    <!--drop down menu-->
                    <div class=" mobile:hidden mr-2" @click="isBarOpen=true"
                    >
                        <button
                        @click="isBarOpen=true"
                        class="btn">
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
                        <Dropdown v-if="isBarOpen" class="relative" ref="showBar"
                        @click="isBarOpen=false" @mouseleave="isBarOpen=false" />
                    </Teleport>

                </ul> 
            </nav>    
    </header>
    

    <div class="text-black
    h-screen w-[100vw] ">
    <slot/>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

const isBarOpen = ref(false)
const showBar = ref(null)

onClickOutside(showBar, () => (isBarOpen.value = false))


</script>

<style scoped>
.router-link-exact-active {
    color: #c5caca;
    border-color: #c5caca;
}

</style>