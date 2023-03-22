import { reactive } from "vue";

const scryfallStore = reactive({
  scryfallQuery: "",
  scryfallCardObject: {},
  changeQuery(newQuery) {
    if (!newQuery) {
      this.scryfallQuery = "";
      return;
    }

    this.scryfallQuery = newQuery;
    fetch(`https://api.scryfall.com/cards/search?q=${newQuery}`).then((res) =>
      res.json().then((jsonData) => {
        const cardObj = jsonData?.data[0];
        console.log("[ cardObj ]", cardObj);
        if (!cardObj) return;
        this.scryfallCardObject = cardObj;
      })
    );
  },
});

export default scryfallStore;
