export const Card = ({ card, handleCardClick }) => {
  return (
    <div
      className={`drop-shadow-md flex items-center ${
        card.flipped ? "[transform: rotateY(10deg)]" : "bg-cyan-400"
      } justify-center cursor-pointer h-24 w-24 hover:scale-110 rounded-xl transition-all duration-1000 overflow-hidden`}
      onClick={() => handleCardClick(card.id)}
    >
      <div>
        <img
          src={card.url}
          alt={card.title}
          className={`w-full ${
            !card.flipped
              ? "[transform:rotateY(180deg)] [backface-visibility:hidden] transition-all duration-1000"
              : ""
          }`}
        />
      </div>
    </div>
  );
};
