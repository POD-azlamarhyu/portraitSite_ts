"use strict";
exports.__esModule = true;
var react_1 = require("react");
var header_1 = require("./header");
var footer_1 = require("./footer");
var hobbysLeftCard_1 = require("../modules/hobbysLeftCard");
var hobbysRightCard_1 = require("../modules/hobbysRightCard");
var variable_1 = require("../../api/variable");
var Hobbys = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(header_1["default"], null),
        react_1["default"].createElement("div", { className: "flex justify-center" },
            react_1["default"].createElement("div", { className: "flex-none w-0 md:w-1/12 sm:m-1 md:m-4" },
                react_1["default"].createElement(react_1["default"].Fragment, null)),
            react_1["default"].createElement("div", { className: "flex-1 flex-col w-full md:w-5/6 m-1 p-1 sm:m-1 md:m-3 flex justify-center" }, variable_1.hobbysCardContents.map(function (contents, key) {
                return (contents.id % 2 === 0 ? (react_1["default"].createElement(hobbysLeftCard_1["default"], { contents: contents, key: key })) : (react_1["default"].createElement(hobbysRightCard_1["default"], { contents: contents, key: key })));
            })),
            react_1["default"].createElement("div", { className: "flex-none w-0 md:w-1/12 sm:m-1 md:m-4" },
                react_1["default"].createElement(react_1["default"].Fragment, null))),
        react_1["default"].createElement(footer_1["default"], null)));
};
exports["default"] = Hobbys;
