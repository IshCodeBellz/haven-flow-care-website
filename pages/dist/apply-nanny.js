"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("react");
function ApplyNannyPage() {
    var _a = react_2.useState({
        fullName: "",
        email: "",
        phone: "",
        experience: "",
        message: ""
    }), form = _a[0], setForm = _a[1];
    var handleChange = function (e) {
        var _a;
        setForm(__assign(__assign({}, form), (_a = {}, _a[e.target.name] = e.target.value, _a)));
    };
    var handleSubmit = function (e) {
        e.preventDefault();
        alert("Application submitted!");
        // You could POST this to an API route or email service.
    };
    return (react_1["default"].createElement("div", { className: "min-h-screen bg-panelBlue flex items-center justify-center px-4" },
        react_1["default"].createElement("form", { onSubmit: handleSubmit, className: "bg-white shadow-lg rounded-xl p-8 w-full max-w-lg space-y-4" },
            react_1["default"].createElement("h1", { className: "text-2xl font-bold text-center text-indigo-700 mb-4" }, "Apply to Become a Nanny"),
            react_1["default"].createElement("input", { type: "text", name: "fullName", placeholder: "Full Name", required: true, value: form.fullName, onChange: handleChange, className: "w-full px-4 py-3 border rounded-lg" }),
            react_1["default"].createElement("input", { type: "email", name: "email", placeholder: "Email", required: true, value: form.email, onChange: handleChange, className: "w-full px-4 py-3 border rounded-lg" }),
            react_1["default"].createElement("input", { type: "tel", name: "phone", placeholder: "Phone Number", required: true, value: form.phone, onChange: handleChange, className: "w-full px-4 py-3 border rounded-lg" }),
            react_1["default"].createElement("textarea", { name: "experience", rows: 3, placeholder: "Briefly describe your childcare experience", required: true, value: form.experience, onChange: handleChange, className: "w-full px-4 py-3 border rounded-lg" }),
            react_1["default"].createElement("textarea", { name: "message", rows: 3, placeholder: "Why would you like to work with Haven Flow?", required: true, value: form.message, onChange: handleChange, className: "w-full px-4 py-3 border rounded-lg" }),
            react_1["default"].createElement("button", { type: "submit", className: "bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg w-full" }, "Submit Application"))));
}
exports["default"] = ApplyNannyPage;
