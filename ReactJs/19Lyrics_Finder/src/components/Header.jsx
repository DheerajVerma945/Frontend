import React from 'react';

function Header() {
  return (
    <header className="bg-blue-800 text-white py-4 px-2 sm:px-6 md:px-8 rounded-sm">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Lyrics Finder
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto">
          Discover the lyrics to your favorite songs. Simply enter the song title and artist to get started.
        </p>
      </div>
    </header>
  );
}

export default Header;
