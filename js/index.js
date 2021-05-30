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


const products = `
[
    {
       "id":"1",
       "type": "Cruiser",
       "price1": "5",
       "price2": "25",
       "price3": "135",
       "price4": "650"
    },
    
    {
       "id":"2",
       "type":"Geared",
       "price1": "7",
       "price2": "30",
       "price3": "170",
       "price4": "790"
    },

    {
       "id":"3",
       "type":"E-bicycle",
       "price1": "15",
       "price2": "65",
       "price3": "275",
       "price4": "990"
    },

    {
       "id":"4",
       "type": "Tandem",
       "price1": "8",
       "price2": "40",
       "price3": "220",
       "price4": "875"
    },

    {
       "id":"5",
       "type":"Under 20",
       "price1": "10",
       "price2": "50",
       "price3": "245",
       "price4": "900"
    }
 ]`;


function renderProducts (products) {
    const productContainer = document.querySelector('.product-list');
    
    

    for (const product of products) {
        productContainer.innerHTML +=
                ` <tr class="top product">
                        <td>${product.type}</td>
                        <td>${product.price1}</td>
                        <td>${product.price2}</td>
                        <td>${product.price3}</td>
                        <td>${product.price4}</td>
                </tr>`;
    }
    convertCurrency();
}


renderProducts(JSON.parse(products));