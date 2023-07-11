<template>
  <div class="d-flex align-items-center" style="height: 95vh">
    <div class="container col-lg-6 col-10 p-5 rounded-4 border border-3">
      <div class="lead fw-bold">NotePal</div>
      <div class="mute mb-3">Get Started with us today!</div>
      <div class="form-floating mb-3">
        <input
          v-model="username"
          type="email"
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
      <div class="form-floating">
        <input
          v-model="confPassword"
          type="password"
          class="form-control"
          id="confPassword"
          placeholder="Confirm Password"
        />
        <label for="confPassword">Confirm Password</label>
      </div>
      <button class="btn btn-success mt-3">Sign Up</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      confPassword: "",
    };
  },
};
</script>

<style></style>
