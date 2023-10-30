<template>
  <div class="grid gap-0.5 bg-[#2A2D31]">
    <div class="text-center text-white py-4 px-2 text-3xl font-semibold">
      <p>#Gourmet_skg</p>
    </div>

    <Slider
      v-for="data in data"
      :key="data.id"
      :id="data.id"
      :name="data.name"
      :info="data.info"
    >
      <template #img>
        <div class="place-items-center grid">
          <img
            class="rounded-lg tablet:rounded-r-3xl w-ful mobile:w-[400px] h-[200px]
                tablet:w-[300px] tablet:h-[300px] 
                lgdesk:w-[350px] lgdesk:h-[350px]"
            :src="data.img"
          />
        </div>
      </template>

      <template #img2>
        <div class="place-items-center grid">
          <img
          class="rounded-lg tablet:rounded-r-3xl w-ful mobile:w-[400px] h-[200px]
                tablet:w-[300px] tablet:h-[300px] 
                lgdesk:w-[350px] lgdesk:h-[350px]"
            :src="data.img2"
          />
        </div>
      </template>
      <template #img3>
        <div class="place-items-center grid">
          <img
          class="rounded-lg tablet:rounded-r-3xl w-ful mobile:w-[400px] h-[200px]
                tablet:w-[300px] tablet:h-[300px] 
                lgdesk:w-[350px] lgdesk:h-[350px]"
            :src="data.img3"
          />
        </div>
      </template>
      <template #map>
        <div class="place-items-center grid">
          <iframe
            :src="data.location"
            class="rounded-lg tablet:rounded-r-3xl w-ful mobile:w-[400px] h-[200px]
              tablet:w-[300px] tablet:h-[300px] 
              lgdesk:w-[350px] lgdesk:h-[350px]"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          >
          </iframe>
        </div>
      </template>

      <template #name>
        {{ data.name }}
      </template>

      <template #info>
        <p class="text-center text-xs laptop:text-base 
         mx-10 font-semibold">
          {{ data.info }}
        </p>
      </template>
    </Slider>
  </div>
</template>

