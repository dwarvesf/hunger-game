import Image from "next/image";
import { useGameContext } from "../contexts/game";
import useCountdown from "../hooks/useCountdown";

const RoundCountdown = () => {
  const { gameState } = useGameContext();
  const { seconds } = useCountdown(new Date(gameState!.round_expire_at));

  return (
    <>
      {seconds}
      <small>s</small>
    </>
  );
};

export const LeftCorner = () => {
  const { gameState, currentPlayer, isLoadingGameState } = useGameContext();

  return (
    <div className="left-corner">
      <div className="rounds">
        <span>
          Next round in:{" "}
          <span className="countdown">
            {gameState?.round_expire_at ? <RoundCountdown /> : "-"}
          </span>
        </span>
        {isLoadingGameState && (
          <Image
            src="/assets/images/spinner.svg"
            className="loader"
            width={48}
            height={48}
            alt=""
          />
        )}
      </div>
      {currentPlayer && (
        <div className="points">Points: {currentPlayer?.points || 0}</div>
      )}
      <div className="items">
        <span>
          <span className="item point-2" />: 2
        </span>
        <span>
          <span className="item point-4" />: 4
        </span>
        <span>
          <span className="item point-8" />: 6
        </span>
        <span>
          <span className="item point-16" />: 8
        </span>
      </div>

      <div>Game Status: {gameState?.status}</div>
      <div>Game ID: {gameState?.id}</div>
    </div>
  );
};
