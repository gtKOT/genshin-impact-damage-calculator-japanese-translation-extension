const { extractCommonCalcStats, extractCharacterCalcStats } = require('./util/extractor');
const { toBeDistinct } = require('./matcher/to-be-distinct');
expect.extend({ toBeDistinct });

require('../src/ja');
const { gui, talentData } = cntranslate;

test.each(
  Object.entries(talentData)
)('「対象」に並ぶ項目名に重複がないこと(%s)', (characterName, talent) => {
  const calcStats = [...extractCommonCalcStats(gui), ...extractCharacterCalcStats(talent)];
  expect(calcStats).toBeDistinct();
});
