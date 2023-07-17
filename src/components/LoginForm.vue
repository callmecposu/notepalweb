<template>
  <div class="d-flex align-items-center" style="height: 95vh">
    <div class="container col-lg-6 col-10 p-5 rounded-4 border border-3">
      <div class="lead fw-bold">NotePal</div>
      <div class="mute mb-3">Glad to see you again!</div>
      <div class="form-floating mb-3">
        <input
          v-model="username"
          type="text"
          class="form-control"
          id="username"
          placeholder="Username"
        />
        <label for="username">Username</label>
      </div>
      <div class="form-floating mb-3">
        <input
          v-model="password"
          type="password"
          class="form-control"
          id="password"
          placeholder="Password"
        />
        <label for="password">Password</label>
      </div>
      <button @click="submit" class="btn btn-success mt-3">Log In</button>
    </div>
  </div>
</template>

<script>
import router from '@/router';
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async submit() {
      const res = await fetch("http://localhost:8888/api/login_user", {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: this.username,
          password: this.password,
        }),
      });
      const result = await res.json();
      console.log(result);
      if(res.status == 200){
        router.push({name:'user', params:{username: result.user.username} })
        this.$cookies.set('jwt', result.token, 3*24*60*60);
      }
    },
  },
};
</script>

<style></style>
