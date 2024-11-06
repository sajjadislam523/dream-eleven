import PropTypes from "prop-types";

const Secondary = ({
    isVisible,
    selectedPlayers,
    handleRemovePlayer,
    showRemoveToastMessage,
    setIsSelected,
    setIsVisible,
}) => {
    return (
        <>
            {!isVisible && (
                <div className="h-screen mt-8 mb-20">
                    {selectedPlayers.length > 0 ? (
                        selectedPlayers.map((player) => (
                            <div
                                key={player.playerId}
                                className="flex items-center justify-between p-4 my-2 border rounded-xl "
                            >
                                <div className="flex items-center gap-4">
                                    <img
                                        className="rounded-md h-14 w-14"
                                        src={player.image}
                                        alt={player.name}
                                    />
                                    <div>
                                        <h1 className="text-2xl font-semibold font-sora">
                                            {player.name}
                                        </h1>
                                        <p className="font-sora text-[#13131399] text-sm">
                                            {player.battingType}
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => {
                                        handleRemovePlayer(player.playerId);
                                        showRemoveToastMessage(player.name);
                                    }}
                                >
                                    <img
                                        width="32"
                                        height="32"
                                        src="https://img.icons8.com/windows/32/FA5252/trash.png"
                                        alt="trash"
                                    />
                                </button>
                            </div>
                        ))
                    ) : (
                        <div className="flex items-center justify-center h-full">
                            <h1 className="text-2xl font-semibold font-sora">
                                No players selected
                            </h1>
                        </div>
                    )}

                    <div className="border-2 inline-block border-[#E7FE29] rounded-2xl md:rounded-3xl p-2">
                        <button
                            onClick={() => {
                                setIsSelected(true);
                                setIsVisible(true);
                            }}
                            className="bg-[#E7FE29] font-sora text-xs sm:text-sm md:text-base lg:text-lg font-bold py-3 md:py-4 lg:py-5 px-3 sm:px-4 md:px-5 lg:px-6 rounded-xl md:rounded-2xl"
                        >
                            Add More Players
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

Secondary.propTypes = {
    isVisible: PropTypes.bool,
    selectedPlayers: PropTypes.array,
    handleRemovePlayer: PropTypes.func,
    showRemoveToastMessage: PropTypes.func,
    setIsSelected: PropTypes.func,
    setIsVisible: PropTypes.func,
};

export default Secondary;
