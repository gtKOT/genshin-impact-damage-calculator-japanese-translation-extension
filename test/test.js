require('../src/ja');

const hasCalcStats = (o) => o.calcStats != null;

const extractStats = (talent) => {
  const { constellations, passives, skill, burst } = talent;
  return [...constellations, ...passives, skill, burst]
    .filter(hasCalcStats)
    .map(o => o.calcStats.map(calcStat => calcStat.stat))
    .flat();
};

const { gui, talentData } = cntranslate;

const standardStats = [
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

const hasDuplication = (array) => array.length !== (new Set(array)).size;

const targetDuplicationTest = () => {
  for ([characterName, talent] of Object.entries(talentData)) {
    const stats = [...standardStats, ...extractStats(talent)];
    const existsTargetDuplication = hasDuplication(stats);

    if (existsTargetDuplication) {
      console.error(characterName, stats.sort());
    }
  }
};

targetDuplicationTest();
