const storage = new Storage();
const localCity = storage.getLocal();
const weather = new Weather(localCity.city, localCity.state);
const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
  weather.get()
    .then(weather => {
      ui.plaint(weather);
    });
})

document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;
  weather.changeLocation(city, state);
  weather.get()
    .then(weather => {
      ui.plaint(weather);
    })
  
  storage.setLocal(city, state);

  // Close modal
  $('#locModal').modal('hide');
  e.preventDefault();
})