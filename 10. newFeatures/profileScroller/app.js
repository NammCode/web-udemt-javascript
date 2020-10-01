// create a data  
const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/portraits/women/68.jpg'
  },
  {
    name: 'Jen Smith',
    age: 26,
    gender: 'female',
    lookingfor: 'male',
    location: 'Miami FL',
    image: 'https://randomuser.me/portraits/women/32.jpg'
  },
  {
    name: 'William Johnson',
    age: 38,
    gender: 'male',
    lookingfor: 'female',
    location: 'Lynn MA',
    image: 'https://randomuser.me/portraits/women/12.jpg'
  }
];


const profilesIte = profileIterator(data);

nextProfile();

document.getElementById('next').addEventListener('click', nextProfile);

function nextProfile(){
  let profile = profilesIte.next().value;
  if (profile !== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
      <li class="list-group-item">Name: ${profile.name}</li>
      <li class="list-group-item">Age: ${profile.age}</li>
      <li class="list-group-item">Location: ${profile.location}</li>
      <li class="list-group-item">Preference: ${profile.gender} looking for ${profile.lookingfor}</li>
    </ul>`;

    document.getElementById('imageDisplay').innerHTML = `
    <img src="${profile.image}">`;
  } else {
    window.location.reload();
  }

}

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function(){
      return nextIndex < profiles.length ?
      { value: profiles[nextIndex++], done: false} :
      { done: true }
    }
  }
}
