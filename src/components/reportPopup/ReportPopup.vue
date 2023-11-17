<template>
    <div class="report-popup fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-opacity-80 shadow-lg rounded-lg overflow-hidden bg-gray-200">
      <div class="header flex justify-between items-center px-4 py-2 bg-gray-300">
        <h2 class="text-xl font-bold">Generate Report for {{ user.username }}</h2>
        <button @click="close" class="text-gray-700 hover:text-red-500 focus:outline-none">
          <span class="text-2xl">X</span>
        </button>
      </div>
  
      <div class="content p-4">
        <p>User Information:</p>
        <ul>
           <li><strong>ID:</strong> {{ user.id }}</li>
          <li><strong>Username:</strong> {{ user.username }}</li>
          <li><strong>Email:</strong> {{ user.email }}</li>
          <li><strong>Phone:</strong> {{ user.phone }}</li>
          <li><strong>Creation Date:</strong> {{ user.createdAt }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      user: Object,
    },
  
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any custom styles specific to this component */
  </style>
  