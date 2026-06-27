// Create a multi-line HTML template using template literals and insert it into the DOM.

const user = {
  name: 'Bibek',
  role: 'Frontend Developer',
  skills: ['HTML', 'CSS', 'JavaScript'],
  email: 'bibek@example.com',
};

const template = `

<div class = "profile-card">
<h2>${user.name} </h2>
<p><strong>Role:</strong> ${user.role} </p>

<h3>Skills </h3>
<ul>

${user.skills.map((skill) => `<li>${skill}</li>`).join('')}
</ul>

<p>
<a herf = "mailto:${user.email}">Contact Me </a>
</p>
</div>

`;

document.getElementById('app').innerHTML = template;
