<template>
    <div class="searchbar-container">
      <input type="text" class="form-control" placeholder="Buscar lugares" v-model="searchTerm">
      <SearchResults />
    </div>
</template>

<script lang="ts" src="./SearchBar.ts"></script>


<style scoped>
.searchbar-container {
  position: fixed;
  top: 30px;
  left: 30px;
  z-index: 999;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  width: 250px;
  border-radius: 10px;
  overflow: hidden;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.8);
}



</style>