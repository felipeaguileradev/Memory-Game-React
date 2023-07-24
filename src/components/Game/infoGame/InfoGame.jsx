import { CardInfo } from "./CardInfo";

export const InfoGame = ({ hits, errors }) => {
  return (
    <div className="flex my-5 items-center w-full">
      <div className="p-4 w-full">
        <div className="flex justify-evenly flex-wrap  ">
          <CardInfo typeInfo="error" score={errors} />
          <CardInfo typeInfo="hit" score={hits} />
        </div>
      </div>
    </div>
  );
};
