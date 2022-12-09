'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var language = require('@codemirror/language');
var lr = require('@lezer/lr');
var javascript = require('@lezer/javascript');
var common = require('@lezer/common');

// This file was generated by lezer-generator. You probably shouldn't edit it.
const parser = lr.LRParser.deserialize({
  version: 14,
  states: "!dQQOPOOOYOQO'#CaOOOO'#Cf'#CfOOOO'#Cc'#CcQQOPOOOOOO'#Cd'#CdObOQO,58{OOOO,58{,58{OOOO-E6a-E6aOOOO-E6b-E6bOOOO1G.g1G.g",
  stateData: "p~OQQOSPO~ORVOUTO~ORYOUTO~OSQRUR~",
  goto: "pZPPPPP[P`fPlTQOSQSORWSQUPRXUTROS",
  nodeNames: "⚠ Program Text JsEndTag JsStartTag JsTag JsText",
  maxTerm: 10,
  nodeProps: [
    ["openedBy", 3,"JsStartTag"],
    ["closedBy", 4,"JsEndTag"]
  ],
  skippedNodes: [0],
  repeatNodeCount: 2,
  tokenData: "$tRRVO#oh#o#p![#p#qh#q#r#h#r;'Sh;'S;=`!U<%lOhRoVQPUQO#oh#o#ph#p#qh#q#rh#r;'Sh;'S;=`!U<%lOhR!XP;=`<%lhR!cVQPUQO#oh#o#p!x#p#qh#q#rh#r;'Sh;'S;=`!U<%lOhR#RVSPQPUQO#oh#o#ph#p#qh#q#rh#r;'Sh;'S;=`!U<%lOhR#oVQPUQO#oh#o#ph#p#qh#q#r$U#r;'Sh;'S;=`!U<%lOhR$_VQPRQUQO#oh#o#ph#p#qh#q#rh#r;'Sh;'S;=`!U<%lOh",
  tokenizers: [0, 1],
  topRules: {"Program":[0,1]},
  tokenPrec: 26
});

const jsLanguage = language.LRLanguage.define({
    parser: parser.configure({
        wrap: common.parseMixed(node => {
            return node.name === "JsText" ? { parser: javascript.parser } : null;
        })
    })
});
const js = function () {
    return new language.LanguageSupport(jsLanguage);
};

exports.js = js;
exports.jsLanguage = jsLanguage;
exports.parser = parser;
