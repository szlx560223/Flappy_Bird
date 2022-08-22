System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, director, _dec, _class, _crd, ccclass, property, MenuManager;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "64f33vx9lNAQZK59He7WM3u", "MenuManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MenuManager", MenuManager = (_dec = ccclass('MenuManager'), _dec(_class = class MenuManager extends Component {
        start() {}

        clickPauseBtn() {
          //暂停游戏
          director.pause();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3a759627a554830fdd87accb8e755dac9b020baf.js.map