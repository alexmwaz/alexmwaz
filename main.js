var w = 300
var h = 300
var r = 500

function setup() {
  createCanvas(w, h)
  background(0)
  
  // textSize(40)
  // textAlign(CENTER)
  
  noStroke()
  fill(255, 255, 255)
  
  //noFill()
  //strokeWeight(16)
}

var a = 0
var b = 0
var c = 0

var n = 0
var m = 0
var o = 0

var d = 0
var p = 0
var q = 0

function draw() {
  background(0)
  
  n = 10*Math.sin(a)
  m = 10*Math.sin(b)
  o = 10*Math.sin(c)
  
  p = 4*Math.cos(d/2)
  q = 4*Math.sin(d)
  
  //blendMode(ADD)
   // stroke(24, 0, 64)
   ellipse(w/2 + n + p, h/2 + m + q, r/2, r/2)
   // stroke(44, 0, 64)
   ellipse(w/2 + m + p, h/2 + o + q, r/2, r/2)
   // stroke(84, 0, 64)
   ellipse(w/2 + o + p, h/2 + n + q, r/2, r/2)
  
  //blendMode(BLEND)
   // stroke(255, 255, 255)
   ellipse(w/2 + p, h/2 + q, r/2, r/2)
   
  // text("alex waz\nis", w/2 + p, h/2 + q)
  
  a += 0.05
  b += 0.09
  c += 0.11
  d += 0.08
}
