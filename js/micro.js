// Utility
function listenFor(events, onElement, thenDo) {
  if ( document.addEventListener ) {
    onElement.addEventListener(events, thenDo); 
  } else if ( document.attachEvent ) {
    onElement.attachEvent(events, thenDo);
  }
}

// Nav Menu
function MicroNav(nav) {
  this.nav = nav;
  this.toggle = this.nav.getElementsByClassName("toggle")[0];
  this.menu = this.nav.getElementsByClassName("menu")[0];
  this.toggling();
}
MicroNav.prototype.toggling = function() {
  var menu = this.menu;
  listenFor("click", this.toggle, function(e) {
    e.preventDefault();
    menu.classList.toggle("open");
  });
};
function loadMicroNavs() {
  var navs = document.getElementsByClassName("nav");
  var nav;
  for ( i = 0; i < navs.length; ++i ) {
    nav = new MicroNav(navs[i]);
  } 
}

// Inline Inputs
function MicroInline(element) {
  this.element = element;
  this.field = this.element.getElementsByClassName("field")[0];
  console.log(this.field);
  this.button = this.element.getElementsByClassName("button")[0];
  var width = this.button.offsetWidth;
  this.field.style.paddingRight = width + "px";
}
function loadMicroInlines() {
  var inlines = document.getElementsByClassName("inlined");
  var inline;
  for ( i = 0; i < inlines.length; ++i ) {
    inline = new MicroInline(inlines[i]);
  }
}

// Lazy Load
function loadMicroDeferred() {
  var images = document.getElementsByClassName("deferred");
  var image, offscreen;
  for ( i = 0; i < images.length; ++i ) {
    image = images[i];
    image.style.paddingBottom = 0;
    image.style.width = "auto";
    image.src = image.getAttribute("data-src");
  }
}

// Document Load States
var documentElement = document;
listenFor("readystatechange", documentElement, function(){
  if ( document.readyState == "interactive" ) {
    documentInteractive();
  }
  
  if ( document.readyState == "complete") {
    documentComplete();
  }
});

// Document is Interactive
function documentInteractive() {
  loadMicroNavs();
  loadMicroInlines();
}

// Document is Complete
function documentComplete() {
  
}

// On Scroll
listenFor("scroll", documentElement, function() {
  loadMicroDeferred();
});