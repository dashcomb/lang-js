import { LRLanguage, LanguageSupport } from '@codemirror/language';
import { LRParser } from '@lezer/lr';

declare const parser: LRParser

declare const jsLanguage: LRLanguage;
declare const js: () => LanguageSupport;

export { js, jsLanguage, parser };
