<script setup lang="ts">
import "devextreme/dist/css/dx.material.blue.light.compact.css";
import TabPanelCommon from "./TabPanelCommon.vue";
</script>
<template>
  <div>
    <p><b>Display ellipses (...)</b></p>
    <TabPanelCommon
      class="tabs"
      item-title-template="ellipsisTitle"
    >
      <template #ellipsisTitle="{ data }">
        <div :title="data.title" class="show-ellipsis">
          {{ data.title }}
        </div>
      </template>
    </TabPanelCommon>

    <p><b>Show full text</b></p>
    <TabPanelCommon id="tabpanel2" />

    <p><b>Title word-wrap</b></p>
    <TabPanelCommon id="tabpanel3" />
  </div>
</template>
<style>
.show-ellipsis {
  width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
}

#tabpanel2 .dx-tabs .dx-tab.dx-item {
  width: auto;
}

#tabpanel3 .dx-item.dx-tab {
  max-width: 200px;
  white-space: normal;
}

.tabs {
  margin-bottom: 30px;
}
</style>
