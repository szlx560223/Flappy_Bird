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
        constructor(birdPos, birdScale, birdGravity, birdSpeedUpDamping, birdSpeedDownDamping, birdJumpStrength, brickSpawnTime, brickSpawnRand, brickSpeed, brickHeight, brickWidth, brickPoint) {
          if (birdPos === void 0) {
            birdPos = 960;
          }

          if (birdScale === void 0) {
            birdScale = 50;
          }

          if (birdGravity === void 0) {
            birdGravity = 2000;
          }

          if (birdSpeedUpDamping === void 0) {
            birdSpeedUpDamping = 0.6;
          }

          if (birdSpeedDownDamping === void 0) {
            birdSpeedDownDamping = 0;
          }

          if (birdJumpStrength === void 0) {
            birdJumpStrength = 800;
          }

          if (brickSpawnTime === void 0) {
            brickSpawnTime = 200;
          }

          if (brickSpawnRand === void 0) {
            brickSpawnRand = 500;
          }

          if (brickSpeed === void 0) {
            brickSpeed = 10;
          }

          if (brickHeight === void 0) {
            brickHeight = 250;
          }

          if (brickWidth === void 0) {
            brickWidth = 5;
          }

          if (brickPoint === void 0) {
            brickPoint = 1;
          }

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
//# sourceMappingURL=b1ed9ff52f495fc74ca237abf54cccc1b794f0c8.js.map