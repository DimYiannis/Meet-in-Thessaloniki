<template>
  <div class="bg-white tablet:h-[500px] rounded-lg tablet:rounded-r-3xl 
  tablet:mr-32 hover:translate-x-6 duration-500">
    <div
      class="grid mx-5 tablet-mx-0 tablet:grid-cols-2 
      laptop:grid-rows-none h-full place-content-center"
    >
      <div class="h-max grid ">
        <div class="place-items-center grid hover:scale-105 
        duration-500 h-full">
          <swiper
            :pagination="{ clickable: true }"
            :modules="modules"
            class="w-full h-full"
          >
            <swiper-slide
              class="pt-5"
            >
              <slot name="img">
                {{ img }}
              </slot>
            </swiper-slide>

            <swiper-slide class="pt-5">
              <slot name="img2">
                {{ img }}
              </slot>
            </swiper-slide>

            <swiper-slide class="pt-5">
              <slot name="img3">
                {{ img }}
              </slot>
            </swiper-slide>

            <swiper-slide class="pt-5">
                <slot name="map">
                {{ iframe }}
              </slot>
              </swiper-slide>
          </swiper>
        </div>
      </div>

      <div class="grid gap-3 place-content-center  my-3">
        <div class="text-gray-800 font-extralight text-2xl text-center bottom-0 mt-5"
        >
          <slot name="name">
            {{ name }}
          </slot>
        </div>

        <slot name="info">
          {{ info }}
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import { Pagination } from "swiper";
export default {
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>
