<script>
export default {
  mounted() {
    fetch(`https://api.scryfall.com/cards/search?q=${this.cardName}`).then(
      (res) =>
        res.json().then((jsonData) => {
          const cardObj = jsonData?.data[0];
          if (!cardObj) return;
          const imgUrl = cardObj.image_uris.png;
          this.$refs.cardDisplay.setAttribute("src", imgUrl);
        })
    );
  },
};
</script>

<script setup>
defineProps({
  cardName: String,
});
</script>

<template>
  <img ref="cardDisplay" class="mtg-card-display" />
</template>

<style scoped>
.mtg-card-display {
  height: 300px;
  width: auto;
}
</style>
