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
            <div class="btn btn-danger" @click="logout">Log Out</div>
          </li>
          <!-- log out btn for mobile navs -->
          <li class="nav-item mx-3 d-block d-md-none">
            <div class="nav-link link-danger" @click="logout">Log Out</div>
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

  <CreateNoteModal @createdNote="addNote" />
  <ImportNoteModal @importedNote="refreshNotes" />
  <!-- Share Note Modal -->
  <div
    class="modal fade"
    id="shareNoteModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" style="max-width: 80%; margin: 60px auto">
      <div class="modal-content">
        <div class="modal-header bg-light">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Share Note</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="display-6 mb-3">
            Below is the ID of note "<b
              ><u>{{ sharedNoteTitle }}</u></b
            >".
          </div>
          <p class="lead">Feel free to share it!</p>
          <p ref="noteIDContainer" class="muted">
            <u
              ><i>{{ sharedNoteID }}</i></u
            >
          </p>
        </div>
        <div class="modal-footer">
          <button
            ref="closeBtn"
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- notes container -->
  <section id="notes">
    <div class="d-flex align-items-center">
      <div class="container col-lg-8 col-10 rounded-4 border border-2 p-3">
        <div
          v-if="!loadingNotes && notes.length != 0"
          class="accordion"
          id="accordionPanelsStayOpenExample"
        >
          <NoteAccordionItem
            v-for="note in notes"
            :key="note._id"
            :noteID="note._id"
            :title="note.title"
            :content="note.content"
            :ownerName="note.ownerName"
            :show="note.show"
            @noteListChanged="refreshNotes"
            @sharedNote="shareNote"
          />
        </div>
        <LoadingSpinner v-if="loadingNotes" />
        <h1 v-if="!loadingNotes && notes.length == 0" class="lead m-3">
          You have no Notes at the moment.
        </h1>
      </div>
    </div>
  </section>
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
      loadingNotes: true,
      sharedNoteTitle: "",
      sharedNoteID: "",
    };
  },
  async mounted() {
    const jwt = this.$cookies.get("jwt");

    const res = await fetch(`${process.env.VUE_APP_API_URL}/get_user_by_jwt`, {
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
    async addNote(title) {
      this.loadingNotes = true;
      const res = await fetch(`${process.env.VUE_APP_API_URL}/create_note`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "cors",
        body: JSON.stringify({
          username: this.$route.params.username,
          title: title,
        }),
      });
      if (res.status == 200) {
        this.refreshNotes();
      }
    },
    async refreshNotes() {
      this.loadingNotes = true;
      const res = await fetch(`${process.env.VUE_APP_API_URL}/get_user_notes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "cors",
        body: JSON.stringify({ username: this.$route.params.username }),
      });
      const result = await res.json();
      this.notes = result.userNotes;
      this.loadingNotes = false;
      if (this.notes.length != 0) {
        this.notes[0]["show"] = true;
      }
    },
    logout() {
      this.$cookies.set("jwt", "", 1);
      router.push({ name: "home" });
    },
    shareNote(noteID, title) {
      this.sharedNoteID = noteID;
      this.sharedNoteTitle = title;
    },
  },
};
</script>

<style scoped>
section {
  padding: 40px 0;
}
</style>
