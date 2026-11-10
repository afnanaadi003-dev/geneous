<template>
  <div class="text-center py-24">
    <h1 class="text-4xl font-bold text-gray-900">Geneous</h1>
    <p class="text-xl text-gray-600 mt-4">AI-powered learning platform for competitive exam aspirants</p>
    
    <div class="mt-8 max-w-md mx-auto space-y-4">
      <router-link to="/login" class="btn-primary w-full py-3 rounded-xl text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600">
        Sign In
      </router-link>
      <router-link to="/register" class="input-field w-full py-3 rounded-xl text-lg font-medium border border-gray-300 text-gray-700 hover:border-blue-600 transition-colors">
        Create Account
      </router-link>
    </div>
  </div>
</template>