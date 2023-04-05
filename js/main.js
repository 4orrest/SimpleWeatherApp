document.querySelector('#getCurrentWeather').addEventListener('click', getFetch)


function getFetch(){
    const choice = document.querySelector('input').value
    const url = `https://api.weatherapi.com/v1/current.json?key=a3aeee0535f64e7d8e5223432230504 &q=${choice}&aqi=yes
    `
  
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
          // document.querySelector('h2')
          document.querySelector('h2').innerText = `${choice}`
          // document.querySelector('h3')
          document.querySelector('h3').innerText = data.current.temp_f
          document.querySelector('h4').innerText = data.current.condition.text
          const iconUrl = data.current.condition.icon
          const weatherIconElement = document.getElementById('weatherIcon')
          weatherIconElement.src = `https:${iconUrl}`
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
  }