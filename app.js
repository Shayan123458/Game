"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
function playGame() {
    return __awaiter(this, void 0, void 0, function () {
        var answer, startgame;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt([
                        {
                            type: "list",
                            name: "gamePlayers",
                            message: "Choose your player",
                            choices: ["player1", "player2"]
                        },
                        {
                            type: "list",
                            name: "player1",
                            message: "Player 1 choose",
                            choices: ["rock", "scissor", "paper"]
                        },
                        {
                            type: "list",
                            name: "player2",
                            message: "Player 2 choose",
                            choices: ["rock", "scissor", "paper"]
                        },
                    ])];
                case 1:
                    answer = _a.sent();
                    if (answer.gamePlayers === "player1") {
                        if (((answer.player1 === "rock") && (answer.player2 === "scissor"))
                            || ((answer.player1 === "scissor") && (answer.player2 === "paper"))
                            || ((answer.player1 === "paper") && (answer.player2 === "rock"))) {
                            console.log("Player 1 wins the game");
                        }
                        else if (answer.player1 === answer.player2) {
                            console.log("It's a tie!");
                        }
                        else {
                            console.log("Player 2 wins the game");
                        }
                    }
                    else if (answer.gamePlayers === "player2") {
                        if (((answer.player2 === "rock") && (answer.player1 === "scissor"))
                            || ((answer.player2 === "scissor") && (answer.player1 === "paper"))
                            || ((answer.player2 === "paper") && (answer.player1 === "rock"))) {
                            console.log("Player 2 wins the game");
                        }
                        else if (answer.player1 === answer.player2) {
                            console.log("It's a tie!");
                        }
                        else {
                            console.log("Player 1 wins the game");
                        }
                    }
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            type: "confirm",
                            name: "end",
                            message: "do you want to continue",
                        })];
                case 2:
                    startgame = _a.sent();
                    if (startgame.end) {
                        playGame();
                    }
                    return [2 /*return*/];
            }
        });
    });
}
playGame();
