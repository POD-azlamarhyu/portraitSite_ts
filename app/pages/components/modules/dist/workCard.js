"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("devicon");
var GitHub_1 = require("@mui/icons-material/GitHub");
var WorksCard = function (props) {
    var onClickGit = function (url) {
        window.open(url);
    };
    return (react_1["default"].createElement("div", { className: "p-5" },
        react_1["default"].createElement("div", { className: "bg-gradient-to-r from-blue-500 to-blue-300 w-full\n                            md:w-148 h-100 m-auto rounded-xl shadow-2xl transform \n                            hover:scale-110 transition-transform" },
            props.contents.image.src ? (react_1["default"].createElement("div", { className: "flex justify-center m-1 p-3 h-64" },
                react_1["default"].createElement("img", { src: props.contents.image.src, alt: "img" + props.contents.title }))) : (react_1["default"].createElement("div", { className: "flex justify-center items-center m-1 p-2 h-64" },
                react_1["default"].createElement("p", { className: "text-6xl text-gray-500" }, "No Image"))),
            react_1["default"].createElement("div", { className: "m-0 p-0 border-t-2" }),
            react_1["default"].createElement("div", { className: "m-3" },
                react_1["default"].createElement("div", { className: "mx-2 my-1 flex" },
                    react_1["default"].createElement("p", { className: "mx-1 text-4xl" }, props.contents.title),
                    react_1["default"].createElement(GitHub_1["default"], { className: "m-2 p-0", onClick: function () { return onClickGit(props.contents.repository); } })),
                react_1["default"].createElement("div", { className: "mx-2 my-2 p-0" },
                    react_1["default"].createElement("p", { className: "mx-1 p-0 text-lg" }, props.contents.description)),
                react_1["default"].createElement("span", { className: "mx-2 my-4 py-2" }, props.contents.useTech.map(function (tech) {
                    return (react_1["default"].createElement("span", { className: tech.mark + " text-5xl mx-2 my-3 py-1", key: tech.id }));
                }))))));
};
exports["default"] = WorksCard;
