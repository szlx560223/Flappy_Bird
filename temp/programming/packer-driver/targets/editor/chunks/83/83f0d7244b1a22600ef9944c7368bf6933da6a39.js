System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, RigidBody, v3, input, Input, PhysicsSystem, SphereCollider, EnumGameStatus, GameManager, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, BirdCtrl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEnumGameStatus(extras) {
    _reporterNs.report("EnumGameStatus", "./GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./GameManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      RigidBody = _cc.RigidBody;
      v3 = _cc.v3;
      input = _cc.input;
      Input = _cc.Input;
      PhysicsSystem = _cc.PhysicsSystem;
      SphereCollider = _cc.SphereCollider;
    }, function (_unresolved_2) {
      EnumGameStatus = _unresolved_2.EnumGameStatus;
      GameManager = _unresolved_2.GameManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bc88ciLiZtJGIwPfKpP+06B", "BirdCtrl", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BirdCtrl", BirdCtrl = (_dec = ccclass('BirdCtrl'), _dec2 = property(Node), _dec3 = property(_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
        error: Error()
      }), GameManager) : GameManager), _dec(_class = (_class2 = class BirdCtrl extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "Bird", _descriptor, this);

          _initializerDefineProperty(this, "GameManagerScript", _descriptor2, this);
        }

        ///////////////////////////////////////////////
        start() {
          this.init();
        } ///////////////////////////////////////////////


        init() {
          input.on(Input.EventType.MOUSE_DOWN, this.onMouseClick, this); //开启输入监听

          PhysicsSystem.instance.gravity = v3(0, -500, 0); //设置重力

          this.Bird.getComponent(RigidBody).linearDamping = 0.1; //设置速度阻尼
          //this.Bird.getComponent(Collider).on('onTriggerEnter',this.onHit,this)//原来的开启碰撞检测

          let coms = this.Bird.getComponents(SphereCollider); //两个球体碰撞箱组件

          coms[0].on('onCollisionEnter', this.onHit, this); //第一个碰撞箱，不使用触发器，对障碍物进行判断

          coms[1].on('onTriggerEnter', this.getScore, this); //第二个碰撞箱，使用触发器，对分数进行判断
        }

        onMouseClick(event) {
          //鼠标输入
          this.Bird.getComponent(RigidBody).setLinearVelocity(v3(0, 300, 0)); //更改速度为向上
        }

        onHit(event) {
          //撞上柱子
          console.log("Hit");
          this.GameManagerScript.gameStatus = (_crd && EnumGameStatus === void 0 ? (_reportPossibleCrUseOfEnumGameStatus({
            error: Error()
          }), EnumGameStatus) : EnumGameStatus).die; //碰撞后死亡
        }

        getScore(event) {
          console.log("Scored");
          this.GameManagerScript.score++;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Bird", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "GameManagerScript", [_dec3], {
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
//# sourceMappingURL=83f0d7244b1a22600ef9944c7368bf6933da6a39.js.map