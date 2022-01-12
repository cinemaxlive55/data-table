import freeGlobal from './_freeGlobal.js';



/** Detect free variable `self`. */
// eslint-disable-next-line no-restricted-globals
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

export default root;
