import crypto from 'crypto';

/**
 * Generates a unique ID.
 *
 * @param {boolean} [dashed=false] - Whether the ID should be dashed (split into chunks).
 * @returns {string} The generated unique ID.
 */
const generateUniqueId = (dashed = false) => {
  const id = crypto.randomBytes(16).toString('hex');

  if (dashed) {
    const chunks = id.match(/.{4}/g) as RegExpMatchArray;
    return chunks.join('-');
  }
  return id;
};

export default generateUniqueId;
