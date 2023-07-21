<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="importNoteModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" style="max-width: 80%; margin: 60px auto">
      <div class="modal-content">
        <div class="modal-header bg-light">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Import Note</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="lead mb-3">Paste the Note's ID</div>
          <input
            class="form-control"
            v-model="noteID"
            type="text"
            placeholder="Note ID"
          />
          <p class="text-danger mt-1">{{ importError }}</p>
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
          <button type="button" class="btn btn-primary" @click="submit">Import</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      noteID: "",
      importError: "",
    };
  },
  methods: {
    async submit() {
      const res = await fetch(`${process.env.VUE_APP_API_URL}/import_note`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "cors",
        body: JSON.stringify({
          username: this.$route.params.username,
          noteID: this.noteID,
        }),
      });
      if (res.status != 200) {
        const result = await res.json();
        this.importError = result.message;
      } else {
        this.$refs.closeBtn.click();
        this.$emit("importedNote");
      }
    },
  },
};
</script>

<style></style>
