import { LRLanguage, LanguageSupport } from '@codemirror/language';
import { LRParser } from '@lezer/lr';
import { parser as parser$1 } from '@lezer/javascript';
import { parseMixed } from '@lezer/common';

// This file was generated by lezer-generator. You probably shouldn't edit it.
const parser = /*@__PURE__*/LRParser.deserialize({
  version: 14,
  states: "!dQYQPOOObQQO'#CaOOQO'#Ci'#CiOOQO'#Cc'#CcQYQPOOOOQO'#Cd'#CdOjQQO,58{OOQO,58{,58{OOQO-E6a-E6aOOQO-E6b-E6bOOQO1G.g1G.g",
  stateData: "u~OZOS[OS~OQQOSPO~ORVOUTO~ORYOUTO~OUQ~",
  goto: "s^PPPPP_PciPPPPoTQOSQSORWSQUPRXUTROS",
  nodeNames: "⚠ Program Text JsEndTag JsStartTag JsTag JsText",
  maxTerm: 13,
  nodeProps: [
    ["openedBy", 3,"JsStartTag"],
    ["closedBy", 4,"JsEndTag"]
  ],
  skippedNodes: [0],
  repeatNodeCount: 2,
  tokenData: ")_~RpOX#VXY$yYZ&wZ[$y[]#V]^&w^p#Vpq$yq#o#V#o#p'g#p#q#V#q#r(c#r$f#V$f$g$y$g#BY#V#BY#BZ$y#BZ$IS#V$IS$I_$y$I_$I|#V$I|$I}&w$I}$JO&w$JO$JT#V$JT$JU$y$JU$KV#V$KV$KW$y$KW&FU#V&FU&FV$y&FV;'S#V;'S;=`$s<%l?HT#V?HT?HU$y?HUO#VR#^VUQQPO#o#V#o#p#s#p#q#V#q#r$[#r;'S#V;'S;=`$s<%lO#VQ#xSUQO#q#s#r;'S#s;'S;=`$U<%lO#sQ$XP;=`<%l#sP$aSQPO#o$[#p;'S$[;'S;=`$m<%lO$[P$pP;=`<%l$[R$vP;=`<%l#V~%SkUQZ~QPOX#VXY$yYZ#VZ[$y[p#Vpq$yq#o#V#o#p#s#p#q#V#q#r$[#r$f#V$f$g$y$g#BY#V#BY#BZ$y#BZ$IS#V$IS$I_$y$I_$JT#V$JT$JU$y$JU$KV#V$KV$KW$y$KW&FU#V&FU&FV$y&FV;'S#V;'S;=`$s<%l?HT#V?HT?HU$y?HUO#V~'QVUQ[~QPO#o#V#o#p#s#p#q#V#q#r$[#r;'S#V;'S;=`$s<%lO#VR'lUUQO#o#s#o#p(O#p#q#s#r;'S#s;'S;=`$U<%lO#sR(VSSPUQO#q#s#r;'S#s;'S;=`$U<%lO#sR(hUQPO#o$[#p#q$[#q#r(z#r;'S$[;'S;=`$m<%lO$[R)RSRQQPO#o$[#p;'S$[;'S;=`$m<%lO$[",
  tokenizers: [0, 1],
  topRules: {"Program":[0,1]},
  tokenPrec: 34
});

const jsLanguage = /*@__PURE__*/LRLanguage.define({
    parser: /*@__PURE__*/parser.configure({
        wrap: /*@__PURE__*/parseMixed(node => {
            console.log(node.name);
            return node.name === "JsText" ? { parser: parser$1 } : null;
        }),
        // props: [
        //   styleTags({
        //     "{{ }}": t.paren
        //   }),
        // ]
    })
});
const js = function () {
    return new LanguageSupport(jsLanguage);
};

export { js, jsLanguage, parser };
