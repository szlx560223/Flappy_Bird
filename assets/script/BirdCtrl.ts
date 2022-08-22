//BirdCtrl.ts
import { _decorator, Component, Node, RigidBody, v3, input, Input, EventMouse, PhysicsSystem, ICollisionEvent, SphereCollider } from 'cc';
import { EnumGameStatus, GameManager } from './GameManager';
import { GameData } from './GameData';
const { ccclass, property } = _decorator;

@ccclass('BirdCtrl')
export class BirdCtrl extends Component {
    //鸟所在的节点
    @property(Node)
    Bird:Node = null!
    //刚体组件，提前加载并缓存以减轻游戏性能开销
    private RigidBodyComPonent:RigidBody = null!
///////////////////////////////////////////////
    onLoad(){
        this.RigidBodyComPonent = this.Bird.getComponent(RigidBody);
        this.init()
    }
    update(){
        this.checkPos();
        this.changeDamping();
        this.calculateAngle();
    }
///////////////////////////////////////////////
    init(){
        this.Bird.setPosition(v3(200,GameData.data.birdPos,0))//设置初始位置
        this.Bird.setScale(v3(GameData.data.birdScale,GameData.data.birdScale,GameData.data.birdScale))//设置体型大小
        input.on(Input.EventType.MOUSE_DOWN,this.onMouseClick,this);//开启输入监听
        PhysicsSystem.instance.gravity=v3(0,-GameData.data.birdGravity,0);//设置重力
        this.RigidBodyComPonent.linearDamping=0;//设置速度阻尼
        //this.Bird.getComponent(Collider).on('onTriggerEnter',this.onHit,this)//原来的开启碰撞检测
        let coms=this.Bird.getComponents(SphereCollider);//两个球体碰撞箱组件
        coms[0].on('onCollisionEnter',this.onHit,this);//第一个碰撞箱，不使用触发器，对障碍物进行判断
        coms[1].on('onTriggerEnter',this.getScore,this)//第二个碰撞箱，使用触发器，对分数进行判断
    }
    onMouseClick(event: EventMouse){//鼠标输入
        this.RigidBodyComPonent.setLinearVelocity(v3(0,GameData.data.birdJumpStrength,0));//更改速度为向上
    }
    onHit(event: ICollisionEvent){//撞上柱子
        console.log("Hit");
        GameManager.instance.gameStatus = EnumGameStatus.die;//碰撞后死亡

    }
    getScore(event: ICollisionEvent){
        console.log("Scored");
        GameManager.instance.score+=GameData.data.brickPoint;
    }
    changeDamping(){//切换速度阻尼，向上阻尼大，向下阻尼小
        let speed = v3()
        this.RigidBodyComPonent.getLinearVelocity(speed);
        if(speed.y>0){
            this.RigidBodyComPonent.linearDamping = GameData.data.birdSpeedUpDamping;
        }
        else{
            this.RigidBodyComPonent.linearDamping = GameData.data.birdSpeedDownDamping;
        }
    }
    checkPos(){//检查鸟儿位置，离开屏幕判定为死亡
        if(this.Bird.position.y<0||this.Bird.position.y>1920){
            GameManager.instance.gameStatus = EnumGameStatus.die;
        }
    }
    calculateAngle(){//判断朝向角度
        let x = 300+GameData.data.brickSpeed*10;//x方向相对速度
        let v = v3();
        this.RigidBodyComPonent.getLinearVelocity(v);//获取速度向量
        let y = v.y;//获取速度的y分量
        let angle = Math.atan(y/x);
        let num_angle = angle/3.141592*180;
        this.Bird.setRTS(v3(0,0,num_angle))
    }
}