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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
function BookNannyPage() {
    var _this = this;
    var _a = react_1.useState({
        fullName: "",
        email: "",
        phone: "",
        message: ""
    }), form = _a[0], setForm = _a[1];
    var _b = react_1.useState(""), status = _b[0], setStatus = _b[1];
    var handleChange = function (e) {
        var _a;
        setForm(__assign(__assign({}, form), (_a = {}, _a[e.target.name] = e.target.value, _a)));
    };
    var handleSubmit = function (e) { return __awaiter(_this, void 0, void 0, function () {
        var formData, response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    formData = new FormData();
                    formData.append("fullName", form.fullName);
                    formData.append("email", form.email);
                    formData.append("phone", form.phone);
                    formData.append("message", form.message);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fetch("https://formspree.io/f/mwpbdvay", {
                            method: "POST",
                            headers: {
                                Accept: "application/json"
                            },
                            body: formData
                        })];
                case 2:
                    response = _a.sent();
                    if (response.ok) {
                        setStatus("Booking request submitted successfully!");
                        setForm({ fullName: "", email: "", phone: "", message: "" });
                    }
                    else {
                        setStatus("There was an error submitting your request.");
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    setStatus("Network error. Please try again later.");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement("div", { className: "min-h-screen bg-panelBlue flex items-center justify-center px-4" },
        react_1["default"].createElement("form", { onSubmit: handleSubmit, className: "bg-white shadow-lg rounded-xl p-8 w-full max-w-lg space-y-4" },
            react_1["default"].createElement("h1", { className: "text-2xl font-bold text-center text-darkBlue mb-4" }, "Book a Nanny"),
            react_1["default"].createElement("input", { type: "text", name: "fullName", placeholder: "Full Name", required: true, value: form.fullName, onChange: handleChange, className: "w-full px-4 py-3 border rounded-lg" }),
            react_1["default"].createElement("input", { type: "email", name: "email", placeholder: "Email", required: true, value: form.email, onChange: handleChange, className: "w-full px-4 py-3 border rounded-lg" }),
            react_1["default"].createElement("input", { type: "tel", name: "phone", placeholder: "Phone Number", required: true, value: form.phone, onChange: handleChange, className: "w-full px-4 py-3 border rounded-lg" }),
            react_1["default"].createElement("textarea", { name: "message", rows: 4, placeholder: "Tell us about your childcare needs", required: true, value: form.message, onChange: handleChange, className: "w-full px-4 py-3 border rounded-lg" }),
            react_1["default"].createElement("button", { type: "submit", className: "text-xl bg-darkBlue p-2 pt-4 pb-4 hover:bg-slate-700 text-white py-3 rounded-lg w-full" }, "Submit Booking Request"),
            status && (react_1["default"].createElement("p", { className: "text-center text-sm text-green-700 mt-2" }, status)))));
}
exports["default"] = BookNannyPage;
