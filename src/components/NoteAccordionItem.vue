<template>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button
        class="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#panelsStayOpen-collapseOne"
        aria-expanded="true"
        aria-controls="panelsStayOpen-collapseOne"
      >
        My Note
      </button>
    </h2>
    <div
      id="panelsStayOpen-collapseOne"
      class="accordion-collapse collapse show"
    >
      <div class="accordion-body">
        <div class="form">
          <textarea
            class="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
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
export default {};
</script>

<style></style>
