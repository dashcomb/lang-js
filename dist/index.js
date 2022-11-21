import { LRLanguage, LanguageSupport } from '@codemirror/language';
import { styleTags, tags } from '@lezer/highlight';
import { LRParser } from '@lezer/lr';
import { parser as parser$1 } from '@lezer/javascript';
import { parseMixed } from '@lezer/common';

// This file was generated by lezer-generator. You probably shouldn't edit it.
const parser = /*@__PURE__*/LRParser.deserialize({
  version: 14,
  states: "!^QQOPOOOVOQO'#C`QQOPOOOOOO'#Cb'#CbOOOO'#Cc'#CcO_OQO,58zOOOO,58z,58zOOOO-E6`-E6`OOOO-E6a-E6aOOOO1G.f1G.f",
  stateData: "g~ORPO~OQUOTSO~OQXOTSO~O",
  goto: "iWPPPPXP]cTROQQQORVQQTPRWT",
  nodeNames: "⚠ Program EndJsTag StartJsTag JsTag JsText",
  maxTerm: 8,
  nodeProps: [
    ["openedBy", 2,"StartJsTag"],
    ["closedBy", 3,"EndJsTag"]
  ],
  skippedNodes: [0],
  repeatNodeCount: 2,
  tokenData: "#W~RVO#oh#o#p!P#p#qh#q#r!{#r;'Sh;'S;=`y<%lOhQmSTQO#qh#r;'Sh;'S;=`y<%lOhQ|P;=`<%lhR!UUTQO#oh#o#p!h#p#qh#r;'Sh;'S;=`y<%lOhR!oSTQRPO#qh#r;'Sh;'S;=`y<%lOh~#OP#q#r#R~#WOQ~",
  tokenizers: [0, 1],
  topRules: {"Program":[0,1]},
  tokenPrec: 0
});

const jsLanguage = /*@__PURE__*/LRLanguage.define({
    parser: /*@__PURE__*/parser.configure({
        wrap: /*@__PURE__*/parseMixed(node => {
            console.log(node.name);
            return node.name === "JsText" ? { parser: parser$1 } : null;
        }),
        props: [
            /*@__PURE__*/styleTags({
                StartJsTag: tags.paren,
                EndJsTag: tags.paren
            }),
        ]
    })
});
const js = function () {
    return new LanguageSupport(jsLanguage);
};

export { js, jsLanguage, parser };
