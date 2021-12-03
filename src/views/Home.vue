<template>
  <div class="home">
    <Search />
    <div class="row">
      <Card :key="job.id" v-for="job in jobs" :dataItem="job" />
    </div>
    <Spinner v-if="!isEmptyJob && jobs.length === 0" />
    <h4 v-if="isEmptyJob">Aradığınız sonuç bulunamadı!</h4>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { Card, Search, Spinner } from "@/components";

export default {
  name: "Home",
  components: {
    Card,
    Search,
    Spinner,
  },
  mounted() {
    this.getJobs();
  },
  computed: {
    ...mapState({
      jobs: (state) => state.jobs.jobs,
      isEmptyJob: (state) => state.jobs.isEmptyJob,
    }),
  },
  methods: {
    ...mapActions(["getJobs"]),
  },
};
</script>
