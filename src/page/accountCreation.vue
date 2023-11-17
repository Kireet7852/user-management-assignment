<template>
    <div class="account-creation p-4">
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" class="w-full p-2 border rounded border-gray-300" required />
        </div>
  
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" class="w-full p-2 border rounded border-gray-300" required />
        </div>
  
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" class="w-full p-2 border rounded border-gray-300" required />
        </div>
  
        <div class="form-group">
          <label for="phone">Phone:</label>
          <input type="text" id="phone" v-model="phone" class="w-full p-2 border rounded border-gray-300" required />
        </div>
  
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Create Account</button>
      </form>
  
      <div v-if="showPopup" class="popup bg-white border rounded p-4 shadow-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div class="popup-content text-center">
          <h2 class="text-lg font-semibold mb-4">Dummy Account Created</h2>
          <p><strong>Name:</strong> {{ createdName }}</p>
          <p><strong>Email:</strong> {{ createdEmail }}</p>
          <p><strong>Phone:</strong> {{ createdPhone }}</p>
          <p><strong>Creation Date:</strong> {{ creationDate }}</p>
          <button @click="closePopup" class="bg-blue-500 text-white px-4 py-2 rounded mt-4">Close</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: "",
        password: "",
        email: "",
        phone: "",
        showPopup: false,
        createdName: "",
        createdEmail: "",
        createdPhone: "",
        creationDate: "",
      };
    },
  
    methods: {
      submitForm() {
        // Check if all fields are filled
        if (!this.username || !this.password || !this.email || !this.phone) {
          alert("All fields are required");
          return;
        }
  
        // Implement dummy request handling here
        console.log("Account created:", this.username);
  
        // Set dummy created account details
        this.createdName = this.username;
        this.createdEmail = this.email;
        this.createdPhone = this.phone;
        this.creationDate = new Date().toLocaleString(); // Add creation date
  
        // Save data to localStorage
        const userData = {
          username: this.createdName,
          email: this.createdEmail,
          phone: this.createdPhone,
          creationDate: this.creationDate,
        };
        localStorage.setItem("userData", JSON.stringify(userData));
        
        console.log(userData)
        // Display the popup
        this.showPopup = true;
      },
  
      closePopup() {
        // Close the popup
        this.showPopup = false;
  
        // Clear input fields
        this.username = "";
        this.password = "";
        this.email = "";
        this.phone = "";
      },
    },
  };
  </script>
  
  <style scoped>
  /* You can keep the scoped styles for any additional custom styling */
  </style>
  