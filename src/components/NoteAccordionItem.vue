<template>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button
        class="accordion-button bg-light"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="'#' + noteID"
        aria-expanded="true"
        :aria-controls="noteID"
      >
       {{ title }}
      </button>
    </h2>
    <div
      :id="noteID"
      class="accordion-collapse collapse"
    >
      <div class="accordion-body">
        <div class="form">
          <textarea
          v-model="noteContent"
            class="form-control"
            placeholder="Leave a comment here"
            :id="'textArea_' + noteID"
            style="height: 200px"
          ></textarea>
        </div>
        <!-- note controls -->
        <div class="container mt-2 p-3">
            <div class="btn btn-outline-success mx-2 mb-2">Save</div>
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
    data(){
        return{
            noteContent: this.content
        }
    },
    props: ['noteID', 'title', 'content'],
};
</script>

<style scoped>
.btn{
    width: 80px;
}
</style>
