const extractCommonCalcStats = (gui) => [
  gui['Default'],
  gui['Hit-1'],
  gui['Hit-2'],
  gui['Hit-3'],
  gui['Hit-4'],
  gui['Hit-5'],
  gui['Hit-6'],
  gui['Charge Attack 1'],
  gui['Charge Attack 2'],
  gui['Plunge'],
  gui['Low Plunge'],
  gui['High Plunge'],
  gui['DPS'],
  gui['Total DPS'],
  gui['Wep Bonus Hit'],
  gui['Proc Frequency'],
  gui['Bonus DPS'],
  gui['Electrocharged'],
  gui['Overloaded'],
  gui['Superconduct'],
  gui['Pyro Swirl'],
  gui['Hydro Swirl'],
  gui['Electro Swirl'],
  gui['Cryo Swirl'],
  gui['Shattered'],
  gui['Vaporize'],
  gui['Melt'],
  gui['Crystallize'],
];

const extractCharacterCalcStats = (characterTalent) => {
  const { constellations, passives, skill, burst } = characterTalent;
  return [...constellations, ...passives, skill, burst]
    .filter(o => o.calcStats != null)
    .map(o => o.calcStats.map(calcStat => calcStat.stat))
    .flat();
};

module.exports = {
  extractCommonCalcStats,
  extractCharacterCalcStats
};
