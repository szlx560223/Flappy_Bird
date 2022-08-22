//SettingManager.ts
import { _decorator, Component, Node, sys, find, Slider, Label } from 'cc';
import { Setting } from './Setting';
const { ccclass, property } = _decorator;

enum EnumSettingType{//枚举设置类型，便于后续数组操作
    birdPos=0,
    birdScale=1,
    birdGravity=2,
    birdSpeedUpDamping=3,
    birdSpeedDownDamping=4,
    birdJumpStrength=5,
    brickSpawnTime=6,
    brickSpawnRand=7,
    brickSpeed=8,
    brickHeight=9,
    brickWidth=10,
    brickPoint=11,
}
enum EnumNodeType{//枚举节点类型，便于后续数组操作
    lb_description=0,
    slider=1,
    lb_value=2
}

@ccclass('SettingManager')
export class SettingManager extends Component {
    //菜单节点
    @property(Node)
    Menu:Node = null!
    //未保存提示的节点
    @property(Node)
    Warning:Node = null!
    //设置模板，带默认参数
    private localSetting = new Setting();
    //保存指示器
    private isSaved = true;
    //菜单里的设置的根节点，用于后续查找
    private nodeArray:Node[][];
    //设置选项的字符串表，用于查找顺序
    private  stringOfSetting = new Array("birdPos","birdScale","birdGravity","birdSpeedUpDamping","birdSpeedDownDamping","birdJumpStrength","brickSpawnTime","brickSpawnRand","brickSpeed","brickHeight","brickWidth","brickPoint")
    //滑条百分比的数据
    private sliderData = new Setting(0.5,0.5,0.5,0.75,0,0.5,0.5,0.5,0.5,0.5,0.5,0)

    clickApplyBtn(){//点击应用按钮
        sys.localStorage.setItem("gameValue",JSON.stringify(this.localSetting));//储存本地设置至浏览器缓存
        sys.localStorage.setItem("sliderValue",JSON.stringify(this.sliderData));
        this.isSaved = true;
    }
    clickSettingBtn(event:Event,CustomEventData){//点击设置按钮
        this.getData();
        this.Menu.active = true;
        for(let i=0;i<this.nodeArray.length;i++){
            this.nodeArray[i][EnumNodeType.slider].getComponent(Slider).progress = this.sliderData[this.stringOfSetting[i]];
            this.nodeArray[i][EnumNodeType.lb_value].getComponent(Label).string = `${this.localSetting[this.stringOfSetting[i]]}`
        }
    }
    clickReturnBtn(event:Event,CustomEventData){//点击返回按钮
        if(this.isSaved){
            this.Menu.active = false;
            this.Warning.active = false;
        }
        else{
            this.isSaved = true;
            this.Warning.active = true;
        }     
    }
    getData(){//从浏览器获取缓存数据
        if(sys.localStorage.getItem("gameValue") === null||sys.localStorage.getItem("sliderValue") === null){//传入默认设置
            sys.localStorage.setItem("gameValue",JSON.stringify(this.localSetting))
            sys.localStorage.setItem("sliderValue",JSON.stringify(this.sliderData));
        }
        this.localSetting = JSON.parse(sys.localStorage.getItem("gameValue"))//获取浏览器缓存设置
        this.sliderData = JSON.parse(sys.localStorage.getItem("sliderValue"))
    }
    getNodeArray(){//获取设置的所有节点，便于后续操作
        let rootNodeChildren = find('Canvas/Setting/Sliders').children;
        this.nodeArray = new Array(rootNodeChildren.length);
        for(let i=0;i<rootNodeChildren.length;i++){
            this.nodeArray[i] = new Array(rootNodeChildren[0].children.length)
            this.nodeArray[i] = rootNodeChildren[i].children;
        }
    }
    changeSetting(event:Event,CustomEventData){ 
        this.isSaved = false;//保存指示器置否，表示未保存状态
        this.Warning.active = false;//关闭提示标签
        CustomEventData = parseInt(CustomEventData);//传入是字符串，转成整数
        let value,progress;
        progress = this.nodeArray[CustomEventData][EnumNodeType.slider].getComponent(Slider).progress.toFixed(2);//滑动器的百分比
        
        switch(CustomEventData){
            case EnumSettingType.birdPos:
                value = (1920*progress).toFixed(0);
                break;
            case EnumSettingType.birdScale:
                value = (10+80*progress).toFixed(1);
                break;
            case EnumSettingType.birdGravity:
                value = (4000*progress).toFixed(0);
                break;
            case EnumSettingType.birdSpeedUpDamping:
                value = (0.8*progress).toFixed(2);
                break;
            case EnumSettingType.birdSpeedDownDamping:
                value = (0.8*progress).toFixed(2);
                break;
            case EnumSettingType.birdJumpStrength:
                value = (1600*progress).toFixed(0);
                break;
            case EnumSettingType.brickSpawnTime:
                value = (10*progress).toFixed(0);
                break;
            case EnumSettingType.brickSpawnRand:
                value = (1000*progress).toFixed(0);
                break;
            case EnumSettingType.brickSpeed:
                value = (5+10*progress).toFixed(0);
                break;
            case EnumSettingType.brickHeight:
                value = (50+400*progress).toFixed(0);
                break;
            case EnumSettingType.brickWidth:
                value = (1+8*progress).toFixed(1);
                break;
            case EnumSettingType.brickPoint:
                value = (1+2*progress).toFixed(0);
                break;
        }
        this.localSetting[this.stringOfSetting[CustomEventData]] = value;//修改本地设置
        this.sliderData[this.stringOfSetting[CustomEventData]] = progress;//修改本地滑动器设置
        this.nodeArray[CustomEventData][EnumNodeType.lb_value].getComponent(Label).string = `${value}`//修改数字标签内容
    }
    onLoad(){ 
        this.Menu.active = false;//设置菜单，初始关闭
        this.Warning.active = false;//未保存提示，初始关闭
        this.getNodeArray();//获取节点数据
    }
}

