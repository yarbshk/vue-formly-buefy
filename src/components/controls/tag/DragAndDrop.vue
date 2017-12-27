<template>
  <div class="tags">
    <span v-for="(file, index) in _model"
          v-bind:key="index"
          v-bind="tag"
          class="tag">
      {{ file.name }}
      <button class="delete"
              type="button"
              @click="deleteDropFile(index)">
      </button>
    </span>
  </div>
</template>
