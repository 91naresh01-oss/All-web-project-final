import React from 'react';

// ─── Rendering Style Constants ───────────────────────────────────────────────
const BRACKET_STYLE = 'font-serif text-slate-500 font-light select-none text-[1.15em]';
const LARGE_BRACKET_STYLE = 'font-serif text-slate-400 font-light select-none text-[1.8em] leading-none';
const FRACTION_WRAP = 'inline-flex flex-col items-stretch justify-center align-middle mx-1 relative top-[0.05em]';
const FRACTION_NUM = 'text-[0.85em] leading-none pb-[1px] px-[4px] text-center';
const FRACTION_DEN = 'text-[0.85em] leading-none pt-[3px] px-[4px] text-center border-t-[1.5px] border-current';
const SUP_STYLE = 'text-[0.75em] font-bold relative -top-[0.9em] ml-[1px]';
const SUB_STYLE = 'text-[0.75em] font-bold relative top-[0.15em] ml-[1px]';

// ─── Safety Limits ───────────────────────────────────────────────────────────
const MAX_LOOP_ITERATIONS = 500;

const unicodeSubscriptMap = {
  '\u2080': '0',
  '\u2081': '1',
  '\u2082': '2',
  '\u2083': '3',
  '\u2084': '4',
  '\u2085': '5',
  '\u2086': '6',
  '\u2087': '7',
  '\u2088': '8',
  '\u2089': '9',
  '\u208a': '+',
  '\u208b': '-',
  '\u208c': '=',
  '\u208d': '(',
  '\u208e': ')',
  '\u2090': 'a',
  '\u2091': 'e',
  '\u2095': 'h',
  '\u1d62': 'i',
  '\u2c7c': 'j',
  '\u2096': 'k',
  '\u2097': 'l',
  '\u2098': 'm',
  '\u2099': 'n',
  '\u2092': 'o',
  '\u209a': 'p',
  '\u1d63': 'r',
  '\u209b': 's',
  '\u209c': 't',
  '\u1d64': 'u',
  '\u1d65': 'v',
  '\u2093': 'x',
};

const unicodeSuperscriptMap = {
  '\u2070': '0',
  '\u00B9': '1',
  '\u00B2': '2',
  '\u00B3': '3',
  '\u2074': '4',
  '\u2075': '5',
  '\u2076': '6',
  '\u2077': '7',
  '\u2078': '8',
  '\u2079': '9',
  '\u207A': '+',
  '\u207B': '-',
  '\u207F': 'n',
};

function replaceUnicodeSuperscripts(text) {
  let result = '';
  let i = 0;
  while (i < text.length) {
    if (Object.prototype.hasOwnProperty.call(unicodeSuperscriptMap, text[i])) {
      let supStr = '';
      while (i < text.length && Object.prototype.hasOwnProperty.call(unicodeSuperscriptMap, text[i])) {
        supStr += unicodeSuperscriptMap[text[i]];
        i++;
      }
      result += supStr.length === 1 ? '^' + supStr : '^(' + supStr + ')';
    } else {
      result += text[i];
      i++;
    }
  }
  return result;
}

const artifactReplacements = [
  ['ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â', '\u00d7'],
  ['ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â', '\u00d7'],
  ['ÃƒÆ’Ã¢â‚¬â€', '\u00d7'],
  ['Ãƒâ€”', '\u00d7'],
  ['ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â·', '\u00f7'],
  ['ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â·', '\u00f7'],
  ['ÃƒÆ’Ã‚Â·', '\u00f7'],
  ['ÃƒÂ·', '\u00f7'],
  ['Ã¢Ë†Å¡', '\u221a'],
  ['ÃƒÂ¢Ã‹â€ Ã…Â¡', '\u221a'],
  ['Ã¢Ë†â€º', '\u221b'],
  ['ÃƒÂ¢Ã‹â€ Ã¢â‚¬Âº', '\u221b'],
  ['Ã¢â€° ', '\u2260'],
  ['Ã¢â€°Â ', '\u2260'],
  ['ÃƒÂ¢Ã¢â‚¬Â° ', '\u2260'],
  ['ÃƒÂ¢Ã¢â‚¬Â°Ã‚Â ', '\u2260'],
  ['Ã¢â€ â€™', '\u2192'],
  ['ÃƒÂ¢Ã¢â‚¬Â Ã¢â‚¬â„¢', '\u2192'],
  ['Ã¢Ë†Å¾', '\u221e'],
  ['ÃƒÂ¢Ã‹â€ Ã…Â¾', '\u221e'],
];

