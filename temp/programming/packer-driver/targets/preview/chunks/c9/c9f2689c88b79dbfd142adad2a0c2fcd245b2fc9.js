System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Prefab, math, v3, instantiate, tween, Label, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, EnumGameStatus, GameManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  _export("EnumGameStatus", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      math = _cc.math;
      v3 = _cc.v3;
      instantiate = _cc.instantiate;
      tween = _cc.tween;
      Label = _cc.Label;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "01ab0iMtT1Of7o6AxiQgz5n", "GameManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      (function (EnumGameStatus) {
        EnumGameStatus[EnumGameStatus["init"] = 1] = "init";
        EnumGameStatus[EnumGameStatus["idle"] = 2] = "idle";
        EnumGameStatus[EnumGameStatus["pause"] = 3] = "pause";
        EnumGameStatus[EnumGameStatus["die"] = 4] = "die";
      })(EnumGameStatus || _export("EnumGameStatus", EnumGameStatus = {}));

      _export("GameManager", GameManager = (_dec = ccclass('GameManager'), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(Label), _dec(_class = (_class2 = class GameManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "pref_Brick", _descriptor, this);

          _initializerDefineProperty(this, "nd_BrickPlace", _descriptor2, this);

          _initializerDefineProperty(this, "lb_score", _descriptor3, this);

          this.Timer = 0;
          this.allBricks = [];
          this._gameStatus = 0;
          this._score = 0;
        }

        ///////////////////////////////////////////////
        //???????????????????????????
        set gameStatus(status) {
          switch (status) {
            case EnumGameStatus.init:
              //?????????
              console.log("Status:init");
              this.scheduleOnce(() => {
                this.gameStatus = EnumGameStatus.idle;
              }, 0.2); //??????0.2s???????????????

              break;

            case EnumGameStatus.idle:
              console.log("Status:idle");
              break;

            case EnumGameStatus.pause:
              console.log("Status:pause");
              break;

            case EnumGameStatus.die:
              console.log("Status:die");
              break;

            default:
              console.log("Error:Wrong game status!");
              this.gameStatus = EnumGameStatus.die;
          }

          this._gameStatus = status;
        }

        get gameStatus() {
          return this._gameStatus;
        } //???????????????????????????


        set score(score) {
          this.lb_score.string = "Score:" + score;
          this._score = score;
        }

        get score() {
          return this._score;
        } ///////////////////////////////////////////////


        summonBricks() {
          //????????????
          var rand = math.randomRange(-200, 200); //?????????

          var newBrick = instantiate(this.pref_Brick); //?????????

          this.nd_BrickPlace.addChild(newBrick); //???????????????

          newBrick.setPosition(v3(0, rand, 0)); //???????????????????????????

          this.allBricks.push(newBrick); //?????????

          if (this.allBricks.length > 8) {
            //??????????????????
            this.allBricks.shift().destroy(); //?????????????????????
          }

          tween(newBrick) //??????
          .to(20, {
            position: v3(-2000, rand, 0)
          }).delay(500).start();
        }

        checkTimer() {
          //???????????????????????????
          if (this.Timer < 300) {
            this.Timer++;
          } else {
            this.Timer = 0;
            this.summonBricks();
            console.log("Summon");
          }
        } ///////////////////////////////////////////////


        start() {
          this.summonBricks();
          this.gameStatus = EnumGameStatus.init; //???????????????
        }

        update(deltaTime) {
          this.checkTimer();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pref_Brick", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nd_BrickPlace", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lb_score", [_dec4], {
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
//# sourceMappingURL=c9f2689c88b79dbfd142adad2a0c2fcd245b2fc9.js.map