import { _decorator, Component, Node, Prefab, instantiate, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('EnemyManager')
export class EnemyManager extends Component {
    @property(Prefab)
    enemyPre: Prefab = null;

    start() {
        // 每隔2秒创建一个敌人
        this.schedule(()=>{
            let enemy = instantiate(this.enemyPre);            
            enemy.setPosition(Math.random() * 400 + 20, this.node.getPosition().y);
            this.node.addChild(enemy);
        }, 2)
    }

    update(deltaTime: number) {
        
    }
}

