<template>
  <div class="prose max-w-2xl mx-auto p-8">
    <h1 class="text-2xl font-bold text-gray-900 mb-6">User Management</h1>
    <p class="text-gray-600 mb-6">Manage all user accounts.</p>
    
    <div class="bg-white rounded-2xl p-6 mb-6 card">
      <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">User Roles</h3>
      <div class="space-y-2">
        <span class="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">User</span>
        <span class="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Owner</span>
        <span class="px-3 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">Admin</span>
      </div>
    </div>
    
    <div class="overflow-x-auto">
      <table class="w-full rounded-2xl">
        <thead>
          <tr class="border-b border-gray-200">
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-gray-100 hover:bg-gray-50">
            <td class="px-6 py-4 font-medium text-gray-900">John Doe</td>
            <td class="px-6 py-4">john@example.com</td>
            <td class="px-6 py-4">
              <span class="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">User</span>
            </td>
            <td class="px-6 py-4">
              <button class="text-sm text-blue-600 hover underline">View</button>
              <button class="text-sm text-red-600 hover underline ml-2">Remove</button>
            </td>
          </tr>
          <tr class="border-b border-gray-100 hover:bg-gray-50">
            <td class="px-6 py-4 font-medium text-gray-900">Jane Smith</td>
            <td class="px-6 py-4">jane@example.com</td>
            <td class="px-6 py-4">
              <span class="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Owner</span>
            </td>
            <td class="px-6 py-4">
              <button class="text-sm text-blue-600 hover underline">View</button>
              <button class="text-sm text-red-600 hover underline ml-2">Remove</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>