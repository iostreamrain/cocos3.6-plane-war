import { _decorator, Component, Node, Collider2D, Contact2DType, IPhysics2DContact, PhysicsSystem2D } from 'cc';
import { EnemyControl } from './EnemyControl';
const { ccclass, property } = _decorator;

@ccclass('BulletControl')
export class BulletControl extends Component {
    @property
    speed: number = 800;

    start() {
        let collider = this.getComponent(Collider2D);
        if (collider) {  
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
        if (PhysicsSystem2D.instance) {
            PhysicsSystem2D.instance.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
    }

    update(deltaTime: number) {
        // 子弹移动
        this.node.setPosition(this.node.getPosition().x, this.node.getPosition().y + this.speed * deltaTime);
        // 出屏幕销毁
        if (this.node.getPosition().y > 820) {
            this.node.destroy();
        }
    }

    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        console.log("ok on Collision Enter");
        
        if(otherCollider.tag == 1){
            otherCollider.node.getComponent(EnemyControl).die();
            try{
                this.node.destroy();
            } catch(e) {}
            // this.schedule(()=>{this.node.destroy();},1,1,0.001);
        }
    }
}

