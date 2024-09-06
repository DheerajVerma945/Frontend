import React, { useState, useEffect } from 'react';

const weatherIcons = [
  { icon: '☀️', description: 'Sunny' },
  { icon: '☁️', description: 'Cloudy' },
  { icon: '🌧️', description: 'Rainy' },
  { icon: '❄️', description: 'Snowy' },
  { icon: '🌩️', description: 'Thunderstorm' },
  { icon: '🌬️', description: 'Windy' },
  { icon: '🌫️', description: 'Foggy' },
  { icon: '🌪️', description: 'Tornado' },
  { icon: '🌨️', description: 'Hail' },
  { icon: '⛅', description: 'Partly Cloudy' },
  { icon: '🌕', description: 'Clear Night' },
  { icon: '🌦️', description: 'Rain and Sun' },
  { icon: '🔥', description: 'Hot' },
  { icon: '🥶', description: 'Cold' },
];

function WeatherMatch() {
  const [difficulty, setDifficulty] = useState('Easy');

  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(30);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  let iconsToUse;
  const generateCards = () => {
    switch (difficulty) {
      case 'Medium':
        iconsToUse = weatherIcons.slice(0, 6);
        break;
      case 'Hard':
        iconsToUse = weatherIcons.slice(0, 8);
        break;
      case 'Expert':
        iconsToUse = weatherIcons;
        break;
      default:
        iconsToUse = weatherIcons.slice(0, 4);
    }

    const cards = [...iconsToUse, ...iconsToUse];
    return cards
      .map((card, index) => ({ ...card, id: index }))
      .sort(() => Math.random() - 0.5);
  };
  const [cards, setCards] = useState(generateCards());

  useEffect(() => {
    if (gameStarted) {
      if (timer > 0 && !gameOver) {
        const interval = setInterval(() => {
          setTimer(prev => prev - 1);
        }, 1000);
        return () => clearInterval(interval);
      } else if (timer === 0 && !gameOver) {
        setGameOver(true);
      }
    }
  }, [timer, gameOver, gameStarted]);

  useEffect(() => {
    if (selectedCards.length === 2) {
      const [firstCard, secondCard] = selectedCards;
      if (firstCard.description === secondCard.description) {
        setMatchedCards(prev => [...prev, firstCard, secondCard]);
        setScore(prev => prev + 1);
      }
      setTimeout(() => setSelectedCards([]), 1000);
    }
  }, [selectedCards]);

  useEffect(() => {
    if (score >= iconsToUse.length) {
      setGameOver(true);
      setWinner(true);
    }
  }, [score]);

  const handleCardClick = (card) => {
    if (!gameOver && gameStarted && selectedCards.length < 2 && !selectedCards.includes(card) && !matchedCards.includes(card)) {
      setSelectedCards(prev => [...prev, card]);
    }
  };

  const handleStart = () => {
    setGameStarted(true);
    setScore(0);
    setGameOver(false);
    setWinner(false);

    switch (difficulty) {
      case 'Medium':
        setTimer(45);
        break;
      case 'Hard':
        setTimer(60);
        break;
      case 'Expert':
        setTimer(75);
        break;
      default:
        setTimer(30);
    }

    setCards(generateCards());
  };

  const handleReset = () => {
    setCards(generateCards());
    setSelectedCards([]);
    setMatchedCards([]);
    setScore(0);
    setTimer(30);
    setGameOver(false);
    setWinner(false);
    setGameStarted(false);
  };

  return (
    <div className='p-6 bg-gray-100 dark:bg-gray-800 min-h-screen'>
      <h1 className='text-2xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100'>Bored? Let's Have Some Fun!</h1>

      <div className='max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md'>
        <div className="flex justify-center items-center mb-4">
          <label htmlFor="difficulty" className="mr-2 text-gray-700 dark:text-gray-300">Select Difficulty:</label>
          <select
            id="difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="p-2 border rounded-md dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            disabled={gameStarted}
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
            <option value="Expert">Expert</option>
          </select>
        </div>
        {!gameStarted && (
          <div className="flex justify-center items-center">
            <button
              onClick={handleStart}
              className='mt-4 bg-blue-500 dark:bg-blue-600 text-white p-2 rounded-md hover:bg-blue-600 dark:hover:bg-blue-500 transition duration-300 text-center'
              disabled={gameStarted}
            >
              Start Game
            </button>
          </div>
        )}
        <br />

        <h1 className='text-3xl font-bold mb-4  text-gray-900 dark:text-gray-100'>Weather Match Game</h1>
        <p className='mb-4 text-gray-700 dark:text-gray-300'>Match the weather icons with their descriptions!</p>
        <h3 className='text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200'>Rules:</h3>
        <ul className='list-disc list-inside mb-4 text-gray-700 dark:text-gray-300'>
          <li>Pick two cards; if they match, you get 1 point.</li>
          <li>You have only {timer} seconds.</li>
        </ul>
        <p className='text-gray-700 dark:text-gray-300'>Tip: Remember where each card is</p>
        <p className='mb-4 text-lg font-semibold text-gray-800 dark:text-gray-100'><strong>Time Remaining:</strong> {timer} seconds</p>
        <p className='mb-4 text-lg font-semibold text-gray-800 dark:text-gray-100'>Score: {score}</p>
        <div className='grid grid-cols-2 gap-4'>
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => handleCardClick(card)}
              className={`p-4 border rounded-md cursor-pointer ${selectedCards.includes(card) || matchedCards.includes(card) || gameOver
                ? 'bg-blue-100 dark:bg-blue-600'
                : (gameStarted ? 'bg-gray-200 dark:bg-gray-700' : 'bg-gray-100 cursor-not-allowed')
                }`}
            >
              {selectedCards.includes(card) || matchedCards.includes(card) || gameOver ? (
                <>
                  <span className='text-3xl'>{card.icon}</span>
                  <div className='text-center mt-2 text-gray-800 dark:text-gray-100'>{card.description}</div>
                </>
              ) : (
                <span className='text-3xl'>❓</span>
              )}
            </div>
          ))}
        </div>
        {gameOver && !winner && (
          <div className='mt-4 p-4 bg-red-100 dark:bg-red-600 text-red-700 dark:text-red-100 rounded'>
            Time's up! Your final score is {score}.
          </div>
        )}
        {winner && (
          <div className='mt-4 p-4 bg-green-100 dark:bg-green-600 text-green-700 dark:text-green-100 rounded'>
            Congratulations! You won with a score of {score}.
          </div>
        )}
        <div className="flex justify-center items-center">
          <button
            onClick={handleReset}
            className='mt-4 bg-blue-500 dark:bg-blue-600 text-white p-2 rounded-md hover:bg-blue-600 dark:hover:bg-blue-500 transition duration-300 text-center'
            disabled={!gameStarted && !gameOver}
          >
            Reset Game
          </button>
        </div>
      </div>
    </div>
  );
}

export default WeatherMatch;
