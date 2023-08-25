import { isAnagram } from "./index.mjs";

const test = (name, word1, word2) => {
    const t0 = performance.now();
    for(let i=0;i<500;i++) {
        isAnagram(word1,word2);
    }
    const t1 = performance.now();
    console.log(`${name}: ${t1 - t0} ms`);
}

test('Short Anagram', 'a', 'a');
test('Short non-anagram', 'a','b');
test('Short same', 'qazwsxedcrfvtgbyhnujmikolpqazwsxedcrfvtgbyhnujmikolpqazwsxedcrfvtgbyhnujmikolp','qazwsxedcrfvtgbyhnujmikolpqazwsxedcrfvtgbyhnujmikolpqazwsxedcrfvtgbyhnujmikolp');
test('Long anagram', 'pazwsxedcrfvtgbyhnujmikolpqazwsxedcrfvtgbyhnujmikolpqazwsxedcrfvtgbyhnujmikolp','qazwsxedcrfvtgbyhnujmikolpqazwsxedcrfvtgbyhnujmikolpqazwsxedcrfvtgbyhnujmikolq');
test('Long non-anagram', 'qazwsxedcrfvtgbyhnujmikolpqazwsxedcrfvtgbyhnujmikolpqazwsxedcrfvtgbyhnujmikolp','qazwsxedcrfvtgbyhnujmikolpqazwsxedcrfvtgbyhnujmikolpqazwsxedcrfvtgbyhnujmikolq');
test('Long non-anagram of differing lengths', 'qazwsxedcrfvtgbyhnujmikolpqazwsxedcrfvtgbyhnujmikolpqazwsxedcrfvtgbyhnujmikolpqazwsxedcrfvtgbyhnujmikolpqazwsxedcrfvtgbyhnujmikolpqazwsxedcrfvtgbyhnujmikolpqazwsxedcrfvtgbyhnujmikolpqazwsxedcrfvtgbyhnujmikolpqazwsxedcrfvtgbyhnujmikolpqazwsxedcrfvtgbyhnujmikolpqazwsxedcrfvtgbyhnujmikolpqazwsxedcrfvtgbyhnujmikolpqazwsxedcrfvtgbyhnujmikolpqazwsxedcrfvtgbyhnujmikolpqazwsxedcrfvtgbyhnujmikolp','qazwsxedcrfvtgbyhnujmikolpqazwsxedcrfvtgbyhnujmikolpqazwsxedcrfvtgbyhnujmikolpqazwsxedcrfvtgbyhnujmikolpqazwsxedcrfvtgbyhnujmikolpqazwsxedcrfvtgbyhnujmikolpqazwsxedcrfvtgbyhnujmikolpqazwsxedcrfvtgbyhnujmikolpqazwsxedcrfvtgbyhnujmikolpqazwsxedcrfvtgbyhnujmikolpqazwsxedcrfvtgbyhnujmikolpqazwsxedcrfvtgbyhnujmikolpqazwsxedcrfvtgbyhnujmikolpqazwsxedcrfvtgbyhnujmikolp');
test("Long non-anagram where first letter doesn't exist", 'qwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiop','zwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiop');
