const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

console.log(teamMembers);

// Elemento html di riferimento

/* 
<div class="col">
  <div class="member-photo">
    <img src="img/female1.png" alt="Laura Rossi photo">
  </div>
  <div class="member-info">
    <h3 class="name">Laura Rossi</h3>
    <div class="role">Front-end Developer</div>
    <a href="#">laurarossi@team.com</a>
  </div>
</div> */

const parentElement = document.querySelector('.row');

let memberElement = '';

for (let i = 0; i < teamMembers.length; i++) {

  const currentElement = teamMembers[i];
  console.log(currentElement);
  memberElement += createHTMLElement(currentElement);
}

console.log(memberElement);

parentElement.innerHTML = memberElement;

function createHTMLElement (obj) {

  return `<div class="col">
  <div class="member-photo">
    <img src="${obj.img}" alt="${obj.name}">
  </div>
  <div class="member-info">
    <h3 class="name">${obj.name}</h3>
    <div class="role">${obj.role}</div>
    <a href="#">${obj.email}</a>
  </div>
</div>`

}
