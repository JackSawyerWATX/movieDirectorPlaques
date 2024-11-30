const directorCards = document.getElementById("director-cards");
const directorsDropdownList = document.getElementById("directors");
const directorCount = document.getElementById("director-count");

const famousDirectors = [
    {
        name: "Alfred Hitchcock",
        birthPlace: "Leytonstone, England",
        directedMovies: 53,
        famousMovie: "Psycho",
        wonOscar: false,
    },
    {
        name: "Steven Spielberg",
        birthPlace: "Cincinnati, Ohio, USA",
        directedMovies: 35,
        famousMovie: "Schindler's List",
        wonOscar: true,
    },
    {
        name: "Martin Scorsese",
        birthPlace: "New York City, USA",
        directedMovies: 26,
        famousMovie: "Goodfellas",
        wonOscar: true,
    },
    {
        name: "Quentin Tarantino",
        birthPlace: "Knoxville, Tennessee, USA",
        directedMovies: 10,
        famousMovie: "Pulp Fiction",
        wonOscar: false,
    },
    {
        name: "Stanley Kubrick",
        birthPlace: "New York City, USA",
        directedMovies: 13,
        famousMovie: "2001: A Space Odyssey",
        wonOscar: false,
    },
    {
        name: "Akira Kurosawa",
        birthPlace: "Tokyo, Japan",
        directedMovies: 30,
        famousMovie: "Seven Samurai",
        wonOscar: true,
    },
    {
        name: "James Cameron",
        birthPlace: "Kapuskasing, Canada",
        directedMovies: 9,
        famousMovie: "Titanic",
        wonOscar: true,
    },
    {
        name: "Christopher Nolan",
        birthPlace: "London, England",
        directedMovies: 12,
        famousMovie: "Inception",
        wonOscar: false,
    },
    {
        name: "Francis Ford Coppola",
        birthPlace: "Detroit, Michigan, USA",
        directedMovies: 22,
        famousMovie: "The Godfather",
        wonOscar: true,
    },
    {
        name: "Ridley Scott",
        birthPlace: "South Shields, England",
        directedMovies: 28,
        famousMovie: "Blade Runner",
        wonOscar: false,
    },
    {
        name: "Hayao Miyazaki",
        birthPlace: "Tokyo, Japan",
        directedMovies: 11,
        famousMovie: "Spirited Away",
        wonOscar: true,
    },
    {
        name: "Kathryn Bigelow",
        birthPlace: "San Carlos, California, USA",
        directedMovies: 9,
        famousMovie: "The Hurt Locker",
        wonOscar: true,
    },
    {
        name: "Peter Jackson",
        birthPlace: "Pukerua Bay, New Zealand",
        directedMovies: 14,
        famousMovie: "The Lord of the Rings",
        wonOscar: true,
    },
    {
        name: "Tim Burton",
        birthPlace: "Burbank, California, USA",
        directedMovies: 19,
        famousMovie: "Edward Scissorhands",
        wonOscar: false,
    },
    {
        name: "Wes Anderson",
        birthPlace: "Houston, Texas, USA",
        directedMovies: 11,
        famousMovie: "The Grand Budapest Hotel",
        wonOscar: false,
    },
    {
        name: "Guillermo del Toro",
        birthPlace: "Guadalajara, Mexico",
        directedMovies: 12,
        famousMovie: "Pan's Labyrinth",
        wonOscar: true,
    },
    {
        name: "Ingmar Bergman",
        birthPlace: "Uppsala, Sweden",
        directedMovies: 60,
        famousMovie: "The Seventh Seal",
        wonOscar: false,
    },
    {
        name: "Orson Welles",
        birthPlace: "Kenosha, Wisconsin, USA",
        directedMovies: 12,
        famousMovie: "Citizen Kane",
        wonOscar: false,
    },
    {
        name: "Spike Lee",
        birthPlace: "Atlanta, Georgia, USA",
        directedMovies: 25,
        famousMovie: "Do the Right Thing",
        wonOscar: false,
    },
    {
        name: "David Fincher",
        birthPlace: "Denver, Colorado, USA",
        directedMovies: 11,
        famousMovie: "Fight Club",
        wonOscar: false,
    },
    {
        name: "Greta Gerwig",
        birthPlace: "Sacramento, California, USA",
        directedMovies: 4,
        famousMovie: "Lady Bird",
        wonOscar: false,
    },
];

directorCount.textContent = famousDirectors.length;

const setDirectorCards = (arr = famousDirectors) => {
    // Update the number of directors displayed
    directorCount.textContent = arr.length;

    // Generate and display director cards
    directorCards.innerHTML = arr
        .map(
            ({ name, birthPlace, directedMovies, famousMovie, wonOscar }) => `
        <div class="player-card">
            <h2>${name}</h2>
            <p>Birth Place: ${birthPlace}</p>
            <p>Movies Directed: ${directedMovies}</p>
            <p>Most Famous Movie: ${famousMovie}</p>
            <p>Won Oscar: ${wonOscar ? "Yes" : "No"}</p>
        </div>
        `
        )
        .join("");
};

// Handle dropdown changes with a switch statement
directorsDropdownList.addEventListener("change", (e) => {
    const filterValue = e.target.value;

    switch (filterValue) {
        case "oscar":
            setDirectorCards(famousDirectors.filter((director) => director.wonOscar));
            break;
        case "no-oscar":
            setDirectorCards(famousDirectors.filter((director) => !director.wonOscar));
            break;
        case "all":
        default:
            setDirectorCards();
            break;
    }
});
