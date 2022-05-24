/* eslint-disable no-undef */
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

const MainScene = new Phaser.Class({
  // Extends: Phaser.Scene,
  preload() {
    this.load.image('room', 'assets/background/room.png');

    this.load.image('girl', 'assets/characters/girl.png');

    // this.load.spritesheet('girl', 'assets/characters/Girls_new.psd');
    this.load.image('man', 'assets/characters/boy.png');

    this.load.image('girlRep-1', 'assets/replicas/girlRep-1.png');
    this.load.image('boyRep-1', 'assets/replicas/boyRep-1.png');
  },

  create() {
    this.add.image(300, 450, 'room');
    const rt = this.add.renderTexture(0, 0, 600, 900);
    rt.fill(0x000000, 0.5);

    const animA = () => {
      this.add.image(300, 450, 'man');
      this.add.image(300, 450, 'boyRep-1');
    };

    const animB = () => {
      // this.add.image(300, 450, 'girl');
      const girl = this.add.sprite(300, 450, 'girl');
      // girl.animation.add('walk');
      // girl.animation.play('walk', 50, true);

      this.add.image(300, 450, 'girlRep-1');
    };
    // animA();
    animB();
    // scene.anims.addMix(animA, animB, 1);

    // Controls
    cursors = this.input.keyboard.createCursorKeys();
    btn = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  },
  update() {
    // girl.titlePosition
  },
});

export default MainScene;

// Scene Intro: Мужик+Текст, Девка+Текст(платье),Оверлей

// Scene Tutor: Девка + Платье1/Платье2, Оверлей

// Scene 1: Девка + Прогресс бар0 + Платье1/Платье2
// Девка(Платье1 / Платье2) + Прогресс бар1 + Платье1 / Платье2

// Scene 2: Девка(платье)+Текст(сумка) + Сумка1/Сумка2
// Девка(платье + сумка1/сумка2) + Прогресс бар2 + Сумка1/Сумка2

// Scene 3: Девка(платье+сумка)+Текст(очки) + Очки1/Очки2
// Девка(платье+сумка + очки1/очки2) + Прогресс бар3 + Очки1/Очки2

// Scene 4: Девка(платье+сумка+очки)+Текст(место) + Место1/Место2

// Scene End: Девка(платье+сумка+очки) + Парень + Текст + Место
// -Текст +Плей нау

// Scene Loose:
