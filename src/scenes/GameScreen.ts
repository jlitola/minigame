import phaser from 'phaser';

export class GameScreen extends phaser.Scene {
    rotation = 0;
    text?: Phaser.GameObjects.Text;
    constructor() {
        super({
            key: 'game-screen'
        });
    }
    create() {
        const { width, height } = this.sys.canvas;
        this.text = this.add.text(width / 2, height / 2, 'Amazing game screen', {
            font: '16px Courier', fill: '#ffffff',
        }).setOrigin(0.5, 0.5);
        this.text.setInteractive(new Phaser.Geom.Rectangle(0, 0, this.text.width, this.text.height), Phaser.Geom.Rectangle.Contains);
        this.text.on('pointerup', () => {
            this.scene.start("victory");
        });
    }
    update(time: number, delta: number) {
        this.rotation += delta / 1000 * Math.PI;
        this.text!!.setRotation(this.rotation);
    }
}