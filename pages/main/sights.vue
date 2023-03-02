<template>
     <Plaisio v-for="sight in sights" :key="sight.id" :id="sight.id" 
                :name="sight.name" :info="sight.info"
                class="grid gap-5">

        <template #img>
            <div class="left-0 w-screen tablet:h-[500px]">

                <img class="object-cover w-screen tablet:h-[500px]" :src="sight.img"/>
            

                <span class="flex rounded-full z-10 relative bottom-20 left-5 
                bg-[#383836] w-fit px-5 opacity-70 
                hover:opacity-90 hover:scale-105 duration-500">
                    <div class="relative self-center h-fit text-white">
                        <h1 class="mb-6 text-xs mobile:text-base tablet:text-2xl laptop:text-4xl ">{{sight.name}}</h1>
                        <h2 class="absolute top-6 mobile:top-8 laptop:top-10 laptop:text-base
                        tablet:text-sm text-xs">Thessaloniki, GR</h2>              
                    </div> 
                </span>
                                                                                                                                                                                                     
            </div>
                       
                    </template>

                    <template #info>
                        <h1 class="font-bold  text-lg mobile:text-2xl 
                        tablet:text-4xl text-center mb-4">At {{ sight.name }}</h1>
                        <p class="text-black text-xs mobile:text-base 
                        text-center mx-10  tablet:text-2xl 
                        ">{{sight.info}}</p>
                    </template>

                    <template #map>

                      <p class="text-center text-black
                        text-3xl font-semibold"
                        >Location</p>

                        <iframe :src="sight.location" 
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
        sights: [
          
          {
            id: 'The White Tower of Thessaloniki',
            name: 'The White Tower of Thessaloniki',
            site: 'https://www.lpth.gr/indexeg.php',
            info: "The White Tower, the landmark of Thessaloniki standing on the city's waterfront, was once the south-east tower of a large fortification. According to travelers' descriptions and old representations of the city, the section of the wall along the seafront, which was demolished in 1867, had three towers; the White Tower was the one at its east end where it joined with the east wall.",
            img: "https://www.historyhit.com/app/uploads/2020/11/white-tower-thessaloniki.jpg",
            location: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12112.623133499661!2d22.9484257!3d40.6264463!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a839af2548cc69%3A0xef18309d80742d16!2zzpvOtc-FzrrPjM-CIM6gz43Pgc6zzr_PgiDPhM63z4IgzpjOtc-Dz4POsc67zr_Ovc6vzrrOt8-C!5e0!3m2!1sel!2sgr!4v1677698545442!5m2!1sel!2sgr"
          },
          {
            id: ' Thessaloniki Castle',
            name: ' Thessaloniki Castle',
            site: '',
            info: 'The Castle of Thessaloniki, also known as Heptapyrgion or Yedi Kule, is located on a hill above the Old Town (Ano Poli). Its location gives gorgeous views to the city, the port, and the Aegean Sea.The Castle of Thessaloniki was built on the spot of the ancient Acropolis, founded by Cassander in 316 B.C. The walls of the castle, that are still visible today, date from the 4th century A.D. when the Byzantine emperor Theodosius I fortified the town.',
            img: 'https://www.greeka.com/seedo/photos/953/thessaloniki-castle-top-1-1280.webp',
            location:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12109.367003756275!2d22.957716496264638!3d40.64439643956359!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a8384ee5d7ba57%3A0x27f3770356c09f3a!2zzpXPgM-EzrHPgM-Nz4HOs865zr8gzpjOtc-Dz4POsc67zr_Ovc6vzrrOt8-C!5e0!3m2!1sel!2sgr!4v1677698947296!5m2!1sel!2sgr",
          },
          {
            id: 'Bey Hamam',
            name: 'Bey Hamam',
            site: 'https://www.noesis.edu.gr/en/',
            info: 'Bey Hamam, alternatively known as the "Baths of Paradise",Built in 1444 by sultan Murad II, it was the first Ottoman bath in Thessaloniki and the most important one still standing throughout Greece. For this reason, it is a part of those few important vestiges of Ottoman culture remaining in Thessaloniki and Greece in general',
            img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/9d/6c/57/bey-hamam.jpg?w=1200&h=-1&s=1',
            location: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6055.499609219586!2d22.943453589935316!3d40.63539931213734!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a839a9c8417999%3A0x820e11c47b62ce34!2zzpzPgM6tzrcgzqfOsc68zqzOvCAozpvOv8-Fz4TPgc6sIM6gzrHPgc6szrTOtc65z4POv8-CKQ!5e0!3m2!1sel!2sgr!4v1677699719183!5m2!1sel!2sgr",
          },
          {
            id: 'Arch of Galerious',
            name: 'Arch of Galerius (KAMARA)',
            site: 'https://www.teloglion.gr',
            info: "One of the most characteristic monuments of Thessaloniki whose purpose was not practical, but memorial and honorary. It is a triumphal arch built shortly before 305 AD to honor the Roman Emperor Galerius, after the final victory over the Persians. ",
            img: 'https://www.enjoythessaloniki.com/wp-content/uploads/2012/08/Arch%20of%20Galerius/Arch%20of%20Galerius1.jpg',
            location:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12111.575251098255!2d22.9517511!3d40.6322237!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a839a92a802431%3A0xa31f707df819cbc2!2zzpHPiM6vzrTOsSDPhM6_z4UgzpPOsc67zrXPgc6vzr_PhSAozprOsc68zqzPgc6xKQ!5e0!3m2!1sel!2sgr!4v1677700278440!5m2!1sel!2sgr",
          },
          {
            id: 'Rotunda',
            name: 'Rotunda',
            site: 'http://odysseus.culture.gr/h/1/gh151.jsp?obj_id=19243',
            info: "The emblematic monument of Thessaloniki, was constructed in the early 4th century AD, on the turning point between the pagan with the Christian world, probably as a temple for ancient cult worship or as a mausoleum for Constantine the Great (306-337).",
            img: 'https://cityportal.gr/wp-content/uploads/2022/09/greece-2710550_1920.jpg',
            location: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12111.3737520276!2d22.949760895214858!3d40.63333456814334!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a8390056ba88cf%3A0x1e132d029db9e4f2!2zzqHOv8-Ez4zOvc-EzrE!5e0!3m2!1sel!2sgr!4v1677700668554!5m2!1sel!2sgr",
          },
          
        ],
        }    
    }
}   
</script>