System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, RigidBody, v3, input, Input, PhysicsSystem, SphereCollider, EnumGameStatus, GameManager, GameData, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, BirdCtrl;

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

      ({
        ccclass,
        property
      } = _decorator);

      _export("BirdCtrl", BirdCtrl = (_dec = ccclass('BirdCtrl'), _dec2 = property(Node), _dec(_class = (_class2 = class BirdCtrl extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "Bird", _descriptor, this);

          this.RigidBodyComPonent = null;
        }

        ///////////////////////////////////////////////
        onLoad() {
          this.init();
        }

        start() {
          this.RigidBodyComPonent = this.Bird.getComponent(RigidBody);
        }

        update() {
          this.checkPos();
          this.changeDamping();
        } ///////////////////////////////////////////////


        init() {
          this.Bird.setPosition(v3(200, (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).data.birdPos, 0)); //??????????????????

          this.Bird.setScale(v3((_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).data.birdScale, (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).data.birdScale, (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).data.birdScale)); //??????????????????

          input.on(Input.EventType.MOUSE_DOWN, this.onMouseClick, this); //??????????????????

          PhysicsSystem.instance.gravity = v3(0, -(_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).data.birdGravity, 0); //????????????

          this.Bird.getComponent(RigidBody).linearDamping = 0; //??????????????????
          //this.Bird.getComponent(Collider).on('onTriggerEnter',this.onHit,this)//???????????????????????????

          var coms = this.Bird.getComponents(SphereCollider); //???????????????????????????

          coms[0].on('onCollisionEnter', this.onHit, this); //??????????????????????????????????????????????????????????????????

          coms[1].on('onTriggerEnter', this.getScore, this); //????????????????????????????????????????????????????????????
        }

        onMouseClick(event) {
          //????????????
          this.Bird.getComponent(RigidBody).setLinearVelocity(v3(0, (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).data.birdJumpStrength, 0)); //?????????????????????
        }

        onHit(event) {
          //????????????
          console.log("Hit");
          (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).instance.gameStatus = (_crd && EnumGameStatus === void 0 ? (_reportPossibleCrUseOfEnumGameStatus({
            error: Error()
          }), EnumGameStatus) : EnumGameStatus).die; //???????????????
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
          //??????????????????????????????????????????????????????
          var speed = v3();
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
          //????????????????????????????????????????????????
          if (this.Bird.position.y < 0 || this.Bird.position.y > 1920) {
            (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).instance.gameStatus = (_crd && EnumGameStatus === void 0 ? (_reportPossibleCrUseOfEnumGameStatus({
              error: Error()
            }), EnumGameStatus) : EnumGameStatus).die;
          }
        }

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
//# sourceMappingURL=42be3f415475dfe0cce809500e9345ca8e824563.js.map