"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("devicon");
var Rating_1 = require("@mui/material/Rating");
var SkillCard = function (_a) {
    var contents = _a.contents;
    return (react_1["default"].createElement("div", { className: "p-4" },
        react_1["default"].createElement("div", { className: contents.color },
            react_1["default"].createElement("div", { className: "flex justify-center items-center mx-3 my-3" },
                react_1["default"].createElement("span", { className: contents.image + " text-9xl p-1" })),
            react_1["default"].createElement("div", { className: "m-0 p-0 border-t-2" }),
            react_1["default"].createElement("div", { className: "mx-3 my-2" },
                react_1["default"].createElement("div", { className: "mx-2" },
                    react_1["default"].createElement("p", { className: "mx-2 my-3 p-0 text-4xl" }, contents.title)),
                react_1["default"].createElement("div", { className: "mx-5 mt-1 p-0" },
                    react_1["default"].createElement(Rating_1["default"], { name: "read-only", value: contents.stars, readOnly: true })),
                react_1["default"].createElement("div", { className: "mx-3 my-2 p-0" },
                    react_1["default"].createElement("p", { className: "mx-2 p-0 text-lg" }, contents.description))))));
};
exports["default"] = SkillCard;
