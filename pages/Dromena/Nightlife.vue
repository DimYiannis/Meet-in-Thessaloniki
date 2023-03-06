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
                   <div class="relative self-center h-fit text-white w-fit">
                       <h1 class="mb-6 text-lg tablet:text-2xl 
                       laptop:text-4xl  w-max">{{data.name}}</h1>
                       <h2 class="absolute top-6 mobile:top-8 laptop:top-10 laptop:text-base
                        text-xs w-max">Thessaloniki, GR</h2>              
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
                       class=" mobile:w-[400px] 
                       tablet:w-[700px] laptop:w-[900px] laptop:h-[500px]
                       desktop:w-[1000px] lgdesk:w-[1200px] h-[400px]"
                           style="border:1;" allowfullscreen="" loading="lazy">
                       </iframe>
                   </template>

    </Plaisio>
</template>

<script>
definePageMeta({
   layout:  "details",
});

export default {
   data() {
     return {
       data: [
         
         {
           id: 'Ladadika',
           name: 'Ladadika',
           info: "Ladadika welcomes local and foreign visitors of all ages, combining their picturesque beauty with the many quality options for both food and drink. Espresso bars, cafes, taverns, beer bars and various clubs coexist within a short distance from each other",
           img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/c1/3e/9b/ladadika-district.jpg?w=1200&h=-1&s=1",
           location: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d648.8851713383469!2d22.93686387562212!3d40.63487559038154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sel!2sgr!4v1678102620419!5m2!1sel!2sgr" 
         },
         {
           id: '  Valaoritou ',
           name: ' Valaoritou ',
           info: " It is an old area of ​​historical character, which has completely changed its face with the countless bars, beer halls and clubs that have settled there in recent years in its old listed and neoclassical buildings, making it today the most popular and young spot in the city! an old area of ​​historical character, which has completely changed its face with the countless bars, beer halls and clubs that have settled there in recent years in its old preserved and neoclassical buildings, making it today the most popular and young spot in the city!",
           img: 'https://parallaximag.gr/wp-content/uploads/2021/05/resize_valaoritou-proi.jpg',
           location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1513.8338893329508!2d22.937328297344955!3d40.63720802472713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a839a7042e68e3%3A0x74f86252719714ab!2zzpLOsc67zrHPic-Bzq_PhM6_z4UsIM6YzrXPg8-DzrHOu86_zr3Or866zrc!5e0!3m2!1sel!2sgr!4v1678103206235!5m2!1sel!2sgr",
         },
         {
           id: ' Svolou Street',
           name: '  Svolou Street',
           info: "Alexandrou Svolou is a neighborhood famous for its bars, as it counts quite a few good options along its length. There you will find several pubs and shops where you can enjoy a good beer with your loved ones.",
           img: 'https://parallaximag.gr/wp-content/uploads/2021/06/%CE%91%CE%BB%CE%B5%CE%BE%CE%AC%CE%BD%CE%B4%CF%81%CE%BF%CF%85-%CE%A3%CE%B2%CF%8E%CE%BB%CE%BF%CF%85-5.jpg',
           location:"https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d991.172057262772!2d22.947986230501332!3d40.63204253069654!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sel!2sgr!4v1678103834509!5m2!1sel!2sgr",
         },
         {
           id: "Mitropoleos Street",
           name: "Mitropoleos Street",
           info: "Mitropoleos street in Thessaloniki is a bustling area known for its many bars, cafes, and restaurants. The street is located in the heart of the city center, and is popular with locals and tourists alike. The bars on Mitropoleos street offer a range of atmospheres and vibes, from cozy and laid-back to lively and upbeat. Some of the bars feature outdoor seating, making them a great place to enjoy a drink or a meal while people-watching or soaking up the atmosphere of the city. The area is also known for its nightlife scene, with many of the bars staying open until the early hours of the morning. Whether you're looking for a quiet spot to enjoy a cocktail or a lively spot to dance the night away, Mitropoleos street has something to offer. ",
           img: 'https://media-cdn.tripadvisor.com/media/photo-s/0c/74/54/05/outdoor-view-by-mitropoleos.jpg',
           location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.9455890151335!2d22.94427935344239!3d40.63108190031332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a8390668280bfb%3A0x1d81afe86b1c915a!2zzpzOt8-Ez4HOv8-Az4zOu861z4nPgiwgzpjOtc-Dz4POsc67zr_Ovc6vzrrOtw!5e0!3m2!1sel!2sgr!4v1678104223274!5m2!1sel!2sgr",
         }, 
       ],
       }    
   }
}   
</script>