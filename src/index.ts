import { LRLanguage, LanguageSupport } from '@codemirror/language'
import {styleTags, tags as t} from "@lezer/highlight"
import {parser} from "./js.grammar"
import {parser as jsParser} from "@lezer/javascript"
import {parseMixed} from "@lezer/common";

export const jsLanguage = LRLanguage.define({
  parser: parser.configure({
    wrap:parseMixed(node=>{
      return node.name === "JsText" ? {parser: jsParser} : null
    })
  }),
  // languageData: {
  //   closeBrackets: {brackets: ["{{","(", "[", "{", "'", '"']},
  // }
})

export const js = function () {
  return new LanguageSupport(jsLanguage)
}

export {parser}
