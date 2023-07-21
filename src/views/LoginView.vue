<template>
  <LoginForm v-if="!loadingUser"/>
  <LoadingSpinner v-if="loadingUser"/>;
</template>

<script>
import router from "@/router";
import LoginForm from '../components/LoginForm.vue'
import LoadingSpinner from '../components/LoadingSpinner.vue'

export default {
    name: "LoginView",
    data(){
        return {
            loadingUser: false
        }
    },
    components: {
        LoginForm,
        LoadingSpinner
    },
    async mounted() {
    const jwt = this.$cookies.get("jwt");
    if (jwt != null) {
        this.loadingUser = true;
      const res = await fetch(`${process.env.VUE_APP_API_URL}/get_user_by_jwt`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "cors",
        body: JSON.stringify({ token: jwt }),
      });
      const result = await res.json();
      if (res.status == 200) {
        router.push({
          name: "user",
          params: { username: result.user.username },
        });
      }
    }
  },
    
}
</script>

<style>

</style>