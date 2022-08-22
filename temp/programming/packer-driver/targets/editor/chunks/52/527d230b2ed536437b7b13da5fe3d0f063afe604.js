System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, director, Label, EnumGameStatus, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, MenuManager;

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
      director = _cc.director;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      EnumGameStatus = _unresolved_2.EnumGameStatus;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "64f33vx9lNAQZK59He7WM3u", "MenuManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MenuManager", MenuManager = (_dec = ccclass('MenuManager'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = _decorator.type('GameManager'), _dec5 = property(Label), _dec(_class = (_class2 = class MenuManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "pauseMenu", _descriptor, this);

          _initializerDefineProperty(this, "endMenu", _descriptor2, this);

          _initializerDefineProperty(this, "GameManagerScript", _descriptor3, this);

          _initializerDefineProperty(this, "lb_score", _descriptor4, this);
        }

        start() {
          this.pauseMenu.active = false; //隐藏暂停菜单

          this.endMenu.active = false; //隐藏结算菜单
        }

        clickReplayBtn(event, CustomEventData) {
          //游戏重新开始
          this.GameManagerScript.gameStatus = (_crd && EnumGameStatus === void 0 ? (_reportPossibleCrUseOfEnumGameStatus({
            error: Error()
          }), EnumGameStatus) : EnumGameStatus).init;
        }

        clickPauseBtn(event, CustomEventData) {
          //暂停游戏
          director.pause(); //游戏场景暂停

          this.pauseMenu.active = true;
        }

        clickResumeBtn(event, CustomEventData) {
          //恢复游戏
          director.resume(); //游戏场景恢复

          this.pauseMenu.active = false; //关闭菜单
        }

        changeScene(event, CustomEventData) {
          //切换场景
          director.loadScene(CustomEventData);
        }

        gameEnd() {
          //游戏结束
          director.pause(); //游戏场景暂停

          this.endMenu.active = true; //激活节点

          this.lb_score.string = `您的分数为:${this.GameManagerScript._score}`; //修改文本
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pauseMenu", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "endMenu", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "GameManagerScript", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lb_score", [_dec5], {
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
//# sourceMappingURL=527d230b2ed536437b7b13da5fe3d0f063afe604.js.map