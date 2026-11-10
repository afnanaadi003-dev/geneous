import { createRouter, createWebHashHistory } from 'vue-router'
import { ref } from 'vue'

// Auth check function
function checkAuth() {
  const user = localStorage.getItem('geneous_auth')
  const role = localStorage.getItem('geneous_user_role')
  return user ? { isAuthenticated: true, role } : { isAuthenticated: false, role: null }
}

// Route middleware for role-based access
function hasRole(requiredRole) {
  const { role } = checkAuth()
  if (!role) return false
  if (requiredRole === 'admin') return role === 'admin'
  if (requiredRole === 'ownerOrAdmin') return role === 'owner' || role === 'admin'
  if (requiredRole === 'userOrOwnerOrAdmin') return ['user', 'owner', 'admin'].includes(role)
  return true
}

const routes = [
  {
    path: '/',
    component: () => import('./views/HomeView.vue'),
    meta: { title: 'Geneous - AI Learning Platform' }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('./views/LoginView.vue'),
    meta: { title: 'Geneous - Sign In' }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('./views/RegisterView.vue'),
    meta: { title: 'Geneous - Create Account' }
  },
  {
    path: '/user',
    name: 'UserDashboard',
    component: () => import('./views/UserDashboard.vue'),
    meta: { requiresAuth: true, allowedRoles: ['user', 'owner', 'admin'] }
  },
  {
    path: '/owner',
    name: 'OwnerDashboard',
    component: () => import('./views/OwnerDashboard.vue'),
    meta: { requiresAuth: true, allowedRoles: ['owner', 'admin'] }
  },
  {
    path: '/admin',
    name: 'AdminDashboard',
    component: () => import('./views/AdminDashboard.vue'),
    meta: { requiresAuth: true, allowedRoles: ['admin'] }
  },
  {
    path: '/exams',
    name: 'Exams',
    component: () => import('./views/ExamsView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/library',
    name: 'Library',
    component: () => import('./views/LibraryView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import('./views/UsersView.vue'),
    meta: { requiresAuth: true, allowedRoles: ['admin'] }
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('./views/SettingsView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/chat',
    name: 'Chat',
    component: () => import('./views/ChatView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/exam/:examType',
    name: 'Exam',
    component: () => import('./views/ExamView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/logout',
    component: () => import('./views/LogoutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// Navigation guards for role-based access
router.beforeEach((to, from, next) => {
  const { isAuthenticated } = checkAuth()
  
  // Public routes that don't require auth
  const publicRoutes = ['/login', '/register']
  
  if (!isAuthenticated) {
    if (publicRoutes.includes(to.name || to.path)) {
      next()
    } else {
      next('/login')
    }
    return
  }
  
  // Check role requirements
  const meta = to.meta || {}
  
  if (meta.requiresAuth) {
    const allowedRoles = meta.allowedRoles || ['user', 'owner', 'admin']
    
    if (!allowedRoles.includes(role)) {
      // Redirect based on role
      if (role === 'admin') {
        next('/admin')
      } else if (role === 'owner') {
        next('/owner')
      } else {
        next('/user')
      }
      return
    }
  }
  
  // Update role display
  const roleDisplay = document.getElementById('role-display')
  if (roleDisplay) {
    roleDisplay.textContent = `Role: ${role || 'user'}`
  }
  
  next()
})

export default router