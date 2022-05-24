// export default class MainScene extends Phaser.Scene {
//   constructor() {
//     super('mainScene');
//   }

//   preload() {
//     this.load.image('back', '../assets/');
//   }
//   create() {
//     this.add.image(300, 400, 'back');
//   }
//   update() {}
// }

const SceneA = new Phaser.Class({
  Extends: Phaser.Scene,

  //   init: function SceneA() {
  //     Phaser.Scene.call(this, { key: 'sceneA' });
  //   },
  preload: function () {
    this.load.image('inst', '../assets/inst.png');
  },

  create: function () {
    this.add.image(600, 900, 'inst');

    // this.input.once(
    //   'pointerdown',
    //   function (event) {
    //     this.scene.transition({ target: 'sceneB', duration: 2000 });
    //   },
    //   this,
    // );
  },

  update() {},
});

// const SceneA = new Phaser.Class({
//   init(data){
//     this.selectedCharacter = data.character
// }

//     preload(){}
//      	this.load.atlas(
// 	this.selectedCharacter,
// 	`characters/${this.selectedCharacter}.png`,
// 	`characters/${this.selectedCharacter}.json`
// )
//       },

//       create(){
// 	this.anims.create({
// 		key: 'idle',
// 		frames: this.anims.generateFrameNames(this.selectedCharacter, {
// 			start: 0, end: 5, zeroPad: 3, prefix: 'Idle_', suffix: '.png'
// 		}),
// 		frameRate: 10,
// 		repeat: -1
// 	})

// 	this.anims.create({
// 		key: 'run',
// 		frames: this.anims.generateFrameNames(this.selectedCharacter, {
// 			start: 0, end: 5, zeroPad: 3, prefix: 'run_', suffix: '.png'
// 		}),
// 		frameRate: 10,
// 		repeat: -1
// 	})
// }
//       update() {},
// })

// const SceneA = new Phaser.Class({
//     preload: function () {
//         this.load.image('inst', '../assets/inst.png');
//       },

//       create: function () {
//         this.add.image(600, 900, 'inst');
//     this.input.keyboard.once('keydown-SPACE', this.handleContinue, this);
//     }

//     handleContinue();
//     {
//       this.scene.start('game', { character: this.selectedKey });
//     }
//       update() {},
// })
