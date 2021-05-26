const teamMembers = `
[
    {
        "id": "1",
        "image": "img/andrew_shimmer.webp",
        "name": "Andrew Shimmer",
        "job": "Repairs Magician",
        "quote": "With a profound knowledge of bicycle mechanics and a passion for all things outdoors, Andrew was a perfect fit to join Funny Bikes as a professional bike repair technician"
    },

    {
        "id": "2",
        "image": "img/ann_maisner.webp",
        "name": "Ann Maisner",
        "job": "President and Founder",
        "quote": "Ann is the president and founder of Funny Bikes with over 10 years of expertise in the bicycle business. She is a huge fan of hiking, biking, and skiing."
    },

    {
        "id": "3",
        "image": "img/helen_stone.webp",
        "name": "Helen Stone",
        "job": "Tour Guide",
        "quote": "Helen has years of experience of bicycle tour guiding. Her passion for biking and exploring new places brought her to Funny Bikes. She is our professional tour guide."
    }
]`;

function renderTeam (teamMembers) {
    const teamContainer = document.querySelector(".ourTeam");
    
    teamContainer.innerHTML = '';

    for (const member of teamMembers) {
        teamContainer.innerHTML +=
                ` <article class="person">
                    <img class="person-photo" src="${member.image}" alt="${member.name}">
                    <h3 class="person-name">${member.name}</h3>
                    <h4 class="job-title">${member.job}</h4>
                    <p>${member.quote}</p>
                </article>`;
    }
}


renderTeam(JSON.parse(teamMembers));