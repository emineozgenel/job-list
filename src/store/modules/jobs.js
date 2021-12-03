import axios from "axios";

const state = {
  jobs: [],
  jobDetail: null,
};

const actions = {
  getJobs({ commit }, args) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${process.env.VUE_APP_APIURL}/jobs`, { params: args })
        .then((response) => {
          commit("setJobs", response.data);
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  getJobDetail({ commit }, id) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${process.env.VUE_APP_APIURL}/jobs/${id}`)
        .then((response) => {
          commit("setJobDetail", response.data);
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

const mutations = {
  setJobs(state, jobs) {
    state.jobs = jobs;
  },
  setJobDetail(state, job) {
    state.jobDetail = job;
  },
};

export default {
  state,
  mutations,
  actions,
};
