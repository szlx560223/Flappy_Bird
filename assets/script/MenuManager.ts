//MenuManager.ts
import { _decorator, Component, Node, director, Label, Button } from 'cc';
import { GameManager } from './GameManager';
const { ccclass, property } = _decorator;

@ccclass('MenuManager')
export class MenuManager extends Component {
    //暂停菜单
    @property(Node)
    pauseMenu:Node = null!
    //结算菜单
    @property(Node)
    endMenu:Node = null!
    //计分板节点
    @property(Label)
    lb_score:Label = null!
    //暂停按钮
    @property(Node)
    btn_pauseBtn:Node = null!
    //场景计分板
    @property(Node)
    lb_MainScore:Node = null!

    //MenuManager单例
    public static instance:MenuManager = null!

    onLoad(){
        MenuManager.instance = this;//绑定单例
        this.pauseMenu.active = false;//隐藏暂停菜单
        this.endMenu.active = false;//隐藏结算菜单
    }

    clickReplayBtn(event:Event,CustomEventData){//游戏重新开始
        director.resume()//游戏场景恢复
        director.loadScene(CustomEventData);//重新载入场景
    }
    clickPauseBtn(event:Event,CustomEventData){//暂停游戏
        director.pause()//游戏场景暂停
        this.pauseMenu.active = true;
    }
    clickResumeBtn(event:Event,CustomEventData){//恢复游戏
        director.resume()//游戏场景恢复
        this.pauseMenu.active = false;//关闭菜单
    }
    changeScene(event:Event,CustomEventData){//切换场景
        director.loadScene(CustomEventData);
    }
    gameEnd(){//游戏结束
        director.pause()//游戏场景暂停
        this.endMenu.active = true;//激活节点
        this.lb_score.string = `${GameManager.instance._score}`//修改文本
        this.lb_MainScore.active = false;//隐藏计分板
        this.btn_pauseBtn.active = false;//隐藏暂停按钮
    }
}