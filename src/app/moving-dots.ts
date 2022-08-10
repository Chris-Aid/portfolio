export class MovingDots {
    height = 100;
    width = 100;
    img;

    image = ['src/assets/img/angular.png']

    constructor() {
        this.loadImage('src/assets/img/angular.png');

    }

    loadImage(path) {
        this.img = new Image(); // this.img = document.getElementbyId('image') <img id="image">
        this.img.src = path;
    }

}
