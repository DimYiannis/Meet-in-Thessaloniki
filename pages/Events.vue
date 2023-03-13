<template>
    <div class="eventspage">
        
        <div class="grid tablet:col-span-2 laptop:col-span-1 text-center ">
            <h1 class="font-bold text-2xl mobile:text-4xl 
            tablet:text-7xl laptop:text-7xl">
            Dromena</h1>
            <p class="relative font-extralight text:lg 
            mobile:text-xl tablet:text-2xl
            decoration-4 ">
            There is a variety of choices to spend creatively 
            your time. Meet new people and share 
            unforgettable experiences.</p>    
        </div>

        <!--nightlife-->
        <div class="desktop:row-span-3 group">
            
            <NuxtLink to="/Dromena/Nightlife">
                <Item
                class="bg-night">
                    <template v-slot:title>
                        <h3 class="content">
                           Nightlife</h3>
                    </template>
                </Item>
            </NuxtLink>
        
        </div>
    
    <!--concerts-->
        <div class=" desktop:col-span-1 group">

            <NuxtLink to="/Dromena/Concerts">
                <Item
                class="bg-concerts">
                    <template v-slot:title>
                        <h3 class="content">
                            concerts</h3>
                    </template>
                </Item>
            </NuxtLink>
        </div>
        <!--Outdoor-->
        <div class="tablet:col-span-2 laptop:col-span-1 group">

            <NuxtLink to="/Dromena/Outdoor">
                <Item
                class="bg-outdoor">
                    <template v-slot:title>
                        <h3 class="content">Outdoor Activities</h3>
                    </template>
                </Item>
            </NuxtLink>
        </div>

    </div>    
</template>

<script>


</script>