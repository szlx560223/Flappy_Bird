import { _decorator, Component, Node, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameSceneChange')
export class GameSceneChange extends Component {

    changeScene(event:Event,CustomEventData){//切换场景
        director.loadScene(CustomEventData);
    }
}
