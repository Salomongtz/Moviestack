const { createApp } = Vue

const url = "https://moviestack.onrender.com/api/movies"
const options = { headers: { "x-api-key": "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd" } }

const app = createApp({
    data() {
        return {
            movies: [],
            filtered: [],
            genres: [],
            search: "",
            genre: "all",
            movieId: "",
            movie: ""
        }
    },
    beforeCreate() {
        fetch(url, options)
            .then(response => response.json())
            .then(({ movies }) => {
                this.movies = movies
                this.genres = [...new Set(movies.map(movie => movie.genres).flat())]
                this.filtered = this.movies
                this.movieId = new URLSearchParams(window.location.search).get("id")
                this.movie = movies.find(movie => movie.id == this.movieId)
                console.log(this.movies);
                console.log(this.genres);
                console.log(this.movieId);
                console.log(this.movie);
            })
            .catch(error => console.error(error))
    },
})
app.mount("#app")