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
var urlGames = fetch("https://apigenerator.dronahq.com/api/quYLVE6T/Jogos");
var Container = document.getElementById("container");
var Qualifying = document.getElementById("qualifying");
function generateGames() {
    return __awaiter(this, void 0, void 0, function () {
        var Games, objGames, GamesSelection, GamesSelectionTwo, index, qualifyingGames, octaveGame, quarterGame, semiGame, finalGame;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, urlGames];
                case 1:
                    Games = _a.sent();
                    return [4 /*yield*/, Games.json()];
                case 2:
                    objGames = _a.sent();
                    GamesSelection = objGames.filter(function (item) { return item.timeA == "Brasil"; });
                    GamesSelectionTwo = objGames.filter(function (item) { return item.timeB == "Alemanha"; });
                    for (index = 0; index < GamesSelectionTwo.length; index++) {
                        GamesSelection.push(GamesSelectionTwo[index]);
                    }
                    qualifyingGames = GamesSelection.filter(function (item) { return item.fase == "Classificatória"; });
                    createBoxClassification(qualifyingGames, Qualifying);
                    if (GamesSelection.length > 3) {
                        octaveGame = GamesSelection.filter(function (item) { return item.fase == "Oitavas-Final"; });
                        if (octaveGame.length == 1) {
                            createBox(octaveGame, Container);
                        }
                        quarterGame = GamesSelection.filter(function (item) { return item.fase == "Quartas-Final"; });
                        if (quarterGame.length == 1) {
                            createBox(quarterGame, Container);
                        }
                        semiGame = GamesSelection.filter(function (item) { return item.fase == "Semi-Final"; });
                        if (semiGame.length == 1) {
                            createBox(semiGame, Container);
                        }
                        finalGame = GamesSelection.filter(function (item) { return item.fase == "Final"; });
                        if (finalGame.length == 1) {
                            createBox(finalGame, Container);
                        }
                    }
                    return [2 /*return*/];
            }
        });
    });
}
generateGames();
function createBoxClassification(qualifyingGames, qualifying) {
    for (var index = 0; index < qualifyingGames.length; index++) {
        var Game = document.createElement("p");
        var ResultGame = document.createElement("p");
        var box = document.createElement("div");
        var section = document.getElementById("contQualifying");
        var matchCollaps = document.getElementById("matchCollaps");
        Game.innerText = "".concat(qualifyingGames[index].timeA, " X ").concat(qualifyingGames[index].timeB);
        ResultGame.innerText = "".concat(qualifyingGames[index].gols.timeA, " X ").concat(qualifyingGames[index].gols.TimeB);
        box.appendChild(Game);
        box.appendChild(ResultGame);
        if (index == 1) {
            box.classList.add("BoxGameNone");
            matchCollaps.appendChild(box);
            qualifying.appendChild(matchCollaps);
        }
        else {
            box.classList.add("BoxGame");
            section.appendChild(box);
            qualifying.appendChild(section);
        }
    }
}
function createBox(playOffs, container) {
    var Game = document.createElement("p");
    var ResultGame = document.createElement("p");
    var box = document.createElement("div");
    var fase = document.createElement("h2");
    var section = document.createElement("section");
    box.classList.add("BoxGame");
    section.classList.add("Section");
    fase.innerText = playOffs[0].fase;
    Game.innerText = "".concat(playOffs[0].timeA, " X ").concat(playOffs[0].timeB);
    ResultGame.innerText = "".concat(playOffs[0].gols.timeA, " X ").concat(playOffs[0].gols.TimeB);
    box.appendChild(Game);
    box.appendChild(ResultGame);
    section.appendChild(fase);
    section.appendChild(box);
    container.appendChild(section);
}
var Buttonn = document.getElementById("Button");
Buttonn.addEventListener("click", function () {
    displayGame();
});
var Controll = 0;
function displayGame() {
    var matchCollaps = document.getElementById("matchCollaps");
    if (Controll == 0) {
        (matchCollaps.style.display = "flex"), 2000;
        Buttonn.innerText = "Ver Menos";
        Controll = 1;
    }
    else {
        matchCollaps.style.display = "";
        Buttonn.innerText = "Ver Mais";
        Controll = 0;
    }
}
