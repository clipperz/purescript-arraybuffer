"use strict";

// module Data.ArrayBuffer.DataView


function whole (b) {
    return new DataView(b);
};

function remainderImpl (b,i) {
    return new DataView(b,i);
};

function partImpl (b,i,j) {
    return new DataView(b,i,j);
};

function buffer (v) {
    return v.buffer;
};

function byteOffset (v) {
    return v.byteOffset;
};

function byteLength (v) {
    return v.byteLength;
};

function getterImpl (data, v, o) {
    return ((o + data.bytesPerValue) >>> 0) <= v.byteLength
        ? v[data.functionName].call(v,o,data.littleEndian)
        : null;
};

function setterImpl (data, v, o, n) {
    if (((o + data.bytesPerValue) >>> 0) <= v.byteLength) {
        v[data.functionName].call(v,o,n,data.littleEndian);
        return true;
    } else {
        return false;
    }
};

export {
      whole
    , remainderImpl
    , partImpl
    , buffer
    , byteOffset
    , byteLength
    , getterImpl
    , setterImpl
	}