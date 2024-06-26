import { GameEvent } from "../Interfaces/GameEvent";
import { Player } from "../Interfaces/Player";
import events from "./EventBuilder";

function EventGenerator(pd: Player): GameEvent | null {
  var res: number = -1;
  do {
    const ranEventIndex = Math.floor(Math.random() * events.length);
    if (!pd.completedEventIndices.includes(ranEventIndex)) {
      res = ranEventIndex;

      break;
    }
  } while (true);
  pd.completedEventIndices.push(res);
  return events[res];
}
export default EventGenerator;

function EventChoice(event: GameEvent, pd: Player ): void {
  if (event.accepted)
  {
    pd.balance += event.cost;
    if (event.recurring)
      {
        pd.recurringCharges += event.cost;
      }
  }
  pd.completedEvents.push(event);

}

