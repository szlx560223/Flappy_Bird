export class Setting {
    //鸟儿的初始高度
    birdPos:number;
    //鸟儿的大小
    birdScale:number;
    //下落加速度
    birdGravity:number;
    //鸟儿向上的速度阻尼
    birdSpeedUpDamping:number;
    //鸟儿向下的速度阻尼
    birdSpeedDownDamping:number;
    //鸟儿跳跃力度
    birdJumpStrength:number;
    //障碍物生成间隔时间
    brickSpawnTime:number;
    //障碍物随机生成区间
    brickSpawnRand:number;
    //障碍物移动速度
    brickSpeed:number;
    //障碍物上下间距
    brickHeight:number;
    //障碍物宽度
    brickWidth:number;
    //越过障碍物的得分
    brickPoint:number;
    constructor(
        birdPos:number=960,
        birdScale:number=50,
        birdGravity:number=2000,
        birdSpeedUpDamping:number=0.6,
        birdSpeedDownDamping:number=0,
        birdJumpStrength:number=800,
        brickSpawnTime:number=5,
        brickSpawnRand:number=500,
        brickSpeed:number=10,
        brickHeight:number=250,
        brickWidth:number=5,
        brickPoint:number=1,
        ){
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
}

