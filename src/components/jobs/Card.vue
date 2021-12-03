<template>
  <div class="col-md-3 col-sm-12 mb-4">
    <div class="card shadow-sm p-3">
      <div class="mb-4">
        <img
          class="card__logo"
          :src="dataItem.imageUrl"
          :alt="dataItem.companyName"
        />
      </div>
      <p class="card__title">
        <router-link :to="`/jobdetail/${dataItem.id}`">
          {{ dataItem.positionName }}
        </router-link>
      </p>
      <p class="card__campany">{{ dataItem.companyName }}</p>
      <p class="card__location">
        {{ dataItem.cityName }} / {{ dataItem.townName }}
      </p>
      <p class="card__desc">{{ dataItem.description | truncate(60) }}...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    dataItem: Object,
  },
  filters: {
    truncate(text, num) {
      return text.split("").slice(0, num).join("");
    },
  },
};
</script>
<style lang="scss" scoped>
.card {
  height: 100%;
  background-color: #ffffff;
  border: 0;
  &__logo {
    width: auto;
    height: 40px;
    padding: 0.25rem;
    border: 1px solid #dee2e6;
  }
  &__title {
    font-weight: 600;
  }
  &__desc {
    color: #8f8f98;
    font-size: 14px;
  }
  &__location,
  &__campany {
    font-size: 15px;
  }
}
</style>
