//GameManager.ts
import { _decorator, Component, Node, Prefab, math, v3, instantiate, tween, Label, director, macro, Scheduler } from 'cc';
import { GameData } from './GameData';
import { MenuManager } from './MenuManager';
const { ccclass, property } = _decorator;

export enum EnumGameStatus{//游戏状态
    init=1,//初始化
    idle=2,//游玩
    pause=3,//暂停
    die=4,//死亡
}
@ccclass('GameManager')
export class GameManager extends Component {
    
    //障碍物
    @property(Prefab)
    private pref_Brick:Prefab = null!
    //背景
    @property(Prefab)
    private pref_Background:Prefab = null!
    //障碍物生成节点
    @property(Node)
    private nd_BrickPlace:Node = null!
    //背景生成节点
    @property(Node)
    private nd_BackgroundPlace:Node = null!
    //计分板节点
    @property(Label)
    private lb_score:Label = null!

///////////////////////////////////////////////
    //GameManager单例
    public static instance:GameManager = null!
    //游戏状态
    public _gameStatus:EnumGameStatus = 0;
    //分数
    public _score:number = 0;
///////////////////////////////////////////////
    //更新、获取游戏状态
    set gameStatus(status:EnumGameStatus){
        switch(status){
            case EnumGameStatus.init://初始化
                console.log("Status:init");
                GameManager.instance.init();//初始化的函数
                break;
            case EnumGameStatus.idle:
                console.log("Status:idle");
                break;
            case EnumGameStatus.pause:
                console.log("Status:pause");
                break;
            case EnumGameStatus.die:
                console.log("Status:die");
                MenuManager.instance.gameEnd();//执行游戏结束的函数
                break;
            default:
                console.log("Error:Wrong game status!")
                GameManager.instance.gameStatus=EnumGameStatus.die;
        }
        GameManager.instance._gameStatus=status;
    }
    get gameStatus(){
        return GameManager.instance._gameStatus;
    }
    //更新、获取游戏分数
    set score(score:number){
        GameManager.instance.lb_score.string = `${score}`
        GameManager.instance._score=score;
    }
    get score(){
        return GameManager.instance._score;
    }
///////////////////////////////////////////////
    private init(){//初始化
        if(director.isPaused()){//判断场景状态(是否二次加载)
            director.resume();
        }
        GameManager.instance.nd_BrickPlace.removeAllChildren();//移除所有子节点（障碍物）
        GameManager.instance.nd_BackgroundPlace.removeAllChildren();//移除所有子节点（背景）
        GameManager.instance.score=0;//分数归零
        GameManager.instance.summonBricks();//生成第一个障碍物
        GameManager.instance.summonFirstBackground();//生成第一个背景
        GameManager.instance.summonBackground();//生成背景
        GameManager.instance.scheduleOnce(()=>{
            GameManager.instance.gameStatus=EnumGameStatus.idle;
        },0.2)//延迟0.2s后切换状态
    }
    private summonBricks(){//生成砖块
        if(GameManager.instance.gameStatus == EnumGameStatus.die){//死了就不会继续生成了
            return;
        }
        let rand = math.randomRange(-GameData.data.brickSpawnRand,GameData.data.brickSpawnRand);//随机数
        const newBrick=instantiate(GameManager.instance.pref_Brick);//实例化
        {//自定义部分
            let up = newBrick.getChildByName("Up")//障碍物的上半部分
            let down = newBrick.getChildByName("Down")//障碍物的下半部分
            let score = newBrick.getChildByName("Score")//障碍物的得分检测碰撞箱
            let pos = GameData.data.brickHeight/2+1000;
            let scale = 40*GameData.data.brickWidth;
            up.setPosition(v3(0,pos,0));
            down.setPosition(v3(0,-pos,0));
            up.setScale(v3(scale,2000,30));
            down.setScale(v3(scale,2000,30));
            score.setScale(v3(1,GameData.data.brickHeight,30));
        }
        GameManager.instance.nd_BrickPlace.addChild(newBrick);//添加子节点
        newBrick.setPosition(v3(0,rand,0));//设置节点的相对位置

        tween(newBrick)//移动
        .to(10,{position:v3(-(1500+GameData.data.brickSpeed*100),rand,0)})
        .call(()=>{
            newBrick.destroy();//使用回调函数清除
        })
        .start();
    }

    private summonBackground(){//生成背景
        const newBackground = instantiate(GameManager.instance.pref_Background);
        GameManager.instance.nd_BackgroundPlace.addChild(newBackground);
        newBackground.setPosition(v3(0,0,0));
        tween(newBackground)
        .to(10,{position:v3(-2160,0,0)})
        .call(()=>{
            newBackground.destroy();//使用回调函数清除
        })
        .start()
    }
    private summonFirstBackground(){//生成第一个背景
        const newBackground = instantiate(GameManager.instance.pref_Background);
        GameManager.instance.nd_BackgroundPlace.addChild(newBackground);
        newBackground.setPosition(v3(-1080,0,0));
        tween(newBackground)
        .to(10,{position:v3(-3240,0,0)})
        .call(()=>{
            newBackground.destroy();//使用回调函数清除
        })
        .start()
    }

///////////////////////////////////////////////
    onLoad(){
        GameManager.instance = this;//绑定单例
        GameManager.instance.gameStatus=EnumGameStatus.init;//初始化游戏
    }
    start(){
        let scheduler:Scheduler = director.getScheduler();
        scheduler.schedule(this.summonBackground,this,5,macro.REPEAT_FOREVER,0,false);//周期性生成背景
        scheduler.schedule(this.summonBricks,this,GameData.data.brickSpawnTime,macro.REPEAT_FOREVER,0,false);//周期性生成砖块
    }
}