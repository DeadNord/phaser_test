/* eslint-disable no-undef */

import MainScene from './scenes/mainScene.js';

const config = {
  width: 600,
  height: 900,
  backgroundColor: '#333333',
  type: Phaser.AUTO,
  parent: 'game',
  scene: [MainScene],
};

new Phaser.Game(config);
