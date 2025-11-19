const teamData = [
  {
    id: "arash",
    name: "Arash",
    initial: "A",
    photo: "../images/team/arash.jpg",
    role: "Front End Developer & Scrum Master",
    bio: "Passionate about creating interactive web experiences and wildlife conservation.",
    email: "safari.arash@gmail.com",
    github: "https://github.com/ArashSafarighouzhdi",
    linkedin: "https://www.linkedin.com/in/safariarash/",
    responsibilities: [
      "Led the overall project",
      "Set up GitHub repo and connect to Vercel",
      "Managed the Scrum board and sprint tracking",
      "Developed the About Us page with interactive team member profiles",
      "Coordinated sprint planning and retrospectives",
    ],
    contributions:
      "Arash led the project management and Scrum activities, organized the team workflow, and developed interactive About Us pages, ensuring smooth collaboration and consistent, dynamic content across the site.",
  },
  {
    id: "chaitali",
    name: "Chaitali",
    initial: "C",
    photo: "../images/team/chaitali.jpg",
    role: "FullStack Developer",
    bio: "Passionate Full-Stack Engineer skilled in Django, React, and Next.js, building secure and scalable web applications.",
    email: "",
    github: "https://github.com/Chaitali786",
    linkedin: "https://www.linkedin.com/in/chaitalideore786/",
    responsibilities: [
      "Plan responsive layout structure (desktop, tablet, mobile)",
      "Define component structure and folder organization",
      " Design and implement the Home Page layout and logic.",
    ],
    contributions:
      "Chaitali developed the Home Page with a responsive layout, implemented both front-end and back-end functionality, and applied her design skills to make the interface visually appealing and user-friendly.",
  },
  {
    id: "smita",
    name: "Smita",
    initial: "S",
    photo: "../images/team/smita.jpg",
    role: "Front End Developer",
    bio: "Dedicated to accuracy and educational value in every detail.",
    email: "",
    github: "https://github.com/smitaisverige",
    linkedin: "",
    responsibilities: [
      " Design and implement the Reptiles Page layout and logic.",
      "Researched and compiled information about Australian animals",
      "Created the data structure for animal information",
      "Reviewing similar zoo site designs for design collaboration",
    ],
    contributions:
      "Smita implemented the Reptiles Page with accurate data, well-structured content, and ensured that the information was educational and engaging for users.",
  },
  {
    id: "raana",
    name: "Raana",
    initial: "R",
    photo: "../images/team/raana.jpg",
    role: "ّFront End Developer",
    bio: "Dedicated computer engineer with 7 years of experience delivering high-quality, client-focused software solutions.",
    email: "raanabarimani1994@yahoo.com",
    github: "https://github.com/RaanaBrm",
    linkedin: "https://www.linkedin.com/in/raana-barimani-a0b8a8323/",
    responsibilities: ["Developed the Mammals category page"],
    contributions:
      "Raana developed the Mammals category page with clean and maintainable code, implemented robust error handling, and ensured smooth performance across all devices.",
  },
  {
    id: "sandra",
    name: "Sandra",
    initial: "S",
    photo: "../images/team/sandra.jpg",
    role: "Frontend Developer & Figma Designer",
    bio: "Keeping the team organized and code running smoothly.",
    email: "aleksandra@ristovska.com",
    github: "https://github.com/ristoAle",
    linkedin: "",
    responsibilities: [
      "Define and finalize overall website design & color scheme.",
      "Developed the Brids category page",
      "Implemented interactive features",
      "Designed intuitive and responsive UI/UX layouts using Figma.",
    ],
    contributions:
      "Sandra designed the overall website interface and the Birds category page, created responsive and intuitive Figma layouts, and converted them into functional front-end components while supporting team coordination.",
  },
];

const teamList = document.getElementById("teamList");
const defaultMessage = document.getElementById("defaultMessage");
const memberProfile = document.getElementById("memberProfile");
let activeMember = null;

document.addEventListener("DOMContentLoaded", function () {
  init();
});

function init() {
  renderTeamList();
  setupEventListeners();
}

function renderTeamList() {
  teamList.innerHTML = "";

  teamData.forEach((member) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = member.name;
    a.href = "#";
    a.setAttribute("data-id", member.id);

    li.appendChild(a);
    teamList.appendChild(li);
  });
}

function setupEventListeners() {
  const teamLinks = teamList.querySelectorAll("a");

  teamLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const memberId = this.getAttribute("data-id");
      handleMemberClick(memberId, this);
    });
  });
}

function handleMemberClick(memberId, clickedLink) {
  // If clicking the same member, deactivate
  if (activeMember === memberId) {
    deactivateAll();
    return;
  }

  activateMember(memberId, clickedLink);
}

function activateMember(memberId, clickedLink) {
  const allLinks = teamList.querySelectorAll("a");
  allLinks.forEach((link) => link.classList.remove("active"));

  const member = teamData.find((m) => m.id === memberId);

  if (member) {
    clickedLink.classList.add("active");

    defaultMessage.style.display = "none";

    renderMemberProfile(member);
    memberProfile.style.display = "block";
    memberProfile.classList.add("show");

    activeMember = memberId;
  }
}

function deactivateAll() {
  const allLinks = teamList.querySelectorAll("a");
  allLinks.forEach((link) => link.classList.remove("active"));

  defaultMessage.style.display = "block";
  memberProfile.style.display = "none";
  memberProfile.classList.remove("show");
  memberProfile.innerHTML = "";

  activeMember = null;
}

function renderMemberProfile(member) {
  const contactLinks = generateContactLinks(member);

  memberProfile.innerHTML = `
    <div class="member-header">
      <div class="member-image">
        ${
          member.photo
            ? `<img src="${member.photo}" alt="${member.name}">`
            : member.initial
        }
      </div>
      <div class="member-info">
        <h2>${member.name}</h2>
        <span class="member-role">${member.role}</span>
        <p>${member.bio}</p>
        ${contactLinks}
      </div>
    </div>
    <div class="member-details">
      <h3>Role & Responsibilities</h3>
      <ul>
        ${member.responsibilities.map((resp) => `<li>${resp}</li>`).join("")}
      </ul>
      <h3>Contributions to the Project</h3>
      <p>${member.contributions}</p>
    </div>
  `;
}

function generateContactLinks(member) {
  let links = '<div class="contact-links">';

  if (member.email) {
    links += `
      <a href="mailto:${member.email}" class="contact-link" target="_blank" rel="noopener noreferrer">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
        Email
      </a>
    `;
  }

  if (member.github) {
    links += `
      <a href="${member.github}" class="contact-link" target="_blank" rel="noopener noreferrer">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        GitHub
      </a>
    `;
  }

  if (member.linkedin) {
    links += `
      <a href="${member.linkedin}" class="contact-link" target="_blank" rel="noopener noreferrer">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
        LinkedIn
      </a>
    `;
  }

  links += "</div>";
  return links;
}