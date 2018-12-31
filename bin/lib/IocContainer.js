"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const inversify_binding_decorators_1 = require("inversify-binding-decorators");
const inversify_inject_decorators_1 = require("inversify-inject-decorators");
exports.iocContainer = new inversify_1.Container();
_a = inversify_inject_decorators_1.default(exports.iocContainer), exports.lazyInject = _a.lazyInject, exports.lazyInjectNamed = _a.lazyInjectNamed, exports.lazyInjectTagged = _a.lazyInjectTagged, exports.lazyMultiInject = _a.lazyMultiInject;
exports.injectableNamed = function (identifier, name) {
    return inversify_binding_decorators_1.fluentProvide(identifier)
        .whenTargetNamed(name)
        .done(true);
};
exports.injectableSingleton = function (identifier) {
    return inversify_binding_decorators_1.fluentProvide(identifier)
        .inSingletonScope()
        .done(true);
};
//# sourceMappingURL=IocContainer.js.map