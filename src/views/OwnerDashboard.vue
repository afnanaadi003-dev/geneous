<template>
  <section class="prose max-w-2xl mx-auto p-8">
    <h1 class="text-3xl font-bold text-gray-900 mb-6">Welcome, Owner!</h1>
    <p class="text-gray-600 mb-4">You're logged in as an owner. Manage your learning platform and view analytics.</p>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
      <div class="bg-white rounded-2xl p-6 card">
        <div class="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
          <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3-3m6 4v6h-2V8a2 2 0 00-2-2h-2a2 2 0 00-2 2v8l-5.4-2.7A2.5 2.5 0 0115 19a2.5 2.5 0 01-2.138-1.808L7 15v6h2z"/>
          </svg>
        </div>
        <h3 class="text-xl font-medium text-gray-900">Platform Stats</h3>
        <p class="text-gray-500">View your platform analytics and user growth.</p>
      </div>
      
      <div class="bg-white rounded-2xl p-6 card">
        <div class="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
          <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3-3m6 4v6h-2V8a2 2 0 00-2-2h-2a2 2 0 00-2 2v8l-5.4-2.7A2.5 2.5 0 0115 19a2.5 2.5 0 01-2.138-1.808L7 15v6h2z"/>
          </svg>
        </div>
        <h3 class="text-xl font-medium text-gray-900">Revenue</h3>
        <p class="text-gray-500">Track earnings and subscription metrics.</p>
      </div>
    </div>
    
    <div class="bg-white rounded-2xl p-6 mt-8 card">
      <h3 class="text-xl font-medium text-gray-900 mb-4">Management</h3>
      <div class="space-y-3">
        <router-link to="/users" class="flex items-center gap-3 hover:text-blue-600 transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a4 4 0 100-8 4 4 0 000 8z"/>
          </svg>
          Users
        </router-link>
        <router-link to="/documents" class="flex items-center gap-3 hover:text-blue-600 transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13.05a2 2 0 002 1.997h2.015a2.5 2.5 0 012.485 1.843l.657.563a2.5 2.5 0 01-.485.8l-.657.563a2.5 2.5 0 01-.485.8l-.657-.563A2.5 2.5 0 0113.5 22H6a2.5 2.5 0 01-2.485-1.843l-.657-.563a2.5 2.5 0 01-.485-.8l.657-.563A2.5 2.5 0 011.996 13.05H3a2 2 0 00-2 1.997V19M12 3a9 9 0 019 9h.052a.75.75 0 01.67.45l.096.037.085.05a.75.75 0 01-.43.69h-2.235a.75.75 0 01-.66-.44l-.096-.036-.085.05a.75.75 0 01-.43-.69H3a9 9 0 009-9zm0 0v19"/>
          </svg>
          Documents
        </router-link>
      </div>
    </div>
  </section>