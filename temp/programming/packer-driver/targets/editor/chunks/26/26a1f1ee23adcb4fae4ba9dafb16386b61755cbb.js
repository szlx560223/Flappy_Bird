System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Setting, _crd;

  _export("Setting", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0bea0gLU+dHdqsab6zhljUJ", "Setting", undefined);

      _export("Setting", Setting = class Setting {
        //鸟儿的初始高度
        //鸟儿的大小
        //下落加速度
        //鸟儿向上的速度阻尼
        //鸟儿向下的速度阻尼
        //鸟儿跳跃力度
        //障碍物生成间隔时间
        //障碍物随机生成区间
        //障碍物移动速度
        //障碍物上下间距
        //障碍物宽度
        //越过障碍物的得分
        constructor(birdPos = 960, birdScale = 50, birdGravity = 2000, birdSpeedUpDamping = 0.6, birdSpeedDownDamping = 0, birdJumpStrength = 800, brickSpawnTime = 5, brickSpawnRand = 500, brickSpeed = 10, brickHeight = 250, brickWidth = 5, brickPoint = 1) {
          this.birdPos = void 0;
          this.birdScale = void 0;
          this.birdGravity = void 0;
          this.birdSpeedUpDamping = void 0;
          this.birdSpeedDownDamping = void 0;
          this.birdJumpStrength = void 0;
          this.brickSpawnTime = void 0;
          this.brickSpawnRand = void 0;
          this.brickSpeed = void 0;
          this.brickHeight = void 0;
          this.brickWidth = void 0;
          this.brickPoint = void 0;
          this.birdPos = birdPos;
          this.birdScale = birdScale;
          this.birdGravity = birdGravity;
          this.birdSpeedUpDamping = birdSpeedUpDamping;
          this.birdSpeedDownDamping = birdSpeedDownDamping;
          this.birdJumpStrength = birdJumpStrength;
          this.brickSpawnTime = brickSpawnTime;
          this.brickSpawnRand = brickSpawnRand;
          this.brickSpeed = brickSpeed;
          this.brickHeight = brickHeight;
          this.brickWidth = brickWidth;
          this.brickPoint = brickPoint;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=26a1f1ee23adcb4fae4ba9dafb16386b61755cbb.js.map