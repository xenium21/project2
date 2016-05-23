var screen = new jsgl.Panel(document.getElementById("game"));
var screenX = 640;
var screenY = 480;
var circle;

// Recorders
var globalTimer;
var clock;
var score;
var userId = $('#user').data('config');

// Options
var timeSelect = 10;	// in s
var frequency = 1000; 	// in ms
var radius = 30;		// in px
var difficulty;

// Select a random position for a circle
function setRandCoord(element)
{
	var randX = (Math.random() * (screenX - radius)) + radius;
	var randY = (Math.random() * (screenY - radius)) + radius;
	element.setCenterLocationXY(randX, randY);
}

// Draw the circle on screen
function drawCircle()
{
	circle = screen.createCircle();
	setRandCoord(circle);
	circle.setRadius(radius);
	circle.getFill().setColor('red');
	screen.addElement(circle);
	circle.addClickListener(function(){
		setRandCoord(circle);
		score++;
	});
}

// Handle the end game
function endGame()
{
	var end = screen.createLabel();
	end.setText("Final Score: " + score + " circle(s) in " + timeSelect + "s");
	end.setFontSize(30);
	end.setLocationXY(screenX/2, screenY/2);
	end.setHorizontalAnchor(jsgl.HorizontalAnchor.CENTER);
	screen.addElement(end);

	if(userId)
	{
		runMenuSubmit();
	}
	else
	{
		runMenu();
	}
}

// Initiate the timer
function startCountDown(timer)
{
	globalTimer = timeSelect;
	clock = setInterval(function() {
		timer.setText(globalTimer + "s");
		if(--globalTimer < 0) 
		{
			clearInterval(clock);
			screen.removeElement(circle);
			screen.removeElement(timer);
			endGame();
		}
	}, frequency);
}

// Add a button on screen
function addMenuButton(x, y, text, font, hAnchor, func)
{
	button = screen.createLabel();
	button.setText(text);
	button.setFontSize(font);
	button.setLocationXY(x, y);
	screen.addElement(button);

	if(hAnchor) button.setHorizontalAnchor(hAnchor);

	if(func) button.addClickListener(func);
}

// Start playing
function playGame()
{
	screen.clear();
	score = 0;
	timer = screen.createLabel();
	timer.setFontSize(20);
	timer.setLocationXY(10, 460);
	screen.addElement(timer);
	startCountDown(timer);

	drawCircle();
}

// Draw a menu on screen
function runMenuSubmit()
{
	addMenuButton(screenX/2, 300, "Submit", 20, jsgl.HorizontalAnchor.CENTER, function(){
			/*$.ajax({
				type: 'POST',
				url: '/reactor',
				//dataType: 'jsonp',
				data: {
					name: userId,
					difficulty: difficulty,
					score: score
				},
				//crossDomain: true,
				success: function(res, data) {
            		console.log('Score posted', data);
		        },
		        error: function(xhr, msg) {
		            console.error('AJAX error', xhr.status, msg);
		        }
			})*/
			$.post('/reactor', {
				name: userId,
				difficulty: difficulty,
				score: score
			});
		});
	addMenuButton(screenX/2, 350, "Easy", 20, jsgl.HorizontalAnchor.CENTER, function(){timeSelect = 20; radius = 40; difficulty = "Easy"; playGame();});
	addMenuButton(screenX/2, 400, "Medium", 20, jsgl.HorizontalAnchor.CENTER, function(){timeSelect = 10; radius = 30; difficulty = "Medium"; playGame();});
	addMenuButton(screenX/2, 450, "Hard", 20, jsgl.HorizontalAnchor.CENTER, function(){timeSelect = 10; radius = 10; difficulty = "Hard"; playGame();});
}

// Draw a menu on screen
function runMenu()
{
	addMenuButton(screenX/2, 300, "Easy", 20, jsgl.HorizontalAnchor.CENTER, function(){timeSelect = 20; radius = 40; difficulty = "Easy"; playGame();});
	addMenuButton(screenX/2, 350, "Medium", 20, jsgl.HorizontalAnchor.CENTER, function(){timeSelect = 10; radius = 30; difficulty = "Medium"; playGame();});
	addMenuButton(screenX/2, 400, "Hard", 20, jsgl.HorizontalAnchor.CENTER, function(){timeSelect = 10; radius = 10; difficulty = "Hard"; playGame();});
}

// Draw the title card
function drawTitleCard()
{
	var title;
	title = screen.createLabel();
	title.setText("Reaction");
	title.setFontSize(30);
	title.setItalics(true);
	title.setHorizontalAnchor(jsgl.HorizontalAnchor.CENTER);
	screen.addElement(title);

	var sweepIn = new jsgl.util.Animator();
	sweepIn.setFps(30);
	sweepIn.setStartValue(0);
	sweepIn.setEndValue(screenX/2);
	sweepIn.setDuration(1500);
	sweepIn.addStepListener(function(t){
			title.setLocationXY(t, screenY/2);
		});
	sweepIn.addEndListener(runMenu);

	sweepIn.play();
}

drawTitleCard();