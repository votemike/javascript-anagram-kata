import { test } from "node:test";
import assert from "node:assert/strict";
import {isAnagram} from "./index.mjs";

test('single letter', () => {
    assert(isAnagram('a', 'a'));
});

test('palindrome', () => {
    assert(isAnagram('racecar', 'racecar'));
});

test('anagram', () => {
    assert(isAnagram('doctorwho', 'torchwood'));
});

test('single different letter', () => {
    assert(!isAnagram('a', 'b'));
});

test('repeated same letter', () => {
    assert(!isAnagram('a', 'aa'));
});

test('repeated different letters', () => {
    assert(!isAnagram('abb', 'aab'));
});
