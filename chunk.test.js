const chunkArray = require("./chunk");

test("chunkArray function exist", () => {
    expect(chunkArray).toBeDefined();
});

test("chunk an array of 9 value with length 3", () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const len = 3;
    const chunkArr = chunkArray(numbers, len);
    expect(chunkArr).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
});

// test("chunk an array of 3 value with length 1", () => {
//     const numbers = [1, 2, 3];
//     const len = 1;
//     const chunkArr = chunkArray(numbers, len);
//     expect(chunkArr).toEqual([[1], [2], [3]]);
// });