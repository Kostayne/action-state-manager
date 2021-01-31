"use strict";
exports.__esModule = true;
exports.StateUpdater = void 0;
var StateUpdater = /** @class */ (function () {
    function StateUpdater(setState) {
        this.setState = setState;
    }
    StateUpdater.prototype.update = function (state) {
        this.setState(state);
    };
    return StateUpdater;
}());
exports.StateUpdater = StateUpdater;
//# sourceMappingURL=state_updater.js.map