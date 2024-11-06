const Newsletter = () => {
    return (
        <div className="border-2 relative p-4 rounded-2xl border-[#FFFFFF26] z-10 top-32 md:w-4/5 mx-auto">
            <div className="flex flex-col border items-center justify-center bg-[url('/src/assets/bg-shadow.png')] bg-cover bg-center bg-no-repeat px-4 py-8 space-y-4 bg-white rounded-2xl">
                <h1 className="text-xl font-bold md:text-2xl font-sora">
                    Subscribe to our Newsletter
                </h1>
                <p className="font-inter text-[#13131399] md:text-sm text-xs">
                    Get the latest updates and news right in your inbox!
                </p>
                <div className="flex items-center">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="h-10 px-2 py-2 border md:px-4 rounded-l-xl font-sora focus:outline-none"
                    />
                    <button className="bg-[#E7FE29] font-sora px-4 md:px-6 py-2 rounded-r-xl h-10 text-sm font-bold">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
