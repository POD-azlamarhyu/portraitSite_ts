"use strict";
exports.__esModule = true;
var react_1 = require("react");
var variable_1 = require("../../api/variable");
var header_1 = require("./header");
var footer_1 = require("./footer");
var skillCard_1 = require("../modules/skillCard");
require("devicon");
var Skills = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(header_1["default"], null),
        react_1["default"].createElement("div", { className: "flex justify-center" },
            react_1["default"].createElement("div", { className: "min-h-screen flex flex-wrap justify-center items-center mx-3 my-3 md:mx-6 md:my-5" }, variable_1.skillCardContents.map(function (contents) {
                return (react_1["default"].createElement(skillCard_1["default"], { contents: contents, key: contents.id }));
            }))),
        react_1["default"].createElement(footer_1["default"], null)));
};
exports["default"] = Skills;
