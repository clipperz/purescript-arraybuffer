"use strict";

const emptyImpl = function empty (s) {
    return new ArrayBuffer(s);
};

function byteLength (a) {
    return a.byteLength;
}

function sliceImpl (a, s, e) {
    return a.slice(s, e);
}

export {byteLength, emptyImpl, sliceImpl}