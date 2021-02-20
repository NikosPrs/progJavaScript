
class Circle {
    constructor(x, y, r) { 
        this.x = x;
        this.y = y;
        this.r = r;
    }
    // Methods --> function inside class
    getArea() {
        return Math.PI*this.r**2;
    }
    getLength() {
        return 2*Math.PI*this.r;
    }
    getCartesian() {
        return '[(x - '+this.x+')^2 + (y - '+this.y+')^2 = '+this.r+'^2]';
    }
    getPoints(n) {
        let data = [];
        for (var i = 0; i<n; i++) {
            let t = 2*(i/n)*Math.PI;
            let x = this.r*Math.cos(t) + this.x;
            let y = this.r*Math.sin(t) + this.y;
            
            data.push([x, y]); // add at end of list data
        }
        return data;
    }
}
let circle = new Circle(0, 0, 1);
console.log(circle.getPoints(20));
