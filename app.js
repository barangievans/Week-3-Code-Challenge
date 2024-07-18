// Fetch all films from json-server
fetch('http://localhost:3000/films')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse JSON response
  })
  .then(films => {
    // Here 'films' is an array containing the films data
    console.log(films);

    // Example: Displaying film titles in the console
    films.forEach(film => {
      console.log(film.title);
    });

    // Example: Rendering films in a web page
    renderFilms(films); // Assuming 'renderFilms' is a function you define
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
  document.addEventListener('DOMContentLoaded', function() {
    const movieSelect = document.getElementById('movie-select');
    const movieTitleElem = document.getElementById('movie-title');
    const moviePosterElem = document.getElementById('movie-poster');
    const movieDescriptionElem = document.getElementById('movie-description');
    const movieShowtimeElem = document.getElementById('movie-showtime');
    const movieRuntimeElem = document.getElementById('movie-runtime');
    const availableTicketsElem = document.getElementById('available-tickets');
    const viewMovieBtn = document.getElementById('view-movie-btn');
    const buyTicketBtn = document.getElementById('buy-ticket-btn');

    // Example data (you can replace this with your actual data handling)
    const movieData = {
        "The Giant Gila Monster": {
            poster: "https://www.gstatic.com/tv/thumb/v22vodart/2157/p2157_v_v8_ab.jpg",
            description: "A giant lizard terrorizes a rural Texas community and a heroic teenager attempts to destroy the creature.",
            showtime: "04:00PM",
            runtime: "108",
            tickets: 3
        },
        "Manos: The Hands Of Fate": {
            poster: "https://www.gstatic.com/tv/thumb/v22vodart/47781/p47781_v_v8_ac.jpg",
            description: "A family gets lost on the road and stumbles upon a hidden, underground, devil-worshiping cult led by the fearsome Master and his servant Torgo.",
            showtime: "06:45PM",
            runtime: "118",
            tickets: 5
        },
        "Time Chasers": {
            poster: "https://www.gstatic.com/tv/thumb/v22vodart/23342/p23342_v_v8_ab.jpg",
            description: "An inventor comes up with a time machine, but must prevent its abuse at the hands of an evil C.E.O.",
            showtime: "09:30PM",
            runtime: "93",
            tickets: 7
        },
        "The Touch Of Satan": {
            poster: "https://www.gstatic.com/tv/thumb/v22vodart/43468/p43468_v_v8_aa.jpg",
            description: "A young man meets a farm girl who is actually a witch.",
            showtime: "09:00PM",
            runtime: "101",
            tickets: 4
        },
        "Santa Claus Conquers The Martians": {
            poster: "https://www.gstatic.com/tv/thumb/v22vodart/4232/p4232_v_v8_aa.jpg",
            description: "The Martians kidnap Santa Claus because there is nobody on Mars to give their children presents.",
            showtime: "03:30PM",
            runtime: "96",
            tickets: 5
        },
        "Track Of The Moon Beast": {
            poster: "https://www.gstatic.com/tv/thumb/v22vodart/39804/p39804_v_v8_ab.jpg",
            description: "A young man is transformed into a hideous 'moon beast' due to a meteor fragment lodged in his body.",
            showtime: "10:30PM",
            runtime: "90",
            tickets: 2
        },
        "The Skydivers": {
            poster: "https://www.gstatic.com/tv/thumb/v22vodart/23039/p23039_v_v8_ab.jpg",
            description: "The lives and romantic entanglements of a group of young adults who have achieved the status of rock music 'stars' but who have peaked in their careers.",
            showtime: "07:45PM",
            runtime: "92",
            tickets: 8
        },
        "The Killer Shrews": {
            poster: "https://www.gstatic.com/tv/thumb/v22vodart/90413/p90413_v_v8_ab.jpg",
            description: "On an isolated island, a small group of people are terrorized by giant voracious shrews in the midst of a hurricane.",
            showtime: "08:15PM",
            runtime: "91",
            tickets: 3
        },
        "Project Moon Base": {
            poster: "https://www.gstatic.com/tv/thumb/v22vodart/93492/p93492_v_v8_aa.jpg",
            description: "A newspaper reporter and a bunch of scientists fly a rocket to the moon to prove that the moon is not made of cheese. The rocket becomes enveloed in a green 'cheese' cloud and crash-lands back on Earth. The end.",
            showtime: "01:00PM",
            runtime: "81",
            tickets: 1
        },
        "The Giant Spider Invasion": {
            poster: "https://www.gstatic.com/tv/thumb/v22vodart/31041/p31041_v_v8_ab.jpg",
            description: "A black hole hits the small town of Dellwood, Wisconsin, opening a door to other dimensions. Giant spiders emerge from it. Soon the town is taken over by the spiders and they kill and eat many of the residents.",
            showtime: "06:00PM",
            runtime: "95",
            tickets: 0
        },
        "Catalina Caper": {
            poster: "https://www.gstatic.com/tv/thumb/v22vodart/14668/p14668_v_v8_aa.jpg",
            description: "A group of teenagers are on an island for a party, but one of the girls ends up missing. She did not drown or swim away, so is she kidnapped or is there a more sinister reason for her disappearance?",
            showtime: "11:30PM",
            runtime: "82",
            tickets: 4
        },
        "Secret Agent Super Dragon": {
            poster: "https://www.gstatic.com/tv/thumb/v22vodart/24161/p24161_v_v8_ab.jpg",
            description: "A secret agent is sent to the Middle East to destroy a gang of assassins.",
            showtime: "10:00PM",
            runtime: "93",
            tickets: 6
        },
        "Wild Rebels": {
            poster: "https://www.gstatic.com/tv/thumb/v22vodart/33526/p33526_v_v8_ab.jpg",
            description: "A stock car racer gets involved with gangsters trying to fix a race.",
            showtime: "02:15PM",
            runtime: "90",
            tickets: 2
        },
        "Danger: Diabolik": {
            poster: "https://www.gstatic.com/tv/thumb/v22vodart/5635/p5635_v_v8_aa.jpg",
            description: "The mysterious criminal mastermind known as 'Diabolik' is an arch-criminal whose life is dedicated to crime and plunder. He steals everything from a chocolate factory to billions of dollars of gold to tanks and helicopters, and they can never catch him, as he is always one step ahead of them. He lives in an underground castle and only has one person to call his 'friend', his girlfriend, Eva. One day, Diabolik and Eva decide to take things one step further, and rob the government itself. The government has no choice but to call in the help of the super-spy, Inspector Ginko. Will Ginko be able to put a stop to the thieving and bring Diabolik to justice?",
            showtime: "05:00PM",
            runtime: "100",
            tickets: 9
        },
        "Village Of The Giants": {
            poster: "https://www.gstatic.com/tv/thumb/v22vodart/5030/p5030_v_v8_aa.jpg",
            description: "When a group of teenagers stumble upon a secret lab, they become part of a deadly experiment - the teens must find a way out before they become prey to the monsters that lurk within the lab's walls.",
            showtime: "12:00PM",
            runtime: "91",
            tickets: 1
        }
    };

    // Function to update movie details based on selection
    function updateMovieDetails(movieTitle) {
        const movie = movieData[movieTitle];
        if (movie) {
            movieTitleElem.textContent = movieTitle;
            moviePosterElem.src = movie.poster;
            movieDescriptionElem.textContent = "Description: " + movie.description;
            movieShowtimeElem.textContent = "Showtime: " + movie.showtime;
            movieRuntimeElem.textContent = "Runtime: " + movie.runtime + " minutes";
            availableTicketsElem.textContent = movie.tickets;

            // Enable or disable the Buy Ticket button based on available tickets
            buyTicketBtn.disabled = movie.tickets === 0;
        }
    }

    // Event listener for when View Movie Description button is clicked
    viewMovieBtn.addEventListener('click', function() {
        const selectedMovie = movieSelect.value;
        updateMovieDetails(selectedMovie);
    });

    // Event listener for when Buy Ticket button is clicked
    buyTicketBtn.addEventListener('click', function() {
        const selectedMovie = movieSelect.value;
        const movie = movieData[selectedMovie];
        if (movie && movie.tickets > 0) {
            movie.tickets--;
            availableTicketsElem.textContent = movie.tickets;
            alert(`Ticket purchased for ${selectedMovie}!`);
        } else {
            alert(`Sorry, ${selectedMovie} is sold out!`);
        }
    });

    // Function to populate the list of movies dynamically
    function populateMovieList() {
        const filmsList = document.getElementById('films');
        for (const movieTitle in movieData) {
            const option = document.createElement('option');
            option.textContent = movieTitle;
            option.value = movieTitle;
            movieSelect.appendChild(option);
        }
    }

    // Initialize the movie list and default movie details on page load
    populateMovieList();
    updateMovieDetails(movieSelect.value);
});
