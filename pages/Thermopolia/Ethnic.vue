<template>
  <div class="grid gap-0.5 bg-[#2A2D31]">
    <div class="text-center text-white yt-4 px-2 text-3xl font-semibold">
      <p>#Ethnic_skg</p>
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
            class="rounded-lg tablet:rounded-r-3xl w-ful mobile:w-[400px] 
            h-[200px] tablet:w-[300px] tablet:h-[300px] lgdesk:w-[350px] 
            lgdesk:h-[350px]"
            :src="data.img"
          />
        </div>
      </template>

      <template #img2>
        <div class="place-items-center grid">
          <img
            class="rounded-lg tablet:rounded-r-3xl w-ful mobile:w-[400px] 
            h-[200px] tablet:w-[300px] tablet:h-[300px] lgdesk:w-[350px] 
            lgdesk:h-[350px]"
            :src="data.img2"
          />
        </div>
      </template>
      <template #img3>
        <div class="place-items-center grid">
          <img
          class="rounded-lg tablet:rounded-r-3xl w-ful mobile:w-[400px] 
            h-[200px] tablet:w-[300px] tablet:h-[300px] lgdesk:w-[350px] 
            lgdesk:h-[350px]"            
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
        <h1 class="font-semibold">{{ data.name }}</h1>
      </template>

      <template #info>
        <p class="text-center mx-10 font-semibold">
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
          id: " Foul tou meze",
          name: " Foul tou meze",
          info: "The 'Full Tou Meze' restaurant has created for you and your loved ones, a calm and family environment and offers you wonderful tastes of Greek cuisine. In the most picturesque district of the city, in Ladadika, on Katounis 3, you have the opportunity to visit it every day and try unique dishes, such as white handmade tarama, fava beans married with caramelized onion, 'the tree' salad, barley rolls with marinated zucchini, a wide variety of Greek cheeses and only handmade flavors",
          img: "https://www.fullmeze.gr/wp-content/uploads/2020/09/homefull.png",
          img2: "http://fullmeze.ast.gr/assets/components/phpthumbof/cache/261.413dd822872d19175e383c306f00ec52.jpg",
          img3: "https://lh3.googleusercontent.com/p/AF1QipN0Ed-2doiGbFF6jqr7O967Kx9Wy4BGOal8MzI=s680-w680-h510",
          location:
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12111.140492669667!2d22.9371434!3d40.6346205!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a83909bdbe4b11%3A0x1d2c6e95329df721!2zzqbOv8-Fzrsgz4TOv8-FIM6czrXOts6t!5e0!3m2!1sel!2sgr!4v1678049059809!5m2!1sel!2sgr",
        },
        {
          id: " Πήρε και Βραδιάζει",
          name: "Πήρε και Βραδιάζει",
          info: " The Πήρε και Βραδιάζει tavern was established when the last Germans left the city, sometime in 1944. In a short time it managed to become the favorite haunt of the ubiquitous retsina and rebetiko singers, and in the last years is a pole of attraction for the old, but also for the young who were not lucky enough to live in this era. Its space seems to have stopped time, so do its flavors, which will take you for a while to the canteens of the 1970s.",
          img: "https://lh5.googleusercontent.com/p/AF1QipN6onZxFGqORRlmTJ_RQqECHUax8APCc43eS8nD=w1440-h810-k-no",
          img2: "https://www.panelinios.gr/images/photo_big/247967.jpg",
          img3: "https://www.panelinios.gr/images/photo_big/247960.jpg",
          location:
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2225.6451419728824!2d22.960993711067403!3d40.615862900020225!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a838e69ac16b71%3A0xfa3dc9a87fc2c1d!2zzqDOrs-BzrUgzrrOsc65IM6Sz4HOsc60zrnOrM62zrXOuQ!5e0!3m2!1sel!2sgr!4v1678049742511!5m2!1sel!2sgr",
        },
        {
          id: " To Elliniko",
          name: " To Elliniko",
          info: "The award-winning restaurant 'To Elliniko' in Thessaloniki, welcomes you and your loved ones, every day and offers exquisite dishes of Greek cuisine with priority the philosophy of the tradition of our own Greek flavors. In the center of the city of Thessaloniki at 9 Stratigou Kallari Street, you have the opportunity to try tasty appetizers and unforgettable dishes, such as sogania (stuffed onions with pine nuts and spices), 'Byzantine' salad, pastourmali, mussels steamed with mustard and garlic, hunkiar bejerdi, married sardine, honey fillets and always exclusively fresh fish.",
          img: "https://i.pinimg.com/736x/f8/85/37/f88537271d0939a64e6b877b7b8ee1c2--lori-thessaloniki.jpg",
          img2: "https://www.biscotto.gr/file/2022/11/%CE%B5%CE%BB%CE%BB%CE%B7%CE%BD%CE%B9%CE%BA%CE%BF.jpg",
          img3: "https://media-cdn.tripadvisor.com/media/photo-s/0d/6a/ac/44/9.jpg",
          location:
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12112.281434419536!2d22.9473519!3d40.6283303!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a839040be6d1d3%3A0xaaf699654b74f050!2zzqTOvyDOlc67zrvOt869zrnOus-M!5e0!3m2!1sel!2sgr!4v1678051983989!5m2!1sel!2sgr",
        },
        {
          id: "Genti ouzo",
          name: "Genti ouzo",
          info: "Genti ouzo is located in the legendary neighborhood of Genti Koule (Eptapyrgiou) in the Upper Town, since 1992 and offers Greek cuisine and homemade mezes. Here you will find seafood and meat from noon every day. The menu includes well-cooked home recipes. the environment is warm, traditionally decorated, with green walls and pictures from Old Thessaloniki.",
          img: "https://media-cdn.tripadvisor.com/media/photo-o/06/90/d9/38/ouzeri-to-yenti.jpg",
          img2: "https://lh3.googleusercontent.com/p/AF1QipN3NMQSSQ5dAwG6e4mdgE5omepi2fUmAtP9Zplw=s680-w680-h510",
          img3: "https://media-cdn.tripadvisor.com/media/photo-s/06/90/d9/3c/ouzeri-to-yenti.jpg",
          location:
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12109.511356815252!2d22.9615912!3d40.6436008!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a8384e593ca0b1%3A0x48400c5ad103b083!2zzp_Phc62zrXPgc6vIC0gzqTOvyDOk861zr3PhM6v!5e0!3m2!1sel!2sgr!4v1678052469135!5m2!1sel!2sgr",
        },
        {
          id: "THE ROUGA",
          name: "THE ROUGA",
          info: "In Rouga you will find authentic homemade flavors. Characterized by a welcoming and family atmosphere that invites more and more people to enjoy it every year. Rich flavors, tickling smells, spring from the memories of people who revive tradition to tie it harmoniously with today. Offering a unique combination of quality food and entertainment that will take you to the wonderful world of Rouga.",
          img: "https://media-cdn.tripadvisor.com/media/photo-s/02/cd/fb/77/poyta-or-pouya-it-was.jpg",
          img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyZ1KlkpgS-Wt5fwoRPfj3DLcZ5mPP6nC4Qg&usqp=CAU",
          img3: "https://media-cdn.tripadvisor.com/media/photo-s/05/ec/d5/48/rouga.jpg",
          location:
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12110.816840729789!2d22.940567!3d40.6364047!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a839a7e9f06a67%3A0x7163880a30160a2a!2zzpcgzqHOv8-NzrPOsQ!5e0!3m2!1sel!2sgr!4v1678052765298!5m2!1sel!2sgr",
        },
      ],
    };
  },
};
</script>
