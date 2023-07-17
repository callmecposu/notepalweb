<template>
  <h1>This is supposed to be a user view</h1>
  <h2>Welcome, {{ $route.params.username }}</h2>
</template>

<script>
export default {
    name:'UserView',
    async mounted(){
        console.log(this.jwt);
        // const res = await fetch('http://localhost:8888/api/get_user_by_jwt',
        // {
        //     method:'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     mode: 'cors',
        //     body: JSON.stringify({token: this.jwt})
        // })
        // const result = await res.json();
        // console.log(result);
    }
}
</script>

<style>

</style>