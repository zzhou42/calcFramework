/**
 * @file basic.constants.js
 * @module basic-constants
 * @description Contains constants for all of the most basic characters nd basic 2-character combinations.
 * @author Zhen Yu Zhou
 * @date 2026/02/26
 * @copyright Copyright © 2026-... by Zhen Yu Zhou. All rights reserved.
*/

let cSpace = ' ';
let cUnderscore = '_'; // _
let cPipe = '|'; // |
let cExclamation = '!'; // !
let cQuestion = '?'; // ?
let cSingleQuote = '\''; // '
let cBackTickQuote = '`'; // `
let cDoubleQuote = '"'; // "
let cForwardSlash = '/'; // /
let cDoubleForwardSlash = '//'; // //
let cOpenParanthesis = '('; // (
let cCloseParanthesis = ')'; // )
let cOpenBracket = '['; // [
let cCloseBracket = ']'; // ]
let cOpenCurlyBrace = '{'; // {
let cCloseCurlyBrace = '}'; // }
let cCarriageReturn = '\r'; // \r
let cNewLine = '\n'; // \n
let cPlus = '+'; // +
let cStar = '*'; // *
let cDash = '-'; // -
let cDoubleDash = '--'; // --
let cEqual = '='; // =
let cEqualEqual = '=='; // ==
let cEqualEqualEqual = '==='; // ===
let cNotEqualEqual = '!=='; // !==
let cGreaterThan = '>'; // >
let cLessThan = '<'; // <
let cArrowFunction = cEqual + cGreaterThan; // =>
let cAt = '@'; // @
let cHash = '#'; // #
let cDollar = '$'; // $
let cPercent = '%'; // %
let cDoublePercent = cPercent.repeat(2); // %%
let cCaret = '^'; // ^
let cAndPersand = '&'; // &
let cDot = '.'; // .
let cComma = ',';
let cColon = ':'; // :
let cSemicolon = ';'; // ;
let cTilde = '~'; // ~

// Lowercase Letters
let ca = 'a'; // a
let cb = 'b'; // b
let cc = 'c'; // c
let cd = 'd'; // d
let ce = 'e'; // e
let cf = 'f'; // f
let cg = 'g'; // g
let ch = 'h'; // h
let ci = 'i'; // i
let cj = 'j'; // j
let ck = 'k'; // k
let cl = 'l'; // l
let cm = 'm'; // m
let cn = 'n'; // n
let co = 'o'; // o
let cp = 'p'; // p
let cq = 'q'; // q
let cr = 'r'; // r
let cs = 's'; // s
let ct = 't'; // t
let cu = 'u'; // u
let cv = 'v'; // v
let cw = 'w'; // w
let cx = 'x'; // x
let cy = 'y'; // y
let cz = 'z'; // z

// Uppercase Letters
let cA = 'A'; // A
let cB = 'B'; // B
let cC = 'C'; // C
let cD = 'D'; // D
let cE = 'E'; // E
let cF = 'F'; // F
let cG = 'G'; // G
let cH = 'H'; // H
let cI = 'I'; // I
let cJ = 'J'; // J
let cK = 'K'; // K
let cL = 'L'; // L
let cM = 'M'; // M
let cN = 'N'; // N
let cO = 'O'; // O
let cP = 'P'; // P
let cQ = 'Q'; // Q
let cR = 'R'; // R
let cS = 'S'; // S
let cT = 'T'; // T
let cU = 'U'; // U
let cV = 'V'; // V
let cW = 'W'; // W
let cX = 'X'; // X
let cY = 'Y'; // Y
let cZ = 'Z'; // Z

