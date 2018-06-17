import phaser from 'phaser';

export class Preloader extends phaser.Scene {
    constructor() {
        super({
            key: 'preloader'
        });
    }
    preload() {
        console.log("foo");
    }
    create() {
        const { width, height } = this.sys.canvas;
        const text = this.add.text(width / 2, height / 2, 'Click to play', {
            font: '32px Courier', fill: '#ffffff',
        }).setOrigin(0.5, 0.5);
        this.add.tween({
            targets: [text],
            ease: 'Sine.easeInOut',
            duration: 1000,
            delay: 0,
            yoyo: true,
            repeat: -1,
            scaleX: { value: 0.75 },
            scaleY: { value: 0.75 }
        });
        this.input.on('pointerdown', () => this.scene.start("game-screen"));
    }
}