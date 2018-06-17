import phaser from 'phaser';

export class Victory extends phaser.Scene {
    constructor() {
        super({
            key: 'victory'
        });
    }
    create() {
        const { width, height } = this.sys.canvas;
        this.add.text(width / 2, height / 2, 'You win!', {
            font: '32px Courier', fill: '#ffffff',
        }).setOrigin(0.5, 0.5);
        this.input.on('pointerup', () => this.scene.start("preloader"));
    }
}