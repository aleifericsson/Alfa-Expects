const mystery = async () => {
    const response = await fetch(`https://raw.githubusercontent.com/openfootball/football.json/master/2017-18/en.1.json`);
    const clubse = await response.json()
    const club = clubse.rounds[23].matches[2].team1;
    return club;
}

export default mystery;