const { deterministicPartitionKey } = require("./dpk");
const crypto = require("crypto");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns a hash when there is an event but no partitionKey", () => {
    const key = deterministicPartitionKey({});
    expect(key).toBe("c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862");
  });

  it("Returns the same partitionKey (string) in the input when there is an event with string partitionKey", () => {
    const key = deterministicPartitionKey({partitionKey: 'time'});
    console.log(key);
    expect(key).toBe("time");
  });

  it("Returns partitionKey (string) in the input when there is an event with number partitionKey", () => {
    const key = deterministicPartitionKey({partitionKey: 10000});
    console.log(key);
    expect(key).toBe("10000");
  });

  it("Returns hash when the partitionKey is too big", () => {
    const randomString = getRandomString(300);
    const key = deterministicPartitionKey({partitionKey: randomString});
    expect(crypto.createHash("sha3-512").update(randomString).digest("hex")).toBe(crypto.createHash("sha3-512").update(randomString).digest("hex"));
  });

  it("Returns hash when there is a payload", () => {
    const data = { "hello": "world" };
    const key = deterministicPartitionKey(data);
    expect(key).toBe(crypto.createHash("sha3-512").update(JSON.stringify(data)).digest("hex"));
  });
});

function getRandomString(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}
