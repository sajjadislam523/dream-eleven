import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Main = ({ isVisible, handleSelectedPlayer, showToastMessage }) => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch("./players.json")
            .then((res) => res.json())
            .then((data) => setPlayers(data));
    }, []);

    return (
        <>
            {isVisible && (
                <div className="grid grid-cols-1 gap-4 pt-4 pb-40 md:grid-cols-2 lg:grid-cols-3">
                    {players.map((player) => (
                        <div
                            key={player.playerId}
                            className="p-4 space-y-4 border rounded-xl"
                        >
                            <img
                                className="w-full h-52 rounded-xl"
                                src={player.image}
                                alt={player.image}
                            />
                            <div className="flex items-center gap-2">
                                <img
                                    width="30"
                                    height="30"
                                    src="https://img.icons8.com/puffy-filled/32/user.png"
                                    alt="user"
                                />
                                <p className="text-xl font-semibold font-sora">
                                    {player.name}
                                </p>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <img
                                        width="20"
                                        height="20"
                                        src="https://img.icons8.com/forma-thin-filled/24/flag.png"
                                        alt="flag"
                                    />
                                    <p className="font-sora">
                                        {player.country}
                                    </p>
                                </div>
                                <p className="text-sm font-sora bg-[#1313130D] py-2 px-4 rounded-lg">
                                    {player.role}
                                </p>
                            </div>
                            <hr />
                            <p className="font-sora font-bold text-[#131313]">
                                Rating
                            </p>
                            <div className="flex items-center justify-between">
                                <p className="font-sora font-bold text-[#131313]">
                                    {player.battingType}
                                </p>
                                <p>{player.bowlingType}</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="font-sora font-bold text-[#131313]">
                                    Price: ${player.biddingPrice}
                                </p>
                                <button
                                    onClick={() => {
                                        const isAlreadySelected =
                                            handleSelectedPlayer(player);
                                        if (!isAlreadySelected) {
                                            showToastMessage(player.name);
                                        }
                                    }}
                                    className="px-4 py-2 border rounded-lg hover:bg-[#E7FE29] transition duration-200 ease-in-out"
                                >
                                    Choose Player
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

Main.propTypes = {
    isVisible: PropTypes.bool,
    handleSelectedPlayer: PropTypes.func,
    showToastMessage: PropTypes.func,
};

export default Main;
