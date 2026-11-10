<template>
  <div class="prose max-w-2xl mx-auto p-8">
    <h1 class="text-2xl font-bold text-gray-900 mb-6">Document Library</h1>
    <p class="text-gray-600 mb-6">Access textbooks, notes, and study materials.</p>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
      <div class="bg-white rounded-2xl p-6 card">
        <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">Textbooks</h3>
        <p class="text-gray-400">Core subject textbooks</p>
        <router-link to="/documents" class="mt-3 inline-block py-2 px-4 text-sm font-medium text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">View Documents</router-link>
      </div>
      
      <div class="bg-white rounded-2xl p-6 card">
        <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">Notes</h3>
        <p class="text-gray-400">Study notes and summaries</p>
        <router-link to="/notes" class="mt-3 inline-block py-2 px-4 text-sm font-medium text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">View Notes</router-link>
      </div>
    </div>
  </div>