System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, sys, find, Slider, Label, Setting, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, EnumSettingType, EnumNodeType, SettingManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

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
      Node = _cc.Node;
      sys = _cc.sys;
      find = _cc.find;
      Slider = _cc.Slider;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      Setting = _unresolved_2.Setting;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2100e/AunRB17CtegjgBcny", "SettingManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      (function (EnumSettingType) {
        EnumSettingType[EnumSettingType["birdPos"] = 0] = "birdPos";
        EnumSettingType[EnumSettingType["birdScale"] = 1] = "birdScale";
        EnumSettingType[EnumSettingType["birdGravity"] = 2] = "birdGravity";
        EnumSettingType[EnumSettingType["birdSpeedUpDamping"] = 3] = "birdSpeedUpDamping";
        EnumSettingType[EnumSettingType["birdSpeedDownDamping"] = 4] = "birdSpeedDownDamping";
        EnumSettingType[EnumSettingType["birdJumpStrength"] = 5] = "birdJumpStrength";
        EnumSettingType[EnumSettingType["brickSpawnTime"] = 6] = "brickSpawnTime";
        EnumSettingType[EnumSettingType["brickSpawnRand"] = 7] = "brickSpawnRand";
        EnumSettingType[EnumSettingType["brickSpeed"] = 8] = "brickSpeed";
        EnumSettingType[EnumSettingType["brickHeight"] = 9] = "brickHeight";
        EnumSettingType[EnumSettingType["brickWidth"] = 10] = "brickWidth";
        EnumSettingType[EnumSettingType["brickPoint"] = 11] = "brickPoint";
      })(EnumSettingType || (EnumSettingType = {}));

      (function (EnumNodeType) {
        EnumNodeType[EnumNodeType["lb_description"] = 0] = "lb_description";
        EnumNodeType[EnumNodeType["slider"] = 1] = "slider";
        EnumNodeType[EnumNodeType["lb_value"] = 2] = "lb_value";
      })(EnumNodeType || (EnumNodeType = {}));

      _export("SettingManager", SettingManager = (_dec = ccclass('SettingManager'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = class SettingManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "Menu", _descriptor, this);

          _initializerDefineProperty(this, "Warning", _descriptor2, this);

          this.localSetting = new (_crd && Setting === void 0 ? (_reportPossibleCrUseOfSetting({
            error: Error()
          }), Setting) : Setting)();
          this.isSaved = true;
          this.nodeArray = void 0;
          this.stringOfSetting = new Array("birdPos", "birdScale", "birdGravity", "birdSpeedUpDamping", "birdSpeedDownDamping", "birdJumpStrength", "brickSpawnTime", "brickSpawnRand", "brickSpeed", "brickHeight", "brickWidth", "brickPoint");
          this.sliderData = new (_crd && Setting === void 0 ? (_reportPossibleCrUseOfSetting({
            error: Error()
          }), Setting) : Setting)(0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0);
        }

        clickApplyBtn() {
          //点击应用按钮
          sys.localStorage.setItem("gameValue", JSON.stringify(this.localSetting)); //储存本地设置至浏览器缓存

          sys.localStorage.setItem("sliderValue", JSON.stringify(this.sliderData));
          this.isSaved = true;
        }

        clickSettingBtn(event, CustomEventData) {
          //点击设置按钮
          this.getData();
          this.Menu.active = true;

          for (var i = 0; i < this.nodeArray.length; i++) {
            this.nodeArray[i][EnumNodeType.slider].getComponent(Slider).progress = this.sliderData[this.stringOfSetting[i]];
            this.nodeArray[i][EnumNodeType.lb_value].getComponent(Label).string = "" + this.localSetting[this.stringOfSetting[i]];
          }
        }

        clickReturnBtn(event, CustomEventData) {
          //点击返回按钮
          if (this.isSaved) {
            this.Menu.active = false;
            this.Warning.active = false;
          } else {
            this.isSaved = true;
            this.Warning.active = true;
          }
        }

        getData() {
          //从浏览器获取缓存数据
          if (sys.localStorage.getItem("gameValue") === null || sys.localStorage.getItem("sliderValue") === null) {
            //传入默认设置
            sys.localStorage.setItem("gameValue", JSON.stringify(this.localSetting));
            sys.localStorage.setItem("sliderValue", JSON.stringify(this.sliderData));
          }

          this.localSetting = JSON.parse(sys.localStorage.getItem("gameValue")); //获取浏览器缓存设置

          this.sliderData = JSON.parse(sys.localStorage.getItem("sliderValue"));
        }

        getNodeArray() {
          //获取设置的所有节点，便于后续操作
          var rootNodeChildren = find('Canvas/Setting/Sliders').children;
          this.nodeArray = new Array(rootNodeChildren.length);

          for (var i = 0; i < rootNodeChildren.length; i++) {
            this.nodeArray[i] = new Array(rootNodeChildren[0].children.length);
            this.nodeArray[i] = rootNodeChildren[i].children;
          }
        }

        changeSetting(event, CustomEventData) {
          this.isSaved = false; //保存指示器置否，表示未保存状态

          this.Warning.active = false; //关闭提示标签

          CustomEventData = parseInt(CustomEventData); //传入是字符串，转成整数

          var value, progress;
          progress = this.nodeArray[CustomEventData][EnumNodeType.slider].getComponent(Slider).progress.toFixed(2); //滑动器的百分比

          switch (CustomEventData) {
            case EnumSettingType.birdPos:
              value = (1920 * progress).toFixed(0);
              break;

            case EnumSettingType.birdScale:
              value = (10 + 80 * progress).toFixed(1);
              break;

            case EnumSettingType.birdGravity:
              value = (4000 * progress).toFixed(0);
              break;

            case EnumSettingType.birdSpeedUpDamping:
              value = (0.8 * progress).toFixed(2);
              break;

            case EnumSettingType.birdSpeedDownDamping:
              value = (0.8 * progress).toFixed(2);
              break;

            case EnumSettingType.birdJumpStrength:
              value = (1600 * progress).toFixed(0);
              break;

            case EnumSettingType.brickSpawnTime:
              value = (400 * progress).toFixed(0);
              break;

            case EnumSettingType.brickSpawnRand:
              value = (1000 * progress).toFixed(0);
              break;

            case EnumSettingType.brickSpeed:
              value = (5 + 10 * progress).toFixed(0);
              break;

            case EnumSettingType.brickHeight:
              value = (50 + 400 * progress).toFixed(0);
              break;

            case EnumSettingType.brickWidth:
              value = (1 + 8 * progress).toFixed(1);
              break;

            case EnumSettingType.brickPoint:
              value = (1 + 2 * progress).toFixed(0);
              break;
          }

          this.localSetting[this.stringOfSetting[CustomEventData]] = value; //修改本地设置

          this.sliderData[this.stringOfSetting[CustomEventData]] = progress; //修改本地滑动器设置

          this.nodeArray[CustomEventData][EnumNodeType.lb_value].getComponent(Label).string = "" + value; //修改数字标签内容
        }

        onLoad() {
          this.Menu.active = false; //设置菜单，初始关闭

          this.Warning.active = false; //未保存提示，初始关闭

          this.getNodeArray(); //获取节点数据
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Menu", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Warning", [_dec3], {
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
//# sourceMappingURL=2869bbf01333be6c4fd367f42f60f153a32c6b34.js.map