<script>
definePageMeta({
  layout: "default",
});
export default {
  data() {
    return {
      data: [
        {
          id: " Salonica Restaurant",
          name: " Salonica Restaurant",
          info: "One of the most awarded restaurants in Thessaloniki, with the magical view of Thermaikos looming far and wide on the horizon. Going beyond the first impressions, you will notice the open-kitchen, which longs to make you part of the whole process. The initiation of the serving ritual will then reveal to you a wonderful kakavia or meat soup respectively, handmade pasta with fresh fish, hunky cheeks or siganture lobster with noodles. Seafood flavors, meat creations and fusion desserts make up one of the top culinary experiences in the city.",
          img: "https://news.gtp.gr/wp-content/uploads/2021/10/Makedonia-Palace_SALONICA-RESTAURANT_27.jpg",
          img2: "https://lh3.googleusercontent.com/p/AF1QipN_jxTBGvGZZU_fW-Pg9anIDWTQ6xurV7QBAtdJ=s680-w680-h510",
          img3: "https://www.biscotto.gr/file/2019/07/Salonica-Gardenok.jpg",
          location:
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12114.04779044516!2d22.9522369!3d40.6185905!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a8391e0dc70937%3A0xa04326d48689939d!2sSalonica%20Restaurant%20%26%20Bar!5e0!3m2!1sel!2sgr!4v1677949104492!5m2!1sel!2sgr",
        },
        {
          id: " Clochard",
          name: "Clochard",
          info: " Having repeatedly proven its value and with more than 40 years in its history, it counts numerous Golden Skoufos, awards and distinctions, the biggest of which is the dedicated and eternal preference of the people of Thessaloniki - and not only. The menu steals, the best of foreign cuisines, of course having Greek as its point of reference. The wine list satisfies even the most demanding wine tasters!",
          img: "https://cdn.ethnos.gr/imgHandler/875/d8974518-d721-4057-9a2a-22fa7175b68b.jpg",
          img2: "https://www.kathimerini.gr//resources/2015-12/_dsc8343.jpg",
          img3: "https://lh3.googleusercontent.com/p/AF1QipOtkuWT63cOVNt95VvKCVVTj_eIt2iRmMpFO_EO=s680-w680-h510",
          location:
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12111.338810297682!2d22.9401343!3d40.6335272!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a8390621efe2e7%3A0x950c56de0b91815c!2sClochard!5e0!3m2!1sel!2sgr!4v1677949208807!5m2!1sel!2sgr",
        },
        {
          id: "Duck Private Cheffing",
          name: "Duck Private Cheffing",
          info: "Rustic character, carefull homey decoration, open kitchen and cosiness. It is private, with a few tables aimed at exactly that, it is an excellent example of haute cuisine. In its menu you will find, traditional and European, gourmet tastes. Identified as a place of fine-dining and casual experience.",
          img: "https://www.gastronomos.gr/wp-content/uploads/2021/03/b_duck_dsc_3605_jm.jpg",
          img2: "https://enka.gr/wp-content/uploads/2019/09/IMG_0629.jpg",
          img3: "https://media-cdn.tripadvisor.com/media/photo-s/0c/33/c1/47/duck-private-cheffing.jpg",
          location:
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12124.340293605448!2d22.98181492006834!3d40.56179852920003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a839ac41739ef1%3A0x297acadc44e9a6c7!2sDuck!5e0!3m2!1sel!2sgr!4v1677949356648!5m2!1sel!2sgr",
        },
        {
          id: "Το Μανιτάρι Restaurant",
          name: "Το Μανιτάρι Restaurant",
          info: "Having earned a place among the city's top restaurants, Manitari is located on the second floor of the shopping center of Sophouli. The space often surprises those who visit it for the first time. Combination of modern design with retro elements. Its culinary character is authentically Greek and distinguished for it's simplicity and dynamism.",
          img: "https://www.e-restaurants.gr/image/6958-to-manitari-kalamaria-thessaloniki.jpg",
          img2: "https://d1jpzjn3hhxcck.cloudfront.net/stores/images/QH7mCJ8zjT4PEMcF2sXOQfaICxVflhhLjnBQQBNCFc1xYvRDhykV9MUOChsuOe4hJcxwLlBr3u9.jpg",
          img3: "https://d1jpzjn3hhxcck.cloudfront.net/stores/images/iKRXpBvPqSOZcmdjixC8Re8xWBsN5qKQ1I5DVZ9591JT6Bie6mwmQhb2EX69OWnYb5nMvnAnsCO.jpg",
          location:
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12118.821263657695!2d22.949548!3d40.5922596!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a83ed4597389e1%3A0xb8e2b247ab0557bb!2zzqTOvyDOnM6xzr3Ouc-EzqzPgc65!5e0!3m2!1sel!2sgr!4v1677949628303!5m2!1sel!2sgr",
        },
        {
          id: "Dome Real Cuisine",
          name: "Dome Real Cuisine",
          info: "The Nikopolis hotel wishes to highlight gourmet cuisine in its most Greek yet simple version. Dome aspires to move away from unnecessary flourishes and give you haute gastronomy emerging from any excesses. At Dome Real Cuisine you have to explore the world of meat, as the restaurant even has its own aging room, while the seafood options are not missing from the list, both on the appetizer card and on the main menu.",
          img: "https://www.dome-restaurant.com/gallery/Images/IMG_0789.jpg",
          img2: "https://www.dome-restaurant.com/gallery/Images/IMG_0794.jpg",
          img3: "https://www.dome-restaurant.com/sites/domerestaurant/gms.include/resize.php?src=https://www.dome-restaurant.com/gallery/Images/gallery/Copy-of-IMG_7206LR.jpg&w=555&h=518&zc=1",
          location:
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12126.617785217146!2d22.990143!3d40.5492229!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a83f783d42adb9%3A0xf1dadffe67597817!2sDOME%20Real%20Cuisine!5e0!3m2!1sel!2sgr!4v1677949805231!5m2!1sel!2sgr",
        },
      ],
    };
  },
};
</script>
