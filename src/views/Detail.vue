<template>
  <div class="job-detail">
    <div class="back d-flex justify-content-end mb-5">
      <button class="btn btn-outline-secondary" @click="handleBack">
        Geri
      </button>
    </div>
    <div class="row" v-if="jobDetail">
      <div class="col-md-9">
        <h1 class="job-detail__title" v-if="jobDetail.positionName">
          {{ jobDetail.positionName }}
        </h1>
        <div class="job-detail__content">
          <p>{{ jobDetail.description }}</p>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card p-4">
          <div class="mb-3 text-center">
            <img
              class="border p-2"
              :src="jobDetail.imageUrl"
              :alt="jobDetail.companyName"
            />
          </div>
          <p>{{ jobDetail.companyName }}</p>
          <p>{{ jobDetail.cityName }} / {{ jobDetail.townName }}</p>
          <p>
            {{ jobDetail.contactPhone.countryCallingCode }}
            {{ jobDetail.contactPhone.areaCode }}
            {{ jobDetail.contactPhone.number }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Detail",
  props: ["id"],
  mounted() {
    this.getJob();
  },
  computed: {
    ...mapState({
      jobDetail: (state) => state.jobs.jobDetail,
    }),
  },
  methods: {
    ...mapActions(["getJobDetail"]),
    getJob() {
      this.getJobDetail(this.id).catch(() => {
        this.$router.push({ name: "NotFound" });
      });
    },
    handleBack() {
      this.$router.back();
    },
  },
};
</script>

<style lang="scss" scoped>
.job-detail {
  &__title {
    font-size: 28px;
    margin-bottom: 25px;
  }
  &__content {
    line-height: 33px;
  }
}
</style>
