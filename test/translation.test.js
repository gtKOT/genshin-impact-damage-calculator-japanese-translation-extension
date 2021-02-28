const { deepEntries, delimitEntry } = require('deep-entries');

require('../src/ja');
const translationEntries = deepEntries(cntranslate, delimitEntry)
  .filter(([k, v]) => v != null && v !== '');

test.each(
  translationEntries
)('一部の全角記号・全角数字を含まないこと(%s)', (key, translation) => {
  expect(translation).not.toMatch(/[％＋－０１２３４５６７８９]/);
});

test.each(
  translationEntries
)('ドット無しのLv表記（Lv+3, Lv15など）を含まないこと(%s)', (key, translation) => {
  expect(translation).not.toMatch(/Lv\+?[0-9]+/);
});
