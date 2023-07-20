<template>
  <!-- navbar -->
  <nav class="navbar fixed-top navbar-expand-md bg-light">
    <div class="container-xxl">
      <!-- logo & website name -->
      <a href="#pagetop" class="navbar-brand">
        <img class="mx-2" src="../assets/logo.png" width="50" alt="logo" />
        <span class="d-none d-md-inline-block lead fw-bold">NotePal</span>
      </a>
      <div class="lead ms-1">{{ $route.params.username }}</div>
      <!-- toggle btn for mobiles -->
      <button
        class="navbar-toggler me-3"
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
          <!-- create note btn for desktop navs -->
          <li class="nav-item mx-3 d-none d-md-block">
            <div
              class="btn btn-success"
              data-bs-toggle="modal"
              data-bs-target="#createNoteModal"
            >
              Create Note
            </div>
          </li>
          <!-- create note btn for mobile navs -->
          <li class="nav-item d-block d-md-none">
            <div
              class="nav-link link-success"
              data-bs-toggle="modal"
              data-bs-target="#createNoteModal"
            >
              Create Note
            </div>
          </li>
          <!-- import note btn for desktop navs -->
          <li class="nav-item mx-3 d-none d-md-block">
            <div
              class="btn btn-outline-primary"
              data-bs-toggle="modal"
              data-bs-target="#importNoteModal"
            >
              Import Note
            </div>
          </li>
          <!-- import note button for mobile navs -->
          <li class="nav-item d-block d-md-none">
            <div
              class="nav-link link-primary"
              data-bs-toggle="modal"
              data-bs-target="#importNoteModal"
            >
              Import Note
            </div>
          </li>
          <!-- log out btn for desktop navs -->
          <li class="nav-item mx-3 d-none d-md-block">
            <div class="btn btn-danger">Log Out</div>
          </li>
          <!-- log out btn for mobile navs -->
          <li class="nav-item mx-3 d-block d-md-none">
            <div class="nav-link link-danger">Log Out</div>
          </li>
          <!-- bottom border for mobile navs -->
          <li class="nav-item d-block d-md-none">
            <div class="container-fluid border-bottom border-5"></div>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <section id="pagetop"></section>

  <CreateNoteModal @createNote="addNote" />
  <ImportNoteModal />

  <!-- notes container -->
  <section id="notes">
    <div class="d-flex align-items-center">
      <div class="container col-lg-8 col-10 rounded-4 border border-2 p-3">
        <div
          v-if="notes.length != 0"
          class="accordion"
          id="accordionPanelsStayOpenExample"
        >
          <NoteAccordionItem
            v-for="note in notes"
            :key="note._id"
            :noteID="note._id"
            :title="note.title"
            :content="note.content"
            :show="note.show"
          />
        </div>
        <LoadingSpinner v-if="notes.length == 0" />
      </div>
    </div>
  </section>

  <h1>This is supposed to be a user view</h1>
  <h2>Welcome, {{ $route.params.username }}</h2>
</template>

<script>
import router from "@/router";
import CreateNoteModal from "../components/CreateNoteModal.vue";
import NoteAccordionItem from "../components/NoteAccordionItem.vue";
import ImportNoteModal from "../components/ImportNoteModal.vue";
import LoadingSpinner from "../components/LoadingSpinner.vue";
export default {
  name: "UserView",
  components: {
    NoteAccordionItem,
    CreateNoteModal,
    ImportNoteModal,
    LoadingSpinner,
  },
  data() {
    return {
      notes: [],
      userID: "",
    };
  },
  async mounted() {
    const jwt = this.$cookies.get("jwt");

    const res = await fetch("http://localhost:8888/api/get_user_by_jwt", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
      body: JSON.stringify({ token: jwt }),
    });
    const result = await res.json();
    if (
      res.status != 200 ||
      result.user.username != this.$route.params.username
    ) {
      router.push({ name: "login" });
    } else {
      this.userID = result.user._id;
      this.refreshNotes();
    }
    console.log(result);
  },
  methods: {
    async addNote(title){
        this.notes = [];
        const res = await fetch('http://localhost:8888/api/create_note',{
            method:'POST',
            headers: {'Content-Type' : 'application/json'},
            mode: 'cors',
            body: JSON.stringify({username: this.$route.params.username, title: title})
        });
        if (res.status == 200){
            this.refreshNotes();
        }
    },
    async refreshNotes() {
      const res = await fetch("http://localhost:8888/api/get_user_notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "cors",
        body: JSON.stringify({ username: this.$route.params.username }),
      });
      const result = await res.json();
      this.notes = result.userNotes;
      this.notes[0]['show'] = true;
    },
  },
};
</script>

<style scoped>
section {
  padding: 40px 0;
}
</style>