const answerPrefixes = ['\u0a9c\u0ab5\u0abe\u0aac', 'answer', 'ans'];
const notePrefixes = ['\u0aa8\u0acb\u0a82\u0aa7', 'note', '\u0aaf\u0abe\u0aa6'];
const examplePrefixes = ['\u0a89\u0aa6\u0abe\u0ab9\u0ab0\u0aa3', 'example', 'ex'];

function classNames(...values) {
  return values.filter(Boolean).join(' ');
}

function toTrimmedString(value) {
  if (typeof value !== 'string') {
    return '';
  }

  return normalizeMathArtifacts(value).trim();
}

export function normalizeMathArtifacts(text) {
  if (typeof text !== 'string') {
    return text;
  }

  // Strip $...$ math delimiters (keep inner content)
  let cleaned = text.replace(/\$([^$]*)\$/g, '$1');

  // Convert LaTeX-style ^{...} to ^(...) and _{...} to _(...)
  cleaned = cleaned.replace(/\^{([^}]*)}/g, '^($1)');
  cleaned = cleaned.replace(/_{([^}]*)}/g, '_($1)');

  // Convert single-character unicode fractions to standard string fractions
  const unicodeFractions = {
    '\u00bd': '1/2', '\u2153': '1/3', '\u2154': '2/3', '\u00bc': '1/4',
    '\u00be': '3/4', '\u2155': '1/5', '\u2156': '2/5', '\u2157': '3/5',
    '\u2158': '4/5', '\u2159': '1/6', '\u215a': '5/6', '\u215b': '1/8',
    '\u215c': '3/8', '\u215d': '5/8', '\u215e': '7/8',
  };
  cleaned = cleaned.replace(/[\u00bd\u2153-\u215e\u00bc\u00be]/g, match => unicodeFractions[match]);

  // Convert composed unicode fractions (e.g. ⁴/₇) to standard string fractions (4/7)
  cleaned = cleaned.replace(/([\u2070\u00B9\u00B2\u00B3\u2074-\u2079\u207A\u207B]+)\/([\u2080-\u2089\u208A\u208B]+)/g, (match, sup, sub) => {
    const normalSup = sup.split('').map(c => unicodeSuperscriptMap[c] || c).join('');
    const normalSub = sub.split('').map(c => unicodeSubscriptMap[c] || c).join('');
    return `${normalSup}/${normalSub}`;
  });

  cleaned = artifactReplacements.reduce(
    (current, [source, target]) => current.replaceAll(source, target),
    cleaned
  );

  return replaceUnicodeSuperscripts(cleaned);
}

function isBaseChar(char) {
  return /[A-Za-z0-9.\u221a\u221b\u0A80-\u0AFF]/.test(char);
}

function isExponentChar(char) {
  return /[A-Za-z0-9.\u0A80-\u0AFF]/.test(char);
}

function isSubscriptChar(char) {
  return Object.prototype.hasOwnProperty.call(unicodeSubscriptMap, char);
}

function isMathContentChar(char) {
  return /[A-Za-z0-9.\u00d7\u00f7\u221a\u221b\u0A80-\u0AFF]/.test(char) || isSubscriptChar(char);
}

function isInlineOperator(char) {
  return /[+\-*=,;:?]/.test(char) || char === '\u00d7' || char === '\u00f7';
}

