System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, RigidBody, v3, input, Input, PhysicsSystem, SphereCollider, EnumGameStatus, GameManager, GameData, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, BirdCtrl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEnumGameStatus(extras) {
    _reporterNs.report("EnumGameStatus", "./GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameData(extras) {
    _reporterNs.report("GameData", "./GameData", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
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
    }, function (_unresolved_3) {
      GameData = _unresolved_3.GameData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bc88ciLiZtJGIwPfKpP+06B", "BirdCtrl", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'RigidBody', 'v3', 'input', 'Input', 'EventMouse', 'PhysicsSystem', 'ICollisionEvent', 'SphereCollider', 'Vec3', 'math']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BirdCtrl", BirdCtrl = (_dec = ccclass('BirdCtrl'), _dec2 = property(Node), _dec(_class = (_class2 = class BirdCtrl extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "Bird", _descriptor, this);

          this.RigidBodyComPonent = null;
        }

        ///////////////////////////////////////////////
        onLoad() {
          this.RigidBodyComPonent = this.Bird.getComponent(RigidBody);
          this.init();
        }

        start() {}

        update() {
          this.checkPos();
          this.changeDamping();
          this.calculateAngel();
        } ///////////////////////////////////////////////


        init() {
          this.Bird.setPosition(v3(200, (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).data.birdPos, 0)); //设置初始位置

          this.Bird.setScale(v3((_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).data.birdScale, (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).data.birdScale, (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).data.birdScale)); //设置体型大小

          input.on(Input.EventType.MOUSE_DOWN, this.onMouseClick, this); //开启输入监听

          PhysicsSystem.instance.gravity = v3(0, -(_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).data.birdGravity, 0); //设置重力

          this.RigidBodyComPonent.linearDamping = 0; //设置速度阻尼
          //this.Bird.getComponent(Collider).on('onTriggerEnter',this.onHit,this)//原来的开启碰撞检测

          let coms = this.Bird.getComponents(SphereCollider); //两个球体碰撞箱组件

          coms[0].on('onCollisionEnter', this.onHit, this); //第一个碰撞箱，不使用触发器，对障碍物进行判断

          coms[1].on('onTriggerEnter', this.getScore, this); //第二个碰撞箱，使用触发器，对分数进行判断
        }

        onMouseClick(event) {
          //鼠标输入
          this.RigidBodyComPonent.setLinearVelocity(v3(0, (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).data.birdJumpStrength, 0)); //更改速度为向上
        }

        onHit(event) {
          //撞上柱子
          console.log("Hit");
          (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).instance.gameStatus = (_crd && EnumGameStatus === void 0 ? (_reportPossibleCrUseOfEnumGameStatus({
            error: Error()
          }), EnumGameStatus) : EnumGameStatus).die; //碰撞后死亡
        }

        getScore(event) {
          console.log("Scored");
          (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).instance.score += (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).data.brickPoint;
        }

        changeDamping() {
          //切换速度阻尼，向上阻尼大，向下阻尼小
          let speed = v3();
          this.RigidBodyComPonent.getLinearVelocity(speed);

          if (speed.y > 0) {
            this.RigidBodyComPonent.linearDamping = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).data.birdSpeedUpDamping;
          } else {
            this.RigidBodyComPonent.linearDamping = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).data.birdSpeedDownDamping;
          }
        }

        checkPos() {
          //检查鸟儿位置，离开屏幕判定为死亡
          if (this.Bird.position.y < 0 || this.Bird.position.y > 1920) {
            (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).instance.gameStatus = (_crd && EnumGameStatus === void 0 ? (_reportPossibleCrUseOfEnumGameStatus({
              error: Error()
            }), EnumGameStatus) : EnumGameStatus).die;
          }
        }

        calculateAngel() {
          let x = 300 + (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).data.brickSpeed * 10;
          let vec;
          console.log("trigger");
          this.RigidBodyComPonent.getLinearVelocity(vec);
          let y = vec.y;
          let z = Math.atan(y / x);
          console.log(z);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Bird", [_dec2], {
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
//# sourceMappingURL=0ce336bf7ecc78018ce1b0fb09d20dcec9193f82.js.map