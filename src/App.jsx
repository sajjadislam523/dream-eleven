import { useState } from "react";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Secondary from "./Components/Secondary";
import ToggleSection from "./Components/ToggleSection";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Newsletter from "./Components/Newsletter";
import Footer from "./Components/Footer";

function App() {
    let [credit, setCredit] = useState(0);
    const [isSelected, setIsSelected] = useState(true);
    const [isVisible, setIsVisible] = useState(true);
    const [selectedPlayers, setSelectedPlayers] = useState([]);

    const showToastMessage = (name) => {
        toast.success(`You have selected ${name}`, {
            position: "top-center",
        });
    };

    const showRemoveToastMessage = (name) => {
        toast.error(`You have removed ${name}`, {
            position: "top-center",
        });
    };

    const handleSelectedPlayer = (player) => {
        if (selectedPlayers.some((p) => p.playerId === player.playerId)) {
            toast.warn(`${player.name} is already selected`, {
                position: "top-center",
            });
            return true;
        } else if (credit < player.biddingPrice) {
            toast.warn(`You don't have enough credit to buy ${player.name}`, {
                position: "top-center",
            });
            return true;
        } else if (selectedPlayers.length >= 6) {
            toast.warn(`You can't select more than 6 players`, {
                position: "top-center",
            });
            return true;
        }
        setSelectedPlayers([...selectedPlayers, player]);
        setCredit(credit - player.biddingPrice);
        return false;
    };

    const handleRemovePlayer = (id) => {
        const remainingPlayers = selectedPlayers.filter(
            (player) => player.playerId !== id
        );
        setSelectedPlayers(remainingPlayers);
    };

    const handleCredit = () => {
        setCredit(credit + 6000000);
    };

    return (
        <>
            <div className="container px-4 mx-auto space-y-4">
                <Navbar credit={credit} />
                <Header handleCredit={handleCredit} />
                <ToggleSection
                    isSelected={isSelected}
                    setIsSelected={setIsSelected}
                    setIsVisible={setIsVisible}
                    selectedPlayers={selectedPlayers}
                />
                <Main
                    isVisible={isVisible}
                    handleSelectedPlayer={handleSelectedPlayer}
                    showToastMessage={showToastMessage}
                />
                <Secondary
                    isVisible={isVisible}
                    selectedPlayers={selectedPlayers}
                    handleRemovePlayer={handleRemovePlayer}
                    showRemoveToastMessage={showRemoveToastMessage}
                    setIsSelected={setIsSelected}
                    setIsVisible={setIsVisible}
                />
                <Newsletter />
                <ToastContainer />
            </div>
            <Footer />
        </>
    );
}

export default App;
