// This script will create new elements, one of which includes the Video embed required for the project, and the other elements which fulfill the image requirement.

let sources = {
    ["Top Obbies List"]: {
        ["link"]: "https://docs.google.com/spreadsheets/d/1F5v4nUAJratuP_358MIXofZPbDmMWKBL7XbWHLhJyTM/edit?gid=0#gid=0",
        ["image"]: "Images/Top Obbies List.png"
    },
    ["Top Jumps List"]: {
        ["link"]: "https://docs.google.com/spreadsheets/d/1zFmGHimWQTWaulNOiTPrPKouekZ71QKJ5z2m2kTzQWc/edit?gid=0#gid=0",
        ["image"]: "Images/Top Jumps List.png"
    },
  ["Eternal Towers of Hell"]: {
    ["link"]: "https://www.roblox.com/games/8562822414/Eternal-Towers-of-Hell",
    ["description"]: "The best place for beginner Obbyists to improve consistency!",
    ["image"]: "Images/EToH.png"
  },
  ["Right Side Gameplay Guide"]: { // I might change the implementation of videos in the future
    ["link"]: "https://www.youtube.com/watch?v=3eR06PTuwcw",
    ["video"]: `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/3eR06PTuwcw?si=_tqzRj8dPBb1kEQG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    ["image"]: "Images/Right Side.png"
  },
  ["R6 Raycasts"]: {
    ["link"]: "https://docs.google.com/document/d/1T5yEkuLfyJRw91uydqWzarZCjlCNBpy6TxL0S3Dgalg/edit?tab=t.0#heading=h.lg5abrh5bx6t",

    ["image"]: "Images/R6casts.png"
  },
  ["Top Wallhopping Website"]: {
    ["link"]: "https://pcoelw.github.io/ttwl/index.html#pc",
    ["description"]: "This website includes the Top Wallhop List with a leaderboard and progression packs.",
    ["image"]: "Images/topWallhops.png"
  },
};

sourceDiv = document.getElementById("sources");
function summonSource(source) {
    data = sources[source];
    console.log(data);

    var newSource = document.createElement("details");
    newSource.classList.add("source");

    title = document.createElement("summary");
    title.textContent = source;
    title.classList.add("sourceTitle");
    newSource.appendChild(title);
    
    area = document.createElement("div");
    area.classList.add("sourceArea");
    newSource.appendChild(area);

    if ("image" in data) {
        newSource.style.backgroundImage = "url('" + data["image"] + "')";

    //    image = document.createElement("img");
    //    image.src = data["image"];
    //     image.classList.add("sourceImg");
    //    newSource.appendChild(image);
    }

    
    if ("description" in data) {
        description = document.createElement("p");
        description.textContent = data["description"];
        description.classList.add("sourceDesc");
        area.appendChild(description);
    }

    if ("video" in data) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data["video"], 'text/html');
        const video = doc.body.firstChild;
        area.appendChild(video);

    }

    link = document.createElement("a");
    link.textContent = "Open source";
    link.href = data["link"];
    link.target = "_blank"
    link.classList.add("sourceLink");
    area.appendChild(link);

    
    br = document.createElement("br");
    br.fontSize = "10%";
    newSource.appendChild(br);
    
    sourceDiv.appendChild(newSource);
}

searchBar = document.getElementById("search");
function search() {
    searchTerm = searchBar.value.toLowerCase();
    console.log(searchTerm);
    clearAll(sourceDiv);
    for (const [title, data] of Object.entries(sources)) {
        if (title.toLowerCase().includes(searchTerm)) {
            summonSource(title);

        }
    }
}

function clearAll(element) {
    while(element.firstChild) element.removeChild(element.lastChild);
}

for (const [title, data] of Object.entries(sources)) {
    summonSource(title);
}