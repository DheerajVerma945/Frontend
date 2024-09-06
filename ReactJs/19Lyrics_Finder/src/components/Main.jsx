import React, { useState, useMemo } from 'react';
import getLyrics from "../apiCall/getLyrics"; 

function Main() {
    const [song, setSong] = useState('');
    const [artist, setArtist] = useState('');
    const [loading, setLoading] = useState(false);
    const [lyrics, setLyrics] = useState('');
    const textToRemove = "******* This Lyrics is NOT for Commercial use *******\n(1409624898773)";
    
    const cleanedLyrics = useMemo(() => lyrics.replace(textToRemove, ''), [lyrics, textToRemove]);

    async function fetchLyrics(e) {
        e.preventDefault();
        setLyrics("");
        setLoading(true);
        try {
            const data = await getLyrics(song, artist);
            if (data === "Contact the developer, There might be an issue") {
                setLyrics(data);
            } else if (data.message.header.status_code === 404) {
                setLyrics("Sorry lyrics for this song are not available");
            } else {
                console.log(data)
                setLyrics(data.message.body.lyrics.lyrics_body);
            }
        } catch (error) {
            setLyrics("An error occurred while fetching the lyrics.");
            console.error("Error in fetching data:", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
            <form
                className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg mb-6"
                onSubmit={fetchLyrics}
            >
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="song">
                        Song
                    </label>
                    <input
                        id="song"
                        type="text"
                        placeholder='Enter song name'
                        value={song}
                        required
                        onChange={(e) => setSong(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="artist">
                        Artist
                    </label>
                    <input
                        id="artist"
                        required
                        type="text"
                        placeholder='Enter artist name'
                        value={artist}
                        onChange={(e) => setArtist(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-3 px-6 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Get Lyrics
                </button>
            </form>
            
            <div className="w-full max-w-4xl p-6 bg-white shadow-lg rounded-lg mb-4 flex items-center justify-center">
    {loading && (
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
    )}
    {cleanedLyrics === "Sorry lyrics for this song are not available" ? (
        <div className="flex flex-col items-center text-center">
            <p className="text-5xl mb-4">😢</p>
            <p className="text-lg text-gray-800">{cleanedLyrics}</p>
            <p className="text-lg text-gray-800">Make sure to enter song and artist name correctly</p>
        </div>
    ) : (
        <div className="flex flex-col items-center text-center whitespace-pre-line">
            <p className="text-gray-800">{cleanedLyrics}</p>
        </div>
    )}
</div>

        </div>
    );
}

export default Main;
