import PropTypes from "prop-types";
import logoImg from "../assets/logo.png";

const Navbar = ({ credit }) => {
    return (
        <div className="sticky top-0 z-20">
            <div className="bg-white/30 navbar backdrop-blur-2xl">
                <div className="navbar-start">
                    <img src={logoImg} alt="" />
                </div>
                <div className="space-x-4 navbar-end">
                    <ul className="items-center hidden gap-6 px-4 lg:flex">
                        <li className="font-sora cursor-pointer text-[#131313B3]">
                            Home
                        </li>
                        <li className="font-sora cursor-pointer text-[#131313B3]">
                            Fixture
                        </li>
                        <li className="font-sora cursor-pointer text-[#131313B3]">
                            Team
                        </li>
                        <li className="font-sora cursor-pointer text-[#131313B3]">
                            Schedules
                        </li>
                    </ul>

                    <div className="flex items-center gap-2 px-2 py-2 border-2 rounded-xl">
                        <p className="font-sora text-sm md:text-base text-[#131313] font-semibold">
                            {credit} Coin
                        </p>
                        <img
                            width="20"
                            height="20"
                            src="https://img.icons8.com/dusk/64/cheap-2.png"
                            alt="cheap-2"
                        />
                    </div>

                    <div className="dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow flex flex-col gap-4 items-center"
                        >
                            <li className="cursor-pointer font-sora text-[#131313B3]">
                                Home
                            </li>
                            <li className="cursor-pointer font-sora text-[#131313B3]">
                                Fixture
                            </li>
                            <li className="cursor-pointer font-sora text-[#131313B3]">
                                Team
                            </li>
                            <li className="cursor-pointer font-sora text-[#131313B3]">
                                Schedules
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

Navbar.propTypes = {
    credit: PropTypes.number,
};

export default Navbar;
