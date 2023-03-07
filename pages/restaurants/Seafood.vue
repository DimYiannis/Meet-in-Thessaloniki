<template>
    <div class="grid gap-10 bg-[#2d2e30bd] ">

        <div class="text-center text-white 
         pt-4 px-2 text-3xl font-semibold">
            <p>#seafood_skg</p>
        </div>

        <Slider v-for="data in data" :key="data.id" :id="data.id" 
        :name="data.name" :info="data.info" >
            
            <template #img>
              <div class="place-items-center grid">
                <img class="rounded-full w-[200px] h-[200px]
                mobile:w-[350px] 
                tablet:w-[300px] tablet:h-[300px] 
                lgdesk:w-[350px] lgdesk:h-[350px]  " 
                    :src="data.img" />
              </div>
            </template>

            <template #img2>
              <div class="place-items-center grid">
                <img class="rounded-full w-[200px] h-[200px] 
                mobile:w-[350px]
                tablet:w-[300px] tablet:h-[300px] 
                lgdesk:w-[350px] lgdesk:h-[350px]  " 
                    :src="data.img2" />
              </div>
            </template>
            <template #img3>
              <div class="place-items-center grid">
                <img class="rounded-full w-[200px] h-[200px] 
                mobile:w-[350px]
                tablet:w-[300px] tablet:h-[300px] 
                lgdesk:w-[350px] lgdesk:h-[350px]  " 
                    :src="data.img3" />
              </div>
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

        </Slider>

</div>
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
            id: ' Mavri Thalassa Seafood Gastronony',
            name: 'Mavri Thalassa Seafood Gastronony',
            info: "The comfortable atmosphere and the characteristic architecture with wood both inside and outside, harmonize well with the complete culinary experience throughout the day. Whole fresh fish, simple raw material and timeless presentation of dishes are the main pillars of the restaurant. More specifically, 'extra' virgin olive oil, freshly squeezed lemon, high-quality salt flower and selected pepper accompany most of the flavor suggestions.",
            img: "https://10619-2.s.cdn12.com/reviews/original/29590.jpg",
            img2:"https://media-cdn.tripadvisor.com/media/photo-s/1d/08/ef/58/caption.jpg",
            img3:"https://www.makthes.gr/image/original/152/thalassa3.jpg",
            location: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12121.32699701725!2d22.9432287!3d40.5784321!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a83edd3f0a637f%3A0x3271d87decb396d5!2zzpzOsc-Nz4HOtyDOmM6szrvOsc-Dz4POsQ!5e0!3m2!1sel!2sgr!4v1678054347166!5m2!1sel!2sgr"
          },
          {
            id: ' 7 Thalasses',
            name: '7 Thalasses',
            info: " A wonderful journey of gustatory delights in a seafood restaurant that is deservedly at the top of its class and famous for its culinary creations. Emphasizing in Mediterranean cuisine, using raw materials that come from Greece and are 80% organic. Its sophisticated Mediterranean menu and updated wine cellar can turn any kind of gathering into an unforgettable dining experience.",
            img: 'https://www.7thalasses.eu/wp-content/uploads/2014/06/6l8njh9r1.jpg',
            img2:"https://www.e-restaurants.gr/image/7817-7-thalasses-thessaloniki.jpg",
            img3:"https://media-cdn.tripadvisor.com/media/photo-s/0d/65/a5/08/7-thalasses.jpg",
            location: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12111.370463073607!2d22.9392026!3d40.6333527!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a8390903a45943%3A0x9484d471a3036667!2zNyDOmM6szrvOsc-Dz4POtc-C!5e0!3m2!1sel!2sgr!4v1678054530472!5m2!1sel!2sgr",
          },
          {
            id: 'Γλυκάνισος',
            name: 'Γλυκάνισος',
            info: "Its decor, simple and relaxing and its flavors magically marry the traditional with the modern. You will find Glykanisos restaurant welcoming you every day, from early noon. With mouth-watering dishes such as sea bass carpaccio, cod meatballs with aioli sauce and a variety of salads for starters. Afterwards, you can choose between Gritharotto with lobster tails and Risotto with cuttlefish and their ink and, of course, fresh fish and seafood, depending on the season. There is, of course, also meat, for those who cannot part with it!",
            img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/96/0e/1d/wine-corner.jpg?w=800&h=600&s=1',
            img2:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/cf/07/68/table-hapiness.jpg?w=800&h=600&s=1",
            img3:"https://www.gastronomos.gr/wp-content/uploads/2021/03/b_glykanisos_pylaia_thessaloniki_1.jpg",
            location: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12117.813552391097!2d22.9849805!3d40.5978194!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a838ba6da4e0f3%3A0x1cd6105abdf8ee61!2zIs6TzrvPhc66zqzOvc65z4POv8-CIg!5e0!3m2!1sel!2sgr!4v1678055091726!5m2!1sel!2sgr",
          },
          {
            id: 'Η Βρεγμένη Γάτα',
            name: 'Η Βρεγμένη Γάτα',
            info: "Distinguished for its impressive modern and welcoming space and cuisine. Its flavors are modern and inspired with some selected elements, however, from the good old Greek cuisine, flavors in seafood meats and cuts. In the restaurant you will find a large menu and a wide range of dishes.",
            img: 'https://media-cdn.tripadvisor.com/media/photo-s/1a/5c/9b/5d/img-20191222-130325-largejpg.jpg',
            img2:"https://imageproxy.wolt.com/venue/616e84f8e555f562a47f575a/9c645e28-30b9-11ec-b649-b2877119f63c_list__34_.jpg",
            img3:"https://hellothessaloniki.gr/wp-content/uploads/2020/08/Vregmeni-Gata-Restaurant-Thessaloniki-26.jpg",
            location: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12116.45766197108!2d22.9745108!3d40.6052992!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a838c0d89495c7%3A0xe4f27155ae1c6932!2zzpLPgc61zrPOvM6tzr3OtyDOk86sz4TOsQ!5e0!3m2!1sel!2sgr!4v1678055456355!5m2!1sel!2sgr"
          },
          {
            id: 'To Paragadi',
            name: 'To Paragadi',
            info: "A family fish tavern with a history and tradition of more than 20 years and more specifically since 1989, promises you daily fresh delights that will satisfy even the most demanding. On the menu you will find everything from fresh sardines to sea bream, while Greek and branded wine labels are not absent, as well as a variety of beers. Don't forget to try the seafood risotto, the pasta with seafood and the lobster pasta.",
            img: 'https://www.touristorama.com/assets/images/customers/paragadi/02_paragadi.jpg',
            img2:"https://d1jpzjn3hhxcck.cloudfront.net/stores/images/f59b93fe85361841e171855b09f97817.jpg",
            img3:"https://www.touristorama.com/assets/images/customers/paragadi/01_paragadi.jpg",
            location: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12115.047823118904!2d22.9845533!3d40.6130754!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a838916a73d74b%3A0x2748d632787aa7b9!2zzqTOvyDOoM6xz4HOsc6zzqzOtM65!5e0!3m2!1sel!2sgr!4v1678055677590!5m2!1sel!2sgr" 
          },
          
        ],
        }    
    }
}   
</script>