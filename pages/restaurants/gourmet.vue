<template>
    <div class="grid gap-10 bg-[#2d2e30bd] ">

        <div class="text-center text-white 
         pt-4 px-2 text-3xl font-semibold">
            <p>#gourmet_skg</p>
        </div>

        <Blog v-for="data in data" :key="data.id" :id="data.id" 
        :name="data.name" :info="data.info" >
            
            <template #img>
                <img class="rounded-full w-[200px] h-[200px] 
                tablet:w-[300px] tablet:h-[300px] 
                lgdesk:w-[350px] lgdesk:h-[350px] object-cover " 
                    :src="data.img" />
            </template>


            <template #name>
            {{data.name}}
            </template>

            <template #info>
                <p class="text-white text-center mx-10 font-semibold 
                ">{{data.info}}</p>
            </template>

            <template #location>

              <p class="text-center text-white 
                text-3xl font-semibold laptop:hidden"
                >Location</p>

                <iframe :src="data.location" 
                class=" mobile:w-[400px] 
                tablet:w-[700px] laptop:w-[300px] laptop:h-[500px]
                desktop:w-[400px] lgdesk:w-[500px] h-[400px]"
                    style="border:1;" allowfullscreen="" loading="lazy">
                </iframe>
            </template>

        </Blog>

</div>
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
            id: ' Salonica Restaurant',
            name: ' Salonica Restaurant',
            info: "One of the most awarded restaurants in Thessaloniki, with the magical view of Thermaikos looming far and wide on the horizon. Going beyond the first impressions, you will notice the open-kitchen, which longs to make you part of the whole process. The initiation of the serving ritual will then reveal to you a wonderful kakavia or meat soup respectively, handmade pasta with fresh fish, hunky cheeks or siganture lobster with noodles. Seafood flavors, meat creations and fusion desserts make up one of the top culinary experiences in the city.",
            img: "https://news.gtp.gr/wp-content/uploads/2021/10/Makedonia-Palace_SALONICA-RESTAURANT_27.jpg",
            location: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12114.04779044516!2d22.9522369!3d40.6185905!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a8391e0dc70937%3A0xa04326d48689939d!2sSalonica%20Restaurant%20%26%20Bar!5e0!3m2!1sel!2sgr!4v1677949104492!5m2!1sel!2sgr"
          },
          {
            id: ' Clochard',
            name: 'Clochard',
            info: " Having repeatedly proven its value and with more than 40 years in its history, it counts numerous Golden Skoufos, awards and distinctions, the biggest of which is the dedicated and eternal preference of the people of Thessaloniki - and not only. The menu steals, the best of foreign cuisines, of course having Greek as its point of reference. The wine list satisfies even the most demanding wine tasters!",
            img: 'https://cdn.ethnos.gr/imgHandler/875/d8974518-d721-4057-9a2a-22fa7175b68b.jpg',
            location: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12111.338810297682!2d22.9401343!3d40.6335272!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a8390621efe2e7%3A0x950c56de0b91815c!2sClochard!5e0!3m2!1sel!2sgr!4v1677949208807!5m2!1sel!2sgr",
          },
          {
            id: 'Duck Private Cheffing',
            name: 'Duck Private Cheffing',
            info: "At Duck everything starts from the space. The rustic character, the carefully homey decoration, the open kitchen and the color that is subtly pierced everywhere create this cosiness that you don't usually find in the company of the fine-dining philosophy. Things are different here. It is private, with its few tables aimed at exactly that, it is an excellent example of haute cuisine and at the same time, it is warm and exudes coziness. Its menu, the perfect blend of Mamadistic, traditional and European, gourmet tastes, is ever-changing, constantly striving to improve itself. Without further ado, the multi-award-winning Duck (with the most recent addition of the star at the FNL Best Restaurant Awards) has achieved something unique: the ultimate identification of fine-dining and casual experience.",
            img: 'https://enka.gr/wp-content/uploads/2019/09/IMG_0629.jpg',
            location: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12124.340293605448!2d22.98181492006834!3d40.56179852920003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a839ac41739ef1%3A0x297acadc44e9a6c7!2sDuck!5e0!3m2!1sel!2sgr!4v1677949356648!5m2!1sel!2sgr",
          },
          {
            id: 'Το Μανιτάρι Restaurant',
            name: 'Το Μανιτάρι Restaurant',
            info: "Having earned a place among the city's top restaurants, with its awards pale in comparison to its flavors, Manitari is well hidden on the second floor of the small shopping center of Sophouli. The space often surprises those who visit it for the first time. The successful combination of modern design with retro elements, partly the bistro philosophy and certainly the urban orientation and elegant aesthetics is something you might not expect to meet in a neighborhood shopping mall. The same principles seem to run through its culinary character. Simple and at the same time dynamic, authentically Greek but also with strong doses of fusion, on its menu you will find the cabbage dolma in risotto, the pastitsio decorated with sweets, the Santorini fava beans with a poached egg with a panko crust, the beef tartare dressed in an Asian style and the yuvetsaki to make an acquaintance with the porcini mushrooms.",
            img: 'https://www.to-manitari.gr/sys/timthumb.php?src=uploads/1_1541684133_f08f9063c61145657eb3dcd4f31f9c3a_82_1540459052_efaee9e8ff5128639e2eb863f7f2fa53_44657160_273261096640229_5663590618081787904_n.jpg&w=960&h=540&q=90&zc=3',
            location: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12118.821263657695!2d22.949548!3d40.5922596!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a83ed4597389e1%3A0xb8e2b247ab0557bb!2zzqTOvyDOnM6xzr3Ouc-EzqzPgc65!5e0!3m2!1sel!2sgr!4v1677949628303!5m2!1sel!2sgr"
          },
          {
            id: 'Dome Real Cuisine',
            name: 'Dome Real Cuisine',
            info: "The Nikopolis hotel wishes to highlight gourmet cuisine in its most Greek yet simple version. Dome aspires to move away from unnecessary flourishes and give you haute gastronomy emerging from any excesses. At Dome Real Cuisine you have to explore the world of meat, as the restaurant even has its own aging room, while the seafood options are not missing from the list, both on the appetizer card and on the main menu.",
            img: 'https://www.dome-restaurant.com/gallery/Images/gallery/gal3.jpg',
            location: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12126.617785217146!2d22.990143!3d40.5492229!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a83f783d42adb9%3A0xf1dadffe67597817!2sDOME%20Real%20Cuisine!5e0!3m2!1sel!2sgr!4v1677949805231!5m2!1sel!2sgr" 
          },
          
        ],
        }    
    }
}   
</script>