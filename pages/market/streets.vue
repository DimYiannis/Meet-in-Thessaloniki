<template>
  <div class="grid gap-10 bg-[#2d2e30bd] ">

  <div class="text-center text-white 
    pt-4 px-2 text-3xl font-semibold">
   <p>#Shopping_streets</p>
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
      <h1 class="font-semibold">
        {{museum.name}}
      </h1>
    </template>

    <template #info>
      <p class="text-white text-center mx-10 ">
        {{museum.info}}
      </p>
    </template>

    <template #location>

      <p class="text-center text-white 
        text-3xl font-semibold laptop:hidden">
        Location
      </p>

      <iframe :src="museum.location" 
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
    layout:  "default",
});
export default {
    data() {
      return {
        museums: [
          
          {
            id: 'Tsimiski Street',
            name: 'Tsimiski Street',
            info: 'Tsimiski Market is known for its wide range of shops, which sell everything from clothing, shoes, and accessories to electronics, home goods, and souvenirs. The market is particularly popular with fashion-conscious shoppers, as it is home to many high-end designer boutiques and luxury brands.In addition to its retail offerings, Tsimiski Market is also a great place to experience the local culture and cuisine. The market is home to numerous cafes, bakeries, and restaurants, where visitors can taste traditional Greek foods and drinks, such as souvlaki, tzatziki, and ouzo.',
            img: "https://bestofthessaloniki.com/wp-content/uploads/2019/12/tsimiski.jpg",
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2182.630144480998!2d22.941865448173086!3d40.63336649761024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a83906ed5657d5%3A0x740a36f18c817617!2zzqTPg865zrzOuc-DzrrOriwgzpjOtc-Dz4POsc67zr_Ovc6vzrrOtw!5e0!3m2!1sel!2sgr!4v1677744878317!5m2!1sel!2sgr"
          },
          {
            id: ' Mitropoleos Street',
            name: 'Mitropoleos Street',
            info: "The street is a popular destination for both tourists and locals, who come to shop, dine, and explore the city's rich cultural heritage. Mitropoleos Street is home to a wide range of shops, including fashion boutiques, artisanal workshops, and traditional markets, selling everything from clothes and shoes to souvenirs and handmade crafts.",
            img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4cc01252-1617-4836-97f0-bf3239308a3e/d590ton-18c7bf8c-b005-4766-a52e-7d74105b6baa.jpg/v1/fill/w_900,h_600,q_75,strp/mitropoleos_street_thessaloniki_by_fortisinprocella_d590ton-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjAwIiwicGF0aCI6IlwvZlwvNGNjMDEyNTItMTYxNy00ODM2LTk3ZjAtYmYzMjM5MzA4YTNlXC9kNTkwdG9uLTE4YzdiZjhjLWIwMDUtNDc2Ni1hNTJlLTdkNzQxMDViNmJhYS5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.lwW8k0Vgg-XzC53AjjvB-dJg-i4xmzEWwba1gfsGnUY',
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.93598933636!2d22.943850200000004!3d40.6312936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a8390668280bfb%3A0x1d81afe86b1c915a!2zzpzOt8-Ez4HOv8-Az4zOu861z4nPgiwgzpjOtc-Dz4POsc67zr_Ovc6vzrrOtw!5e0!3m2!1sel!2sgr!4v1677745322341!5m2!1sel!2sgr",
          },
          {
            id: 'Navarinou Square',
            name: 'Navarinou Square',
            info: "Navarinou Square is a bustling and vibrant area, with a wide range of shops, cafes, and restaurants located around the square. The square is a popular destination for both locals and tourists, who come to enjoy its lively atmosphere and to explore the surrounding area. It is a great place to explore the city's rich cultural heritage, to shop, dine, and relax, and to soak up the local atmosphere and way of life",
            img: 'https://www.thessalonikitourism.gr/images/2019/02/16/navarinousquare2ok.png',
            location: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12111.833669097752!2d22.9486622!3d40.630799!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a83996a8404f7f%3A0xd00780d05207cdc9!2zzqDOu86xz4TOtc6vzrEgzp3Osc-FzrHPgc6vzr3Ov8-F!5e0!3m2!1sel!2sgr!4v1677745621135!5m2!1sel!2sgr",
          },
          {
            id: 'Louloudadika - Flower Markets',
            name: 'Louloudadika - Flower Markets',
            info: "The market is known for its vibrant and colorful displays of flowers, plants, and other garden-related items, and is a popular destination for both locals and tourists. Visitors to the Flower Market can expect to find an array of different flowers and plants, including traditional Greek herbs and spices, colorful bouquets, and exotic species from around the world. The market is particularly popular during the spring and summer months, when the weather is warm and sunny, and the flowers are in full bloom.",
            img: 'https://parallaximag.gr/wp-content/uploads/2021/04/%CE%BB%CE%BF%CF%85%CE%BB%CE%BF%CF%85%CE%B4%CE%AC%CE%B4%CE%B9%CE%BA%CE%B1.jpg',
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12111.001025555706!2d22.9402973!3d40.63538935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a839081f04ad1d%3A0xb56ff8960e625b4f!2zzpvOv8-FzrvOv8-FzrTOrM60zrnOus6xLCDOmM61z4PPg86xzrvOv869zq_Ous63IDU0NiAyNA!5e0!3m2!1sel!2sgr!4v1677746107194!5m2!1sel!2sgr"
          },
          {
            id: 'Agias Sofias Square',
            name: 'Agias Sofias Square',
            info: "Agias Sofias Square is a bustling and vibrant area, with a wide range of shops, cafes, and restaurants located around the square. The square is named after the nearby Church of Saint Sophia, which is one of the oldest and most significant churches in the city.",
            img: 'https://parallaximag.gr/wp-content/uploads/2018/01/kokkino-spiti-17.jpg',
            location: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12111.365728768707!2d22.9459582!3d40.6333788!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a8390738545549%3A0xc6238537f88f8b43!2zzqDOu86xz4TOtc6vzrEgzpHOs86vzrHPgiDOo86_z4bOr86xz4I!5e0!3m2!1sel!2sgr!4v1677746693698!5m2!1sel!2sgr",
          },
          
        ],
        }    
    }
}   
</script>