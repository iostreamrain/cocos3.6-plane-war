import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BgControl')
export class BgControl extends Component {

    start() {

    }

    update(deltaTime: number) {
        // 遍历子物体
        for (let bgNode of this.node.children) {
            bgNode.setPosition(bgNode.getPosition().x, bgNode.getPosition().y - 50*deltaTime);
            if (bgNode.getPosition().y <= -850) {
                bgNode.setPosition(bgNode.getPosition().x, bgNode.getPosition().y + 852 * 2);
            }
        }
    }
}

