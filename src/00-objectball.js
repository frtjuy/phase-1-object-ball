function gameObject () {
    const theseTeams = {
      home: {
        teamName: "Brooklyn Nets",
        colors: [
            "Black",
            "White"
        ],
        players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5

                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1

                }
        }  
    },
    away: {
        teamName: "Charlotte Hornets",
        colors: [
            "Turquoise", 
            "Purple"
        ],
        players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10

                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5

                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0

                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12

                }
        }
    }
  };
  return theseTeams
};

function numPointsScored (name) {
    if (gameObject()['away']['players'][name]) {
      return gameObject()['away']['players'][name]['points']
    }
    if (gameObject()['home']['players'][name]) {
      return gameObject()['home']['players'][name]['points']
    }
    else {
        console.log("This player didn't play in this game!")
    }
};

function shoeSize (name) {
    if (gameObject()['away']['players'][name]) {
      return gameObject()['away']['players'][name]['shoe']
    }
    if (gameObject()['home']['players'][name]) {
      return gameObject()['home']['players'][name]['shoe']
    }
    else {
        console.log("This player didn't play in this game!")
    }
};

function teamColors (team) {
    return gameObject()[team]['colors']
};

function teamNames (game) {
    let stats = game;
    let versus = [];
    versus.push(stats.home.teamName);
    versus.push(stats.away.teamName);
    return versus
};

function playerNumbers (teamN) {
    let stats = gameObject()
    for (let statss in stats) {
      let statsss = stats[statss]
      let thisTeam = statsss.teamName
      if (thisTeam === teamN) {
        let jerseys = []
        for (let playerss in statsss.players) {
          let jerseyNumbers = statsss.players[playerss];
          jerseys.push(jerseyNumbers.number)
        }
        return jerseys
      }
    }
};

function playerStats (name) {
    let stats = gameObject()
    for (let statss in stats) {
      let playerss = stats[statss].players
      for (let theName in playerss)
        if (name === theName) {
          return playerss[name]
      }
    }
};

function bigShoeRebounds () {
    let stats = gameObject();
    let biggestSize = 0;
    let theBiggest = ""
    for (let statss in stats) {
      let playerss = stats[statss].players;
      for (let theirName in playerss) {
        let size = playerss[theirName].shoe;
        if (size > biggestSize) {
          biggestSize = size;
          theBiggest = playerss[theirName].rebounds;
        }
      };
    };
    return theBiggest
};

function mostPointsScored () {
    let stats = gameObject();
    let highestScore = 0;
    let theBest = "";
    for (let statss in stats) {
      let statsss = stats[statss];
      let playerss = statsss.players
      for (let theirName in playerss) {
        let score = playerss[theirName].points;
        if (score > highestScore) {
          highestScore = score;
          theBest = theirName;
        }
      };
    };
    return theBest
};

function winningTeam () {
    let pointArray = []
    let stats = gameObject()
    for (let statss in stats) {
      let teamPoints = 0
      let statsss = stats[statss].players
      for (let pStats in statsss) {
        let eachPoints = statsss[pStats].points;
        teamPoints = teamPoints + eachPoints
      }
      pointArray.push(teamPoints)
    }
    if (pointArray[0] > pointArray[1]) {
      return 'home'
    }
    if (pointArray[0] < pointArray[1]) {
      return 'away'
    }
};

function playerWithLongestName () {
    let stats = gameObject()
    let longestName = "";
    let mostLetters = 0;
    for (let statss in stats) {
      let statsss = stats[statss].players
      for (let namess in statsss) {
        if (namess.length > mostLetters) {
          mostLetters = namess.length;
          longestName = namess
        }
      }
    }
    return longestName
};

function doesLongNamesStealATon () {
    let stats = gameObject()
    let longestName = "";
    let mostLetters = 0;
    let mostSteals = 0;
    let biggestStealer = "";
    for (let statss in stats) {
      let statsss = stats[statss].players
      for (let namess in statsss) {
        if (namess.length > mostLetters) {
          mostLetters = namess.length;
          longestName = namess
        }
        if (statsss[namess].steals > mostSteals) {
          mostSteals = statsss[namess].steals;
          biggestStealer = namess
        }
      }
    }
    if (longestName === biggestStealer) {
      return true
    }
};

  