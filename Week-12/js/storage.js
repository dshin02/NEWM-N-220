const loginFormRef = document.querySelector('#login');
const usernameRef = document.querySelector('#username');
const passwordRef = document.querySelector('#password');

function loginUser(e) {
    e.preventDefault();

    const username = usernameRef.value;
    const password = passwordRef.value;

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const activeUsers = JSON.parse(localStorage.getItem('activeUsers') || '[]');

    let userFound = false;
    let correctPassword = false;

    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.username === username) {
            userFound = true;
            if (user.password === password) {
                correctPassword = true;
            }
        }
    }

    if (!userFound) {
        // Register new user
        users.push({ username: username, password: password });
        localStorage.setItem('users', JSON.stringify(users));
        activeUsers.push({ username: username });
        localStorage.setItem('activeUsers', JSON.stringify(activeUsers));
        alert('You are now registered');
    } else if (!correctPassword) {
        alert('Wrong password');
    } else {
        activeUsers.push({ username: username });
        localStorage.setItem('activeUsers', JSON.stringify(activeUsers));
        alert('Welcome back!');
    }

    console.log(userFound);
}

loginFormRef.onsubmit = loginUser;