function findBaseStart(text, markerIndex) {
  let index = markerIndex - 1;

  if (index < 0) {
    return markerIndex;
  }

  if (text[index] === ')') {
    let depth = 1;
    index -= 1;
    let safety = 0;

    while (index >= 0 && safety++ < MAX_LOOP_ITERATIONS) {
      if (text[index] === ')') depth += 1;
      if (text[index] === '(') depth -= 1;
      if (depth === 0) return index;
      index -= 1;
    }

    return markerIndex;
  }

  while (index >= 0 && isBaseChar(text[index])) {
    index -= 1;
  }

  return index + 1;
}

function readExponent(text, markerIndex) {
  let index = markerIndex + 1;

  if (index >= text.length) {
    return null;
  }

  if (text[index] === '(') {
    let depth = 1;
    index += 1;
    const start = index;
    let safety = 0;

    while (index < text.length && safety++ < MAX_LOOP_ITERATIONS) {
      if (text[index] === '(') depth += 1;
      if (text[index] === ')') depth -= 1;
      if (depth === 0) {
        return {
          value: text.slice(start, index),
          end: index + 1,
        };
      }
      index += 1;
    }

    return null;
  }

  if (text[index] === '+' || text[index] === '-') {
    index += 1;
  }

  const start = markerIndex + 1;

  while (index < text.length && isExponentChar(text[index])) {
    index += 1;
  }

  if (start === index) {
    return null;
  }

  return {
    value: text.slice(start, index),
    end: index,
  };
}

function readUnderscoreSubscript(text, underscoreIndex) {
  let index = underscoreIndex + 1;

  if (index >= text.length) {
    return null;
  }

  if (text[index] === '(') {
    let depth = 1;
    index += 1;
    const start = index;
    let safety = 0;

    while (index < text.length && safety++ < MAX_LOOP_ITERATIONS) {
      if (text[index] === '(') depth += 1;
      if (text[index] === ')') depth -= 1;
      if (depth === 0) {
        return {
          value: text.slice(start, index),
          end: index + 1,
        };
      }
      index += 1;
    }

    return null;
  }

  const start = index;

  while (index < text.length && /[A-Za-z0-9+\-\u0A80-\u0AFF]/.test(text[index])) {
    index += 1;
  }

  if (start === index) {
    return null;
  }

  return {
    value: text.slice(start, index),
    end: index,
  };
}

function readUnicodeSubscript(text, startIndex) {
  let index = startIndex;
  let safety = 0;

  while (index < text.length && isSubscriptChar(text[index]) && safety++ < MAX_LOOP_ITERATIONS) {
    index += 1;
  }

  if (index === startIndex) {
    return null;
  }

  return {
    value: text
      .slice(startIndex, index)
      .split('')
      .map((char) => unicodeSubscriptMap[char] ?? char)
      .join(''),
    end: index,
  };
}

function findMathMarker(text) {
  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];

    if (char === '^') {
      return { index, type: 'sup' };
    }

    if (char === '_' && index > 0 && (isBaseChar(text[index - 1]) || text[index - 1] === ')')) {
      return { index, type: 'sub' };
    }

    if (isSubscriptChar(char)) {
      return { index, type: 'unicode-sub' };
    }
  }

  return null;
}

function skipWhitespaceBackward(text, index) {
  let current = index;
  let safety = 0;

  while (current >= 0 && /\s/.test(text[current]) && safety++ < MAX_LOOP_ITERATIONS) {
    current -= 1;
  }

  return current;
}

function skipWhitespaceForward(text, index) {
  let current = index;
  let safety = 0;

  while (current < text.length && /\s/.test(text[current]) && safety++ < MAX_LOOP_ITERATIONS) {
    current += 1;
  }

  return current;
}

function readFractionTokenBackward(text, endIndex) {
  let index = endIndex;
  let depth = 0;
  let safety = 0;

  while (index >= 0 && safety++ < MAX_LOOP_ITERATIONS) {
    const char = text[index];

    if (char === ')') {
      depth += 1;
      index -= 1;
      continue;
    }

    if (char === '(') {
      if (depth === 0) {
        break;
      }

      depth -= 1;
      index -= 1;
      continue;
    }

    if (depth === 0 && (char === '/' || isInlineOperator(char) || /\s/.test(char))) {
      break;
    }

    if (depth === 0 && !isMathContentChar(char) && char !== '^' && char !== '_') {
      break;
    }

    index -= 1;
  }

  const start = index + 1;
  const value = text.slice(start, endIndex + 1).trim();

  return value ? { start, value } : null;
}

