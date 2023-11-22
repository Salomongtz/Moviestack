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
            genre: "all"
        }
    },
    beforeCreate() {
        fetch(url, options)
            .then(response => response.json())
            .then(({ movies }) => {
                this.movies = movies
                this.genres = [...new Set(movies.map(movie => movie.genres).flat())]
                this.filtered = this.movies
                console.log(this.movies);
                console.log(this.genres);
            })
            .catch(error => console.error(error))
    },
    methods: {
        filter() {
            this.filtered = this.movies.filter(movie => movie.title.toLowerCase().includes(this.search.toLowerCase()) && (this.genre == "all" || movie.genres.includes(this.genre)))
            console.log(this.filtered);
        }
    },
    // computed:{
    //     filter() {
    //         this.filtered = this.movies.filter(movie => movie.title.toLowerCase().includes(this.search.toLowerCase()) && (this.genre == "all" || movie.genres.includes(this.genre)))
    //         console.log(this.filtered);
    //     }
    // }
})
app.mount("#app")