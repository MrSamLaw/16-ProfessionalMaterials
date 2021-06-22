const repos = {
    1: {
        title: "ANZAC Bubble Travel App",
        description: "A dynamic, user friendly, and convenient travel and accomodation finder for Australians that are keen to visit our New Zealand neighbours!",
        tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery", "Moment JS", "APIs"],
        repo: "https://github.com/MrSamLaw/07-ANZAC-Bubble-Travel-App",
        URL: "https://mrsamlaw.github.io/07-ANZAC-Bubble-Travel-App/",
        screenshot: "./assets/images/ANZ-Travel-Bubble-Landing.png",
    },
    2: {
        title: "AutoMate",
        description: "A developing CRM for Automotive Workshops",
        tech: ["CSS", "JavaScript", "Bootstrap", "SQL", "Node.js", "Express", "Sequelize", "Handlebars", "DotEnv", "Heroku"],
        repo: "https://github.com/MrSamLaw/AutoMate",
        URL: "https://p2-automate.herokuapp.com/",
        screenshot: "./assets/images/AutoMate.png",
    },
    3: {
        title: "Talkin' Tech Tech Blog",
        description: "a CMS style Blog with the ability for multiple authors to write posts as well as comment on them.",
        tech: ["Node.js", "Express", "Express Sessions", "Sequelize", "Handlebars", "BCrypt", "DotEnv", "JAWSDB", "Bootstrap"],
        repo: "https://github.com/MrSamLaw/Tech-Blog",
        URL: "https://sl-tech-blog.herokuapp.com/",
        screenshot: "./assets/images/Tech-Blog.png",
    },
    4: {
        title: "Everyweather You Go! - Weather Dashboard",
        description: "A weather dashboard that uses API calls to determine the weather of a city",
        tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery", "Moment JS", "API"],
        repo: "https://github.com/MrSamLaw/06-WeatherDashboard",
        URL: "https://mrsamlaw.github.io/06-WeatherDashboard/",
        screenshot: "./assets/images/WeatherDashboard.png",
    },
    5: {
        title: "Harder Better Faster Stronger - Work Day Planner",
        description: "A way to efficiently manage your work time - an app to plan out your work day hour by hour",
        tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery", "Moment JS"],
        repo: "https://github.com/MrSamLaw/WorkDayPlanner",
        URL: "https://mrsamlaw.github.io/WorkDayPlanner/",
        screenshot: "./assets/images/DayPlanner.png",
    },
    6: {
        title: "E-Commerce Backend",
        description: "The back-end for an e-Commerce site",
        tech: ["Node.js", "Express", "DotEnv", "Sequelize", "SQL"],
        repo: "https://github.com/MrSamLaw/E-Commerce-Backend",
        URL: "#",
        screenshot: "./assets/images/eCommerce.png",
    },
    7: {
        title: "Note-Taker",
        description: "An express Note-Taker",
        tech: ["Node.js", "Express"],
        repo: "https://github.com/MrSamLaw/Note-Taker",
        URL: "https://desolate-reef-25794.herokuapp.com/",
        screenshot: "./assets/images/Note-Taker.png",
    },
    8: {
        title: "Password Generator",
        description: "An application that enables employees to generate random passwords based on criteria that they’ve selected",
        tech: ["HTML", "CSS", "JavaScript"],
        repo: "https://github.com/MrSamLaw/PWGenerator",
        URL: "https://mrsamlaw.github.io/PWGenerator/",
        screenshot: "./assets/images/PWGen.png",
    },
}

let printRepos = (repo) => {
    for (const key in repo) {
        let techString = repo[key].tech.join(" | ");
        var repoCard = document.createElement("div");
        repoCard.innerHTML = [
            `<div class="card card-primary text-center p-2">
                <img class="card-img-top"
                    src="${repo[key].screenshot}"
                    alt="Card image cap">
                <div class="card-block">
                    <h4 class="card-title">${repo[key].title}</h4>
                    <p class="card-text">${techString}</p>
                    <p class="card-text">${repo[key].description}</p>
                    <a href="${repo[key].repo}" target="_blank"
                        class="btn btn-primary">GitHub Repository</a> 
                    <a href="${repo[key].URL}" target="_blank"
                        class="btn btn-primary">Deployed Site</a>
                </div>
            </div>`
        ];
        repoCard.classList.add("col-md-4", "col-lg-6", "col-sm", "my-3");
        document.querySelector("#portfolioCards").appendChild(repoCard);
    }
}

printRepos(repos);
