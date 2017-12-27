<template>
  <div v-if="_model && _model.length">
    <span class="file-name" v-text="_model[0].name"></span>
  </div>
</template>
