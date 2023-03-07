<template>
    <Plaisio v-for="data in data" :key="data.id" :id="data.id" 
               :name="data.name" :info="data.info"
               class="grid gap-5">

       <template #img>
           <div class="left-0 w-[98vw] tablet:h-[500px]">

               <img class="object-cover w-screen tablet:h-[500px]" :src="data.img"/>
           

               <span class="flex rounded-full z-10 relative bottom-20 left-5 
               bg-[#383836] w-fit px-5 opacity-70 
               hover:opacity-90 hover:scale-105 duration-500">
                   <div class="relative self-center h-fit text-white">
                       <h1 class="mb-6 text-xs mobile:text-base tablet:text-2xl laptop:text-4xl ">{{data.name}}</h1>
                       <h2 class="absolute top-6 mobile:top-8 laptop:top-10 laptop:text-base
                       tablet:text-sm text-xs w-max">Thessaloniki, GR</h2>              
                   </div> 
               </span>
                                                                                                                                                                                                    
           </div>
                      
                   </template>

                   <template #info>
                       <h1 class="font-bold  text-lg mobile:text-2xl 
                       tablet:text-4xl text-center mb-4">At {{ data.name }}</h1>
                       <p class="text-black text-xs mobile:text-base 
                       text-center mx-10  tablet:text-2xl 
                       ">{{data.info}}</p>
                   </template>

                   <template #map>

                     <p class="text-center text-black
                       text-3xl font-semibold"
                       >Location</p>

                       <iframe :src="data.location" 
                       class="w-[200px] mobile:w-[400px] 
                       tablet:w-[700px] laptop:w-[900px] laptop:h-[500px]
                       desktop:w-[1000px] lgdesk:w-[1200px] h-[400px]"
                           style="border:1;" allowfullscreen="" loading="lazy">
                       </iframe>
                   </template>

    </Plaisio>
</template>

<script>
definePageMeta({
   layout:  "default",
});

export default {
   data() {
     return {
       data: [
         
         {
           id: 'Agora Modiano',
           name: 'Agora Modiano',
           info: " A unique blend of tradition and modernity, culture and commerce, in a vibrant and lively setting. Agora Modiano is a modern indoor market located in the heart of Thessaloniki, adjacent to the historic Modiano Market. Rich in cultural and historical significance, as it is situated in one of the oldest and most historic neighborhoods of Thessaloniki. The market is a testament to the city's rich cultural heritage and its longstanding tradition of commerce and trade.",
           img: "https://www.gastronomos.gr/wp-content/uploads/2023/01/agora-modiano-proti-volta-6-gastronomos.jpg",
           location: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12111.12775868795!2d22.9416123!3d40.6346907!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a839a92a802431%3A0x1c1d0c0a4f2c48d8!2zzpHOs86_z4HOrCDOnM6_zrTOuc6szr3Ovw!5e0!3m2!1sel!2sgr!4v1677742204644!5m2!1sel!2sgr" 
         },
         {
           id: ' Kapani Market',
           name: ' Kapani Market',
           info: " A historic market district located in the heart of Thessaloniki. The market is one of the oldest and most famous in the city, dating back to the Ottoman era. The Kapani Market is a bustling and vibrant area that features a wide range of shops and stalls selling a variety of goods, including fresh produce, meat, fish, spices, herbs, and handmade crafts. The market is particularly famous for its spices and herbs, which are sold in colorful displays and aromatic piles.",
           img: 'https://www.biscotto.gr/file/2022/09/kapani.jpg',
           location:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12110.94382136856!2d22.9428721!3d40.6357047!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a839a92a802431%3A0xc12b9ab5b7a0644d!2zzpHOs86_z4HOrCDOms6xz4DOrM69zrk!5e0!3m2!1sel!2sgr!4v1677742396358!5m2!1sel!2sgr",
         },
         {
           id: 'Bezesteni Market',
           name: 'Bezesteni Market',
           info: "Bezesteni Market is a historic covered market located in the heart of Thessaloniki, dates back to the Ottoman era and was originally built as a covered bazaar for the city's thriving trade in textiles and clothing. Known for its traditional architecture and its rich cultural and historical significance. The market has been a central part of Thessaloniki's commercial and cultural life for centuries and is an important landmark in the city.",
           img: 'https://parallaximag.gr/wp-content/uploads/DSC3690.jpg',
           location:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12110.781376528457!2d22.9411805!3d40.6366002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a839a7ddf5efa1%3A0x3acf752277152e45!2zzpzPgM61zrbOtc-Dz4TOrc69zrkgzpjOtc-Dz4POsc67zr_Ovc6vzrrOt8-C!5e0!3m2!1sel!2sgr!4v1677743042351!5m2!1sel!2sgr",
         },
         {
           id: "Athonos Square",
           name: "Athonos Square",
           info: "Open-air market located in Athonos Square in the heart of Thessaloniki which features a wide range of stalls and vendors selling a variety of goods, including fresh produce, meat, fish, spices, herbs, and handmade crafts. The market is particularly famous for its traditional Greek and Ottoman-style sweets and pastries, which are sold in colorful displays and sweet-smelling piles. Known for it's long history dating back to the Ottoman era and for its lively and bustling atmosphere ",
           img: 'https://www.thessalonikitourism.gr/images/2019/02/16/athonossquare2ok.png',
           location:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12111.13468800789!2d22.9449205!3d40.6346525!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a839a9d5efc98f%3A0xe2b142ccecf81b42!2zzqDOu86xz4TOtc6vzrEgzobOuM-Jzr3Ov8-C!5e0!3m2!1sel!2sgr!4v1677743386954!5m2!1sel!2sgr",
         }, 
       ],
       }    
   }
}   
</script>