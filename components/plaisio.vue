<template>
    <div class="grid gap-5 max-w-screen-desktop h-[fit]">
 

        <slot name="img">
            {{  }}
        </slot>

        <div class="flex justify-center mx-10 content-center">
            <div class="w-fit">
                <slot name="info">
                    {{  }}
                </slot>
            </div>
        </div>

        <div class="grid border-y-2 border-gray-300 h-fit 
        place-items-center pb-5 mb-5">

            <slot name="map">
                {{  }}
            </slot>
   
            
        </div> 
       
    </div>
</template>