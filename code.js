// This app was developed by Abubakr Elmallah in Fall 2021.
// Credit for "assets/ButtonClick1.mp3" goes to ZAPSPLAT and its creators (https://www.zapsplat.com/sound-effect-category/button-clicks/).

var CalcOutput = "";
var Number1;
var Number2;

function Output(Sound, Operation, IsOperation) {
  playSound(Sound);
  IsOperation == false ? {} : CalcOutput = Operation;
  CalcOutput.length > 18 ? CalcOutput = CalcOutput.toString().substring(0, 18) : {};
  setText("CalcOutput", CalcOutput);
}

onEvent("ButtonAC", "click", function() {
  CalcOutput.length > 0 ? playSound("assets/category_app/snap.mp3") : {};
  CalcOutput = "";
  setText("CalcOutput", CalcOutput);
});

onEvent("ButtonDelete", "click", function() {
  CalcOutput.length > 0 ? playSound("assets/category_app/snap.mp3") : {};
  if(CalcOutput == Math.PI) {
    CalcOutput = "";
  } else if(CalcOutput.toString().substring(CalcOutput.length, CalcOutput.length) == " ÷ " || CalcOutput.toString().substring(CalcOutput.length - 3, CalcOutput.length) == " x " || CalcOutput.toString().substring(CalcOutput.length - 3, CalcOutput.length) == " - " || CalcOutput.toString().substring(CalcOutput.length - 3, CalcOutput.length) == " + ") {
    CalcOutput = CalcOutput.toString().slice(0, -3);
  } else {
    CalcOutput = CalcOutput.toString().slice(0, -1);
  }
  CalcOutput.length > 18 ? CalcOutput = CalcOutput.toString().substring(0, 18) : {};
  setText("CalcOutput", CalcOutput);
});

onEvent("Button10^x", "click", function() {Output("assets/category_app/app_button_slide_cool_2.mp3", Math.pow(10, CalcOutput))});
onEvent("Button-(x)", "click", function() {Output("assets/category_app/app_button_slide_cool_2.mp3", CalcOutput * -1)});
onEvent("Button%", "click", function() {Output("assets/category_app/app_button_slide_cool_2.mp3", CalcOutput * 0.01)});
onEvent("Buttonx^2", "click", function() {Output("assets/category_app/app_button_slide_cool_2.mp3", Math.pow(CalcOutput, 2))});
onEvent("Button√x", "click", function() {Output("assets/category_app/app_button_slide_cool_2.mp3", Math.sqrt(CalcOutput))});
onEvent("Button1/x", "click", function() {Output("assets/category_app/app_button_slide_cool_2.mp3", 1/CalcOutput)});
onEvent("Buttonπ", "click", function() {Output("assets/category_app/app_button_1.mp3", Math.PI)});
onEvent("Button.", "click", function() {CalcOutput !== Math.PI && CalcOutput.toString().indexOf(".") == -1 ? Output("assets/category_app/app_button_1.mp3", CalcOutput + ".") : {}});

function NumberButton(Digit) {Output("assets/category_app/app_button_1.mp3", (CalcOutput !== Math.PI ? CalcOutput + Digit : parseInt(Digit)))}
onEvent("Button0", "click", function() {NumberButton("0")});
onEvent("Button1", "click", function() {NumberButton("1")});
onEvent("Button2", "click", function() {NumberButton("2")});
onEvent("Button3", "click", function() {NumberButton("3")});
onEvent("Button4", "click", function() {NumberButton("4")});
onEvent("Button5", "click", function() {NumberButton("5")});
onEvent("Button6", "click", function() {NumberButton("6")});
onEvent("Button7", "click", function() {NumberButton("7")});
onEvent("Button8", "click", function() {NumberButton("8")});
onEvent("Button9", "click", function() {NumberButton("9")});

function Operation(Symbol) {
  if(CalcOutput.toString().indexOf("÷") == -1 && CalcOutput.toString().indexOf("x") == -1 && CalcOutput.toString().indexOf("-") == -1 && CalcOutput.toString().indexOf("+") == -1 && CalcOutput.toString().indexOf("^") == -1){
    Output("assets/category_app/modern_ui_sound.mp3", "", false);
    CalcOutput += Symbol;
  } else if(CalcOutput.toString().toString().substring(CalcOutput.length - 3, CalcOutput.length) == " ÷ " || CalcOutput.toString().substring(CalcOutput.length - 3, CalcOutput.length) == " x " || CalcOutput.toString().substring(CalcOutput.length - 3, CalcOutput.length) == " - " || CalcOutput.toString().substring(CalcOutput.length - 3, CalcOutput.length) == " + " || CalcOutput.toString().substring(CalcOutput.length - 3, CalcOutput.length) == "^") {
    Output("assets/category_app/modern_ui_sound.mp3", "", false);
    CalcOutput = CalcOutput.toString().slice(0, -3);
    CalcOutput += Symbol;
  }
  setText("CalcOutput", CalcOutput);
}

onEvent("Button÷", "click", function() {Operation(" ÷ ")});
onEvent("Buttonx", "click", function() {Operation(" x ")});
onEvent("Button-", "click", function() {Operation(" - ")});
onEvent("Button+", "click", function() {Operation(" + ")});
onEvent("Buttonx^y", "click", function() {Operation("^")});

onEvent("Button=", "click", function() {
  playSound("assets/category_app/modern_ui_sound.mp3");
  if(CalcOutput.toString().indexOf("÷") !== -1) {
    Number1 = CalcOutput.toString().substring(0,CalcOutput.toString().indexOf("÷"));
    Number2 = CalcOutput.toString().substring(CalcOutput.toString().indexOf("÷") + 1, CalcOutput.length);
    CalcOutput = parseFloat(Number1) / parseFloat(Number2);
    setText("CalcOutput", CalcOutput);
  } else if(CalcOutput.toString().indexOf("x") !== -1) {
    Number1 = CalcOutput.toString().substring(0,CalcOutput.toString().indexOf("x"));
    Number2 = CalcOutput.toString().substring(CalcOutput.toString().indexOf("x") + 1, CalcOutput.length);
    CalcOutput = parseFloat(Number1) * parseFloat(Number2);
    setText("CalcOutput", CalcOutput);
  } else if(CalcOutput.toString().indexOf("-") !== -1) {
    Number1 = CalcOutput.toString().substring(0,CalcOutput.toString().indexOf("-"));
    Number2 = CalcOutput.toString().substring(CalcOutput.toString().indexOf("-") + 1, CalcOutput.length);
    CalcOutput = parseFloat(Number1) - parseFloat(Number2);
    setText("CalcOutput", CalcOutput);
  } else if(CalcOutput.toString().indexOf("+") !== -1) {
    Number1 = CalcOutput.toString().substring(0,CalcOutput.toString().indexOf("+"));
    Number2 = CalcOutput.toString().substring(CalcOutput.toString().indexOf("+") + 1, CalcOutput.length);
    CalcOutput = parseFloat(Number1) + parseFloat(Number2);
    setText("CalcOutput", CalcOutput);
  } else if(CalcOutput.toString().indexOf("^") !== -1) {
    Number1 = CalcOutput.toString().substring(0,CalcOutput.toString().indexOf("^"));
    Number2 = CalcOutput.toString().substring(CalcOutput.toString().indexOf("^") + 1, CalcOutput.length);
    CalcOutput = Math.pow(Number1,Number2);
    setText("CalcOutput", CalcOutput);
  }
  CalcOutput.length > 18 ? CalcOutput = CalcOutput.toString().substring(0, 18) : setText("CalcOutput", CalcOutput);
});