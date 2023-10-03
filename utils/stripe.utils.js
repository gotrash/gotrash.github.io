export const doCardChecksPass = checks => {
  const keys = Object.keys(checks);

  delete keys.rawJsonObject;
  delete keys.lastResponse;

  return keys.every(key => !!key);
};

export default { doCardChecksPass };
