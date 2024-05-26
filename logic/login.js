function login(page) {
    let password = document.getElementById('password').value;
    let username = document.getElementById('username').value;
    if(password == 'tck123' && username == 'admin')
        window.location.href = page;
    else {
        document.getElementById('incorrectLogin').style.display = 'block';
    }
}