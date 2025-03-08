function login(username, password) {
    // Dummy data for example purposes
    const userData = {
        username: 'user123',
        password: 'password123'
    };

    if (username === userData.username && password === userData.password) {
        console.log('Login successful!');
        // Redirect to dashboard or perform other actions
    } else {
        console.log('Invalid username or password.');
    }
}

// Example usage
login('user123', 'password123');