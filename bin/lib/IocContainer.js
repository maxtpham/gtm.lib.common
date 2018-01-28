"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const inversify_binding_decorators_1 = require("inversify-binding-decorators");
const inversify_inject_decorators_1 = require("inversify-inject-decorators");
exports.iocContainer = new inversify_1.Container();
_a = inversify_inject_decorators_1.default(exports.iocContainer), exports.lazyInject = _a.lazyInject, exports.lazyInjectNamed = _a.lazyInjectNamed, exports.lazyInjectTagged = _a.lazyInjectTagged, exports.lazyMultiInject = _a.lazyMultiInject;
const fluentProvider = inversify_binding_decorators_1.makeFluentProvideDecorator(exports.iocContainer);
exports.injectableNamed = function (identifier, name) {
    return fluentProvider(identifier)
        .whenTargetNamed(name)
        .done();
};
exports.injectableSingleton = function (identifier) {
    return fluentProvider(identifier)
        .inSingletonScope()
        .done();
};
var _a;
//# sourceMappingURL=IocContainer.js.map