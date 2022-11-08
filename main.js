function preload()
{
}

function setup()
{
    canvas= createCanvas(650, 500);
    canvas.position(110, 250);
    video= createCapture(VIDEO);
    video.hide();

    apply_border= "";
}

function draw()
{
    image(video, 0, 0, 650, 500);
    tint(tint_color);
}

function take_snapshot()
{
    save('Anushree.png');
}

function border_filter()
{
    apply_border= circle(35, 460, 40) + rect(35, , 30, 300) 
}