// upcoming events
const eventData = [
    {
        title: "Tech Conference",
        date: "2023-06-17",
        time: "10:00 AM - 4:00 PM",
        location: "Online",
        description: "Join us for an exciting tech conference showcasing the latest innovations.",
        link: "#"
    },
    {
        title: "Assignment Submission",
        date: "2023-06-18",
        time: "12:00 AM - 8:00 PM",
        location: "Internshala",
        description: "Submit the assignments before the deadline.",
        link: "#"
    },
    {
        title: "Networking Mixer",
        date: "2023-06-25",
        time: "6:00 PM - 8:00 PM",
        location: "The Hub",
        description: "Connect with professionals in a relaxed and friendly networking event.",
        link: "#"
    },
];

//news data
const newsData = [
    {
        title: "New Product Launch",
        description: "We are excited to announce the launch of our new product!",
        link: "#"
    },
    {
        title: "Company Expansion",
        description: "We are expanding our operations to new locations.",
        link: "#"
    }
];




//Populating the events in the webpage
let populateEvents = () => {

    let events = document.getElementById("events");
    let html = '';

    eventData.forEach((e) => {
        html = `
                <div class ="eventcard">
                    <h3>${e.title}</h3>
                    <p>
                        <span >${e.date}</span>
                        <span >${e.time}</span>
                        <span >${e.location}</span>
                    </p>
                    <p>${e.description}</p>
                    <a href="${e.link}">More Details</a>
                </div>
        `
        events.innerHTML += html;
    })
}

//populating the News on the webpage
let populateNews = () => {
    let news = document.getElementById("news");
    let html = ''

    newsData.forEach((e) => {
        html = `
                <div class="newscard">
                <h3>${e.title}</h3>
                <p>${e.description}</p>
                <a href="${e.link}">Read More</a>
                </div>
                `
        news.innerHTML += html;
    })
}

populateNews()
populateEvents();

//events scroll
let eventContainer = document.querySelector('.events');

let scrollEvent = () => eventContainer.scrollLeft += eventContainer.offsetWidth;
setInterval(scrollEvent, 5000);