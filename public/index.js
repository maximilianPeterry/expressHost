const button = document.getElementById('button')
const input = document.getElementById('input')
const message1 = document.getElementById("message1")
const message2 = document.getElementById("message2")

document.getElementById('button').addEventListener('click', () => {
    console.log('clicked')
    const location = input.value
    message1.textContent = 'Loading...'
    message2.textContent = ''

    fetch(`/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                message1.textContent = data.error
            } else {
                message1.textContent = data.location
                message2.textContent = data.forecast
            }
            for (let i = 0; i < message2.textContent; i++) {
                if (message2.textContent[i] === "sunny" || "clear") {
                    document.getElementById('weatherimg').src = "http://www.sclance.com/pngs/sun-png/sun_png_1330824.png"
                }
            }
        })
    })


})




// let playerName = document.getElementById('spInput').textContent