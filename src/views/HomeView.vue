<template>
  <div class="home">
    <!-- navbar -->
    <nav class="navbar navbar-expand-md bg-light">
      <div class="container-xxl">
        <a href="#intro" class="navbar-brand">
          <img class="mx-2" src="../assets/logo.png" width="50" alt="logo" />
          <span class="lead fw-bold">NotePal</span>
        </a>
        <!-- toggle btn for mobiles -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end align-center"
          id="main-nav"
        >
          <ul class="navbar-nav">
            <li class="nav-item d-block d-md-none">
              <div class="container-fluid border-top border-5"></div>
            </li>
            <li class="nav-item mx-3">
              <a href="#" class="nav-link">About</a>
            </li>
            <li class="nav-item mx-3 d-none d-md-block">
              <a href="#" class="btn btn-outline-primary">Login</a>
            </li>
            <li class="nav-item d-block d-md-none">
              <a href="#" class="nav-link link-primary">Login</a>
            </li>
            <li class="nav-item mx-3 d-none d-md-block">
              <a href="#" class="btn btn-success">Sign Up</a>
            </li>
            <li class="nav-item d-block d-md-none">
              <a href="#" class="nav-link link-success">Sign Up</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- intro section -->
    <section id="intro">
      <div class="container-lg">
        <div class="row justify-content-center align-items-center">
          <div class="col-md-5 text-center text-md-start">
            <h1>
              <div class="display-2 border-bottom border-5 rounded">
                Your personal Note Pal
              </div>
              <div class="display-6 text-muted mt-2">As if you needed one</div>
            </h1>
          </div>
          <div class="col-md-5 text-center m-3">
            <img
              class="img-fluid"
              src="../assets/notes.png"
              alt="blank notes"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
section {
  padding: 60px 0;
}
</style>
