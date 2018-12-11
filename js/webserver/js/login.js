function validate() {
    $('#loginForm').click(function () {
        $.post('/api/login', { username: username.value, password: password.value }, function (data) {
            console.log("data received: " + username.value + password.value + ", code " + JSON.stringify(data));
            console.log(data.code + " credit: " + data.credit);
            if (data.code == 200) {
                localStorage.setItem("username", username.value);
                localStorage.setItem("credit", data.credit);
                window.location.href = '/blackjack';
                //$.post('/blackjack', { username: username.value, credit: credit});
            
            }
        });
    })
}

function register() {
    $('#loginForm').click(function () {
        $.post('/api/register', { username: username.value, password: password.value }, function (data) {
            console.log("data received: " + username.value + password.value + ", code " + JSON.stringify(data));
            console.log(data.code + " credit: " + data.credit);
            if (data.code == 200) {
                window.location.href = '/';
                //$.post('/blackjack', { username: username.value, credit: credit});
            
            }
        });
    })
}