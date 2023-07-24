import { useContext, useEffect, useState } from "react";
import { Card, InfoGame, Loading, Modal } from "../../";
import { shuffleArray } from "../../../herpers";
import { useImages } from "../../../hooks/hooks";
import { UserContext } from "../../../context/UserContext";

export const Board = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [moves, setMoves] = useState(0);
  const [hits, setHits] = useState(0);
  const [errors, setErrors] = useState(0);

  const { images, isLoading } = useImages();

  const { username } = useContext(UserContext);

  const createBoard = () => {
    const duplicatecards = images.flatMap((img) => {
      const duplicate = {
        ...img,
        id: img.id + "_" + images.length,
      };
      return [img, duplicate];
    });

    const newCards = shuffleArray(duplicatecards);

    const cards = newCards.map((card) => {
      return {
        ...card,
        flipped: false,
        matched: false,
      };
    });
    setCards(cards);
  };

  useEffect(() => {
    createBoard();
  }, [images]);

  const handleCardClick = (id) => {
    if (isDisabled) return;

    const [currentCard] = cards.filter((card) => card.id === id);

    if (!currentCard.flipped && !currentCard.matched) {
      currentCard.flipped = true;

      const newFlippedCards = [...flippedCards, currentCard];

      setFlippedCards(newFlippedCards);

      if (newFlippedCards.length === 2) {
        setIsDisabled(true);

        const [firstCard, secondCard] = newFlippedCards;

        if (firstCard.title === secondCard.title) {
          firstCard.matched = true;
          secondCard.matched = true;
          setIsDisabled(false);
          setHits(hits + 1);
        } else {
          setErrors(errors + 1);
          setTimeout(() => {
            firstCard.flipped = false;
            secondCard.flipped = false;
            setCards(cards);
            setIsDisabled(false);
          }, 800);
        }

        setFlippedCards([]);
        setMoves(moves + 1);
      }

      setCards(cards);
    }

    if (cards.every((card) => card.matched)) {
      setGameOver(true);
      setIsDisabled(true);
    }
  };

  const handleNewGame = () => {
    setCards([]);
    createBoard();
    setMoves(0);
    setErrors(0);
    setHits(0);
    setGameOver(false);
    setIsDisabled(false);
  };

  if (isLoading) return <Loading />;

  return (
    <>
      {gameOver && (
        <div className="fixed inset-0 bg-black opacity-50 z-10"></div>
      )}

      <div className="relative h-auto flex items-center bg-indigo-400 py-20">
        <div className="mx-auto flex flex-col justify-center items-center">
          <h1 className="font-bold text-4xl text-cyan-400 text-center">
            Memory Game
          </h1>

          <InfoGame hits={hits} errors={errors} />

          <div className="grid sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 gap-5 justify-center items-center px-3 py-5 my-3">
            {cards.map((card) => (
              <Card
                card={card}
                key={card.id}
                handleCardClick={handleCardClick}
              />
            ))}
          </div>

          <button
            className="bg-black font-semibold text-white rounded-md px-5 py-3 hover:bg-yellow-500 hover:text-black transition-all mb-3"
            onClick={handleNewGame}
          >
            Nuevo Juego
          </button>
        </div>
        <Modal
          name={username}
          gameOver={gameOver}
          setGameOver={setGameOver}
          moves={moves}
          handleNewGame={handleNewGame}
        />
      </div>
    </>
  );
};
