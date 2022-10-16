export const copyNameToKeyboard = (name, uid) =>
navigator.clipboard.writeText(`${name}#${uid}`);
