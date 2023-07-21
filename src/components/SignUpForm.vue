<template>
  <div class="d-flex align-items-center" style="height: 95vh">
    <div class="container col-lg-6 col-10 p-5 rounded-4 border border-3">
      <div class="lead fw-bold">NotePal</div>
      <div class="mute mb-3">Get Started with us today!</div>
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
      <p class="text-danger mt-1">{{ usernameError }}</p>
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
      <p class="text-danger mt-1">{{ passwordError }}</p>
      <button class="btn btn-success mt-3" @click="submit">Sign Up</button>
    </div>
  </div>
</template>

<script>
import router from "@/router";
export default {
  data() {
    return {
      username: "",
      password: "",
      confPassword: "",
      usernameError: "",
      passwordError: "",
    };
  },
  methods: {
    async submit() {
      this.usernameError = "";
      this.passwordError = "";
      // Check if password match
      if (this.password != this.confPassword) {
        this.passwordError = "Passwords do not match!";
        return;
      }
      if (this.password.length < 8) {
        this.passwordError = "Password must be at least 8 characters long!";
        return;
      }
      const res = await fetch(`${process.env.VUE_APP_API_URL}/create_user`, {
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
      if (res.status == 200) {
        router.push({
          name: "user",
          params: { username: this.username},
        });
        this.$cookies.set("jwt", result.token, 3 * 24 * 60 * 60);
      } else {
        if (result.src == "username") {
          this.usernameError = result.message;
        } else {
          console.log(result.message);
        }
      }
    },
  },
};
</script>

<style></style>
