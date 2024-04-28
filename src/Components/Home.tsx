import SideBar from "./SideBar";
import "../Styles/modals.css";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Player } from "../Interfaces/Player";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface HomeProps {
  changeTurn: () => void;
}
function Home(props: HomeProps) {
  const [curPlayer, setCurPlayer] = useState<Player | null>(null);
  const sendMsg = (message: string) => {
    console.log(message);
    toast(message, { autoClose: 3000 });
  };
  const sendRecurNotif = (player: Player) => {
    for (let i = 0; i < player.investments.length; i++) {
      let element = player.investments[i];
      let nextPayDay = element[0];
      let pay = element[1];
      if (nextPayDay == player.day) {
        player.balance = player.balance + pay;
        player.investments[i][0] = nextPayDay + 7;
        sendMsg("You Collected $" + pay + " from a job today!");
      }
    }
    for (let i = 0; i < player.subscriptions.length; i++) {
      let element = player.subscriptions[i];
      let nextPayDay = element[0];
      let pay = element[1];
      if (nextPayDay == player.day) {
        player.balance = player.balance - pay;
        player.subscriptions[i][0] = nextPayDay + 7;
        sendMsg("You Lost $" + pay + " from a subscription today!");
      }
    }
    localStorage.setItem("player", JSON.stringify(player));
    console.log(player.balance);
  };
  const loadPlayerData = () => {
    let playerJSON: string | null = localStorage.getItem("player");
    console.log(playerJSON);
    if (playerJSON) {
      let player: Player = JSON.parse(playerJSON);
      setCurPlayer(player);
      sendRecurNotif(player);
    }
  };
  useEffect(() => {
    loadPlayerData();
  }, []);
  const balance = curPlayer ? curPlayer.balance : 0;
  const subCost = curPlayer ? curPlayer.subCost : 0;
  const invCost = curPlayer ? curPlayer.invCost : 0;
  const infoElement = curPlayer
    ? curPlayer.completedEvents[curPlayer.completedEvents.length - 1].info
    : 0;
  return (
    <div className="homepage">
      <h2 style={{ color: "white" }} className="title">
        {" "}
        Finance Tips:{" "}
      </h2>

      <p className="infoo"> {infoElement} </p>

      <div className="btn-container">
        <Button onClick={props.changeTurn}>Continue</Button>
        <SideBar balance={balance} subCost={subCost} invCost={invCost} />
      </div>
    </div>
  );
}

export default Home;
