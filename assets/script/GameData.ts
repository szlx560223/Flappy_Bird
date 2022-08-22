import { _decorator, Component, Node, sys } from 'cc';
import { Setting } from './Setting';
const { ccclass, property,executionOrder } = _decorator;

@ccclass('GameData')
@executionOrder(-1)
export class GameData extends Component {

    public static data = new Setting();
    getData(){//获取数据
        if(sys.localStorage.getItem("gameValue") === null){
            sys.localStorage.setItem("gameValue",JSON.stringify(GameData.data))//如果没有数据，则传入默认设置
        }
        GameData.data = JSON.parse(sys.localStorage.getItem("gameValue"))//获取浏览器缓存设置
        for(let x in GameData.data){//把取得的数据转为整数
            GameData.data[x] = parseFloat(GameData.data[x]);
        }
    }
    onLoad(){
        this.getData();
    }
}

