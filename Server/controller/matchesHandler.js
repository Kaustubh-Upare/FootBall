const axios = require("axios");
const { TryCatcher } = require("../utility/ErrorHandler");

const getMatches = TryCatcher(async (req, res) => {
  const response = await axios.get(process.env.FOOTBALL_API, {
    headers: {
      'X-Auth-Token': process.env.X_AUTH_TOKEN
    }
  });

  const matches = response.data.matches;

  if (matches.length === 0) {
    res.json(matches);
  } else {
    const ty=matches.map((match)=>({
        HomeTeam:{name:match.homeTeam.name,image:match.homeTeam.crest},
        AwayTeam:{name:match.awayTeam.name,image:match.awayTeam.crest},
        Date:match.utcDate,

    }))
   res.json(ty);
  }

});

module.exports = { getMatches };
