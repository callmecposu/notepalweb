<template>
<!-- Modal -->
<div class="modal fade" id="createNoteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" style="max-width:80%; margin: 60px auto;">
    <div class="modal-content">
      <div class="modal-header bg-light">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Create Note</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="lead mb-3">Enter the note's name</div>
        <input class="form-control" v-model="noteTitle" type="text" placeholder="Note Title">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-success" data-bs-dismiss="modal" @click="submit">Create</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            noteTitle:''
        }
    },
    methods:{
        submit(){
            this.$emit('createdNote', this.noteTitle);
        }
    }
}
</script>

<style>

</style>