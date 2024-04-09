async function addUser(userData) {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
  
      if (!response.ok) {
        throw new Error('Failed to add user');
      }
  
      const responseData = await response.json();
      console.log('User added successfully:', responseData);
    } catch (error) {
      console.error('Error adding user:', error.message);
    }
  }
  
  // Example usage:
  const newUser = {
    name: 'John Doe',
    age: 30,
    email: 'johndoe@example.com',
    // additional keys if any
  };
  
  addUser(newUser);
  



async function fetchUserData() {
    try {
    //   const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const userData = await response.json();
      return userData;
    } catch (error) {
      throw new Error('Failed to fetch user data');
    }
  }
  
  async function getUserData() {
    try {
      const userData = await fetchUserData();
      console.log(`Name: ${userData.name}, Age: ${userData.age}, Email: ${userData.email}`);
    } catch (error) {
      console.error(error.message);
    }
  }
  
  async function getUserAge() {
    try {
      const userData = await fetchUserData();
      return userData.age;
    } catch (error) {
      throw new Error('Failed to get user age');
    }
  }
  
  async function getAgeAndLog() {
    try {
      const age = await getUserAge();
      console.log(`User's age is: ${age}`);
    } catch (error) {
      console.error(error.message);
    }
  }
  
  // Example usage:
  getUserData();
  getAgeAndLog();
  