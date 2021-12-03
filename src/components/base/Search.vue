<template>
  <div class="search pb-5">
    <form id="reservation" class="d-flex flex-row" @submit.prevent="onSubmit()">
      <div class="col me-2">
        <input
          type="text"
          name="search"
          v-model="search"
          autocomplete="off"
          placeholder="Pozisyon veya Şirket Ara"
          class="form-control"
        />
      </div>
      <div class="col me-2">
        <VueSelect
          placeholder="Şehir Seç"
          v-model="city"
          :options="cityOptions"
          :reduce="(option) => option.id"
        />
      </div>
      <button type="submit" class="btn btn-primary">Ara</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import VueSelect from "vue-select";

export default {
  name: "Search",
  data() {
    return {
      search: "",
      city: [],
      cityOptions: [
        { label: "İstanbul", id: "İstanbul" },
        { label: "Ankara", id: "Ankara" },
        { label: "Eskişehir", id: "Eskişehir" },
        { label: "İzmir", id: "İzmir" },
      ],
    };
  },
  components: {
    VueSelect,
  },
  methods: {
    ...mapActions(["getJobs"]),
    onSubmit() {
      const args = {
        q: this.search,
        cityName: this.city,
      };
      this.getJobs(args);
    },
  },
};
</script>

<style lang="scss">
.vs {
  &__dropdown-toggle {
    padding: 3px 0px 5px 0px !important;
    background: #ffffff !important;
  }
  &__search {
    color: #6c757d;
  }
}
</style>
<style lang="scss" scoped>
.btn {
  padding: 0px 45px;
  background-color: #8316b5;
  border-color: #8316b5;
}
</style>
