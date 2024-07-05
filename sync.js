// //================================== Question # 1=====================================
// // Write a simple asynchronous TypeScript function fetchGreeting that returns a 
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function fetchGreeting() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) {
                    setTimeout(function () {
                        resolve("hey! Whats up");
                    }, 2000);
                })];
        });
    });
}
// Example usage:
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var greeting;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchGreeting()];
                case 1:
                    greeting = _a.sent();
                    console.log(greeting);
                    return [2 /*return*/];
            }
        });
    });
}
main();
// //================================Question # 2======================================
// // Write a function simulateTask that simulates a task by logging "Task started", 
function simulateTask() {
    console.log("Task started");
    setTimeout(function () {
        console.log("Task completed");
    }, 1000);
}
simulateTask();
// //=================================== Question # 3===========================
// // Write a function fetchData that returns a Promise which resolves with the string 
function fetchData1() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Data fetched successfully!");
        }, 1000);
    });
}
// Example usage:
fetchData().then(console.log);
// //================================ Question # 4================================
// // Write a function fetchWithError that returns a Promise. It should randomly either 
function fetchWithError() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            // Randomly resolve or reject
            if (Math.random() < 0.5) {
                resolve("Data fetched successfully!");
            }
            else {
                reject("Data fetch failed!");
            }
        }, 1000);
    });
}
// Example usage:
fetchWithError()
    .then(console.log)
    .catch(console.error);
// //============================== Question # 5===============================
// // Write a function executeSequentially that executes two functions fetchData and 
function fetchData() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Data fetched successfully!");
        }, 1000);
    });
}
function processData(data) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Processed: ".concat(data));
        }, 1000);
    });
}
function executeSequentially() {
    fetchData()
        .then(function (fetchResult) {
        console.log(fetchResult);
        return processData(fetchResult);
    })
        .then(function (processResult) {
        console.log(processResult);
    })
        .catch(console.error);
}
executeSequentially();
