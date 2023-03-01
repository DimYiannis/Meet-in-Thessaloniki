<template>
    <Plaisio v-for="place in places" :key="place.id" :id="place.id" 
               :name="place.name" :info="place.info"
               class="grid gap-5">

       <template #img>
           <div class="left-0 w-screen tablet:h-[350px]">

               <img class="object-cover w-screen tablet:h-[350px]" :src="place.img"/>
           

               <span class="flex rounded-full z-10 relative bottom-20 left-5 
               bg-[#383836] w-fit px-5 opacity-70 
               hover:opacity-90 hover:scale-105 duration-500">
                   <div class="relative self-center h-fit text-white">
                       <h1 class="mb-6 text-xs mobile:text-base tablet:text-2xl laptop:text-4xl ">{{place.name}}</h1>
                       <h2 class="absolute top-6 mobile:top-8 laptop:top-10 laptop:text-base
                       tablet:text-sm text-xs">Thessaloniki, GR</h2>              
                   </div> 
               </span>
                                                                                                                                                                                                    
           </div>
                      
                   </template>

                   <template #info>
                       <h1 class="font-bold  text-lg mobile:text-2xl 
                       tablet:text-4xl text-center mb-4">At {{ place.name }}</h1>
                       <p class="text-black text-xs mobile:text-base 
                       text-center mx-10  tablet:text-2xl 
                       ">{{place.info}}</p>
                   </template>

                   <template #map>

                     <p class="text-center text-black
                       text-3xl font-semibold"
                       >Location</p>

                       <iframe :src="place.location" 
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
       places: [
         
         {
           id: 'Aristotelous Square',
           name: 'Aristotelous Square',
           info: " The main city square of Thessaloniki and certainly one of the most famous places in all of Greece and almost synonymous with the city of Thessaloniki itself, located on Nikis avenue (on the city's waterfront), in the city center. It was designed by French architect Ernest Hébrard in 1918, but most of the square was built in the 1950s. The square plays an important role in the sociopolitical life not only of the city, but of the wider country as well.",
           img: "https://res.cloudinary.com/fleetnation/image/private/c_fit,w_1120/fl_no_overflow,g_south,l_text:style_gothic2:%C2%A9%20bestravelvideo,o_20,y_10/fl_no_overflow,g_center,l_watermark4,o_25,y_50/v1597342340/vptprieagxhxjdijusna.jpg",
           location: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12111.553140022499!2d22.9408366!3d40.6323456!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a8390885a99cbd%3A0xe39e3d18ec8160ab!2zzqDOu86xz4TOtc6vzrEgzpHPgc65z4PPhM6_z4TOrc67zr_Phc-C!5e0!3m2!1sel!2sgr!4v1677701985892!5m2!1sel!2sgr"
         },
         {
           id: ' Nea Paralia',
           name: ' Nea Paralia',
           info: " Nea Paralia is a vibrant and lively destination that offers stunning views of the Thermaic Gulf and the city's landmarks, such as the White Tower, the Aristotelous Square, and the iconic Mount Olympus in the distance. The promenade is a perfect place for a leisurely walk, jog, or bike ride, with plenty of benches, green spaces, and public art installations along the way. It is also a popular spot for outdoor events and festivals, including concerts, exhibitions, and open-air cinema screenings.",
           img: 'https://www.lafarge.gr/sites/greece/files/styles/media_xl/public/2022-03/nea-paralia-thessaloniki-night-big.jpeg.webp?itok=EPaC9x3M',
           location:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12114.4419902585!2d22.9492766788208!3d40.616416593553!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a839c9c5c6a34f%3A0x7036138fa503d03b!2zzqDPgc6_zrrPhc68zrHOr86xIM6YzrXPg8-DzrHOu86_zr3Or866zrfPgg!5e0!3m2!1sel!2sgr!4v1677703472423!5m2!1sel!2sgr",
         },
         {
           id: 'Seich-Sou Park',
           name: 'Seich-Sou Park',
           info: ' A beautiful forested area located on the outskirts of Thessaloniki, Greece. The forest covers an area of about 200 hectares and is home to a variety of trees, including oak, pine, and plane trees. The Seich Sou Forest is a great destination for anyone seeking a peaceful retreat in nature, away from the hustle and bustle of the city. Whether you are looking for a scenic hike, a relaxing picnic, or a glimpse of the local wildlife, the Seich Sou Forest has something to offer.',
           img: 'https://centralmacedoniablob.blob.core.windows.net/portal-content/%CE%A3%CE%B5%CE%B9%CF%87%20%CF%83%CE%BF%CF%85_Seix%20sou.jpeg',
           location:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12110.388412856935!2d22.9942621!3d40.6387664!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a83873e26ff1bd%3A0x851c0f52e82a56c0!2zzqPOrc65z4cgzqPOv8-F!5e0!3m2!1sel!2sgr!4v1677703285184!5m2!1sel!2sgr",
         },
         {
           id: "Pasha's Gardens",
           name: "Pasha's Gardens",
           info: "Pasas Garden is a beautiful and historic park located in the heart of Thessaloniki. Known for its beautiful landscaping, featuring a variety of trees, flowers, and shrubs, as well as several small fountains and ponds. The park also has several benches and picnic tables, making it an ideal spot for relaxation and socializing. A must-visit destination for anyone traveling to Thessaloniki, offering a unique blend of natural beauty, history, and culture in a peaceful and tranquil setting. ",
           img: 'https://www.thessalonikitourism.gr/images/2019/02/18/pashagardens5.png',
           location:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12110.478192667637!2d22.9597702!3d40.6382715!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a83851848486b9%3A0x8c83b305ea6e98f4!2zzprOrs-Azr_OuSDPhM6_z4UgzqDOsc-Dzqw!5e0!3m2!1sel!2sgr!4v1677704381143!5m2!1sel!2sgr",
         }, 
       ],
       }    
   }
}   
</script>