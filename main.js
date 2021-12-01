function preload() {

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
}

function draw() {

}

function take_snapshot() {
    img_name = document.getElementById("name").value;
    save( img_name + ".jpg");
}