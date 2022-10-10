import { _decorator, Component, Node, Prefab, instantiate, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PlayerControl')
export class PlayerControl extends Component {
    @property(Prefab)
    bullet: Prefab = null;

    start() {
        // 移动
        this.node.on(Node.EventType.TOUCH_MOVE, (event)=>{
            this.node.setWorldPosition(event.getLocation().x, event.getLocation().y, 0);
        })
        // 攻击
        this.schedule(()=>{
            let bullet = instantiate(this.bullet);
            bullet.setPosition(this.node.getPosition().x, this.node.getPosition().y + 60);
            this.node.parent.addChild(bullet);
        }, 0.5)
    }

    update(deltaTime: number) {
        
    }
}

