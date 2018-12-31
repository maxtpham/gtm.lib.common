import { Container, interfaces } from "inversify";
import { fluentProvide, buildProviderModule } from 'inversify-binding-decorators';
import getDecorators from "inversify-inject-decorators";

export const iocContainer: interfaces.Container = <interfaces.Container>new Container();
iocContainer.load(buildProviderModule());

export let {
  lazyInject,
  lazyInjectNamed,
  lazyInjectTagged,
  lazyMultiInject
} = getDecorators(iocContainer);

export const injectableNamed = function(
  identifier: string | symbol | interfaces.Newable<any> | interfaces.Abstract<any>,
  name: string
) {
    return fluentProvide(identifier)
      .whenTargetNamed(name)
      .done(true);
};

export const injectableSingleton = function(
  identifier: string | symbol | interfaces.Newable<any> | interfaces.Abstract<any>
) {
    return fluentProvide(identifier)
      .inSingletonScope()
      .done(true);
};