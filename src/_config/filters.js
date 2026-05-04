import {toISOString, formatDate} from './filters/dates.js';
import {markdownFormat} from './filters/markdown-format.js';
import {shuffleArray} from './filters/sort-random.js';
import {sortAlphabetically} from './filters/sort-alphabetic.js';
import {splitlines} from './filters/splitlines.js';
import {striptags} from './filters/striptags.js';
import {slugifyString} from './filters/slugify.js';
import { splitTitle } from './filters/split-title.js';
import { base64 } from './filters/base64.js';

export default {
  toISOString,
  formatDate,
  markdownFormat,
  base64,
  splitlines,
  striptags,
  shuffleArray,
  sortAlphabetically,
  slugifyString,
  splitTitle
};
