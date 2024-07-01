import Cookies from "js-cookie";
import CryptoJS from "crypto-js";

export const decryptPermissionData = () => {
  const secretKey = import.meta.env.VITE_SECRET_KEY;
  if (!secretKey) {
    console.error("Secret key not available.");
    return null;
  }

  const encrypted = Cookies.get("user");
  if (!encrypted) {
    console.error("No encrypted data found in the cookie.");
    return null;
  }

  try {
    const decrypted = CryptoJS.AES.decrypt(encrypted, secretKey).toString(
      CryptoJS.enc.Utf8
    );

    if (!decrypted) {
      console.error("Decryption failed or resulted in empty data.");
      return null;
    }

    return JSON.parse(decrypted);
  } catch (error) {
    console.error("Error during decryption:", error);
    return null;
  }
};
