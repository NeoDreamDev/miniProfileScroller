const data = [
  {
    name: "Salaam Tyrek",
    age: 27,
    gender: "Male",
    lookingFor: "female",
    location: "Brooklyn NY",
    image: "https://randomuser.me/api/portraits/men/16.jpg",
  },
  {
    name: "Jadege Joseph",
    age: 21,
    gender: "Female",
    lookingFor: "male",
    location: "Brooklyn NY",
    image: "https://randomuser.me/api/portraits/women/16.jpg",
  },
  {
    name: "Simone Williams",
    age: 56,
    gender: "Female",
    lookingFor: "male",
    location: "New York NY",
    image: "https://randomuser.me/api/portraits/women/15.jpg",
  },
  {
    name: "Morris Chestnut",
    age: 53,
    gender: "Male",
    lookingFor: "female",
    location: "New York NY",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
];

const profiles = profileIterator(data);

// CALL FIRST PROFILE
nextProfile();

// NEXT CLICK EVENT
document.getElementById("next").addEventListener("click", nextProfile);

// NEXT PROFILE DISPLAY
function nextProfile() {
  const currentProfile = profiles.next().value;
  if (currentProfile !== undefined) {
    document.getElementById("profileDisplay").innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
            <li class="list-group-item">Age: ${currentProfile.age}</li>
            <li class="list-group-item">Location: ${currentProfile.location}</li>
            <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingFor}</li>
        </ul>`;

    document.getElementById(
      "imageDisplay"
    ).innerHTML = `<img src="${currentProfile.image}">`;
  } else {
    // NO MORE PROFILES
    window.location.reload();
  }
}

// PROFILE ITERATOR
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}
