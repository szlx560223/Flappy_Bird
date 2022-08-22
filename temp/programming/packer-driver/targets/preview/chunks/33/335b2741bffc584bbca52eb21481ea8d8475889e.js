System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, director, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, MenuManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "64f33vx9lNAQZK59He7WM3u", "MenuManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MenuManager", MenuManager = (_dec = ccclass('MenuManager'), _dec2 = property(Node), _dec(_class = (_class2 = class MenuManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "pauseMenu", _descriptor, this);
        }

        start() {
          this.pauseMenu.active = false; //隐藏菜单
        }

        clickPauseBtn(event, CustomEventData) {
          //暂停游戏
          director.pause();
          this.pauseMenu.active = true;
        }

        clickResumeBtn(event, CustomEventData) {
          //恢复游戏
          director.resume();
          this.pauseMenu.active = false; //关闭菜单
        }

        changeScene(event, CustomEventData) {
          director.loadScene(CustomEventData);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pauseMenu", [_dec2], {
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
//# sourceMappingURL=335b2741bffc584bbca52eb21481ea8d8475889e.js.map