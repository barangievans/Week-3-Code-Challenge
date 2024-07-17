document.addEventListener('DOMContentLoaded', function() {
    const moviesData = [
        {
            title: "The Giant Gila Monster",
            description: "A giant lizard terrorizes a rural Texas community and a heroic teenager attempts to destroy the creature.",
            showtime: "04:00PM",
            runtime: "108 minutes",
            availableTickets: 3
        },
        {
            title: "Manos: The Hands Of Fate",
            description: "A family gets lost on the road and stumble upon a hidden, underground, devil-worshiping cult led by the fearsome Master and his servant Torgo.",
            showtime: "02:30PM",
            runtime: "74 minutes",
            availableTickets: 5
        },
        {
            title: "Time Chasers",
            description: "An inventor comes up with a time machine, but must prevent it from falling into the hands of an evil corporation.",
            showtime: "06:15PM",
            runtime: "89 minutes",
            availableTickets: 2
        },
        {
            title: "The Touch Of Satan",
            description: "A farmer's fiancée is possessed by a demonic witch.",
            showtime: "08:00PM",
            runtime: "90 minutes",
            availableTickets: 7
        },
        {
            title: "Santa Claus Conquers The Martians",
            description: "Santa Claus and his Martian friend battle Martians to save Christmas.",
            showtime: "11:00AM",
            runtime: "81 minutes",
            availableTickets: 10
        },
        {
            title: "Track Of The Moon Beast",
            description: "A mineralogist accidentally unleashes a lizard-like monster upon the population of a small town.",
            showtime: "03:45PM",
            runtime: "90 minutes",
            availableTickets: 4
        },
        {
            title: "The Skydivers",
            description: "Thrill-seeking skydivers encounter murderous smugglers on the ground.",
            showtime: "01:00PM",
            runtime: "75 minutes",
            availableTickets: 6
        },
        {
            title: "The Killer Shrews",
            description: "A group of people are trapped on a remote island by killer shrews.",
            showtime: "05:30PM",
            runtime: "69 minutes",
            availableTickets: 8
        },
        {
            title: "Project Moon Base",
            description: "A team of American astronauts are sent to the moon on a mission to explore what lies beneath its surface.",
            showtime: "09:30PM",
            runtime: "63 minutes",
            availableTickets: 3
        },
        {
            title: "The Giant Spider Invasion",
            description: "Giant spiders from another dimension invade Wisconsin and wreak havoc on the population.",
            showtime: "07:15PM",
            runtime: "84 minutes",
            availableTickets: 5
        },
        {
            title: "Catalina Caper",
            description: "A group of teenagers travels to an island and becomes involved in a musical adventure.",
            showtime: "10:30PM",
            runtime: "85 minutes",
            availableTickets: 2
        },
        {
            title: "Secret Agent Super Dragon",
            description: "A secret agent is sent to stop a drug lord with help from a beautiful secretary.",
            showtime: "12:30PM",
            runtime: "105 minutes",
            availableTickets: 3
        },
        {
            title: "Wild Rebels",
            description: "A stock car racer becomes involved with drug smugglers and a beautiful woman.",
            showtime: "06:45PM",
            runtime: "85 minutes",
            availableTickets: 6
        },
        {
            title: "Danger: Diabolik",
            description: "International thief Diabolik pulls heist after heist but European cops led by inspector Ginko and envious mobsters led by Ralph Valmont are closing-in on him.",
            showtime: "09:15PM",
            runtime: "105 minutes",
            availableTickets: 4
        },
        {
            title: "Village Of The Giants",
            description: "A group of spoiled teenagers from wealthy families are sent to a boot camp on a remote island by their frustrated parents to learn responsibility.",
            showtime: "02:00PM",
            runtime: "81 minutes",
            availableTickets: 7
        }
    ];

    const movieDetails = document.getElementById('movie-details');
    const availableTicketsDisplay = document.getElementById('available-tickets');
    const buyTicketButton = document.getElementById('buy-ticket');
    const movieSelect = document.getElementById('movie-select');
    const filmsList = document.getElementById('films');

    // Initial setup with the first movie
    updateMovieDetails(moviesData[0]);

    // Event listener for movie selection dropdown
    movieSelect.addEventListener('change', function() {
        const selectedMovieTitle = movieSelect.value;
        const selectedMovie = moviesData.find(movie => movie.title === selectedMovieTitle);
        updateMovieDetails(selectedMovie);
    });

    // Event listener for clicking on movie list items
    filmsList.addEventListener('click', function(event) {
        if (event.target.classList.contains('film')) {
            const selectedMovieTitle = event.target.dataset.title;
            const selectedMovie = moviesData.find(movie => movie.title === selectedMovieTitle);
            updateMovieDetails(selectedMovie);
        }
    });

    // Function to update movie details section
    function updateMovieDetails(movie) {
        movieDetails.innerHTML = `
            <h2>${movie.title}</h2>
            <img src="https://www.gstatic.com/tv/thumb/v22vodart/2157/p2157_v_v8_ab.jpg" alt="${movie.title} Poster">
            <p>Description: ${movie.description}</p>
            <p>Showtime: ${movie.showtime}</p>
            <p>Runtime: ${movie.runtime}</p>
            <p>Available Tickets: <span id="available-tickets">${movie.availableTickets}</span></p>
        `;
    }

    // Event listener for buying a ticket
    buyTicketButton.addEventListener('click', function() {
        const currentAvailableTickets = parseInt(availableTicketsDisplay.innerText);
        if (currentAvailableTickets > 0) {
            const updatedTickets = currentAvailableTickets - 1;
            availableTicketsDisplay.innerText = updatedTickets;
            alert('Ticket purchased successfully!');
        } else {
            alert('Sorry, no more tickets available for this movie.');
        }
    });
});
