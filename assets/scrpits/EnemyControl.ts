import { _decorator, Component, Node, assetManager, Sprite, SpriteFrame, resources } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('EnemyControl')
export class EnemyControl extends Component {

    isDie: boolean = false;
    isDestory: boolean = false;
    start() {

    }

    update(deltaTime: number) {
        // 移动
        if (this.isDie == false) {
            this.node.setPosition(this.node.getPosition().x, this.node.getPosition().y - 300 * deltaTime);
        }
        if (this.node.getPosition().y < -850) {
            this.node.destroy();
        }
    }

    die() {
        if (!this.isDestory) {
            this.isDie = true;
            this.isDestory = true;
            // 加载爆炸图片
            resources.load("enemy0_die/spriteFrame", SpriteFrame, (err, spriteFrame) => {
                this.getComponent(Sprite).spriteFrame = spriteFrame;
            });
            // this.schedule(()=>{
            //     this.node.destroy();
            // },0.3,1);
            setTimeout(() => {
                this.node.destroy();
            }, 300);
        }
    }
}

