"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.ActionStateManager = void 0;
var oop_observer_1 = require("oop-observer");
var ActionStateManager = /** @class */ (function (_super) {
    __extends(ActionStateManager, _super);
    function ActionStateManager(state) {
        var _this = _super.call(this) || this;
        _this.state = state;
        _this.getState = _this.getState.bind(_this);
        return _this;
    }
    ActionStateManager.prototype.changeState = function (state) {
        this.state = state;
        this.notify();
        return this.state;
    };
    ActionStateManager.prototype.getState = function () {
        return this.state;
    };
    ;
    ActionStateManager.prototype.notify = function () {
        var _this = this;
        this.observers.forEach(function (observer) {
            observer.update(_this.state);
        });
    };
    return ActionStateManager;
}(oop_observer_1.Observable));
exports.ActionStateManager = ActionStateManager;
//# sourceMappingURL=action_state_manager.js.map