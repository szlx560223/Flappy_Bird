System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, director, _dec, _class, _crd, ccclass, property, GameSceneChange;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "27dd4Dky/1CB7dbNBklMdPB", "GameSceneChange", undefined);

      //�����������
      ({
        ccclass,
        property
      } = _decorator);

      _export("GameSceneChange", GameSceneChange = (_dec = ccclass('GameSceneChange'), _dec(_class = class GameSceneChange extends Component {
        //�����������ݣ�����Component�������
        changeScene(event, CustomEventData) {
          director.loadScene(CustomEventData);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=aec53ee0c59c29e6307d4222872cdcdd5ee6fd27.js.map