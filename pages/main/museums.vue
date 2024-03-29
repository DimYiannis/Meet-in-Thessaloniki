<template>
  <Plaisio
    v-for="museum in museums"
    :key="museum.id"
    :id="museum.id"
    :name="museum.name"
    :info="museum.info"
    class="grid gap-5"
  >
    <template #img>
      <div class="left-0 w-screen tablet:h-[500px]">
        <img class="object-cover w-screen tablet:h-[500px]" 
        :src="museum.img" />

        <span
          class="hidden mobile:flex rounded-full z-10 relative bottom-20 
          left-5 bg-[#383836] w-fit px-5 opacity-70 hover:opacity-90 
          hover:scale-105 duration-500"
        >
          <div class="relative self-center h-fit text-white w-fit">
            <h1 class="my-1 text-sm tablet:text-base w-max">
              {{ museum.name }} <br />
              Thessaloniki, GR
            </h1>
          </div>
        </span>
      </div>
    </template>

    <template #info>
      <h1
        class="font-bold text-lg mobile:text-2xl tablet:text-4xl text-center mb-4"
      >
        At {{ museum.name }}
      </h1>
      <p
        class="text-black text-xs mobile:text-base text-center mx-10 tablet:text-2xl"
      >
        {{ museum.info }}
      </p>
    </template>

    <template #map>
      <p class="text-center text-black text-3xl font-semibold">Location</p>

      <iframe
        :src="museum.location"
        class="w-[200px] mobile:w-[400px] tablet:w-[700px] laptop:w-[900px] laptop:h-[500px] desktop:w-[1000px] lgdesk:w-[1200px] h-[400px]"
        style="border: 1"
        allowfullscreen=""
        loading="lazy"
      >
      </iframe>
    </template>
  </Plaisio>
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
          id: "Archaeological Museum of Thessaloniki",
          name: "Archaeological Museum of Thessaloniki",
          site: "https://www.amth.gr/en",
          info: "The Archaeological Museum of Thessaloniki is one of the largest museums in Greece and the central museum of northern Greece.The story of the Archaeological Museum of Thessaloniki follows the course of history of the modern city of Thessaloniki. The Museum collections include numerous artefacts dating from the Prehistoric era to the end of antiquity. They come from excavations conducted throughout Macedonia since 1912, along with handed-in antiquities.",
          img: "https://www.greekboston.com/wp-content/uploads/2019/09/thessaloniki-archaeological-museum.jpg",
          location:
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d387603.1701206483!2d22.954861!3d40.626579!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a8385355da9789%3A0x4f51568587526589!2zzpHPgc-HzrHOuc6_zrvOv86zzrnOus-MIM6czr_Phc-DzrXOr86_IM6YzrXPg8-DzrHOu86_zr3Or866zrfPgg!5e0!3m2!1sel!2sgr!4v1677591630552!5m2!1sel!2sgr",
        },
        {
          id: " Museum of Byzantine Culture",
          name: " Museum of Byzantine Culture",
          site: "https://www.mbp.gr/en/",
          info: "A modern scientific institution, open to the public, of a broader cultural and educational nature, aims to collect, preserve, protect, conserve, exhibit and study the works and objects of the early Christian, Byzantine, medieval in general and post-Byzantine periods, mainly from the geographical area of ​​Macedonia.The Museum of Byzantine Culture is addressed to the general public, encourages through appropriate activities the increase of the number of visitors, favors the entertaining and educational contact of the public with its collections and asserts a scientifically proven and internationally scholarly way of their museum presentation.",
          img: "https://www.thessalonikitourism.gr/images/2019/02/01/byzantineculture1.png",
          location:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.2696109032527!2d22.95295571507719!3d40.62393577934165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a838e322993ebf%3A0xce288930af2582d5!2zzpzOv8-Fz4POtc6vzr8gzpLPhc62zrHOvc-EzrnOvc6_z40gzqDOv867zrnPhM65z4POvM6_z40!5e0!3m2!1sel!2sgr!4v1677525587004!5m2!1sel!2sgr",
        },
        {
          id: "Noesis - Science Center and Technology Museum",
          name: "Noesis - Science Center and Technology Museum",
          site: "https://www.noesis.edu.gr/en/",
          info: "NOESIS Science Center and Museum of Technology is a cultural, educational, public benefit Institution that offers the student community, but also the general public a suitable environment for getting to know and understanding the positive sciences and informing them about technological developments.Its founder was the Technical Museum of Thessaloniki, which began its course in 1978 and then, in 2001, developed into NOESIS. It reports to the General Government and reports to the General Secretariat for Research and Innovation (GGEK).",
          img: "https://www.gnoristetinellada.gr/images/2017/06/04/kentro-diadosis-epistimon-1.jpg",
          location:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3031.056896675656!2d22.992922315074917!3d40.562420779348464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a8408c2f9ede07%3A0x246e17c7b76f6c6c!2zzprOrc69z4TPgc6_IM6UzrnOrM60zr_Pg863z4IgzpXPgM65z4PPhM63zrzPjs69IM66zrHOuSDOnM6_z4XPg861zq_OvyDOpM61z4fOvc6_zrvOv86zzq_Osc-CIC0gzp3On86XzqPOmc6j!5e0!3m2!1sel!2sgr!4v1677525699701!5m2!1sel!2sgr",
        },
        {
          id: "Teloglion Foundation of Art A.U.Th.",
          name: "Teloglion Foundation of Art A.U.Th.",
          site: "https://www.teloglion.gr",
          info: "An extroverted, open, interactive Museum combining research, education, art, culture and science, with the main recipients being children, students, workers, the elderly and sensitive social groups. The main goals of the Foundation are the systematic acquaintance of the public with art, the collection, recording and study of Greece's cultural heritage, the creation of conditions of cooperation between artists and art scholars, as well as the essential contact of children with works of art through educational programs. There you will find periodic and permanent exhibitions in collaboration with institutions from Greece and abroad, publications and conferences.",
          img: "https://pagoniconstruction.gr/wp-content/uploads/2019/12/telloglio-INSIDE.jpg",
          location:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.8858145401036!2d22.958198015077368!3d40.63240007934061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a838566b136251%3A0x119e410161ed0da2!2zzqTOtc67zrvPjM6zzrvOtc65zr8gzorOtM-Bz4XOvM6xIM6kzrXPh869z47OvSwgzpHOoM6Y!5e0!3m2!1sel!2sgr!4v1677525746654!5m2!1sel!2sgr",
        },
        {
          id: "Roman Forum Museum (Ancient Agora)",
          name: "Roman Forum Museum (Ancient Agora)",
          site: "http://odysseus.culture.gr/h/1/gh151.jsp?obj_id=19243",
          info: "The archaeological site of the Roman Agora of Thessaloniki is presented, through the findings of the excavation research carried out, periodically, from 1962 to 1999 and with the assistance of rich supervisory material for the visitor's acquaintance, both with the history of the Agora complex, as well as and indirectly with the history of the city from the 3rd century BC. until today.",
          img: "https://cityportal.gr/wp-content/uploads/2022/10/%CE%BC%CE%BF%CF%85%CF%83.jpg",
          location:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.6280866528678!2d22.943501115077584!3d40.63808322934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a839a96c047b37%3A0xffa3bafb2b283b77!2zzqHPic68zrHPis66zq4gzpHOs86_z4HOrCDOmM61z4PPg86xzrvOv869zq_Ous63z4I!5e0!3m2!1sel!2sgr!4v1677525807399!5m2!1sel!2sgr",
        },
      ],
    };
  },
};
</script>
