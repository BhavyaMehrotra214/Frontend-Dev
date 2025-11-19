// Security condition variables
let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

// Access is secure only if ALL conditions are true
let isSecure =
  isAlarmOn &&
  isDoorLocked &&
  isWindowClosed &&
  isOwnerInside;

// Output result
if (isSecure) {
  console.log("System Status: Secure");
} else {
  console.log("System Status: Unsafe");
}

isDoorLocked = false;
isOwnerInside = false;

let newStatus =
  isAlarmOn &&
  isDoorLocked &&
  isWindowClosed &&
  isOwnerInside;

console.log("\nAfter updating values:");
console.log(newStatus ? "System Status: Secure" : "System Status: Unsafe");
