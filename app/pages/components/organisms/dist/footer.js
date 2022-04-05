"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Copyright_1 = require("@mui/icons-material/Copyright");
var LibraryBooks_1 = require("@mui/icons-material/LibraryBooks");
var GitHub_1 = require("@mui/icons-material/GitHub");
var Twitter_1 = require("@mui/icons-material/Twitter");
var variable_1 = require("../../api/variable");
var variable_2 = require("../../api/variable");
var Footer = function () {
    var openUrl = function (n) {
        if (n === 0) {
            window.open(variable_1.url.urlGit, "_blank");
        }
        else if (n === 1) {
            window.open(variable_1.url.urlTwitter, "_blank");
        }
        else {
            window.open(variable_1.url.urlBlog, "_blank");
        }
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("footer", { className: "flex justify-center bg-gray-700 text-white" },
            react_1["default"].createElement("div", { className: "mx-6 my-2" },
                react_1["default"].createElement(Copyright_1["default"], { fontSize: "large" }),
                variable_2.copyright),
            react_1["default"].createElement("div", { className: "mx-6 my-2 " },
                react_1["default"].createElement(GitHub_1["default"], { className: "mx-3 cursor-pointer", fontSize: "large", onClick: function () { return openUrl(0); } }),
                "to github"),
            react_1["default"].createElement("div", { className: "mx-6 my-2 " },
                react_1["default"].createElement(Twitter_1["default"], { className: "mx-3 cursor-pointer", fontSize: "large", onClick: function () { return openUrl(1); } }),
                "to twitter"),
            react_1["default"].createElement("div", { className: "mx-6 my-2" },
                react_1["default"].createElement(LibraryBooks_1["default"], { className: "mx-3 cursor-pointer", fontSize: "large", onClick: function () { return openUrl(2); } }),
                "to blogsite"))));
};
exports["default"] = Footer;
