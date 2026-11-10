<template>
  <div class="prose max-w-2xl mx-auto p-8">
    <h1 class="text-2xl font-bold text-gray-900 mb-6">Settings</h1>
    <p class="text-gray-600 mb-6">Configure your account preferences.</p>
    
    <form class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Profile Name</label>
        <input type="text" class="input-field w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" readonly>
      </div>
      
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
        <input type="email" class="input-field w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" readonly>
      </div>
      
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Target Exams</label>
        <select multiple class="input-field w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="iit">IIT JEE</option>
          <option value="medical">Medical/NEET</option>
          <option value="civil">Civil Services</option>
          <option value="bank">Bank Jobs</option>
          <option value="office">Office Jobs</option>
        </select>
      </div>
      
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <input type="checkbox" id="dark-mode" class="rounded border-gray-300 focus:ring-blue-500">
          <label for="dark-mode" class="text-sm text-gray-500">Dark Mode</label>
        </div>
        <button type="submit" class="px-4 py-2 rounded-lg text-sm font-medium text-blue-600 hover:bg-blue-50 transition-all">
          Save Changes
        </button>
      </div>
    </form>
  </div>