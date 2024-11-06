import PropTypes from "prop-types";

const ToggleSection = ({
    isSelected,
    setIsSelected,
    setIsVisible,
    selectedPlayers,
}) => {
    return (
        <div className="py-4">
            <div className="flex items-center justify-between my-8">
                <h1 className="text-xl font-bold md:text-2xl font-sora">
                    {isSelected
                        ? "Available Players"
                        : `Selected Players(${selectedPlayers.length}/6)`}
                </h1>
                <div className="flex overflow-hidden border border-gray-300 rounded-xl">
                    <button
                        className={`px-4 py-2 font-sora text-xs md:text-sm ${
                            isSelected
                                ? "bg-[#E7FE29] text-black"
                                : "bg-white text-gray-400"
                        } transition duration-200 ease-in-out`}
                        onClick={() => {
                            setIsSelected(true);
                            setIsVisible(true);
                        }}
                    >
                        Available
                    </button>
                    <button
                        className={`px-4 py-2 font-sora text-xs md:text-sm ${
                            !isSelected
                                ? "bg-[#E7FE29] text-black"
                                : "bg-white text-gray-400"
                        } transition duration-200 ease-in-out`}
                        onClick={() => {
                            setIsSelected(false);
                            setIsVisible(false);
                        }}
                    >
                        Selected
                    </button>
                </div>
            </div>
        </div>
    );
};

ToggleSection.propTypes = {
    isSelected: PropTypes.bool,
    setIsSelected: PropTypes.func,
    setIsVisible: PropTypes.func,
    selectedPlayers: PropTypes.array,
};

export default ToggleSection;