function readFractionTokenForward(text, startIndex) {
  let index = startIndex;
  let depth = 0;
  let safety = 0;

  while (index < text.length && safety++ < MAX_LOOP_ITERATIONS) {
    const char = text[index];

    if (char === '(') {
      depth += 1;
      index += 1;
      continue;
    }

    if (char === ')') {
      if (depth === 0) {
        break;
      }

      depth -= 1;
      index += 1;
      continue;
    }

    if (depth === 0 && (char === '/' || isInlineOperator(char) || /\s/.test(char))) {
      break;
    }

    if (depth === 0 && !isMathContentChar(char) && char !== '^' && char !== '_') {
      break;
    }

    index += 1;
  }

  const value = text.slice(startIndex, index).trim();

  return value ? { end: index, value } : null;
}

function isMathToken(value) {
  return typeof value === 'string' && /[A-Za-z0-9\u221a\u221b\u0A80-\u0AFF]/.test(value);
}

function findFractionCandidate(text) {
  for (let index = 0; index < text.length; index += 1) {
    if (text[index] !== '/') {
      continue;
    }

    const leftIndex = skipWhitespaceBackward(text, index - 1);
    const rightIndex = skipWhitespaceForward(text, index + 1);

    if (leftIndex < 0 || rightIndex >= text.length) {
      continue;
    }

    const numerator = readFractionTokenBackward(text, leftIndex);
    const denominator = readFractionTokenForward(text, rightIndex);

    if (!numerator || !denominator) {
      continue;
    }

    if (!isMathToken(numerator.value) || !isMathToken(denominator.value)) {
      continue;
    }

    return {
      type: 'fraction',
      start: numerator.start,
      end: denominator.end,
      numerator: numerator.value,
      denominator: denominator.value,
    };
  }

  return null;
}

function findMatchingBracket(text, startIndex, openChar, closeChar) {
  let depth = 0;
  let safety = 0;

  for (let index = startIndex; index < text.length && safety++ < MAX_LOOP_ITERATIONS; index += 1) {
    if (text[index] === openChar) {
      depth += 1;
    } else if (text[index] === closeChar) {
      depth -= 1;

      if (depth === 0) {
        return index;
      }
    }
  }

  return -1;
}

function hasStructuredMathContent(text) {
  return /[\/^_]/.test(text) || [...text].some((char) => isSubscriptChar(char));
}

function findBracketGroupCandidate(text) {
  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    if (char !== '(' && char !== '[') {
      continue;
    }

    const openChar = char;
    const closeChar = char === '(' ? ')' : ']';
    const end = findMatchingBracket(text, index, openChar, closeChar);

    if (end === -1) {
      continue;
    }

    const inner = text.slice(index + 1, end).trim();

    if (!inner || !hasStructuredMathContent(inner)) {
      continue;
    }

    return {
      type: 'group',
      bracketType: openChar === '(' ? 'paren' : 'square',
      start: index,
      end: end + 1,
      value: inner,
    };
  }

  return null;
}

function findSuperSubCandidate(text) {
  const marker = findMathMarker(text);

  if (!marker) {
    return null;
  }

  const baseStart = findBaseStart(text, marker.index);
  const suffix =
    marker.type === 'sup'
      ? readExponent(text, marker.index)
      : marker.type === 'sub'
        ? readUnderscoreSubscript(text, marker.index)
        : readUnicodeSubscript(text, marker.index);

  if (!suffix) {
    return null;
  }

  return {
    type: marker.type,
    start: baseStart,
    base: text.slice(baseStart, marker.index),
    value: suffix.value,
    end: suffix.end,
  };
}

