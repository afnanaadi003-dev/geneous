<template>
  <div class="prose max-w-2xl mx-auto p-8">
    <h1 class="text-2xl font-bold text-gray-900 mb-6">AI Chat Assistant</h1>
    <p class="text-gray-600 mb-6">Chat with our AI assistant for help with exams, documents, and learning.</p>
    
    <!-- Chat Messages -->
    <div id="chat-messages" class="h-96 overflow-y-auto mb-4 border rounded-2xl p-4 bg-gray-50"
         style="border-color: #e2e8f0;">
      <div id="messages" class="space-y-3"></div>
    </div>
    
    <!-- Chat Input -->
    <div class="flex gap-2">
      <input 
        type="text" 
        id="chat-input" 
        class="flex-1 rounded-lg border border-gray-300 focus outline-none focus:ring-2 focus:ring-blue-500 py-3 px-4 text-sm"
        placeholder="Type a message..."
        @keydown.enter="sendMessage"
      >
      <button 
        type="button" 
        class="btn-primary py-3 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90"
        @click="sendMessage"
      >
        Send
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const chatMessages = ref([])
const mockResponses = [
  'Hello! I\'m your AI assistant. How can I help you with your exams today?',
  'I can help you find study materials and practice tests for IIT JEE, NEET, or Civil Services.',
  'Would you like me to summarize a document or explain a concept?',
  'You can ask me about exam patterns, syllabus, or study strategies.',
  'Good luck with your preparation! Let me know what you need.',
]

function sendMessage() {
  const input = document.getElementById('chat-input')
  if (!input) return
  const message = input.value.trim()
  if (!message) return
  
  // Add user message
  chatMessages.value.push({
    id: Date.now(),
    text: message,
    type: 'user'
  })
  
  // Simulate AI response
  setTimeout(() => {
    const randomResponse = mockResponses[Math.floor(Math.random() * mockResponses.length)]
    chatMessages.value.push({
      id: Date.now() + 1000,
      text: randomResponse,
      type: 'ai'
    })
  }, 500)
  
  input.value = ''
  // Scroll to bottom
  const chatBox = document.getElementById('chat-messages')
  if (chatBox) {
    chatBox.scrollTop = chatBox.scrollHeight
  }
}

// Initial messages on mount
onMounted(() => {
  chatMessages.value.push({
    id: Date.now(),
    text: 'Hello! I\'m your AI assistant. How can I help you with your exams today?',
    type: 'ai'
  })
})
</script>