var bgImage, bgSprite, man1Load, man2Load, man3Load, man4Load;
var man1, man2, man3, man4;
var rock1, rock2, rock3, rock4, rock5, rock6, rock7, rock8, rock9;
var rock1Load, rock2Load, rock3Load, rock4Load, rock5Load, rock6Load, rock7Load, rock8Load, rock9Load; 

function preload(){

bgImage = loadImage("images/longCave.jpg");

man1Load = loadAnimation("images/man1-.png", "images/man2-.png", "images/man3-.png", "images/man4-.png");

rock1Load = loadImage("images/rock1.png");
rock2Load = loadImage("images/rock2.png");
rock3Load = loadImage("images/rock3.png");
rock4Load = loadImage("images/rock4.png");
rock5Load = loadImage("images/rock5.png");
rock6Load = loadImage("images/rock6.png");
rock7Load = loadImage("images/rock7.png");
rock8Load = loadImage("images/rock8.png");
rock9Load = loadImage("images/rock9.png");

}
function setup(){
createCanvas(1200, 400);

bgSprite = createSprite(600, 200, 1200, 400);
bgSprite.addImage("backgroundImage", bgImage);
bgSprite.scale = 2.1;
bgSprite.velocityX = -4;  

man1 = createSprite(200, 250, 50, 50);
man1.addAnimation("PC image", man1Load);


}

function draw(){

if (bgSprite.x <= 0) {
    bgSprite.x = 600;
}

background(0);
drawSprites();
}

function spawnObstacles(){

} 