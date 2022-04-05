"use strict";
exports.__esModule = true;
var react_1 = require("react");
var link_1 = require("next/link");
var variable_1 = require("../../api/variable");
var Navbar = function () {
    return (react_1["default"].createElement("div", { className: "py-2" },
        react_1["default"].createElement("ul", { className: "flex flex-col items-center justify-center sm:flex-row md:justify-end sm:mt-2 sm:h-12" },
            react_1["default"].createElement("li", { className: "text-white px-6 py-2 w-1/6 text-center" },
                react_1["default"].createElement(link_1["default"], { href: "/components/organisms/top", as: "/top" },
                    react_1["default"].createElement("a", { className: "align-middle block sm:text-xl md:text-2xl " }, "Top"))),
            react_1["default"].createElement("li", { className: "text-white px-6 py-2 w-1/6 text-center" },
                react_1["default"].createElement(link_1["default"], { href: "/components/organisms/about", as: "/about" },
                    react_1["default"].createElement("a", { className: "align-middle block sm:text-xl md:text-2xl" }, "About"))),
            react_1["default"].createElement("li", { className: "text-white px-6 py-2 w-1/6 text-center" },
                react_1["default"].createElement(link_1["default"], { href: "/components/organisms/skills", as: "/skills" },
                    react_1["default"].createElement("a", { className: "align-middle block sm:text-xl md:text-2xl" }, "Skills"))),
            react_1["default"].createElement("li", { className: "text-white px-6 py-2 w-1/6 text-center" },
                react_1["default"].createElement(link_1["default"], { href: "/components/organisms/works", as: "/works" },
                    react_1["default"].createElement("a", { className: "align-middle block sm:text-xl md:text-2xl" }, "Works"))),
            react_1["default"].createElement("li", { className: "text-white px-6 py-2 w-1/6 text-center" },
                react_1["default"].createElement(link_1["default"], { href: "/components/organisms/hobbys", as: "/hobbys" },
                    react_1["default"].createElement("a", { className: "align-middle block sm:text-xl md:text-2xl" }, "Hobbys"))))));
};
var Header = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("header", { className: "bg-gray-700 h-1/6 py-3 sm:pt-4 sm:pb-4" },
            react_1["default"].createElement("h1", { className: "text-4xl font-bold text-white text-center sm:text-left sm:my-2 sm:mx-4" }, variable_1.webTitle),
            react_1["default"].createElement(Navbar, null))));
};
exports["default"] = Header;
