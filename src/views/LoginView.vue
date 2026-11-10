<template>
  <div class="max-w-md mx-auto p-4">
    <h2 class="text-2xl font-bold text-gray-900 text-center mb-6">Sign In</h2>
    
    <form @submit.prevent="handleLogin" class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
        <input 
          v-model="form.email" 
          type="email" 
          class="input-field w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
          required
        >
      </div>
      
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Password</label>
        <input 
          v-model="form.password" 
          type="password" 
          class="input-field w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your password"
          required
        >
      </div>
      
      <div class="flex items-center justify-between">
        <label class="flex items-center text-sm">
          <input type="checkbox" class="rounded border-gray-300 focus:ring-blue-500" v-model="rememberMe"> Remember Me
        </label>
        <a href="#" class="text-sm text-blue-600 hover underline">Forgot password?</a>
      </div>
      
      <button 
        type="submit" 
        class="w-full btn-primary py-3 rounded-xl text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        Sign In
      </button>
    </form>
    
    <div class="text-center mt-6 text-sm">
      <span class="text-gray-500">Don't have an account?</span>
      <router-link to="/register" class="font-medium text-blue-600 hover underline">Create one</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({ email: '', password: '', rememberMe: false })

function handleLogin() {
  // Simulate authentication
  localStorage.setItem('geneous_auth', form.value.email)
  
  // Determine role based on email domain
  const email = form.value.email.toLowerCase()
  let role = 'user'
  
  if (email.includes('owner')) {
    role = 'owner'
  } else if (email.includes('admin')) {
    role = 'admin'
  }
  
  localStorage.setItem('geneous_user_role', role)
  
  // Navigate to appropriate dashboard
  const roleRoutes = {
    admin: '/admin',
    owner: '/owner',
    user: '/user'
  }
  
  router.push(roleRoutes[role] || '/user')
}
</script>