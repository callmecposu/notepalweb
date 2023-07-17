<template>
  <h1>This is supposed to be a user view</h1>
  <h2>Welcome, {{ $route.params.username }}</h2>
</template>

<script>
import router from '@/router';
export default {
    name:'UserView',
    async mounted(){
        const jwt = this.$cookies.get('jwt');

        const res = await fetch('http://localhost:8888/api/get_user_by_jwt',
        {
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            mode: 'cors',
            body: JSON.stringify({token: jwt})
        })
        const result = await res.json();
        if (res.status != 200){
            router.push({name: 'login'})
        }
        console.log(result);
    }
}
</script>

<style>

</style>