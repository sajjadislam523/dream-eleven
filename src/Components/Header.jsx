import PropTypes from "prop-types";
import bannerImg from "../assets/banner-main.png";

const Header = ({ handleCredit }) => {
    return (
        <div className="bg-[url('/src/assets/bg-shadow.png')] bg-black rounded-xl bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-4 py-2 space-y-4 md:py-16">
            <img src={bannerImg} className="w-1/6" alt="" />
            <h1 className="text-xl font-bold text-center text-white font-sora md:text-4xl">
                Assemble Your Ultimate Dream 11 Cricket Team
            </h1>
            <p className="font-inter text-center text-[#FFFFFFB3] text-sm md:text-xl font-medium">
                Beyond Boundaries Beyond Limits
            </p>
            <div className="border-2 border-[#E7FE29] rounded-2xl md:rounded-3xl p-2">
                <button
                    onClick={handleCredit}
                    className="bg-[#E7FE29] font-sora text-xs sm:text-sm md:text-base lg:text-lg font-bold py-3 md:py-4 lg:py-5 px-3 sm:px-4 md:px-5 lg:px-6 rounded-xl md:rounded-2xl"
                >
                    Claim Free Credit
                </button>
            </div>
        </div>
    );
};

Header.propTypes = {
    handleCredit: PropTypes.func,
};

export default Header;
