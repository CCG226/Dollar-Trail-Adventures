import { GameEvent } from "../Interfaces/GameEvent";

var financeInfo: string[] = [
  "One Concept to keep in mind is Saving.  Saving is setting aside some of your money and making sure you don't spend all that you have. For this game you are trying to end with enough money to afford the new toy when it releases.  It might be a good idea to save some money so that you can afford the toy at the end of the game and win.",
  "It looks like you spent more than you have. Spending too much money can result in debt which means that you owe someone else money that you don't currently have.  It's a good idea to make sure you never go in debt unless absolutely necessary.",
  "Investing is when you put money towards things like stock, CDs, and bonds, that over time will grow in value.  This is a very useful tool if you know that you will not need a portion of your money.  By investing your unneeded money you can slowly gain more money without doing anything except waiting",
  "Sales tax is an extra cost factored into nearly every purchase you make.  For smaller purchases the tax will be very small, but with larger purchases sales tax can be a lot of money.  It's important to pay attention to how much an item costs and consider how much it will truly cost after taxes.",
  "Financial goal setting is when you set a goal of having saved a certain amount of money.  This is a very useful tool as it gives you a guide what is and is not a necessary purchase.  For example, is the purchase of a piece of gum worth it if it will move me away from my goal of buying a toy car?",
  "It looks like you found one of the downsides of owning a debit card.  Debit cards are nice since you don't have to cary cash, but when you lose them you risk others finding it and using your own money.  As such, its important to make sure you never lose your debit card and if you do you freeze it.",
  "While subscriptions can be nice.  They can also be easy to forget about resulting in situations in which you are paying for a service you aren't using.  Becuase of this its important to keep track of what you are paying for at all times.",
  "Selling old things that you no longer use can be a good way to scrape together some money.  However, you oftentimes will have to sell your things for less than you purchased them for meaning it isn't a good idea to constantly be purchasing things and then selling them.",
  "Doing chores can be a great way to earn money when you are young!",
  "Accidents can happen when you least expect it and can cost money.  As such, its important to make sure you always have some money saved so that when accidents do happen you have enough money to pay for them.",
];

