
/**
 * Bottle constructor
 *
 * @param String name Optional name for functional construction
 */
var Bottle = function Bottle(name) {
    if (!(this instanceof Bottle)) {
        return Bottle.pop(name);
    }

    this.id = id++;

    this.decorators = {};
    this.middlewares = {};
    this.nested = {};
    this.providerMap = {};
    this.deferred = [];
    this.container = {
        $register : register.bind(this),
        $list : list.bind(this)
    };
};

/**
 * Bottle prototype
 */
Bottle.prototype = {
    constant : constant,
    decorator : decorator,
    defer : defer,
    digest : digest,
    factory : factory,
    instanceFactory: instanceFactory,
    list : list,
    middleware : middleware,
    provider : provider,
    register : register,
    resolve : resolve,
    service : service,
    value : value
};

/**
 * Bottle static
 */
Bottle.pop = pop;
Bottle.clear = clear;
Bottle.list = list;

/**
 * Global config
 */
var globalConfig = Bottle.config = {
    strict : false
};
