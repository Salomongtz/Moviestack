const { createApp } = Vue

const url = "https://moviestack.onrender.com/api/movies"
const options = { headers: { "x-api-key": "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd" } }

createApp({
    data() {
        return { movies: [] }
    },
    beforeCreate() {
        fetch(url, options)
            .then(response => response.json())
            .then(data => {
                this.movies = data.movies
                console.log("Yes");
                console.log(this.movies);
            })
            .catch(error => console.error(error))
    }
}).mount("#app")