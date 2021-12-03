<template>
  <div class="home">
    <Search />
    <div class="row">
      <Card :key="job.id" v-for="job in jobs" :dataItem="job" />
    </div>
    <Spinner v-if="jobs.length === 0" />
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
    this.getAllJobs();
  },
  computed: {
    ...mapState({
      jobs: (state) => state.jobs.jobs,
    }),
  },
  methods: {
    ...mapActions(["getJobs"]),
    getAllJobs() {
      if (this.jobs.length === 0) {
        this.getJobs();
      }
    },
  },
};
</script>
