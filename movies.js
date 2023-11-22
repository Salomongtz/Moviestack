const { createApp } = Vue

const url = "https://moviestack.onrender.com/api/movies"
const options = { headers: { "x-api-key": "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd" } }

const app = createApp({
    data() {
        return {
            movies: [],
            genres: []
        }
    },
    beforeCreate() {
        fetch(url, options)
            .then(response => response.json())
            .then(({ movies }) => {
                this.movies = movies
                this.genres = [...new Set(movies.map(movie => movie.genres).flat())]
                console.log(this.movies);
                console.log(this.genres);
            })
            .catch(error => console.error(error))
    }
})
app.mount("#app")