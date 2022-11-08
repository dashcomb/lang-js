import { LRLanguage, LanguageSupport } from '@codemirror/language';

declare const jsLanguage: LRLanguage;
declare const js: () => LanguageSupport;

export { js, jsLanguage };
