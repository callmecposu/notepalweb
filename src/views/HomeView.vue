<template>
  <div class="home">
    <!-- navbar -->
    <nav class="navbar fixed-top navbar-expand-md bg-light">
      <div class="container-xxl">
        <!-- logo & website name -->
        <a href="#pagetop" class="navbar-brand">
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
        <!-- actual navbar (links) -->
        <div
          class="collapse navbar-collapse justify-content-end align-center"
          id="main-nav"
        >
          <ul class="navbar-nav">
            <!-- top border for mobile navs -->
            <li class="nav-item d-block d-md-none">
              <div class="container-fluid border-top border-5"></div>
            </li>
            <!-- 'about' link, appears on both mobile & desktop navs -->
            <li class="nav-item mx-3">
              <a href="#about" class="nav-link">About</a>
            </li>
            <!-- login btn for desktop navs -->
            <li class="nav-item mx-3 d-none d-md-block">
              <router-link to="/login" href="#" class="btn btn-outline-primary"
                >Login</router-link
              >
            </li>
            <!-- login link for mobile navs -->
            <li class="nav-item d-block d-md-none">
              <a href="#" class="nav-link link-primary">Login</a>
            </li>
            <!-- sign up btn for desktop navs -->
            <li class="nav-item mx-3 d-none d-md-block">
              <a href="#" class="btn btn-success">Sign Up</a>
            </li>
            <!-- sign up link for mobile navs -->
            <li class="nav-item d-block d-md-none">
              <a href="#" class="nav-link link-success">Sign Up</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <section id="pagetop"></section>

    <!-- intro section -->
    <section id="intro">
      <div class="container-lg">
        <div class="row justify-content-center align-items-center">
          <div class="col-md-5 text-center text-md-start">
            <h1>
              <div class="display-3 border-bottom border-5 rounded">
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

    <!-- about section -->
    <section id="about">
      <div class="container-fluid bg-light pt-3">
        <!-- container with heading-->
        <div class="container mb-5 mt-2">
          <h1 class="display-6">A Web App to store your dearest notes</h1>
          <h5 class="text-muted">
            And share your less precious ones
          </h5>
        </div>
        <!-- container with the carousel -->
        <div class="container-lg">
          <div id="carouselExampleIndicators" class="carousel slide">
            <!-- carousel slot indicators -->
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <!-- carousel elements -->
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="../assets/taking-notes.jpg"
                  class="d-block w-100"
                  alt="..."
                  style="filter: brightness(50%)"
                />
                <div
                  class="carousel-caption justify-content-center align-items-center d-flex h-100"
                >
                  <h1 class="display-4">You don't need those anymore.</h1>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src="../assets/gadgets.jpg"
                  class="d-block w-100"
                  alt="..."
                  style="filter: brightness(30%)"
                />
                <div
                  class="carousel-caption justify-content-center align-items-center d-flex h-100"
                >
                  <h1 class="display-6">
                    All your notes in one place, available from any device.
                  </h1>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src="../assets/friendship.jpg"
                  class="d-block w-100"
                  alt="..."
                  style="filter: brightness(50%)"
                />
                <div
                  class="carousel-caption justify-content-center align-items-center d-flex h-100"
                >
                  <h1 class="display-6">
                    Share your thoughts securely. We protect you from outsiders.
                  </h1>
                </div>
              </div>
            </div>
            <!-- carousel control buttons -->
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
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
  padding: 40px 0;
}
</style>
