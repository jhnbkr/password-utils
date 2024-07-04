import { encryptPassword, checkPassword } from "../src/passwordUtils";

describe("Password Utilities", () => {
  it("should encrypt a password with default rounds", async () => {
    const password = "mysecretpassword";
    const hashedPassword = await encryptPassword(password);
    expect(hashedPassword).not.toBe(password);
    expect(hashedPassword).toBeDefined();
  });

  it("should encrypt a password with specified rounds", async () => {
    const password = "mysecretpassword";
    const rounds = 12;
    const hashedPassword = await encryptPassword(password, rounds);
    expect(hashedPassword).not.toBe(password);
    expect(hashedPassword).toBeDefined();
  });

  it("should validate a correct password", async () => {
    const password = "mysecretpassword";
    const hashedPassword = await encryptPassword(password);
    const isValid = await checkPassword(password, hashedPassword);
    expect(isValid).toBe(true);
  });

  it("should invalidate an incorrect password", async () => {
    const password = "mysecretpassword";
    const wrongPassword = "wrongpassword";
    const hashedPassword = await encryptPassword(password);
    const isValid = await checkPassword(wrongPassword, hashedPassword);
    expect(isValid).toBe(false);
  });
});
