// Validation methods that send data to the database and handle the answer

function validate() {
    $('#loginForm').click(function () {
        $.post('/api/login', { username: username.value, password: password.value }, function (data) {
            console.log("data received: " + username.value + password.value + ", code " + JSON.stringify(data));
            console.log(data.code + " credit: " + data.credit);
            if (data.code == 200) {
                localStorage.setItem("username", username.value);
                localStorage.setItem("credit", data.credit);
                window.location.href = '/blackjack';
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
            }
        });
    })
}


function refill(extracredit) {
    console.log(extracredit);
    var newcredit = parseInt(extracredit) + parseInt(localStorage.getItem("credit"));
    console.log(newcredit);
    $('#loginForm').click(function () {
        $.post('/api/refill', { credit: newcredit, username: localStorage.getItem("username") }, function (data) {
            console.log("data received: code " + JSON.stringify(data));
            if (data.code == 200) {
                console.log('success!');
                localStorage.setItem("credit", data.credit);
                window.location.href = '/blackjack';
            }
        });
    })
}