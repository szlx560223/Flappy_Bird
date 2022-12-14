System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, RigidBody, v3, input, Input, PhysicsSystem, Collider, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, BirdCtrl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      RigidBody = _cc.RigidBody;
      v3 = _cc.v3;
      input = _cc.input;
      Input = _cc.Input;
      PhysicsSystem = _cc.PhysicsSystem;
      Collider = _cc.Collider;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bc88ciLiZtJGIwPfKpP+06B", "BirdCtrl", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BirdCtrl", BirdCtrl = (_dec = ccclass('BirdCtrl'), _dec2 = property(Node), _dec(_class = (_class2 = class BirdCtrl extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "Bird", _descriptor, this);
        }

        start() {
          input.on(Input.EventType.MOUSE_DOWN, this.onMouseClick, this);
          PhysicsSystem.instance.gravity = v3(0, -500, 0);
          this.Bird.getComponent(RigidBody).linearDamping = 0.1;
          this.Bird.getComponent(Collider).on('onCollisionEnter', this.onHit, this);
        }

        onMouseClick(event) {
          this.Bird.getComponent(RigidBody).setLinearVelocity(v3(0, 300, 0));
        }

        onHit(e) {
          console.log("??????");
        }
        /*
        update(deltaTime: number) {
            
        }//????????????
        */


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Bird", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=80823a66a7f752f4f1bf26f663c313cc8ea78f4e.js.map