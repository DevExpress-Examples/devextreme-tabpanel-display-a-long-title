<script setup lang="ts">
import { ref } from "vue";

import "devextreme/dist/css/dx.material.blue.light.compact.css";
import DxTabPanel from "devextreme-vue/tab-panel";

const tabPanelItems = ref([
  {
    title: 'Lorem ipsum',
  },
  {
    title: 'Lorem ipsum dolor sit amet',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
]);

</script>
<template>
  <DxTabPanel
    :width="400"
    item-title-template="title"
    item-template="itemTemplate"
    :data-source="tabPanelItems"
    :focus-state-enabled="false"
    :scroll-by-content="true"
    :scrolling-enabled="true"
    :show-nav-buttons="true"
    :defer-dendering="true"
  >
    <template #title="{ data }">
      <div>{{ data.title }}</div>
    </template>
    <template #itemTemplate="{ data }">
      <div>{{ data.title }}</div>
    </template>

    <template v-for="(_, name) in $slots" v-slot:[name]="{ data }">
      <slot :name="name" :data="data"></slot>
    </template>
  </DxTabPanel>
</template>
