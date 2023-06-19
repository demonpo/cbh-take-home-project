const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;

  if (!event) return TRIVIAL_PARTITION_KEY;
  if(!event.partitionKey) return createHash(event)
  candidate = String(event.partitionKey);

  if (!candidate) return TRIVIAL_PARTITION_KEY;
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) return createHash(candidate);
  return candidate;
};

function createHash(data) {
  return crypto.createHash("sha3-512").update(JSON.stringify(data)).digest("hex");
}

