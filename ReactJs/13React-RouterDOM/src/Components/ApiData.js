export const getMovieData = async () => {
    try {
        const response = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=bf55ba6e");
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error)
    }
}