<script setup lang="ts">
import { ref } from 'vue';
import WuxianFancyzones from '../../../src/components/WuxianFancyzones';
import type { UserZoneData } from '../../../src/components/types';

const zonesData = ref<UserZoneData>({
  horizontal: true,
  space: {
    size: 10
  },
  children: [
    {
      space: {
        size: 0
      },

      size: 70,
      children: [
        {
          size: 50,
          children: [
            {
              size: 70
            },
            {
              size: 30
            }
          ]
        },
        {
          size: 50
        }
      ]
    },
    {
      space: {
        size: 5
      },
      size: 10,
      children: [
        {
          size: 50
        },
        {
          size: 30
        },
        {
          size: 20
        }
      ]
    },
    {
      size: 20
    }
  ]
});
</script>

<template>
  <WuxianFancyzones v-model="zonesData">
    <template #="{ zone }"> {{ Number(zone.size.toFixed(3)) }}% </template>
  </WuxianFancyzones>
</template>

<style lang="scss">
.wuxian-fancyzones {
  width: 500px;
  height: 500px;
  border: 1px solid #f2f2f2;
  box-sizing: border-box;

  .splitpanes__pane {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