function findNextRenderableToken(text, skipFractions = false) {
  const group = findBracketGroupCandidate(text);
  const fraction = skipFractions ? null : findFractionCandidate(text);
  const superSub = findSuperSubCandidate(text);

  const candidates = [group, fraction, superSub].filter(Boolean);

  if (!candidates.length) {
    return null;
  }

  candidates.sort((first, second) => {
    if (first.start !== second.start) {
      return first.start - second.start;
    }

    if (first.end !== second.end) {
      return second.end - first.end;
    }

    if (first.type === 'group' && second.type !== 'group') {
      return -1;
    }

    if (second.type === 'group' && first.type !== 'group') {
      return 1;
    }

    if (first.type === 'fraction' && second.type !== 'fraction') {
      return -1;
    }

    if (second.type === 'fraction' && first.type !== 'fraction') {
      return 1;
    }

    return 0;
  });

  return candidates[0];
}

// ─── Render Components ───────────────────────────────────────────────────────

const MathFraction = ({ numerator, denominator, keyPrefix }) => (
  <span
    key={`${keyPrefix}-fraction`}
    className={FRACTION_WRAP}
    aria-label={`${numerator} over ${denominator}`}
  >
    <span className={FRACTION_NUM}>{renderMathText(numerator, `${keyPrefix}-num`)}</span>
    <span className={FRACTION_DEN}>{renderMathText(denominator, `${keyPrefix}-den`)}</span>
  </span>
);

const MathGroup = ({ value, exponent, keyPrefix, bracketType = 'paren' }) => {
  const hasFraction = typeof value === 'string' && value.includes('/');
  const bracketClass = hasFraction ? LARGE_BRACKET_STYLE : BRACKET_STYLE;
  const openBracket = bracketType === 'square' ? '[' : '(';
  const closeBracket = bracketType === 'square' ? ']' : ')';

  const expClass = hasFraction
    ? 'text-[0.75em] font-bold relative -top-[2.0em] -translate-y-[0.5em] -ml-[0.4em]'
    : 'text-[0.75em] font-bold relative -top-[0.8em] -translate-y-[0.5em] ml-[1px]';
  
  return (
    <span key={`${keyPrefix}-grouped`} className={`inline-flex items-center align-middle relative px-0.5 ${hasFraction ? '-top-[0.1em]' : 'h-[1.25em] -top-0.5'}`}>
      <span className={bracketClass}>{openBracket}</span>
      <span className="inline-block px-0.5">{renderMathText(value, `${keyPrefix}-content`)}</span>
      <span className={bracketClass}>{closeBracket}</span>
      {exponent && <sup className={expClass}>{renderMathText(exponent, `${keyPrefix}-exp`, true)}</sup>}
    </span>
  );
};

const MathSuperSub = ({ base, subValue, supValue, keyPrefix }) => (
  <span key={`${keyPrefix}-supersub`} className="inline-flex items-baseline align-baseline">
    {renderMathText(base, `${keyPrefix}-base`)}
    {subValue && <sub className={SUB_STYLE}>{renderMathText(subValue, `${keyPrefix}-sub`)}</sub>}
    {supValue && <sup className={SUP_STYLE}>{renderMathText(supValue, `${keyPrefix}-exp`, true)}</sup>}
  </span>
);

/**
 * Recursively renders math text with proper fractions, superscripts, subscripts, and bracket groups.
 */
