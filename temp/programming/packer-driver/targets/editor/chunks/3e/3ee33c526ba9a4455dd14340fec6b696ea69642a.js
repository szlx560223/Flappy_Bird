System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, sys, Setting, _dec, _dec2, _class, _class2, _crd, ccclass, property, executionOrder, GameData;

  function _reportPossibleCrUseOfSetting(extras) {
    _reporterNs.report("Setting", "./Setting", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      Setting = _unresolved_2.Setting;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a69efRecuRF+5S0EIdHgFVf", "GameData", undefined);

      ({
        ccclass,
        property,
        executionOrder
      } = _decorator);

      _export("GameData", GameData = (_dec = ccclass('GameData'), _dec2 = executionOrder(-1), _dec(_class = _dec2(_class = (_class2 = class GameData extends Component {
        getData() {
          //获取数据
          if (sys.localStorage.getItem("gameValue") === null) {
            sys.localStorage.setItem("gameValue", JSON.stringify(GameData.data)); //如果没有数据，则传入默认设置
          }

          GameData.data = JSON.parse(sys.localStorage.getItem("gameValue")); //获取浏览器缓存设置

          for (let x in GameData.data) {
            //把取得的数据转为整数
            GameData.data[x] = parseFloat(GameData.data[x]);
          }
        }

        onLoad() {
          this.getData();
        }

      }, _class2.data = new (_crd && Setting === void 0 ? (_reportPossibleCrUseOfSetting({
        error: Error()
      }), Setting) : Setting)(), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3ee33c526ba9a4455dd14340fec6b696ea69642a.js.map