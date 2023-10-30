<template>
  <div class="blog">
    <div class="grid tablet-mx-0 tablet:grid-cols-2 
      h-full ">
      <div class="h-full grid">
        <div class="grid h-full pt-5 tablet:pt-0">
          <slot name="img">
            {{ img }}
          </slot>
        </div>
        
      </div>

      <div
        class="text-gray-800 font-extralight text-2xl text-center 
        bottom-0 relative z-10 grid place-content-center"
      >
        <slot name="name">
          {{ name }}
        </slot>
        
        <slot name="info">
        {{ info }}
      </slot>
      </div>
    </div>      
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
