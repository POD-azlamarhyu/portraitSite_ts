"use strict";
exports.__esModule = true;
var react_1 = require("react");
var HobbysRightCard = function (props) {
    return (react_1["default"].createElement("div", { className: "flex flex-col-reverse md:flex-row w-full h-94 bg-cyan-300 mx-2 my-10 rounded-xl transform \n                            hover:scale-110 transition-transform" },
        react_1["default"].createElement("div", { className: "md:w-5/12 flex justify-center items-center align-middle" }, props.contents.image.src ? (react_1["default"].createElement("div", { className: "mx-3 my-3 p-2" },
            react_1["default"].createElement("img", { src: props.contents.image.src, alt: "img" + props.contents.title }))) : (react_1["default"].createElement("div", { className: "flex justify-center items-center m-1 p-2 h-64" },
            react_1["default"].createElement("p", { className: "text-6xl text-gray-500" }, "No Image")))),
        react_1["default"].createElement("div", { className: "md:w-7/12" },
            react_1["default"].createElement("h2", { className: "mx-5 my-5 text-4xl font-medium" }, props.contents.title),
            react_1["default"].createElement("div", { className: "mx-5 my-7" }, props.contents.description.map(function (desc) {
                return (react_1["default"].createElement("p", { className: "text-2xl text-slate-600", key: desc.id }, desc.param));
            })))));
};
exports["default"] = HobbysRightCard;
