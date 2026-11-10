<template>
  <section class="prose max-w-2xl mx-auto p-8">
    <h1 class="text-3xl font-bold text-gray-900 mb-6">Welcome, Admin!</h1>
    <p class="text-gray-600 mb-4">You're logged in as an administrator. Manage the entire platform.</p>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
      <div class="bg-white rounded-2xl p-6 card">
        <div class="w-12 h-12 rounded-xl from-red-100 to-orange-100 flex items-center justify-center mb-4">
          <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3-3m6 4v6h-2V8a2 2 0 00-2-2h-2a2 2 0 00-2 2v8l-5.4-2.7A2.5 2.5 0 0115 19a2.5 2.5 0 01-2.138-1.808L7 15v6h2z"/>
          </svg>
        </div>
        <h3 class="text-xl font-medium text-gray-900">System Health</h3>
        <p class="text-gray-500">Monitor platform performance and status.</p>
      </div>
      
      <div class="bg-white rounded-2xl p-6 card">
        <div class="w-12 h-12 rounded-xl from-indigo-100 to-violet-100 flex items-center justify-center mb-4">
          <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657-1.637-3.535-1.23-3.535-1.23A8.043 8.043 0 014.16 12.35a8.06 8.06 0 017.773.618l.324.392c.175.21.25.44.25.69v6.23a2 2 0 01-2 2H5a2 2 0 01-2-2v-.77c0 .25.07.48.25.69l.324.382a8.058 8.058 0 017.774.617 8.042 8.042 0 013.532-.23 8.057 8.057 0 01.618-.382l.324-.39A8.038 8.038 0 0112 8z"/>
          </svg>
        </div>
        <h3 class="text-xl font-medium text-gray-900">Users</h3>
        <p class="text-gray-500">Manage all user accounts and roles.</p>
      </div>
    </div>
    
    <div class="bg-white rounded-2xl p-6 mt-8 card">
      <h3 class="text-xl font-medium text-gray-900 mb-4">Platform Settings</h3>
      <div class="space-y-3">
        <router-link to="/settings" class="flex items-center gap-3 hover:text-blue-600 transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a4 4 0 100-8 4 4 0 000 8z"/>
          </svg>
          Settings
        </router-link>
        <router-link to="/audit" class="flex items-center gap-3 hover:text-blue-600 transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          Audit Log
        </router-link>
      </div>
    </div>
  </section>
</template>