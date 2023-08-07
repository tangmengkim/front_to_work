<template>
  <div class="flex justify-center items-center min-h-screen bg-indigo-100 ">
    <div class="bg-white p-8 shadow-lg rounded-[12%] ">
      <h2 class="text-2xl font-bold mb-4 ">Login</h2>
      <form @submit.prevent="submitForm">
        <div class="mb-4 ">
          <label for="email" class="block text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            class="mt-1 block w-full shadow-sm h-7 p-2  border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="mt-1 block w-full shadow-sm h-7 p-2 text-lg border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div class="flex items-center justify-between">
          <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-purple-700 ">Sign in</button>
          <a href="#" class="text-gray-600 hover:underline">Forgot Password?</a>
        </div>
      </form>
    </div>
  </div>

</template>
<script setup>
</script>