export function renderMathText(rawText, keyPrefix = 'math', skipFractions = false) {
  const text = normalizeMathArtifacts(rawText);
  if (typeof text !== 'string') return text;

  const token = findNextRenderableToken(text, skipFractions);
  if (!token) return text;

  const before = text.slice(0, token.start);
  let after = text.slice(token.end);
  let groupExponent = null;

  let afterTrimmed = after.trimStart();
  if (token.type === 'group' && afterTrimmed.startsWith('^')) {
    const expResult = readExponent(afterTrimmed, 0);
    if (expResult) {
      groupExponent = expResult.value;
      after = afterTrimmed.slice(expResult.end);
      afterTrimmed = after.trimStart();
    }
  }

  let subValue = token.type === 'sub' || token.type === 'unicode-sub' ? token.value : null;
  let supValue = token.type === 'sup' ? token.value : null;

  if ((token.type === 'sub' || token.type === 'unicode-sub') && afterTrimmed.startsWith('^')) {
    const expResult = readExponent(afterTrimmed, 0);
    if (expResult) {
      supValue = expResult.value;
      after = afterTrimmed.slice(expResult.end);
    }
  } else if (token.type === 'sup') {
    if (afterTrimmed.startsWith('_')) {
      const subResult = readUnderscoreSubscript(afterTrimmed, 0);
      if (subResult) {
        subValue = subResult.value;
        after = afterTrimmed.slice(subResult.end);
      }
    } else {
      const subResult = readUnicodeSubscript(afterTrimmed, 0);
      if (subResult) {
        subValue = subResult.value;
        after = afterTrimmed.slice(subResult.end);
      }
    }
  }

  return (
    <>
      {before && renderMathText(before, `${keyPrefix}-before`)}
      {token.type === 'group' ? (
        <MathGroup value={token.value} exponent={groupExponent} keyPrefix={keyPrefix} bracketType={token.bracketType} />
      ) : token.type === 'fraction' ? (
        <MathFraction numerator={token.numerator} denominator={token.denominator} keyPrefix={keyPrefix} />
      ) : (
        <MathSuperSub base={token.base} subValue={subValue} supValue={supValue} keyPrefix={keyPrefix} />
      )}
      {after && renderMathText(after, `${keyPrefix}-after`)}
    </>
  );
}

export function inferLineTone(text, fallbackTone = 'normal') {
  const normalized = toTrimmedString(text).toLowerCase();

  if (!normalized) {
    return fallbackTone;
  }

  if (answerPrefixes.some((prefix) => normalized.startsWith(prefix))) {
    return 'answer';
  }

  if (examplePrefixes.some((prefix) => normalized.startsWith(prefix))) {
    return 'example';
  }

  if (
    notePrefixes.some((prefix) => normalized.startsWith(prefix)) ||
    (normalized.startsWith('(') && normalized.endsWith(')'))
  ) {
    return 'note';
  }

  return fallbackTone;
}

function normalizeLineEntry(entry, fallbackTone = 'normal') {
  if (entry == null) {
    return null;
  }

  if (typeof entry === 'string') {
    const main = toTrimmedString(entry);

    return main
      ? { main, tone: inferLineTone(main, fallbackTone) }
      : null;
  }

  if (typeof entry === 'object') {
    const main = toTrimmedString(entry.main ?? entry.text ?? '');
    const subtext = toTrimmedString(entry.subtext ?? '');
    const tone = entry.tone || inferLineTone(main || subtext, fallbackTone);

    if (!main && !subtext) {
      return null;
    }

    return { main, subtext, tone };
  }

  return null;
}

function splitStringLines(text) {
  return normalizeMathArtifacts(text)
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);
}

export function getContentLines(content, options = {}) {
  const { fallbackTone = 'normal' } = options;

  if (content == null) {
    return [];
  }

  if (Array.isArray(content)) {
    return content.flatMap((entry) => {
      if (typeof entry === 'string' && entry.includes('\n')) {
        return splitStringLines(entry)
          .map((line) => normalizeLineEntry(line, fallbackTone))
          .filter(Boolean);
      }

      const normalized = normalizeLineEntry(entry, fallbackTone);
      return normalized ? [normalized] : [];
    });
  }

  if (typeof content === 'string') {
    const lines = splitStringLines(content);

    if (lines.length > 1) {
      return lines
        .map((line) => normalizeLineEntry(line, fallbackTone))
        .filter(Boolean);
    }

    const normalized = normalizeLineEntry(content, fallbackTone);
    return normalized ? [normalized] : [];
  }

  const normalized = normalizeLineEntry(content, fallbackTone);
  return normalized ? [normalized] : [];
}

export function getSolutionSteps(solution) {
  const directLines = getContentLines(solution, { fallbackTone: 'normal' });

  if (directLines.length > 1 || typeof solution !== 'string') {
    return directLines;
  }

  const normalized = normalizeMathArtifacts(solution);

  if (typeof normalized !== 'string') {
    return [];
  }

  const sentenceSteps = normalized
    .split(/\.\s+|\.$/)
    .map((step) => step.trim())
    .filter(Boolean);

  if (sentenceSteps.length > 1) {
    return sentenceSteps
      .map((step) => normalizeLineEntry(step, 'normal'))
      .filter(Boolean);
  }

  return directLines;
}

