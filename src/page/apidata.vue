<template>
    <div class="user-details p-4" overflow-x-auto>
      <div class="search-bar mb-4">
        <input type="text" placeholder="Search by username or email" v-model="searchTerm" class="p-2 border rounded border-gray-300 w-full">
      </div>
  
      <div class="table-container overflow-x-auto">
      <table class="table w-full border-collapse border">
        <thead>
          <tr>
            <th class="border p-2">ID</th>
            <th class="border p-2">Username</th>
            <th class="border p-2">Email</th>
            <th class="border p-2">Phone</th>
            <th class="border p-2">Creation Date</th>
            <th class="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in filteredUsers" :key="user.id">
            <td class="border p-2">{{ user.id }}</td>
            <td class="border p-2">{{ user.username }}</td>
            <td class="border p-2">{{ user.email }}</td>
            <td class="border p-2">{{ user.phone }}</td>
            <td class="border p-2">{{ user.createdAt }}</td>
            <td class="border p-2">
              <button @click="openReportPopup(user)" class="bg-blue-500 text-white px-4 py-2 rounded">Generate Report</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  
      <ReportPopup v-if="showReportPopup" :user="selectedUser" @close="closeReportPopup" />
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import ReportPopup from '../components/reportPopup/ReportPopup';
  
  export default {
    components: {
      ReportPopup,
    },
  
    data() {
      return {
        searchTerm: '',
        users: [],
        selectedUser: null,
        showReportPopup: false,
      };
    },
  
    mounted() {
      // Fetch users from the API when the component is mounted
      this.fetchUsers();
    },
  
    computed: {
      filteredUsers() {
        if (!this.searchTerm) {
          return this.users;
        }
  
        const searchTermLower = this.searchTerm.toLowerCase();
        return this.users.filter((user) => {
          return (
            user.username.toLowerCase().includes(searchTermLower) ||
            user.email.toLowerCase().includes(searchTermLower) ||
            user.phone.toString().includes(searchTermLower)
          );
        });
      },
    },
  
    methods: {
      fetchUsers() {
        // Make an API request to fetch users
        axios.get('https://jsonplaceholder.typicode.com/users')
          .then((response) => {
            this.users = response.data;
          })
          .catch((error) => {
            console.error('Error fetching users:', error);
          });
      },
  
      openReportPopup(user) {
        this.selectedUser = user;
        this.showReportPopup = true;
      },
  
      closeReportPopup() {
        this.selectedUser = null;
        this.showReportPopup = false;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any custom styles specific to this component */
  .table-container {
  max-height: 550px; /* Adjust the maximum height as needed */
  padding: 4px;
}
  </style>
  