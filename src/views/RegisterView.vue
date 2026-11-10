<template>
  <div class="max-w-md mx-auto p-4">
    <h2 class="text-2xl font-bold text-gray-900 text-center mb-6">Create Account</h2>
    
    <form @submit.prevent="handleRegister" class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Name</label>
        <input 
          v-model="form.name" 
          type="text" 
          class="input-field w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your name"
          required
        >
      </div>
      
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
      
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Role</label>
          <select v-model="form.role" class="input-field w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="user">User</option>
            <option value="owner">Owner</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Target Exams</label>
          <select v-model="form.targetExams" class="input-field w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" multiple>
            <option value="iit">IIT JEE</option>
            <option value="medical">Medical/NEET</option>
            <option value="civil">Civil Services</option>
            <option value="bank">Bank Jobs</option>
            <option value="office">Office Jobs</option>
          </select>
        </div>
      </div>
      
      <button 
        type="submit" 
        class="w-full btn-primary py-3 rounded-xl text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        Create Account
      </button>
    </form>
    
    <div class="text-center mt-6 text-sm">
      <span class="text-gray-500">Already have an account?</span>
      <router-link to="/login" class="font-medium text-blue-600 hover underline">Sign in</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({ name: '', email: '', password: '', role: 'user', targetExams: [] })

function handleRegister() {
  const { name, email, password, role, targetExams } = form.value
  
  // Store user data
  localStorage.setItem('geneous_auth', email)
  localStorage.setItem('geneous_user_role', role)
  
  // Navigate to login
  router.push('/login')
}
</script>