<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="bg-white border-b border-gray-200 shadow-sm">
      <div class="max-w-7xl mx-auto h-16 flex items-center px-6">
        <div class="flex-1 text-xl font-bold text-gray-900">Geneous</div>
        
        <div class="hidden md:flex items-center gap-8">
          <a href="#" class="nav-link text-gray-500 hover:text-gray-900 transition-colors">Dashboard</a>
          <a href="#" class="nav-link text-gray-500 hover:text-gray-900 transition-colors">Explore</a>
          <a href="#" class="nav-link text-gray-500 hover:text-gray-900 transition-colors">Profile</a>
        </div>
        
        <div class="flex items-center gap-3">
          <span class="text-sm text-gray-500" id="role-display"></span>
          <router-link to="/logout" class="px-4 py-2 rounded-lg text-sm font-medium border border-gray-200 text-gray-600 hover:bg-gray-50 transition-all">
            Sign Out
          </router-link>
        </div>
      </div>
    </nav>
    
    <main class="p-6">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

onMounted(() => {
  const { isAuthenticated, role } = checkAuth()
  if (isAuthenticated) {
    const roleRoutes = {
      admin: '/admin',
      owner: '/owner',
      user: '/user'
    }
    router.push(roleRoutes[role] || '/user')
  }
})
</script>