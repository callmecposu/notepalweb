<template>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button
        class="accordion-button"
        :class="{ collapsed: !show }"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="'#' + noteID"
        aria-expanded="true"
        :aria-controls="noteID"
      >
        {{ title }} {{ (changed) ? ' *' : ''}}
      </button>
    </h2>
    <div
      :id="noteID"
      class="accordion-collapse collapse"
      :class="{ show: show }"
    >
      <div class="accordion-body">
        <div class="form">
          <textarea
            v-model="noteContent"
            class="form-control"
            placeholder="I feel so empty..."
            :id="'textArea_' + noteID"
            style="height: 200px"
          ></textarea>
        </div>
        <!-- note controls -->
        <div class="container mt-2 p-3">
          <div class="btn btn-outline-success mx-2 mb-2" @click="saveNote">Save</div>
          <div class="btn btn-outline-danger mx-2 mb-2">Delete</div>
          <div class="btn btn-primary mx-2 mb-2">Share</div>
          <div class="btn btn-secondary mx-2 mb-2">Remove</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      noteContent: this.content,
      lastSaveContent: this.content,
      changed: false
    };
  },
  props: ["noteID", "title", "content", "show"],
  methods: {
    async saveNote() {
      const res = await fetch("http://localhost:8888/api/save_note", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "cors",
        body: JSON.stringify({ noteID: this.noteID, content: this.noteContent }),
      });
      if (res.status == 200){
        this.lastSaveContent = this.noteContent;
        this.changed = false;
      }
    },
  },
  watch:{
    noteContent: function(){
        this.changed = this.noteContent != this.lastSaveContent;
    }
  }
};
</script>

<style scoped>
.btn {
  width: 80px;
}
button.accordion-button {
  background-color: rgb(227, 227, 227);
  text-indent: 20px;
  transition: background-color 0.1s ease-in-out;
  transition: text-indent 0.1s ease-in-out;
}
button.accordion-button.collapsed {
  text-indent: 0px;
  background-color: whitesmoke;
  transition: background-color 0.1s ease-in-out;
  transition: text-indent 0.1s ease-in-out;
}
</style>