module.exports = {
    // Special Characters
    [cSpace]: cSpace, //';
    [cUnderscore]: cUnderscore, //_
    [cPipe]: cPipe, //|
    [cExclamation]: cExclamation, //!
    [cQuestion]: cQuestion, //?
    [cSingleQuote]: cSingleQuote, //'
    [cBackTickQuote]: cBackTickQuote, //`
    [cDoubleQuote]: cDoubleQuote, //"
    [cForwardSlash]: cForwardSlash, ///
    [cDoubleForwardSlash]: cDoubleForwardSlash, ////
    [cOpenParanthesis]: cOpenParanthesis, //(
    [cCloseParanthesis]: cCloseParanthesis, //)
    [cOpenBracket]: cOpenBracket, //[
    [cCloseBracket]: cCloseBracket, //]
    [cOpenCurlyBrace]: cOpenCurlyBrace, //{
    [cCloseCurlyBrace]: cCloseCurlyBrace, //}
    [cCarriageReturn]: cCarriageReturn, //r
    [cNewLine]: cNewLine, //n
    [cPlus]: cPlus, //+
    [cStar]: cStar, //*
    [cDash]: cDash, //-
    [cDoubleDash]: cDoubleDash, //--
    [cEqual]: cEqual, //=
    [cEqualEqual]: cEqualEqual, //==
    [cEqualEqualEqual]: cEqualEqualEqual, //===
    [cNotEqualEqual]: cNotEqualEqual, //!==
    [cGreaterThan]: cGreaterThan, //>
    [cLessThan]: cLessThan, //<
    [cArrowFunction]: cArrowFunction, //=>
    [cAt]: cAt, //@
    [cHash]: cHash, //#
    [cDollar]: cDollar, //$
    [cPercent]: cPercent, //%
    [cDoublePercent]: cDoublePercent, //%%
    [cCaret]: cCaret, //^
    [cAndPersand]: cAndPersand, //&
    [cDot]: cDot, //.
    [cComma]: cComma, //',';
    [cColon]: cColon, //:
    [cSemicolon]: cSemicolon, //;
    [cTilde]: cTilde, //~

    // Lowercase Letters
    [cc + ca]: ca,
    [cc + cb]: cb,
    [cc + cc]: cc,
    [cc + cd]: cd,
    [cc + ce]: ce,
    [cc + cf]: cf,
    [cc + cg]: cg,
    [cc + ch]: ch,
    [cc + ci]: ci,
    [cc + cj]: cj,
    [cc + ck]: ck,
    [cc + cl]: cl,
    [cc + cm]: cm,
    [cc + cn]: cn,
    [cc + co]: co,
    [cc + cp]: cp,
    [cc + cq]: cq,
    [cc + cr]: cr,
    [cc + cs]: cs,
    [cc + ct]: ct,
    [cc + cu]: cu,
    [cc + cv]: cv,
    [cc + cw]: cw,
    [cc + cx]: cx,
    [cc + cy]: cy,
    [cc + cz]: cz,

    // Uppercase Letters
    [cc + cA]: cA,
    [cc + cB]: cB,
    [cc + cC]: cC,
    [cc + cD]: cD,
    [cc + cE]: cE,
    [cc + cF]: cF,
    [cc + cG]: cG,
    [cc + cH]: cH,
    [cc + cI]: cI,
    [cc + cJ]: cJ,
    [cc + cK]: cK,
    [cc + cL]: cL,
    [cc + cM]: cM,
    [cc + cN]: cN,
    [cc + cO]: cO,
    [cc + cP]: cP,
    [cc + cQ]: cQ,
    [cc + cR]: cR,
    [cc + cS]: cS,
    [cc + cT]: cT,
    [cc + cU]: cU,
    [cc + cV]: cV,
    [cc + cW]: cW,
    [cc + cX]: cX,
    [cc + cY]: cY,
    [cc + cZ]: cZ,

    // Alphabetic Codes
    // aa-AA
    [cc + ca + ca ]: ca + ca,
    [cc + ca + cb ]: ca + cb,
    [cc + ca + cc ]: ca + cc,
    // NOTE: Have to watch out for the rest of these 'ca' constants, could have problems with them in the future.
    // clmnlrt3 = 'ad'a // 'ca' & 'cd' is some how a reserved word.
    [cc + ca + ce ]: ca + ce,
    [cc + ca + cf ]: ca + cf,
    [cc + ca + cg ]: ca + cg,
    [cc + ca + ch ]: ca + ch,
    [cc + ca + ci ]: ca + ci,
    [cc + ca + cj ]: ca + cj,
    [cc + ca + ck ]: ca + ck,
    [cc + ca + cl ]: ca + cl,
    [cc + ca + cm ]: ca + cm,
    [cc + ca + cn ]: ca + cn,
    [cc + ca + co ]: ca + co,
    [cc + ca + cp ]: ca + cp,
    [cc + ca + cq ]: ca + cq,
    [cc + ca + cr ]: ca + cr,
    [cc + ca + cs ]: ca + cs,
    [cc + ca + ct ]: ca + ct,
    [cc + ca + cu ]: ca + cu,
    [cc + ca + cv ]: ca + cv,
    [cc + ca + cw ]: ca + cw,
    [cc + ca + cx ]: ca + cx,
    [cc + ca + cy ]: ca + cy,
    [cc + ca + cz ]: ca + cz,


    [cc + cA + ca ]: cA + ca,
    [cc + cA + cb ]: cA + cb,
    [cc + cA + cc ]: cA + cc,
    [cc + cA + cd ]: cA + cd,
    [cc + cA + ce ]: cA + ce,
    [cc + cA + cf ]: cA + cf,
    [cc + cA + cg ]: cA + cg,
    [cc + cA + ch ]: cA + ch,
    [cc + cA + ci ]: cA + ci,
    [cc + cA + cj ]: cA + cj,
    [cc + cA + ck ]: cA + ck,
    [cc + cA + cl ]: cA + cl,
    [cc + cA + cm ]: cA + cm,
    [cc + cA + cn ]: cA + cn,
    [cc + cA + co ]: cA + co,
    [cc + cA + cp ]: cA + cp,
    [cc + cA + cq ]: cA + cq,
    [cc + cA + cr ]: cA + cr,
    [cc + cA + cs ]: cA + cs,
    // [cc + cA + ct ]: cA + ct, We've already defind At = @
    [cc + cA + cu ]: cA + cu,
    [cc + cA + cv ]: cA + cv,
    [cc + cA + cw ]: cA + cw,
    [cc + cA + cx ]: cA + cx,
    [cc + cA + cy ]: cA + cy,
    [cc + cA + cz ]: cA + cz,

    [cc + ca + cA]: ca + cA, // aA
    [cc + ca + cB]: ca + cB, // aB
    [cc + ca + cC]: ca + cC, // aC
    [cc + ca + cD]: ca + cD, // aD
    [cc + ca + cE]: ca + cE, // aE
    [cc + ca + cF]: ca + cF, // aF
    [cc + ca + cG]: ca + cG, // aG
    [cc + ca + cH]: ca + cH, // aH
    [cc + ca + cI]: ca + cI, // aI
    [cc + ca + cJ]: ca + cJ, // aJ
    [cc + ca + cK]: ca + cK, // aK
    [cc + ca + cL]: ca + cL, // aL
    [cc + ca + cM]: ca + cM, // aM
    [cc + ca + cN]: ca + cN, // aN
    [cc + ca + cO]: ca + cO, // aO
    [cc + ca + cP]: ca + cP, // aP
    [cc + ca + cQ]: ca + cQ, // aQ
    [cc + ca + cR]: ca + cR, // aR
    [cc + ca + cS]: ca + cS, // aS
    [cc + ca + cT]: ca + cT, // aT
    [cc + ca + cU]: ca + cU, // aU
    [cc + ca + cV]: ca + cV, // aV
    [cc + ca + cW]: ca + cW, // aW
    [cc + ca + cX]: ca + cX, // aX
    [cc + ca + cY]: ca + cY, // aY
    [cc + ca + cZ]: ca + cZ, // aZ

    [cc + cA + cA]: cA + cA, // AA
    [cc + cA + cB]: cA + cB, // AB
    [cc + cA + cC]: cA + cC, // AC
    [cc + cA + cD]: cA + cD, // AD
    [cc + cA + cE]: cA + cE, // AE
    [cc + cA + cF]: cA + cF, // AF
    [cc + cA + cG]: cA + cG, // AG
    [cc + cA + cH]: cA + cH, // AH
    [cc + cA + cI]: cA + cI, // AI
    [cc + cA + cJ]: cA + cJ, // AJ
    [cc + cA + cK]: cA + cK, // AK
    [cc + cA + cL]: cA + cL, // AL
    [cc + cA + cM]: cA + cM, // AM
    [cc + cA + cN]: cA + cN, // AN
    [cc + cA + cO]: cA + cO, // AO
    [cc + cA + cP]: cA + cP, // AP
    [cc + cA + cQ]: cA + cQ, // AQ
    [cc + cA + cR]: cA + cR, // AR
    [cc + cA + cS]: cA + cS, // AS
    [cc + cA + cT]: cA + cT, // AT
    [cc + cA + cU]: cA + cU, // AU
    [cc + cA + cV]: cA + cV, // AV
    [cc + cA + cW]: cA + cW, // AW
    [cc + cA + cX]: cA + cX, // AX
    [cc + cA + cY]: cA + cY, // AY
    [cc + cA + cZ]: cA + cZ, // AZ

    // ba-BA
    [cc + cb + ca ]: cb + ca, // ba
    [cc + cb + cb ]: cb + cb, // bb
    [cc + cb + cc ]: cb + cc, // bc
    [cc + cb + cd ]: cb + cd, // bd
    [cc + cb + ce ]: cb + ce, // be
    [cc + cb + cf ]: cb + cf, // bf
    [cc + cb + cg ]: cb + cg, // bg
    [cc + cb + ch ]: cb + ch, // bh
    [cc + cb + ci ]: cb + ci, // bi
    [cc + cb + cj ]: cb + cj, // bj
    [cc + cb + ck ]: cb + ck, // bk
    [cc + cb + cl ]: cb + cl, // bl
    [cc + cb + cm ]: cb + cm, // bm
    [cc + cb + cn ]: cb + cn, // bn
    [cc + cb + co ]: cb + co, // bo
    [cc + cb + cp ]: cb + cp, // bp
    [cc + cb + cq ]: cb + cq, // bq
    [cc + cb + cr ]: cb + cr, // br
    [cc + cb + cs ]: cb + cs, // bs
    [cc + cb + ct ]: cb + ct, // bt
    [cc + cb + cu ]: cb + cu, // bu
    [cc + cb + cv ]: cb + cv, // bv
    [cc + cb + cw ]: cb + cw, // bw
    [cc + cb + cx ]: cb + cx, // bx
    [cc + cb + cy ]: cb + cy, // by
    [cc + cb + cz ]: cb + cz, // bz

    [cc + cB + ca ]: cB + ca, // Ba
    [cc + cB + cb ]: cB + cb, // Bb
    [cc + cB + cc ]: cB + cc, // Bc
    [cc + cB + cd ]: cB + cd, // Bd
    [cc + cB + ce ]: cB + ce, // Be
    [cc + cB + cf ]: cB + cf, // Bf
    [cc + cB + cg ]: cB + cg, // Bg
    [cc + cB + ch ]: cB + ch, // Bh
    [cc + cB + ci ]: cB + ci, // Bi
    [cc + cB + cj ]: cB + cj, // Bj
    [cc + cB + ck ]: cB + ck, // Bk
    [cc + cB + cl ]: cB + cl, // Bl
    [cc + cB + cm ]: cB + cm, // Bm
    [cc + cB + cn ]: cB + cn, // Bn
    [cc + cB + co ]: cB + co, // Bo
    [cc + cB + cp ]: cB + cp, // Bp
    [cc + cB + cq ]: cB + cq, // Bq
    [cc + cB + cr ]: cB + cr, // Br
    [cc + cB + cs ]: cB + cs, // Bs
    [cc + cB + ct ]: cB + ct, // Bt
    [cc + cB + cu ]: cB + cu, // Bu
    [cc + cB + cv ]: cB + cv, // Bv
    [cc + cB + cw ]: cB + cw, // Bw
    [cc + cB + cx ]: cB + cx, // Bx
    [cc + cB + cy ]: cB + cy, // By
    [cc + cB + cz ]: cB + cz, // Bz

    [cc + cb + cA]: cb + cA, // bA
    [cc + cb + cB]: cb + cB, // bB
    [cc + cb + cC]: cb + cC, // bC
    [cc + cb + cD]: cb + cD, // bD
    [cc + cb + cE]: cb + cE, // bE
    [cc + cb + cF]: cb + cF, // bF
    [cc + cb + cG]: cb + cG, // bG
    [cc + cb + cH]: cb + cH, // bH
    [cc + cb + cI]: cb + cI, // bI
    [cc + cb + cJ]: cb + cJ, // bJ
    [cc + cb + cK]: cb + cK, // bK
    [cc + cb + cL]: cb + cL, // bL
    [cc + cb + cM]: cb + cM, // bM
    [cc + cb + cN]: cb + cN, // bN
    [cc + cb + cO]: cb + cO, // bO
    [cc + cb + cP]: cb + cP, // bP
    [cc + cb + cQ]: cb + cQ, // bQ
    [cc + cb + cR]: cb + cR, // bR
    [cc + cb + cS]: cb + cS, // bS
    [cc + cb + cT]: cb + cT, // bT
    [cc + cb + cU]: cb + cU, // bU
    [cc + cb + cV]: cb + cV, // bV
    [cc + cb + cW]: cb + cW, // bW
    [cc + cb + cX]: cb + cX, // bX
    [cc + cb + cY]: cb + cY, // bY
    [cc + cb + cZ]: cb + cZ, // bZ

    [cc + cB + cA]: cB + cA, // BA
    [cc + cB + cB]: cB + cB, // BB
    [cc + cB + cC]: cB + cC, // BC
    [cc + cB + cD]: cB + cD, // BD
    [cc + cB + cE]: cB + cE, // BE
    [cc + cB + cF]: cB + cF, // BF
    [cc + cB + cG]: cB + cG, // BG
    [cc + cB + cH]: cB + cH, // BH
    [cc + cB + cI]: cB + cI, // BI
    [cc + cB + cJ]: cB + cJ, // BJ
    [cc + cB + cK]: cB + cK, // BK
    [cc + cB + cL]: cB + cL, // BL
    [cc + cB + cM]: cB + cM, // BM
    [cc + cB + cN]: cB + cN, // BN
    [cc + cB + cO]: cB + cO, // BO
    [cc + cB + cP]: cB + cP, // BP
    [cc + cB + cQ]: cB + cQ, // BQ
    [cc + cB + cR]: cB + cR, // BR
    [cc + cB + cS]: cB + cS, // BS
    [cc + cB + cT]: cB + cT, // BT
    [cc + cB + cU]: cB + cU, // BU
    [cc + cB + cV]: cB + cV, // BV
    [cc + cB + cW]: cB + cW, // BW
    [cc + cB + cX]: cB + cX, // BX
    [cc + cB + cY]: cB + cY, // BY
    [cc + cB + cZ]: cB + cZ, // BZ

    // ca-CA
    [cc + cc + ca ]: cc + ca, // ca
    [cc + cc + cb ]: cc + cb, // cb
    [cc + cc + cc ]: cc + cc, // cc
    [cc + cc + cd ]: cc + cd, // cd
    [cc + cc + ce ]: cc + ce, // ce
    [cc + cc + cf ]: cc + cf, // cf
    [cc + cc + cg ]: cc + cg, // cg
    [cc + cc + ch ]: cc + ch, // ch
    [cc + cc + ci ]: cc + ci, // ci
    [cc + cc + cj ]: cc + cj, // cj
    [cc + cc + ck ]: cc + ck, // ck
    [cc + cc + cl ]: cc + cl, // cl
    [cc + cc + cm ]: cc + cm, // cm
    [cc + cc + cn ]: cc + cn, // cn
    [cc + cc + co ]: cc + co, // co
    [cc + cc + cp ]: cc + cp, // cp
    [cc + cc + cq ]: cc + cq, // cq
    [cc + cc + cr ]: cc + cr, // cr
    [cc + cc + cs ]: cc + cs, // cs
    [cc + cc + ct ]: cc + ct, // ct
    [cc + cc + cu ]: cc + cu, // cu
    [cc + cc + cv ]: cc + cv, // cv
    [cc + cc + cw ]: cc + cw, // cw
    [cc + cc + cx ]: cc + cx, // cx
    [cc + cc + cy ]: cc + cy, // cy
    [cc + cc + cz ]: cc + cz, // cz

    [cc + cC + ca ]: cC + ca, // Ca
    [cc + cC + cb ]: cC + cb, // Cb
    [cc + cC + cc ]: cC + cc, // Cc
    [cc + cC + cd ]: cC + cd, // Cd
    [cc + cC + ce ]: cC + ce, // Ce
    [cc + cC + cf ]: cC + cf, // Cf
    [cc + cC + cg ]: cC + cg, // Cg
    [cc + cC + ch ]: cC + ch, // Ch
    [cc + cC + ci ]: cC + ci, // Ci
    [cc + cC + cj ]: cC + cj, // Cj
    [cc + cC + ck ]: cC + ck, // Ck
    [cc + cC + cl ]: cC + cl, // Cl
    [cc + cC + cm ]: cC + cm, // Cm
    [cc + cC + cn ]: cC + cn, // Cn
    [cc + cC + co ]: cC + co, // Co
    [cc + cC + cp ]: cC + cp, // Cp
    [cc + cC + cq ]: cC + cq, // Cq
    [cc + cC + cr ]: cC + cr, // Cr
    [cc + cC + cs ]: cC + cs, // Cs
    [cc + cC + ct ]: cC + ct, // Ct
    [cc + cC + cu ]: cC + cu, // Cu
    [cc + cC + cv ]: cC + cv, // Cv
    [cc + cC + cw ]: cC + cw, // Cw
    [cc + cC + cx ]: cC + cx, // Cx
    [cc + cC + cy ]: cC + cy, // Cy
    [cc + cC + cz ]: cC + cz, // Cz

    [cc + cc + cA]: cc + cA, // cA
    [cc + cc + cB]: cc + cB, // cB
    [cc + cc + cC]: cc + cC, // cC
    [cc + cc + cD]: cc + cD, // cD
    [cc + cc + cE]: cc + cE, // cE
    [cc + cc + cF]: cc + cF, // cF
    [cc + cc + cG]: cc + cG, // cG
    [cc + cc + cH]: cc + cH, // cH
    [cc + cc + cI]: cc + cI, // cI
    [cc + cc + cJ]: cc + cJ, // cJ
    [cc + cc + cK]: cc + cK, // cK
    [cc + cc + cL]: cc + cL, // cL
    [cc + cc + cM]: cc + cM, // cM
    [cc + cc + cN]: cc + cN, // cN
    [cc + cc + cO]: cc + cO, // cO
    [cc + cc + cP]: cc + cP, // cP
    [cc + cc + cQ]: cc + cQ, // cQ
    [cc + cc + cR]: cc + cR, // cR
    [cc + cc + cS]: cc + cS, // cS
    [cc + cc + cT]: cc + cT, // cT
    [cc + cc + cU]: cc + cU, // cU
    [cc + cc + cV]: cc + cV, // cV
    [cc + cc + cW]: cc + cW, // cW
    [cc + cc + cX]: cc + cX, // cX
    [cc + cc + cY]: cc + cY, // cY
    [cc + cc + cZ]: cc + cZ, // cZ

    [cc + cC + cA]: cC + cA, // CA
    [cc + cC + cB]: cC + cB, // CB
    [cc + cC + cC]: cC + cC, // CC
    [cc + cC + cD]: cC + cD, // CD
    [cc + cC + cE]: cC + cE, // CE
    [cc + cC + cF]: cC + cF, // CF
    [cc + cC + cG]: cC + cG, // CG
    [cc + cC + cH]: cC + cH, // CH
    [cc + cC + cI]: cC + cI, // CI
    [cc + cC + cJ]: cC + cJ, // CJ
    [cc + cC + cK]: cC + cK, // CK
    [cc + cC + cL]: cC + cL, // CL
    [cc + cC + cM]: cC + cM, // CM
    [cc + cC + cN]: cC + cN, // CN
    [cc + cC + cO]: cC + cO, // CO
    [cc + cC + cP]: cC + cP, // CP
    [cc + cC + cQ]: cC + cQ, // CQ
    [cc + cC + cR]: cC + cR, // CR
    [cc + cC + cS]: cC + cS, // CS
    [cc + cC + cT]: cC + cT, // CT
    [cc + cC + cU]: cC + cU, // CU
    [cc + cC + cV]: cC + cV, // CV
    [cc + cC + cW]: cC + cW, // CW
    [cc + cC + cX]: cC + cX, // CX
    [cc + cC + cY]: cC + cY, // CY
    [cc + cC + cZ]: cC + cZ, // CZ

    //da-DA
    [cc + cd + ca ]: cd + ca, // da
    [cc + cd + cb ]: cd + cb, // db
    [cc + cd + cc ]: cd + cc, // dc
    [cc + cd + cd ]: cd + cd, // dd
    [cc + cd + ce ]: cd + ce, // de
    [cc + cd + cf ]: cd + cf, // df
    [cc + cd + cg ]: cd + cg, // dg
    [cc + cd + ch ]: cd + ch, // dh
    [cc + cd + ci ]: cd + ci, // di
    [cc + cd + cj ]: cd + cj, // dj
    [cc + cd + ck ]: cd + ck, // dk
    [cc + cd + cl ]: cd + cl, // dl
    [cc + cd + cm ]: cd + cm, // dm
    [cc + cd + cn ]: cd + cn, // dn
    [cc + cd + co ]: cd + co, // do
    [cc + cd + cp ]: cd + cp, // dp
    [cc + cd + cq ]: cd + cq, // dq
    [cc + cd + cr ]: cd + cr, // dr
    [cc + cd + cs ]: cd + cs, // ds
    [cc + cd + ct ]: cd + ct, // dt
    [cc + cd + cu ]: cd + cu, // du
    [cc + cd + cv ]: cd + cv, // dv
    [cc + cd + cw ]: cd + cw, // dw
    [cc + cd + cx ]: cd + cx, // dx
    [cc + cd + cy ]: cd + cy, // dy
    [cc + cd + cz ]: cd + cz, // dz

    [cc + cD + ca ]: cD + ca, // Da
    [cc + cD + cb ]: cD + cb, // Db
    [cc + cD + cc ]: cD + cc, // Dc
    [cc + cD + cd ]: cD + cd, // Dd
    [cc + cD + ce ]: cD + ce, // De
    [cc + cD + cf ]: cD + cf, // Df
    [cc + cD + cg ]: cD + cg, // Dg
    [cc + cD + ch ]: cD + ch, // Dh
    [cc + cD + ci ]: cD + ci, // Di
    [cc + cD + cj ]: cD + cj, // Dj
    [cc + cD + ck ]: cD + ck, // Dk
    [cc + cD + cl ]: cD + cl, // Dl
    [cc + cD + cm ]: cD + cm, // Dm
    [cc + cD + cn ]: cD + cn, // Dn
    [cc + cD + co ]: cD + co, // Do
    [cc + cD + cp ]: cD + cp, // Dp
    [cc + cD + cq ]: cD + cq, // Dq
    [cc + cD + cr ]: cD + cr, // Dr
    [cc + cD + cs ]: cD + cs, // Ds
    [cc + cD + ct ]: cD + ct, // Dt
    [cc + cD + cu ]: cD + cu, // Du
    [cc + cD + cv ]: cD + cv, // Dv
    [cc + cD + cw ]: cD + cw, // Dw
    [cc + cD + cx ]: cD + cx, // Dx
    [cc + cD + cy ]: cD + cy, // Dy
    [cc + cD + cz ]: cD + cz, // Dz

    [cc + cd + cA]: cd + cA, // dA
    [cc + cd + cB]: cd + cB, // dB
    [cc + cd + cC]: cd + cC, // dC
    [cc + cd + cD]: cd + cD, // dD
    [cc + cd + cE]: cd + cE, // dE
    [cc + cd + cF]: cd + cF, // dF
    [cc + cd + cG]: cd + cG, // dG
    [cc + cd + cH]: cd + cH, // dH
    [cc + cd + cI]: cd + cI, // dI
    [cc + cd + cJ]: cd + cJ, // dJ
    [cc + cd + cK]: cd + cK, // dK
    [cc + cd + cL]: cd + cL, // dL
    [cc + cd + cM]: cd + cM, // dM
    [cc + cd + cN]: cd + cN, // dN
    [cc + cd + cO]: cd + cO, // dO
    [cc + cd + cP]: cd + cP, // dP
    [cc + cd + cQ]: cd + cQ, // dQ
    [cc + cd + cR]: cd + cR, // dR
    [cc + cd + cS]: cd + cS, // dS
    [cc + cd + cT]: cd + cT, // dT
    [cc + cd + cU]: cd + cU, // dU
    [cc + cd + cV]: cd + cV, // dV
    [cc + cd + cW]: cd + cW, // dW
    [cc + cd + cX]: cd + cX, // dX
    [cc + cd + cY]: cd + cY, // dY
    [cc + cd + cZ]: cd + cZ, // dZ

    [cc + cD + cA]: cD + cA, // DA
    [cc + cD + cB]: cD + cB, // DB
    [cc + cD + cC]: cD + cC, // DC
    [cc + cD + cD]: cD + cD, // DD
    [cc + cD + cE]: cD + cE, // DE
    [cc + cD + cF]: cD + cF, // DF
    [cc + cD + cG]: cD + cG, // DG
    [cc + cD + cH]: cD + cH, // DH
    [cc + cD + cI]: cD + cI, // DI
    [cc + cD + cJ]: cD + cJ, // DJ
    [cc + cD + cK]: cD + cK, // DK
    [cc + cD + cL]: cD + cL, // DL
    [cc + cD + cM]: cD + cM, // DM
    [cc + cD + cN]: cD + cN, // DN
    [cc + cD + cO]: cD + cO, // DO
    [cc + cD + cP]: cD + cP, // DP
    [cc + cD + cQ]: cD + cQ, // DQ
    [cc + cD + cR]: cD + cR, // DR
    [cc + cD + cS]: cD + cS, // DS
    [cc + cD + cT]: cD + cT, // DT
    [cc + cD + cU]: cD + cU, // DU
    [cc + cD + cV]: cD + cV, // DV
    [cc + cD + cW]: cD + cW, // DW
    [cc + cD + cX]: cD + cX, // DX
    [cc + cD + cY]: cD + cY, // DY
    [cc + cD + cZ]: cD + cZ, // DZ
}


