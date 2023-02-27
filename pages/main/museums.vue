<template>
    <div class="grid w-screen h-screen p-5 pb-2
    grid-cols-1 grid-rows-5 gap-4
    tablet:grid-cols-2 tablet:grid-rows-3">

        <div class="grid text-center ">
        
            <p class="relative font-extralight text:lg 
            mobile:text-xl tablet:text-2xl
            decoration-4 ">
            Home to fabulous food, rich history and 
            stunning scenery - Greece's most vibrant city has 
            it all.</p>    
        </div>
        
        <div class="">
            <NuxtLink to="">
                <Item
                class="bg-arxlgko">
                    <template v-slot:title>
                        <h3 class="text-transparent font-bold 
                            text-4xl hover:text-white 
                            grid place-content-center
                            desktop:w-[620px] desktop:h-[200px] 
                            laptop:w-[900px] laptop:h-[240px]
                            tablet:w-[400px] tablet:h-[230px]
                            w-[680px] h-[130px]">
                            Archaeological Museum of Thessaloniki </h3>
                    </template>
                </Item>
            </NuxtLink>
        </div>

        <div class="">
            <NuxtLink to="">
                <Item
                class="bg-byz">
                    <template v-slot:title>
                        <h3 class="text-transparent font-bold 
                            text-4xl hover:text-white 
                            grid place-content-center
                            desktop:w-[620px] desktop:h-[200px] 
                            laptop:w-[900px] laptop:h-[240px]
                            tablet:w-[400px] tablet:h-[230px]
                            w-[680px] h-[130px]">
                            Museum of Byzantine Culture</h3>
                    </template>
                </Item>
            </NuxtLink>
        </div>
    
    
        <div class="">
            <NuxtLink to="/main/museums">
                <Item
                class="bg-noesis">
                    <template v-slot:title>
                        <h3 class="text-transparent font-bold 
                            text-4xl hover:text-white 
                            grid place-content-center
                            desktop:w-[620px] desktop:h-[200px] 
                            laptop:w-[900px] laptop:h-[240px]
                            tablet:w-[400px] tablet:h-[230px]
                            w-[680px] h-[130px]">
                            Noesis - Science Center and Technology Museum</h3>
                    </template>
                </Item>
            </NuxtLink>
        </div>

        <div class="">   
            <a href="">
                <Item
                class="bg-tel">
                    <template v-slot:title>
                        <h3 class="content">Teloglion Foundation of Art A.U.Th.</h3>
                    </template>
                </Item>
            </a>
        </div>

        <div class="">
            <a href="">
                <Item
                class="bg-romag">
                    <template v-slot:title>
                        <h3 class="content">Roman Forum Museum (Ancient Agora)</h3>
                    </template>
                </Item>
            </a>
        </div>

    </div>  
    
    <div class="grid gap-2">
        
                <Blog v-for="museum in museums" :key="museum.id" :id="museum.id" 
                :name="museum.name" :info="museum.info" >
                    
                    <template #img>
                        <img class="rounded-full w-[200px] h-[200px]
                        " :src="museum.img" />
                    </template>

                    <template #name>
                        <h1 class="">{{museum.name}}</h1>
                    </template>

                    <template #info>
                        <p class="">{{museum.info}}</p>
                    </template>

                    <template #location>
                        <iframe :src="museum.location" class=" w-full h-full"
                            style="border:1;" allowfullscreen="" loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade">
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
        cost: '',
        showItem: true,
        museums: [
          
          {
            id: 'Archaeological Museum of Thessaloniki',
            name: 'Archaeological Museum of Thessaloniki',
            info: 'rtrhytrsdrthj',
            img: "https://www.thessalonikiguide.gr/wp-content/uploads/2016/06/arxaiologiko-mouseio-2019-2.jpg",
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.1970355043386!2d22.951513415077194!3d40.6255364793414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a8385355da9789%3A0x4f51568587526589!2zzpHPgc-HzrHOuc6_zrvOv86zzrnOus-MIM6czr_Phc-DzrXOr86_IM6YzrXPg8-DzrHOu86_zr3Or866zrfPgg!5e0!3m2!1sel!2sgr!4v1677525146582!5m2!1sel!2sgr"
          },
          {
            id: ' Museum of Byzantine Culture',
            name: ' Museum of Byzantine Culture',
            info: '',
            img: 'https://www.thessalonikitourism.gr/images/2019/02/01/byzantineculture1.png',
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.2696109032527!2d22.95295571507719!3d40.62393577934165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a838e322993ebf%3A0xce288930af2582d5!2zzpzOv8-Fz4POtc6vzr8gzpLPhc62zrHOvc-EzrnOvc6_z40gzqDOv867zrnPhM65z4POvM6_z40!5e0!3m2!1sel!2sgr!4v1677525587004!5m2!1sel!2sgr",
          },
          {
            id: 'Noesis - Science Center and Technology Museum',
            name: 'Noesis - Science Center and Technology Museum',
            info: '',
            img: 'https://www.gnoristetinellada.gr/images/2017/06/04/kentro-diadosis-epistimon-1.jpg',
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3031.056896675656!2d22.992922315074917!3d40.562420779348464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a8408c2f9ede07%3A0x246e17c7b76f6c6c!2zzprOrc69z4TPgc6_IM6UzrnOrM60zr_Pg863z4IgzpXPgM65z4PPhM63zrzPjs69IM66zrHOuSDOnM6_z4XPg861zq_OvyDOpM61z4fOvc6_zrvOv86zzq_Osc-CIC0gzp3On86XzqPOmc6j!5e0!3m2!1sel!2sgr!4v1677525699701!5m2!1sel!2sgr",
          },
          {
            id: 'Teloglion Foundation of Art A.U.Th.',
            name: 'Teloglion Foundation of Art A.U.Th.',
            info: "",
            img: 'https://pagoniconstruction.gr/wp-content/uploads/2019/12/telloglio-INSIDE.jpg',
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.8858145401036!2d22.958198015077368!3d40.63240007934061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a838566b136251%3A0x119e410161ed0da2!2zzqTOtc67zrvPjM6zzrvOtc65zr8gzorOtM-Bz4XOvM6xIM6kzrXPh869z47OvSwgzpHOoM6Y!5e0!3m2!1sel!2sgr!4v1677525746654!5m2!1sel!2sgr",
          },
          {
            id: 'Roman Forum Museum (Ancient Agora)',
            name: 'Roman Forum Museum (Ancient Agora)',
            info: '',
            img: 'https://cityportal.gr/wp-content/uploads/2022/10/%CE%BC%CE%BF%CF%85%CF%83.jpg',
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.6280866528678!2d22.943501115077584!3d40.63808322934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a839a96c047b37%3A0xffa3bafb2b283b77!2zzqHPic68zrHPis66zq4gzpHOs86_z4HOrCDOmM61z4PPg86xzrvOv869zq_Ous63z4I!5e0!3m2!1sel!2sgr!4v1677525807399!5m2!1sel!2sgr",
          },
          
        ],
        }    
    }
}   
</script>