import { LRLanguage, LanguageSupport } from '@codemirror/language'
import {styleTags, tags as t} from "@lezer/highlight"
import {parser} from "./js.grammar"
import {parser as jsParser} from "@lezer/javascript"
import {parseMixed} from "@lezer/common";

export const jsLanguage = LRLanguage.define({
  parser: parser.configure({
    wrap:parseMixed(node=>{
      console.log(node.name)
      return node.name === "JsText" ? {parser: jsParser} : null
    }),
    props: [
      styleTags({
        "{{ }}": t.paren
      }),
    ]
  })
})

export const js = function () {
  return new LanguageSupport(jsLanguage)
}

export {parser}
