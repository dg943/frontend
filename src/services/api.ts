export default function login(email, password) : boolean {
    var url: string = "http://localhost:8080/login";
    var isLoggedIn: boolean = false
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'appliction/json'
        },
        body: JSON.stringify({
            username: email,
            password: password
        })
    }).then(response => response.json())
    .then((data) => {
        console.log(data)
        isLoggedIn = true
        console.log(data)
        console.log(isLoggedIn)
        localStorage.setItem("lastname", data.bearer);
    })
    .catch(error => console.log(error))
    return isLoggedIn
}