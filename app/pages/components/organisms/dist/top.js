"use strict";
exports.__esModule = true;
var react_1 = require("react");
var header_1 = require("./header");
var footer_1 = require("./footer");
var variable_1 = require("../../api/variable");
var Top = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(header_1["default"], null),
        react_1["default"].createElement("div", { className: "m-0 p-0 bg-gray-700" },
            react_1["default"].createElement("div", { className: "m-0 p-0" },
                react_1["default"].createElement("img", { src: variable_1.topImage.src, alt: "topimg" }))),
        react_1["default"].createElement(footer_1["default"], null)));
};
exports["default"] = Top;
