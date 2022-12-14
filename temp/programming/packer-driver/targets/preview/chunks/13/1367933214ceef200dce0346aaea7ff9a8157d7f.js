System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Prefab, math, v3, instantiate, tween, Label, director, macro, GameData, MenuManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _class3, _crd, ccclass, property, EnumGameStatus, GameManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameData(extras) {
    _reporterNs.report("GameData", "./GameData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMenuManager(extras) {
    _reporterNs.report("MenuManager", "./MenuManager", _context.meta, extras);
  }

  _export("EnumGameStatus", void 0);

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
      Prefab = _cc.Prefab;
      math = _cc.math;
      v3 = _cc.v3;
      instantiate = _cc.instantiate;
      tween = _cc.tween;
      Label = _cc.Label;
      director = _cc.director;
      macro = _cc.macro;
    }, function (_unresolved_2) {
      GameData = _unresolved_2.GameData;
    }, function (_unresolved_3) {
      MenuManager = _unresolved_3.MenuManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "01ab0iMtT1Of7o6AxiQgz5n", "GameManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'math', 'v3', 'instantiate', 'tween', 'Label', 'director', 'macro', 'Scheduler']);

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

      _export("GameManager", GameManager = (_dec = ccclass('GameManager'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec(_class = (_class2 = (_class3 = class GameManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "pref_Brick", _descriptor, this);

          _initializerDefineProperty(this, "pref_Background", _descriptor2, this);

          _initializerDefineProperty(this, "nd_BrickPlace", _descriptor3, this);

          _initializerDefineProperty(this, "nd_BackgroundPlace", _descriptor4, this);

          _initializerDefineProperty(this, "lb_score", _descriptor5, this);

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
              GameManager.instance.init(); //??????????????????

              break;

            case EnumGameStatus.idle:
              console.log("Status:idle");
              break;

            case EnumGameStatus.pause:
              console.log("Status:pause");
              break;

            case EnumGameStatus.die:
              console.log("Status:die");
              (_crd && MenuManager === void 0 ? (_reportPossibleCrUseOfMenuManager({
                error: Error()
              }), MenuManager) : MenuManager).instance.gameEnd(); //???????????????????????????

              break;

            default:
              console.log("Error:Wrong game status!");
              GameManager.instance.gameStatus = EnumGameStatus.die;
          }

          GameManager.instance._gameStatus = status;
        }

        get gameStatus() {
          return GameManager.instance._gameStatus;
        } //???????????????????????????


        set score(score) {
          GameManager.instance.lb_score.string = "" + score;
          GameManager.instance._score = score;
        }

        get score() {
          return GameManager.instance._score;
        } ///////////////////////////////////////////////


        init() {
          //?????????
          if (director.isPaused()) {
            //??????????????????(??????????????????)
            director.resume();
          }

          GameManager.instance.nd_BrickPlace.removeAllChildren(); //????????????????????????????????????

          GameManager.instance.nd_BackgroundPlace.removeAllChildren(); //?????????????????????????????????

          GameManager.instance.score = 0; //????????????

          GameManager.instance.summonBricks(); //????????????????????????

          GameManager.instance.summonFirstBackground(); //?????????????????????

          GameManager.instance.summonBackground(); //????????????

          GameManager.instance.scheduleOnce(() => {
            GameManager.instance.gameStatus = EnumGameStatus.idle;
          }, 0.2); //??????0.2s???????????????
        }

        summonBricks() {
          //????????????
          if (GameManager.instance.gameStatus == EnumGameStatus.die) {
            //??????????????????????????????
            return;
          }

          var rand = math.randomRange(-(_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).data.brickSpawnRand, (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).data.brickSpawnRand); //?????????

          var newBrick = instantiate(GameManager.instance.pref_Brick); //?????????

          {
            //???????????????
            var up = newBrick.getChildByName("Up"); //????????????????????????

            var down = newBrick.getChildByName("Down"); //????????????????????????

            var score = newBrick.getChildByName("Score"); //?????????????????????????????????

            var pos = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).data.brickHeight / 2 + 1000;
            var scale = 40 * (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).data.brickWidth;
            up.setPosition(v3(0, pos, 0));
            down.setPosition(v3(0, -pos, 0));
            up.setScale(v3(scale, 2000, 30));
            down.setScale(v3(scale, 2000, 30));
            score.setScale(v3(1, (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).data.brickHeight, 30));
          }
          GameManager.instance.nd_BrickPlace.addChild(newBrick); //???????????????

          newBrick.setPosition(v3(0, rand, 0)); //???????????????????????????

          tween(newBrick) //??????
          .to(10, {
            position: v3(-(1500 + (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).data.brickSpeed * 100), rand, 0)
          }).call(() => {
            newBrick.destroy(); //????????????????????????
          }).start();
        }

        summonBackground() {
          //????????????
          var newBackground = instantiate(GameManager.instance.pref_Background);
          GameManager.instance.nd_BackgroundPlace.addChild(newBackground);
          newBackground.setPosition(v3(0, 0, 0));
          tween(newBackground).to(10, {
            position: v3(-2160, 0, 0)
          }).call(() => {
            newBackground.destroy(); //????????????????????????
          }).start();
        }

        summonFirstBackground() {
          //?????????????????????
          var newBackground = instantiate(GameManager.instance.pref_Background);
          GameManager.instance.nd_BackgroundPlace.addChild(newBackground);
          newBackground.setPosition(v3(-1080, 0, 0));
          tween(newBackground).to(10, {
            position: v3(-3240, 0, 0)
          }).call(() => {
            newBackground.destroy(); //????????????????????????
          }).start();
        } ///////////////////////////////////////////////


        onLoad() {
          GameManager.instance = this; //????????????

          GameManager.instance.gameStatus = EnumGameStatus.init; //???????????????
        }

        start() {
          var scheduler = director.getScheduler();
          scheduler.schedule(this.summonBackground, this, 5, macro.REPEAT_FOREVER, 0, false); //?????????????????????

          scheduler.schedule(this.summonBricks, this, (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).data.brickSpawnTime, macro.REPEAT_FOREVER, 0, false); //?????????????????????
        }

      }, _class3.instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pref_Brick", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pref_Background", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nd_BrickPlace", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "nd_BackgroundPlace", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lb_score", [_dec6], {
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
//# sourceMappingURL=1367933214ceef200dce0346aaea7ff9a8157d7f.js.map