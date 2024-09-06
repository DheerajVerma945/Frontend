
async function getLyrics(song,artist) {
    const key = import.meta.env.VITE_API_KEY;
    const url = `https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?q_track=${song}&q_artist=${artist}&apikey=${key}`
    try {
        const response = await fetch(url);
        if(response){
            const data = await response.json();
            return data;
        }
        return "Contact the developer ,There might be an issue";
    } 
    catch (error) {
        console.log("Error in fetching data:",error);
    }
    return  "Contact the developer ,There might be an issue";;
}
export default getLyrics

