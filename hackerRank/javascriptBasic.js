// show data of teams that played more than 'k' number of matches in year 'year'
async function getTeams(year, k) {
  // write your code here
  const allTeams = [];
  const fetch = require("node-fetch");

  // const url = `https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=${year}&page=${pageNumber}`;

  const makeUrl = (page) =>
    `https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=${year}&page=${page}`;

  const response = await fetch(makeUrl(1));
  const data = await response.json();

  const totalPages = data["total_pages"];
  console.log(totalPages);

  for (let i = 2; i < totalPages; i++) {
    const response = await fetch(makeUrl(i));
    let data = await response.json();

    data.data.forEach((x) => {
      allTeams.push(x.team1, x.team2);
    });
  }

  console.log(allTeams);

  const obj = {};

  const seen = new Set(allTeams);
  seen.forEach((x) => {
    obj[x] = 1;
  });
  allTeams.forEach((x) => {
    if (seen.has(x)) {
      obj[x]++;
    }
  });

  const teams = Object.keys(obj).filter((key) => obj[key] >= k);
  console.log("teams", teams);

  return teams;

  // API endpoint template: https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=<YEAR>&page=<PAGE_NUMBER>
}
getTeams(2015, 10);
