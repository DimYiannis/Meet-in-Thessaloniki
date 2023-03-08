<template>
  <div class="grid gap-10 bg-[#2d2e30bd] ">

  <div class="text-center text-white 
    pt-4 px-2 text-3xl font-semibold">
    <p>#History_skg</p>
  </div>

  <Blog v-for="museum in museums" :key="museum.id" :id="museum.id" 
    :name="museum.name" :info="museum.info" >
            
    <template #img>
      <img class="rounded-full w-[200px] h-[200px]
        mobile:w-[350px] 
        tablet:w-[300px] tablet:h-[300px] 
        lgdesk:w-[350px] lgdesk:h-[350px] " 
        :src="museum.img" />
    </template>


    <template #name>
      <div class="grid h-max text-center place-self-center">
        {{museum.name}}
      </div>
    </template>

    <template #info>
      <p class="text-white text-center mx-10 font-semibold ">
        {{museum.info}}
      </p>
    </template>

    <template #location>
      <img class=" h-[500px] " 
        :src="museum.img2" />        
    </template>
  </Blog>
  </div>
</template>

<script>
definePageMeta({
    layout:  "default",
});
export default {
    data() {
      return {
        museums: [
          
          {
            id: 'The beginning',
            name: 'The beginning',
            info: 'Thessaloniki is a city in northern Greece with a rich and diverse history. It was founded in 315 BC by King Cassander of Macedon and was named after his wife, Thessaloniki, who was the half-sister of Alexander the Great. Throughout its history, Thessaloniki has been ruled by various empires, including the Romans, Byzantines, Ottomans, and Greeks.',
            img: "https://www.worldhistory.org/img/r/p/500x600/2966.jpg?v=1641399301",
            img2: "http://shadowofthelion.com/wp-content/uploads/2016/08/Fashion-In-The-Ancient-Times.jpg"
          },
          {
            id: ' Roman Period',
            name: ' Roman Period',
            info: 'During the Roman period, Thessaloniki was an important commercial center and a major hub of Christianity. The city was also the birthplace of several Roman emperors, including Constantine the Great. In the Byzantine era, Thessaloniki was a thriving city with impressive architecture and was considered the second most important city in the Byzantine Empire after Constantinople.',
            img: 'https://images.squarespace-cdn.com/content/v1/57125c2c2b8dde54a34b537f/1617904411471-RFK7PHFBHPYZ2AF9J4RM/thes1.jpg',
            img2: "https://d1bvpoagx8hqbg.cloudfront.net/originals/an-alternative-neighborhood-thessaloniki-8ffb5af7c19252f298d524d6e98cde5d.jpg",
          },
          {
            id: 'Ottoman Era',
            name: 'Ottoman Era',
            info: 'In the Ottoman era, Thessaloniki became a cosmopolitan city with a diverse population of Greeks, Jews, Turks, and other ethnic groups. It was a center of trade, culture, and education, and was known for its vibrant markets and bustling port. During the early 20th century, Thessaloniki experienced significant growth and modernization, but also faced challenges such as fires, earthquakes, and political turmoil.',
            img: 'https://greekcitytimes.com/wp-content/uploads/2022/03/4-22.jpg',
            img2: "https://aktis.blog/uploads/blog/jvf52zd0t1wsw44k0s.jpg",
          },
          {
            id: 'Today',
            name: 'Today',
            info: "Today, Thessaloniki is a vibrant and dynamic city with a rich cultural heritage, and is home to numerous historic landmarks, museums, and art galleries. It is also a major center for business, education, and tourism, and is known for its lively nightlife and culinary scene.",
            img: 'https://www.greeceinvestorguide.com/wp-content/uploads/2019/07/Thessaloniki-min-780x405.jpg',
            img2: "https://images.unsplash.com/photo-1618524921640-d29538c14229?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
          },
          
        ],
        }    
    }
}   
</script>