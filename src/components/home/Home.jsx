import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export const Home = () => {
  const navigate = useNavigate();
  const { setInfoUser } = useContext(UserContext);

  const [name, setName] = useState("");

  const onInputChange = ({ target }) => {
    const { value } = target;
    setName(value);
  };

  const goToGame = () => {
    if (name.length === 0) return;
    setInfoUser(name);
    navigate("game", { replace: true });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-indigo-100/75 bg-indigo-400">
      <div className="bg-white rounded-2xl border shadow-xl p-10 max-w-lg">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="font-bold text-2xl  w-4/6 text-center text-indigo-500">
            Bienvenidos a Memory Game
          </h1>
          <p className="text-base text-gray-500 text-center w-5/6">
            Para Ingresar al juego necesitamos un nombre de usuario
          </p>
          <input
            type="text"
            placeholder="Nombre de Usuario"
            className="border-2 rounded-lg w-full h-12 px-4 border-indigo-600"
            name="name"
            onChange={onInputChange}
            value={name}
          />
          <button
            onClick={() => goToGame()}
            className={`${
              name.length > 0 ? "bg-indigo-600" : "bg-gray-400"
            }   text-white rounded-md font-semibold px-4 py-3 w-full text-center`}
            to="game"
            disabled={name.length === 0}
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
};
