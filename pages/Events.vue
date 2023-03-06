<template>
    <div class="grid w-[95vw] p-5 tablet:w-[98vw] h-screen pb-2
    grid-cols-1 grid-rows-4 gap-4
    tablet:grid-cols-2 tablet:grid-rows-3 laptop:grid-rows-2">
        
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
        <div class="desktop:row-span-3">
            
            <NuxtLink to="/Dromena/Nightlife">
                <Item
                class="bg-night">
                    <template v-slot:title>
                        <h3 class="text-transparent font-bold 
                        text-2xl tablet:text-4xl hover:text-white 
                            grid place-content-center
                            desktop:w-[620px] desktop:h-[600px] 
                            laptop:w-[450px] laptop:h-[240px]
                            tablet:w-[360px] tablet:h-[230px]
                            mobile:w-[400px] mobile:h-[100px]
                            h-[130px]">
                           Nightlife</h3>
                    </template>
                </Item>
            </NuxtLink>
        
        </div>
    
    <!--concerts-->
        <div class=" desktop:col-span-1">

            <NuxtLink to="/Dromena/Concerts">
                <Item
                class="bg-concerts">
                    <template v-slot:title>
                        <h3 class="text-transparent font-bold 
                        text-2xl tablet:text-4xl hover:text-white 
                            grid place-content-center
                            desktop:w-[620px] desktop:h-[200px] 
                            laptop:w-[900px] laptop:h-[240px]
                            tablet:w-[350px] tablet:h-[180px]
                            mobile:w-[400px] mobile:h-[100px]
                            h-[130px]">
                            concerts</h3>
                    </template>
                </Item>
            </NuxtLink>
        </div>
        <!--Outdoor-->
        <div class="tablet:col-span-2 laptop:col-span-1">

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