"use strict";
exports.__esModule = true;
var react_1 = require("react");
var header_1 = require("./header");
var footer_1 = require("./footer");
var workCard_1 = require("../modules/workCard");
var variable_1 = require("../../api/variable");
var Works = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(header_1["default"], null),
        react_1["default"].createElement("div", { className: "min-h-screen flex justify-center items-center flex-wrap md:mx-3 mx-1" }, variable_1.worksCardContents.map(function (contents) {
            return (react_1["default"].createElement(workCard_1["default"], { contents: contents, key: contents.id }));
        })),
        react_1["default"].createElement(footer_1["default"], null)));
};
exports["default"] = Works;
