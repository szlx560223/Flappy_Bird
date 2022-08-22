System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, _dec, _class, _crd, ccclass, property, GameSceneChange;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "27dd4Dky/1CB7dbNBklMdPB", "GameSceneChange", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameSceneChange", GameSceneChange = (_dec = ccclass('GameSceneChange'), _dec(_class = class GameSceneChange extends Component {
        changeScene(event, CustomEventData) {
          //切换场景
          director.loadScene(CustomEventData);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=286c86e3892782a81c49c8bc7ed5f50a5fd5d0cd.js.map