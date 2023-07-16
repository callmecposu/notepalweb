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
      <button class="btn btn-success mt-3">Log In</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
};
</script>

<style></style>
