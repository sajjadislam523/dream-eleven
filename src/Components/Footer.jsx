import logoFooter from "../assets/logo-footer.png";

const Footer = () => {
    return (
        <div className="bg-[#06091A] pt-40 pb-4">
            <div className="flex flex-col items-center justify-center space-y-8">
                <img src={logoFooter} alt="" />
                <div className="flex flex-col items-center justify-between gap-4 px-8 space-y-8 md:flex-row">
                    <div className="w-1/2 pb-10 md:w-1/4">
                        <h1 className="text-lg font-semibold text-white font-sora">
                            About Us
                        </h1>
                        <p className="font-sora text-[#FFFFFF99] text-sm py-4">
                            We are a passionate team dedicated to providing the
                            best services to our customers.
                        </p>
                    </div>
                    <div>
                        <h1 className="text-lg font-semibold text-white font-sora">
                            Quick Links
                        </h1>
                        <ul className="py-4 px-6 list-[square]">
                            <li className="font-sora text-[#FFFFFF99] text-sm py-2 cursor-pointer hover:underline">
                                Home
                            </li>
                            <li className="font-sora text-[#FFFFFF99] text-sm py-2 cursor-pointer hover:underline">
                                Service
                            </li>
                            <li className="font-sora text-[#FFFFFF99] text-sm py-2 cursor-pointer hover:underline">
                                About
                            </li>
                            <li className="font-sora text-[#FFFFFF99] text-sm py-2 cursor-pointer hover:underline">
                                Contact
                            </li>
                        </ul>
                    </div>
                    <div className="pb-20">
                        <h1 className="text-lg font-semibold text-white font-sora">
                            Subscribe
                        </h1>
                        <p className="font-sora text-[#FFFFFF99] text-sm py-4">
                            Subscribe to our newsletter <br /> for the latest
                            update
                        </p>
                        <div className="flex items-center">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="h-10 px-4 py-2 border rounded-l-xl font-sora focus:outline-none"
                            />
                            <button className="bg-[#E7FE29] font-sora px-6 py-2 rounded-r-xl h-10 text-sm font-bold">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
                <p className="font-sora text-[#FFFFFF99] text-sm py-4">
                    @2024 Your Company All Rights Reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
