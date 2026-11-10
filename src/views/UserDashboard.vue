<template>
  <section class="prose max-w-2xl mx-auto p-8">
    <h1 class="text-3xl font-bold text-gray-900 mb-6">Welcome, User!</h1>
    <p class="text-gray-600 mb-4">You're logged in as a user. Access your learning dashboard and explore personalized content.</p>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
      <div class="bg-white rounded-2xl p-6 card">
        <div class="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
          <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h2a2 2 0 002-2zm9-3V4a2 2 0 00-2-2H11a2 2 0 00-2 2v14a2 2 0 002 2h2a2 2 0 002-2zM5 18a2 2 0 00-2 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v13z"/>
          </svg>
        </div>
        <h3 class="text-xl font-medium text-gray-900">Learning Progress</h3>
        <p class="text-gray-500">Track your learning journey and skill development.</p>
      </div>
      
      <div class="bg-white rounded-2xl p-6 card">
        <div class="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mb-4">
          <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657-1.637-3.535-1.23-3.535-1.23A8.043 8.043 0 014.16 12.35a8.06 8.06 0 017.773.618l.324.392c.175.21.25.44.25.69v6.23a2 2 0 01-2 2H5a2 2 0 01-2-2v-.77c0 .25.07.48.25.69l.324.382a8.058 8.058 0 017.774.617 8.042 8.042 0 013.532-.23 8.057 8.057 0 01.618-.382l.324-.39A8.038 8.038 0 0112 8z"/>
          </svg>
        </div>
        <h3 class="text-xl font-medium text-gray-900">Practice Tests</h3>
        <p class="text-gray-500">Take timed practice exams and track your improvement.</p>
      </div>
    </div>
    
    <div class="bg-white rounded-2xl p-6 mt-8 card">
      <h3 class="text-xl font-medium text-gray-900 mb-4">Quick Links</h3>
      <div class="space-y-3">
        <router-link to="/exams" class="flex items-center gap-3 hover:text-blue-600 transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-6v13M5 13a2 2 0 012-2h3.275a2 2 0 011.695.9L21 11a2 2 0 012 2v4a2 2 0 01-2 2h-3.725a2 2 0 01-1.695-.9L7 21a2 2 0 01-2-2z"/>
          </svg>
          Exams
        </router-link>
        <router-link to="/library" class="flex items-center gap-3 hover:text-blue-600 transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13.05a2 2 0 002 1.997h2.015a2.5 2.5 0 012.485 1.843l.657.563a2.5 2.5 0 01-.485.8l-.657.563a2.5 2.5 0 01-.485.8l-.657-.563A2.5 2.5 0 0113.5 22H6a2.5 2.5 0 01-2.485-1.843l-.657-.563a2.5 2.5 0 01-.485-.8l.657-.563A2.5 2.5 0 011.996 13.05H3a2 2 0 00-2 1.997V19M12 3a9 9 0 019 9h.052a.75.75 0 01.67.45l.096.037.085.05a.75.75 0 01-.43.69h-2.235a.75.75 0 01-.66-.44l-.096-.036-.085.05a.75.75 0 01-.43-.69H3a9 9 0 009-9zm0 0v19"/>
          </svg>
          Library
        </router-link>
      </div>
    </div>
  </section>
</template>