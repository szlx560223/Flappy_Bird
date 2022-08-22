System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Prefab, v3, instantiate, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, GameManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      v3 = _cc.v3;
      instantiate = _cc.instantiate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "01ab0iMtT1Of7o6AxiQgz5n", "GameManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameManager", GameManager = (_dec = ccclass('GameManager'), _dec2 = property(Prefab), _dec3 = property(Node), _dec(_class = (_class2 = class GameManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "pref_Brick", _descriptor, this);

          _initializerDefineProperty(this, "nd_BrickPlace", _descriptor2, this);
        }

        summonBricks() {
          //是否定义为私有不影响，下同
          //实例化与应用到节点树
          const newBrick = instantiate(this.pref_Brick);
          this.nd_BrickPlace.addChild(newBrick);
          newBrick.setPosition(v3(400, 200, 0));
        }

        start() {}

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pref_Brick", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nd_BrickPlace", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0236a032e935b0741f03a807f8b98fbbf93178d9.js.map