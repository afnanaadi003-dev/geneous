<template>
  <div>Sign out processed</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

onMounted(() => {
  localStorage.removeItem('geneous_auth')
  localStorage.removeItem('geneous_user_role')
})
</script>