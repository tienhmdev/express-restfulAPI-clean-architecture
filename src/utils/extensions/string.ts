declare global {
  interface String {
    capitalize2Lowercase(): string;
    escape(): string;
  }
}
String.prototype.capitalize2Lowercase = function (): string {
  return this.replace(/\B([A-Z])/g, "_$1").toLowerCase();
};
String.prototype.escape = function (): string {
  return this.replace(/&/g, "&amp;")
    .replace(/%/g, "\\%")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

export {};
