import { useEffect, useState } from "react";
import { initialTabs as tabs } from "./ingredients";
import { motion, AnimatePresence } from "framer-motion";
import "../Styles/summary.css";
import { Player } from "../Interfaces/Player";
interface output {
  name: string;
  classN: string;
}
export default function Summary() {
  const [selectedTab, setSelectedTab] = useState<any>(tabs[0]);
  const [curWeekValues, setCurWeekValues] = useState<output[]>();
  const [actionClass, setActionClass] = useState<string[]>();
  const [curPlayer, setCurPlayer] = useState<Player | null>(null);

  const loadPlayerData = () => {
    let playerJSON: string | null = localStorage.getItem("player");
    console.log(playerJSON);
    if (playerJSON) {
      let player: Player = JSON.parse(playerJSON);
      setCurPlayer(player);
    }
  };
  const changeWeek = (item: any) => {
    setSelectedTab(item);
    console.log(item.label);

    var num: number = parseInt(item.label[item.label.length - 1]);
    var temp: output[] = [];

    let playerJSON: string | null = localStorage.getItem("player");
    console.log(playerJSON);
    if (playerJSON) {
      let player: Player = JSON.parse(playerJSON);

      if (num == 1) {
        for (var i = 0; i < 7; i++) {
          var out: output = { classN: "", name: "" };
          if (player!.completedEvents[i].active == true) {
            if (player!.completedEvents[i].accepted == true) {
              out.classN = "green";
            } else {
              out.classN = "red";
            }
            out.name = player!.completedEvents[i].description;
          } else {
            out.name = "";
            out.classN = "null";
          }
          temp.push(out);
        }
      }
      if (num == 2) {
        for (var i = 7; i < 14; i++) {
          var out: output = { classN: "", name: "" };
          if (player!.completedEvents[i].active == true) {
            if (player!.completedEvents[i].accepted == true) {
              out.classN = "green";
            } else {
              out.classN = "red";
            }
            out.name = player!.completedEvents[i].description;
          } else {
            out.name = "";
            out.classN = "null";
          }
          temp.push(out);
        }
      }
      if (num == 3) {
        for (var i = 14; i < 21; i++) {
          var out: output = { classN: "", name: "" };
          if (player!.completedEvents[i].active == true) {
            if (player!.completedEvents[i].accepted == true) {
              out.classN = "green";
            } else {
              out.classN = "red";
            }
            out.name = player!.completedEvents[i].description;
          } else {
            out.name = "";
            out.classN = "null";
          }
          temp.push(out);
        }
      }
      if (num == 4) {
        for (var i = 21; i < 27; i++) {
          var out: output = { classN: "", name: "" };
          if (player!.completedEvents[i].active == true) {
            if (player!.completedEvents[i].accepted == true) {
              out.classN = "green";
            } else {
              out.classN = "red";
            }
            out.name = player!.completedEvents[i].description;
          } else {
            out.name = "";
            out.classN = "null";
          }
          temp.push(out);
        }
      }
    }
    setCurWeekValues(temp);
  };

  useEffect(() => {
    loadPlayerData();
    changeWeek({ icon: "🍅", label: "week 1" });
  }, []);
  const win = curPlayer ? curPlayer.win : false;
  const balance = curPlayer ? curPlayer.balance : 0;

  return (
    <div>
      <div className="report">
        {win ? (
          <>
            <h1>Congrats! You Win.</h1>
            <h3>You Can Afford Your New Toy!</h3>
          </>
        ) : (
          <div>
            <>
              <h1>Sorry! You Lose.</h1>
              <h3>You Can't Can Afford The New Toy!</h3>
            </>
          </div>
        )}
        <h6>You Final Balance Was ${balance}</h6>
        {balance < 0 && (
          <h6>Oh No! You Over Spent! You Will Now Be Charged Overdraft fees</h6>
        )}
      </div>
      <br />
      <div className="window">
        <nav>
          <ul>
            {tabs.map((item) => (
              <li
                key={item.label}
                className={item === selectedTab ? "newli selected" : "newli"}
                onClick={() => changeWeek(item)}
              >
                {`${item.icon} ${item.label}`}
                {item === selectedTab ? (
                  <motion.div className="underline" layoutId="underline" />
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
        <main>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab ? selectedTab.label : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {selectedTab ? (
                <div className="summary">
                  <h2>{selectedTab.label} Event Summary</h2>

                  {curWeekValues && curWeekValues.length > 0 && (
                    <div className="content">
                      {curWeekValues.map((value, index) => (
                        <div className={value.classN} key={index}>
                          {value.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                "error"
              )}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
