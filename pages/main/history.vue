<template>
  <div class="grid gap-0.5 bg-[#2A2D31]">
    <div class="text-center text-white text-3xl py-2 font-semibold">
      <p>#History_skg</p>
    </div>

    <Slider2
      v-for="museum in museums"
      :key="museum.id"
      :id="museum.id"
      :name="museum.name"
      :info="museum.info"
    >
      <template #img>
        <div class="place-items-center grid">
          <img
          class="rounded-lg tablet:rounded-l-3xl w-full mobile:w-[400px] 
          h-[200px] tablet:w-full tablet:h-full lgdesk:w-[350px] 
          lgdesk:h-[350px]"
          :src="museum.img"
        />
        </div>
      </template>
      <template #img2>
        <div class="place-items-center grid">
          <img
            class="rounded-lg tablet:rounded-r-3xl w-ful mobile:w-[400px] 
            h-[200px] tablet:w-[300px] tablet:h-[300px] lgdesk:w-[350px] 
            lgdesk:h-[350px]"
            :src="museum.img2"
          />
        </div>
      </template>

      <template #name>
        <div class="font-semibold">
          {{ museum.name }}
        </div>
      </template>

      <template #info>
        <p class=" text-center mx-10 text-xs laptop:text-base
        font-semibold">
          {{ museum.info }}
        </p>
      </template>
    </Slider2>
  </div>
</template>

<script>
definePageMeta({
  layout: "default",
});
export default {
  data() {
    return {
      museums: [
        {
          id: "The beginning",
          name: "The beginning",
          info: "Thessaloniki is a city in northern Greece with a rich and diverse history. It was founded in 315 BC by King Cassander of Macedon and was named after his wife, Thessaloniki, who was the half-sister of Alexander the Great. Throughout its history, Thessaloniki has been ruled by various empires, including the Romans, Byzantines, Ottomans, and Greeks.",
          img: "https://curiosmos.com/wp-content/uploads/2022/05/Silhouette-of-Alexander-the-Great-Statue-scaled.jpg",
          img2: "https://www.davonnajuroe.com/wp-content/uploads/2014/05/alexander-and-mermaid.jpeg",
        },
        {
          id: " Roman Period",
          name: " Roman Period",
          info: "During the Roman period, Thessaloniki was an important commercial center and a major hub of Christianity. The city was also the birthplace of several Roman emperors, including Constantine the Great. In the Byzantine era, Thessaloniki was a thriving city with impressive architecture and was considered the second most important city in the Byzantine Empire after Constantinople.",
          img: "https://images.squarespace-cdn.com/content/v1/57125c2c2b8dde54a34b537f/1617904411471-RFK7PHFBHPYZ2AF9J4RM/thes1.jpg",
          img2: "https://d1bvpoagx8hqbg.cloudfront.net/originals/an-alternative-neighborhood-thessaloniki-8ffb5af7c19252f298d524d6e98cde5d.jpg",
        },
        {
          id: "Ottoman Era",
          name: "Ottoman Era",
          info: "In the Ottoman era, Thessaloniki became a cosmopolitan city with a diverse population of Greeks, Jews, Turks, and other ethnic groups. It was a center of trade, culture, and education, and was known for its vibrant markets and bustling port. During the early 20th century, Thessaloniki experienced significant growth and modernization, but also faced challenges such as fires, earthquakes, and political turmoil.",
          img: "https://greekcitytimes.com/wp-content/uploads/2022/03/4-22.jpg",
          img2: "https://aktis.blog/uploads/blog/jvf52zd0t1wsw44k0s.jpg",
        },
        {
          id: "Today",
          name: "Today",
          info: "Today, Thessaloniki is a vibrant and dynamic city with a rich cultural heritage, and is home to numerous historic landmarks, museums, and art galleries. It is also a major center for business, education, and tourism, and is known for its lively nightlife and culinary scene.",
          img: "https://www.greeceinvestorguide.com/wp-content/uploads/2019/07/Thessaloniki-min-780x405.jpg",
          img2: "https://images.unsplash.com/photo-1618524921640-d29538c14229?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        },
      ],
    };
  },
};
</script>