var events: GameEvent[] = [
  {
    description: "In order to watch a show that just came out, a subscription is required. Do you want to subscribe to this live service for $3 every 7 days?",
    image: "Money.png",
    cost: -5,
    active: true,
    accepted: false,
    recurring: true,
    info: financeInfo[6],
  },
  {
    description:
      "The ice cream truck is driving through the neighborhood.  Do you want to spend $3 for an ice cream?",
    image: "Ice-Cream.png",
    cost: -3,
    active: true,
    accepted: false,
    recurring: false,
    info: financeInfo[0],
  },
  {
    description:
      "A brand new toy just came out that all your friends are talking about.  Do you want to purchase the new toy for $15?",
    image: "Teddy-Bear.png",
    cost: -15,
    active: true,
    accepted: false,
    recurring: false,
    info: financeInfo[0],
  },
  {
    description:
      "Your friends are all going to an amusement park, but you need to buy a ticket to go.  Do you want to buy a ticket for $10 or not go?",
    image: "Ticket.png",
    cost: -10,
    active: true,
    accepted: false,
    recurring: false,
    info: financeInfo[0],
  },
  {
    description:
      "A cookie salesman has visited your house.  He is willing to sell to you a cookie for $3 do you want to purchase the cookie?",
    image: "Cookie.png",
    cost: -3,
    active: true,
    accepted: false,
    recurring: false,
    info: financeInfo[0],
  },
  {
    description:
      "The bookfair is coming to your school and they have the newest guiness book of world records you want.  Do you want to buy the book for $12 or not?",
    image: "Book.png",
    cost: -12,
    active: true,
    accepted: false,
    recurring: false,
    info: financeInfo[0],
  },
  {
    description:
      "Your neighbor is having a garage sale.  When you arrive you see that they have a video game console you have wanted for a long time and its much cheaper than its typical price.  Do you want to purchase it for $25?",
    image: "Video-Game.png",
    cost: -25,
    active: true,
    accepted: false,
    recurring: false,
    info: financeInfo[0],
  },
  {
    description:
      "It's your friends birthday and you want to get them a cool gift.  Your parents said they are willing to pay for $10 of the gift, but the gift you want to give them costs $15.  Do you want to spend $5 to get your friend an even cooler gift or not?",
    image: "Gift.png",
    cost: -5,
    active: true,
    accepted: false,
    recurring: false,
    info: financeInfo[0],
  },
  {
    description:
      "You have entered an art competition and you think you might have a chance at winning.  The only problem is you need some markers to make the art piece you are imagining.  Do you want to spend $5 for the markers to make the art project you think will win or not.",
    image: "Paint-Brush.png",
    cost: -5,
    active: true,
    accepted: false,
    recurring: false,
    info: financeInfo[0],
  },
  {
    description:
      "Everyone at school has been playing this new game that looks really fun.  Do you want to spend $10 to buy the game so you can play with friends?",
    image: "Video-Game.png",
    cost: -10,
    active: true,
    accepted: false,
    recurring: false,
    info: financeInfo[0],
  },
  {
    description:
      "Your friend started a business of making phone cases.  They offer to sell you a custom phone case they made for just $4. Do you want to buy the phone case?",
    image: "Phone.png",
    cost: -4,
    active: true,
    accepted: false,
    recurring: false,
    info: financeInfo[0],
  },
  {
    description:
      "You lost your debit card.  It will cost you $5 to replace it. ",
    image: "Money.png",
    cost: -5,
    active: false,
    accepted: true,
    recurring: false,
    info: financeInfo[5],
  },

  {
    description: "You found some old toys do you want to sell them for $10?",
    image: "Teddy-Bear.png",
    cost: 10,
    active: true,
    accepted: false,
    recurring: false,
    info: financeInfo[7],
  },
  {
    description:
      "Your neighbor would like you to mow the lawn for $25. Will you do it?",
    image: "Lawn-Mower.png",
    cost: 25,
    active: true,
    accepted: false,
    recurring: false,
    info: financeInfo[8],
  },
  {
    description:
      "You went out to walk and found $5 on the ground. Finders keepers!",
    image: "Money.png",
    cost: 5,
    active: false,
    accepted: false,
    recurring: false,
    info: financeInfo[2],
  },
  {
    description:
      "You've done all your chores and are rewarded for your efforts for the week.",
    image: "Money.png",
    cost: 25,
    active: false,
    accepted: false,
    recurring: true,
    info: financeInfo[3],
  },
  {
    description:
      "Your parents have asked you to babysit for them for them for $30. Will you do it?",
    image: "Babysit.png",
    cost: 30,
    active: true,
    accepted: false,
    recurring: false,
    info: financeInfo[8],
  },
  {
    description:
      "Your neighbors are going on vacation for the weekend and want you to look after their dog/cat for $50. Will you do it?",
    image: "Walking-a-Dog.png",
    cost: 50,
    active: true,
    accepted: false,
    recurring: false,
    info: financeInfo[4],
  },
  {
    description:
      "You have a school field trip coming up that you want to attend.  However, the cost of the field trip is $10.  Do you want to pay to go or not?",
    image: "School-Bus.png",
    cost: -10,
    active: true,
    accepted: false,
    recurring: false,
    info: financeInfo[0],
  },
  {
    description:
      "You were gifted a neat toy from your grandparents.  There is also a cool acessory for the toy.  Do you want to pay $3 for the accessory?",
    image: "Teddy-Bear.png",
    cost: -3,
    active: true,
    accepted: false,
    recurring: false,
    info: financeInfo[0],
  },
  {
    description: "Its your birthday, you were given $25!",
    image: "Gift.png",
    cost: 25,
    active: false,
    accepted: true,
    recurring: false,
    info: financeInfo[2],
  },
  {
    description:
      "You accidentally dropped a carton of milk at the grocery store.  Now you have to pay $5.",
    image: "Money.png",
    cost: -5,
    active: false,
    accepted: true,
    recurring: false,
    info: financeInfo[9],
  },
  {
    description:
      "Your friends are going to the movies.  Do you want to go with them for $8?",
    image: "Ticket.png",
    cost: -8,
    active: true,
    accepted: false,
    recurring: false,
    info: financeInfo[3],
  },
  {
    description:
      "The local snowcone shop just got a brand new item. A triple scoop, double dipped, waffle cone that looks delicious.  Do you want to purchase it for $6?",
    image: "Ice-Cream.png",
    cost: -6,
    active: true,
    accepted: false,
    recurring: false,
    info: financeInfo[0],
  },
  {
    description:
      "Oh no. You accidentally purchased an app you didn't want. You have now lost $5.",
    image: "Dark-Patterns.png",
    cost: -5,
    active: false,
    accepted: false,
    recurring: false,
    info: financeInfo[9],
  },
  {
    description:
      "You would like to start teaching a skill to another kid after school for $10. Would you like to do this?",
    image: "Teaching.png",
    cost: 10,
    active: true,
    accepted: false,
    recurring: true,
    info: financeInfo[8],
  },
  {
    description:
      "You would would like to start making extra money and wash a single car for $10. Would you like to do this?",
    image: "Car-Wash.png",
    cost: 10,
    active: true,
    accepted: false,
    recurring: false,
    info: financeInfo[4],
  },
  {
    description:
      "You would like to attend a musical coming to town, but it costs $15 do you want to spend the money?",
    image: "Convention.png",
    cost: -15,
    active: true,
    accepted: false,
    recurring: false,
    info: financeInfo[0],
  },
  {
    description:
      "You would like to sell a physical copy of an unplayed video game for $20. Would you like to do this?",
    image: "Video-Games.png",
    cost: 20,
    active: true,
    accepted: false,
    recurring: false,
    info: financeInfo[7],
  },
  {
    description:
      "Grandma/Grandpa came over and was feeling generous. Thanks for the $25!!",
    image: "Grandparents.png",
    cost: 25,
    active: false,
    accepted: false,
    recurring: false,
    info: financeInfo[3],
  },
  {
    description:
      "Your school is hosting a field trip, and it will cost you $10. Would you like to attend?",
    image: "School-Bus.png",
    cost: -10,
    active: true,
    accepted: false,
    recurring: false,
    info: financeInfo[0],
  },
  {
    description:
      "You want an instructor to teach you how to play an instrument. Will you pay $10 for weekly lessons?",
    image: "Cat-Playing-Guitar.png",
    cost: -20,
    active: true,
    accepted: false,
    recurring: true,
    info: financeInfo[4],
  },
  {
    description:
      "You would like to attend a summer outdoor camping in the future for $20. Would you like to go?",
    image: "Camping-Tent.png",
    cost: -20,
    active: true,
    accepted: false,
    recurring: false,
    info: financeInfo[3],
  },
  {
    description:
      "You would like to go to the zoo that costs $10 for a ticket. Would you like to pay?",
    image: "Zoo.png",
    cost: -10,
    active: true,
    accepted: false,
    recurring: false,
    info: financeInfo[2],
  },
];

export default events;