function toLineArray(value, fallbackTone = 'normal') {
  return getContentLines(value, { fallbackTone });
}

export function getFormulaContent(formulaItem = {}) {
  let fraction = null;
  let formulaLines = [];

  if (formulaItem.fraction) {
    fraction = {
      numerator: toLineArray(formulaItem.fraction.numerator, 'normal'),
      denominator: toLineArray(formulaItem.fraction.denominator, 'normal'),
    };
  } else if (formulaItem.formulaLines) {
    formulaLines = toLineArray(formulaItem.formulaLines, 'normal');
  } else if (typeof formulaItem.formula === 'string') {
    const slashFractionMatch = normalizeMathArtifacts(formulaItem.formula).match(
      /^(.*?=\s*)(.+?)\s\/\s(.+)$/
    );

    if (slashFractionMatch) {
      fraction = {
        numerator: toLineArray(`${slashFractionMatch[1]}${slashFractionMatch[2]}`, 'normal'),
        denominator: toLineArray(slashFractionMatch[3], 'normal'),
      };
    }

    const lines = splitStringLines(formulaItem.formula);
    const dividerIndex = lines.findIndex((line) => /^[-_]{3,}$/.test(line));

    if (!fraction && dividerIndex > 0 && dividerIndex < lines.length - 1) {
      fraction = {
        numerator: toLineArray(lines.slice(0, dividerIndex), 'normal'),
        denominator: toLineArray(lines.slice(dividerIndex + 1), 'normal'),
      };
    } else if (!fraction) {
      formulaLines = toLineArray(lines, 'normal');
    }
  }

  return {
    formulaLines,
    fraction,
    exampleLines: toLineArray(formulaItem.exampleLines ?? formulaItem.example, 'normal'),
    noteLines: toLineArray(formulaItem.noteLines, 'note'),
  };
}

export function RichContentStack({
  content,
  className = '',
  lineClassName = '',
  mainClassName = '',
  subtextClassName = '',
  as = 'div',
  lineAs = 'div',
  mainAs = 'span',
  subtextAs = 'span',
  fallbackTone = 'normal',
  lineKeyPrefix = 'line',
}) {
  const lines = getContentLines(content, { fallbackTone });

  if (!lines.length) {
    return null;
  }

  const ContainerTag = as;
  const LineTag = lineAs;
  const MainTag = mainAs;
  const SubtextTag = subtextAs;

  return (
    <ContainerTag className={classNames('flex flex-col', className)}>
      {lines.map((line, index) => (
        <LineTag
          key={`${lineKeyPrefix}-${index}`}
          className={classNames(
            'flex flex-col',
            line.tone === 'answer' ? 'text-primary' : '',
            lineClassName
          )}
        >
          {line.main ? (
            <MainTag
              className={classNames(
                mainClassName.includes('text-white') ? '' : 'text-slate-800',
                line.tone === 'answer' ? 'font-bold' : '',
                line.tone === 'note' ? 'italic text-slate-500' : '',
                line.tone === 'example' ? 'italic font-medium text-indigo-600' : '',
                mainClassName
              )}
            >
              {renderMathText(line.main, `${lineKeyPrefix}-main-${index}`)}
            </MainTag>
          ) : null}
          {line.subtext ? (
            <SubtextTag
              className={classNames(
                'text-[0.85em]',
                subtextClassName.includes('text-white') ? '' : 'text-slate-500',
                line.tone === 'answer' ? 'font-normal opacity-70' : '',
                line.tone === 'note' ? 'opacity-60' : '',
                subtextClassName
              )}
            >
              {renderMathText(line.subtext, `${lineKeyPrefix}-subtext-${index}`)}
            </SubtextTag>
          ) : null}
        </LineTag>
      ))}
    </ContainerTag>
  );
}
