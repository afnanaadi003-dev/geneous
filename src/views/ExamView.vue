<template>
  <div class="prose max-w-2xl mx-auto p-8">
    <h1 class="text-2xl font-bold text-gray-900 mb-6">Exam: {{ examType }}</h1>
    <p class="text-gray-600 mb-6">Start your practice test.</p>
    
    <div class="bg-white rounded-2xl p-6 card">
      <div class="flex items-center gap-4 mb-4">
        <div class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
          <span class="text-sm font-medium">1</span>
        </div>
        <div class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
          <span class="text-sm font-medium">2</span>
        </div>
        <div class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
          <span class="text-sm font-medium">3</span>
        </div>
      </div>
      
      <div class="mt-6">
        <p class="text-gray-500">This is a practice exam interface. In a full implementation, this would contain questions, timing, and submission functionality.</p>
        <button class="mt-4 w-full btn-primary py-3 rounded-xl text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600">
          Start Exam
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, emit, ref, computed } from 'vue'

const props = defineEmits(['examType'])
const examType = computed(() => props[0]?.type || 'jee')
</script>