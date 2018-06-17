import phaser from 'phaser';

import scene from './scenes'

const game =  new phaser.Game({
    width: 800,
    height: 600,
    parent: 'content',
    scene
})