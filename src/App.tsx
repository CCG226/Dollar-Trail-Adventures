import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import StartModal from "./Components/StartModal";
import ActionModal from "./Components/ActionModal";
import { GameEvent } from "./Interfaces/GameEvent";
import { Player } from "./Interfaces/Player";
import Home from "./Components/Home";
import EventGenerator from "./Utils/EventGenerator";
import BeginModal from "./Components/BeginModal";
import PassiveModal from "./Components/PassiveModal";
import { EventChoice } from "./Utils/EventChoice";
import SummaryCard from "./Components/SummaryCard";
function App() {
  const [startModalOpen, setStartModalOpen] = useState(true);
  const [actionModalOpen, setActionModalOpen] = useState(false);
  const [passiveModalOpen, setPassiveModalOpen] = useState(false);
  const [tutorialModalOpen, setTutorialModalOpen] = useState(false);
  const [hideCounter, setHideCounter] = useState(true);
  const [hideSummary, setHideSummary] = useState(true);
  const [hideHome, setHideHome] = useState(false);
  const [dayCounter, setDayCounter] = useState(0);

  const [curEvent, setCurEvent] = useState<GameEvent | null>(null);

  const handleChoice = (accepted: boolean) => {
    curEvent!.accepted = accepted;
    console.log(curEvent);

    let playerJSON: string | null = localStorage.getItem("player");

    if (playerJSON) {
      let player: Player = JSON.parse(playerJSON);
      EventChoice(curEvent!, player, dayCounter);
      console.log(player);
      localStorage.setItem("player", JSON.stringify(player));
    }
  };

  const handleCloseStartModal = () => {
    setStartModalOpen(false);

    setTutorialModalOpen(true);
  };
  const handleClosePassiveModal = () => {
    setPassiveModalOpen(false);
    handleChoice(true);
  };
  const handleCloseActionModal = (accepted: boolean) => {
    setActionModalOpen(false);
    handleChoice(accepted);
  };
  const initializePlayer = () => {
    let player: Player = {
      win: false,
      balance: 50,
      completedEvents: [],
      recurringCharges: 0,
      day: dayCounter,
      invCost: 0,
      subCost: 0,
      investments: [],
      subscriptions: [],
      completedEventIndices: [],
      week1Sum: "",
      week2Sum: "",
      week3Sum: "",
      week4Sum: "",
    };

    localStorage.setItem("player", JSON.stringify(player));
  };
  const startGame = () => {
    localStorage.removeItem("player");
    setHideHome(false);
    setHideSummary(true);
    setHideCounter(false);
    setTutorialModalOpen(false);
    initializePlayer();
    changeTurn();
  };
  const endGame = () => {
    setDayCounter(0);
    setHideHome(true);
    let playerJSON: string | null = localStorage.getItem("player");

    if (playerJSON) {
      let player: Player = JSON.parse(playerJSON);
      if (player.balance > 50) {
        player.win = true;
        localStorage.setItem("player", JSON.stringify(player));
      } else {
        console.log("Lose");
      }
    }
    setHideCounter(true);
    setHideSummary(false);
    //setStartModalOpen(true);
  };
  const determineNextModal = (nxtEvent: GameEvent) => {
    if (nxtEvent.active == false) {
      setPassiveModalOpen(true);
    } else {
      setActionModalOpen(true);
    }
  };
  const changeTurn = () => {
    if (dayCounter == 28) {
      endGame();
      return;
    }
    incrementCount();

    let playerJSON: string | null = localStorage.getItem("player");

    if (playerJSON) {
      let player: Player = JSON.parse(playerJSON);
      var nxtEvent: GameEvent | null = EventGenerator(player);
      localStorage.setItem("player", JSON.stringify(player));
      setCurEvent(nxtEvent);
      determineNextModal(nxtEvent!);
    }
  };
  const incrementCount = () => {
    setDayCounter(dayCounter + 1);
  };
  return (
    <div className="App">
      {!hideCounter && <div className="day">Day {dayCounter} / 28</div>}
      {!hideSummary && <SummaryCard />}
      {}
      {startModalOpen && (
        <StartModal
          show={startModalOpen}
          handleCloseStartModal={handleCloseStartModal}
        />
      )}
      {tutorialModalOpen && (
        <BeginModal show={tutorialModalOpen} startGame={startGame} />
      )}
      {}
      {actionModalOpen && (
        <ActionModal
          description={curEvent!.description}
          image={curEvent!.image}
          show={actionModalOpen}
          handleClose={handleCloseActionModal}
        />
      )}
      {passiveModalOpen && (
        <PassiveModal
          description={curEvent!.description}
          image={curEvent!.image}
          show={passiveModalOpen}
          handleClose={handleClosePassiveModal}
        />
      )}
      {!tutorialModalOpen &&
        !actionModalOpen &&
        !passiveModalOpen &&
        !startModalOpen &&
        !hideHome && <Home changeTurn={changeTurn} />}
    </div>
  );
}

export default App;
