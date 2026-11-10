<template>
  <div class="prose max-w-2xl mx-auto p-8">
    <h1 class="text-2xl font-bold text-gray-900 mb-6">Exams</h1>
    <p class="text-gray-600 mb-6">Take practice tests and track your progress.</p>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      <div class="bg-white rounded-2xl p-6 card">
        <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">IIT JEE</h3>
        <p class="text-gray-400">Engineering entrance preparation</p>
        <router-link to="/exam/jee" class="mt-3 inline-block py-2 px-4 text-sm font-medium text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">Start Test</router-link>
      </div>
      
      <div class="bg-white rounded-2xl p-6 card">
        <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">Medical/NEET</h3>
        <p class="text-gray-400">Medical entrance preparation</p>
        <router-link to="/exam/neet" class="mt-3 inline-block py-2 px-4 text-sm font-medium text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">Start Test</router-link>
      </div>
      
      <div class="bg-white rounded-2xl p-6 card">
        <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">Civil Services</h3>
        <p class="text-gray-400">Administrative services exam</p>
        <router-link to="/exam/civil" class="mt-3 inline-block py-2 px-4 text-sm font-medium text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">Start Test</router-link>
      </div>
    </div>
  </div>
</template>