import bcrypt from "bcrypt";

/**
 * Encrypts a password using bcrypt with the specified number of salt rounds.
 * @param password - The password to encrypt.
 * @param rounds - The number of salt rounds to use for bcrypt (default is 10).
 * @returns A promise that resolves to the hashed password.
 */
export async function encryptPassword(
  password: string,
  rounds: number = 10
): Promise<string> {
  const salt = await bcrypt.genSalt(rounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}

/**
 * Checks if a password matches the provided hashed password using bcrypt.
 * @param password - The plaintext password to check.
 * @param hashedPassword - The hashed password to compare against.
 * @returns A promise that resolves to true if the password matches the hash, otherwise false.
 */
export async function checkPassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}
