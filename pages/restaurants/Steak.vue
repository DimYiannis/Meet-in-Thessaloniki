<template>
    <div class="grid gap-10 bg-[#2d2e30bd] ">

        <div class="text-center text-white 
         pt-4 px-2 text-3xl font-semibold">
            <p>#steak_skg</p>
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
            id: ' Apeirotan',
            name: ' Apeirotan',
            info: "The Apeirotan restaurant in Thessaloniki, is truly an earthly paradise in the panic of the city. Whether you enjoy the wonderful shade of its garden, or the unique warmth of its interior, the only thing is certain is that for a few minutes you will forget that you are in the center of Thessaloniki. You will try dishes such as fried greens with eggs, grilled mushrooms, eggplant with mint and walnuts, veal with eggplant, lamb in greaseproof paper, baked leg, chicken pie with yogurt, mushroom risotto with yogurt, mushroom souvlaki and stuffed squid, while for dessert a delicious homemade chocolate pie or the special cinnamon ice cream awaits you.",
            img: "https://www.e-restaurants.gr/image/1939-apeirotan-thessaloniki.jpg",
            img2:"https://media-cdn.tripadvisor.com/media/photo-s/0b/32/d9/52/caption.jpg",
            img3:"https://media-cdn.tripadvisor.com/media/photo-s/15/d0/89/79/caption.jpg",
            location: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12116.644313546172!2d22.9727873!3d40.6042696!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a838c6b700905d%3A0x9307cd170f31fb7!2zzpHPgM61zrnPgc-Jz4TOrM69!5e0!3m2!1sel!2sgr!4v1678098426159!5m2!1sel!2sgr"
          },
          {
            id: ' Pepper & Backroom',
            name: 'Pepper & Backroom',
            info: " It combines Argentinian and Italian cuisine with imagination and offers you original and unique flavors! The first restaurant in the city to introduce in-house aging of meats to the customer's order, using the top equipment on the market in the specially designed processing and aging area. The menu is based on excellent raw materials, organic vegetables and eggs, variety of cuts of beef, fresh pasta and sinful sweets of the day!",
            img: 'https://pepperbackroom.com/wp-content/uploads/2020/07/pepper-backroom-thessaloniki-slide-1.jpg',
            img2:"https://hellothessaloniki.gr/wp-content/uploads/2020/02/Backroom-Restaurant-19.jpg",
            img3:"https://hellothessaloniki.gr/wp-content/uploads/2020/02/Backroom-Restaurant-25.jpg",
            location: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5191.530605530117!2d22.945031748237707!3d40.629097352360255!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a83904309bd21b%3A0xff06e81de8b2470f!2sPepper%20%26%20Backroom!5e0!3m2!1sel!2sgr!4v1678099000594!5m2!1sel!2sgr",
          },
          {
            id: 'Rinokeros',
            name: 'Rinokeros',
            info: "The restaurant 'Rhinokeros' welcomes you and your loved ones to enjoy unique flavors, such as fresh asparagus with shiitake mushrooms, fresh pasta, buffalo burrata, kale salads, beef tomahawk, but also wonderful desserts, such as modified Pavlova with Madagascar vanilla ice cream. In an elegant and friendly environment, the restaurant 'Rinokeros' opens its arms for you and your company and provides you with the best tastes, exclusively of the best quality",
            img: 'https://media-cdn.tripadvisor.com/media/photo-s/14/af/e6/83/rinokeros-meat-bar.jpg',
            img2:"https://media-cdn.tripadvisor.com/media/photo-s/11/f3/22/b5/photo4jpg.jpg",
            img3:"https://fastly.4sqi.net/img/general/600x600/25477309_BgJGaP8U6cGuC_nvdD23tCGSRyKSNSaOVWhSCwEcZfg.jpg",
            location: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12117.67432563827!2d22.9516836!3d40.5985875!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a8392a39653f5b%3A0x5a4989bd7c6eec0b!2zzqHOuc69z4zOus61z4HOv8-C!5e0!3m2!1sel!2sgr!4v1678099289194!5m2!1sel!2sgr",
          },
          {
            id: 'Picanha meat and more',
            name: 'Picanha meat and more',
            info: "At Picanha meat you will taste delicious meat grilled on coals. Delicious meats, special cuts and traditional appetizers that accompany each dish. You will enjoy premium Black Angus and authentic Caipirinha. You will also find the so-called Four of Fire which contains meats cooked in the traditional ways assado, picanha, fraldinha, chuckroll. In addition, you may try wonderful salads along with the unique varieties of grilled meats.",
            img: 'https://media-cdn.tripadvisor.com/media/photo-s/13/f6/9d/9b/caption.jpg',
            img2:"https://media-cdn.tripadvisor.com/media/photo-s/14/e2/f0/46/t-bone-steak-and-picanha.jpg",
            img3:"https://www.makthes.gr/image/original/164/picanha-meat-and-more8.jpg",
            location: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12111.073829529658!2d22.9370742!3d40.634988!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a83969c9ae6acf%3A0xfacbee766db7952d!2sPicanha%20Meat%20and%20More!5e0!3m2!1sel!2sgr!4v1678099872097!5m2!1sel!2sgr"
          },
          {
            id: 'Kronos Tavern',
            name: 'Kronos Tavern',
            info: "At Kronos tavern you will taste unforgettable dishes, such as handmade suzukakia, 'Kronos' salad, oven steak, handmade pumpkin meatballs and every day you can find many different cooked foods, for all tastes. In a beautiful and warm place, the 'Kronos' tavern in Thessaloniki welcomes you with smile and offers you amazing meals, made exclusively from the best quality ingredients and with prompt and good service.",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwVThekB_wQ592lcghADVKxAcRvzqJfM8UfHmnE_iPHaR9WAeB1HKzP0AKRHAVStIDHVU&usqp=CAU',
            img2:"https://travelen.eu/wp-content/uploads/2017/05/Kronos-Tavern-Food-Thessaloniki-Travelen.jpg",
            img3:"https://www.e-restaurants.gr/image/9809-kronos-thessaloniki.jpg",
            location: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12117.894756417809!2d22.9555769!3d40.5973714!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a838d5b8936bab%3A0xd7764a63e8950f96!2zzqTOsc6yzq3Pgc69zrEgzprPgc-Mzr3Ov8-C!5e0!3m2!1sel!2sgr!4v1678100368213!5m2!1sel!2sgr" 
          },
          
        ],
        }    
    }
}   
</script>