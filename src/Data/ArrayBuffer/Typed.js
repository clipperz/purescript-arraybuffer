"use strict";

// module Data.ArrayBuffer.Typed

function buffer (v) {
    return v.buffer;
}

function byteOffset (v) {
    return v.byteOffset;
}

function byteLength (v) {
    return v.byteLength;
}

const lengthImpl = function lemgthImpl (v) {
    return v.length;
};


// Typed Arrays


function newArray (f) {
  return function newArray_ (a,mb,mc) {
    if (mb === null)
      return new f(a);
    var l = a.byteLength;
    var eb = f.BYTES_PER_ELEMENT;
    var off = Math.min(l, mb>>>0);
    if (mc === null)
      return new f(a,off);
    var len = Math.min((l - off) / eb, mc);
    return new f(a,off,len);
  };
}

const newUint8ClampedArray = newArray(Uint8ClampedArray);
const newUint32Array = newArray(Uint32Array);
const newUint16Array = newArray(Uint16Array);
const newUint8Array = newArray(Uint8Array);
const newInt32Array = newArray(Int32Array);
const newInt16Array = newArray(Int16Array);
const newInt8Array = newArray(Int8Array);
const newFloat32Array = newArray(Float32Array);
const newFloat64Array = newArray(Float64Array);


// ------

function everyImpl (a,p) {
    return a.every(p);
}
function someImpl (a,p) {
    return a.some(p);
}


function fillImpl (x, s, e, a) {
    return a.fill(x,s,e);
}


function mapImpl (a,f) {
    return a.map(f);
}

function forEachImpl (a,f) {
    a.forEach(f);
}

function filterImpl (a,p) {
    return a.filter(p);
}

function includesImpl (a,x,mo) {
    return mo === null ? a.includes(x) : a.includes(x,mo);
}

function reduceImpl (a,f,i) {
    return a.reduce(f,i);
}
function reduce1Impl (a,f) {
    return a.reduce(f);
}
function reduceRightImpl (a,f,i) {
    return a.reduceRight(f,i);
}
function reduceRight1Impl (a,f) {
    return a.reduceRight(f);
}

function findImpl (a,f) {
    return a.find(f);
}

function findIndexImpl (a,f) {
    var r = a.findIndex(f);
    return r === -1 ? null : r;
}
function indexOfImpl (a,x,mo) {
    var r = mo === null ? a.indexOf(x) : a.indexOf(x,mo);
    return r === -1 ? null : r;
}
function lastIndexOfImpl (a,x,mo) {
    var r = mo === null ? a.lastIndexOf(x) : a.lastIndexOf(x,mo);
    return r === -1 ? null : r;
}



function copyWithinImpl (a,t,s,me) {
    if (me === null) {
        a.copyWithin(t,s);
    } else {
        a.copyWithin(t,s,me);
    }
}


function reverseImpl (a) {
    a.reverse();
}


function setImpl (a, off, b) {
  a.set(b,off);
}


function sliceImpl (a, s, e) {
  return a.slice(s,e);
}

function sortImpl (a) {
    a.sort();
}


function subArrayImpl (a, s, e) {
    return a.subarray(s, e);
}


function toStringImpl (a) {
    return a.toString();
}

function joinImpl (a,s) {
    return a.join(s);
}

function unsafeAtImpl(a, i) {
    return a[i];
}

function hasIndexImpl(a, i) {
    return i in a;
}

function toArrayImpl(a) {
    var l = a.length;
    var ret = new Array(l);
    for (var i = 0; i < l; i++)
        ret[i] = a[i];
    return ret;
}

export {
	  buffer
	, byteOffset
	, byteLength
	, lengthImpl
	, newUint8ClampedArray
	, newUint32Array
	, newUint16Array
	, newUint8Array
	, newInt32Array
	, newInt16Array
	, newInt8Array
	, newFloat32Array
	, newFloat64Array
	, everyImpl
	, someImpl
	, fillImpl
	, mapImpl
	, forEachImpl
	, filterImpl
	, includesImpl
	, reduceImpl
	, reduce1Impl
	, reduceRightImpl
	, reduceRight1Impl
	, findImpl
	, findIndexImpl
	, indexOfImpl
	, lastIndexOfImpl
	, copyWithinImpl
	, reverseImpl
	, setImpl
	, sliceImpl
	, sortImpl
	, subArrayImpl
	, toStringImpl
	, joinImpl
	, unsafeAtImpl
	, hasIndexImpl
	, toArrayImpl
}