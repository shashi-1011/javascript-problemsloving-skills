function rightangle(){
document.write("rightangle triangle <br/> <br/>")
    var rows=5;
    for(var i=1; i<=rows;i++){
        //rows
        for(var s=1; s<=(rows-1);s++){
            //prints spaces
            document.write('&nbsp;')
        }
        for(j=1;j<=i;j++){
            //prints spaces
            document.write("*");
        }
        document.write('<br/>');
    }
}
function eqruilateralTriangle(){
    document.write("equlateral triangle <br/> <br/>")
    for(var j=0; j<=5;j++){
        for(var k=5;k>=j;k--){
            document.write('&nbsp;')
        }
        for(var i=1; i<(2*j-1)+1; i++){
            document.write("*")
        }
        document.write('<br/>')
    }
}

function printingsquare(){
    document.write('squares<br/><br/>');
    for(var i=1;i<=6;i++){
        for(var j=1; j<=6;j++){
            document.write("*")
        }
        document.write('<br/>')
    }
}
function printingsquare2(){
document.write('printing hallo sqare<br/><br/>');
//columns
for(var i=1; i<=5; i++){
    //rows
    for(var j=1; j<=5; j++){
        if(i==1 ||  i==5 ||  j==1 || j==5){
            document.write("*")
        }else{
            document.write("&nbsp;")
        }   
    }
    document.write('<br/>')
}
}

function invertedtriangle(){
    document.write("inverted triangle<br/>");
    //rows
    for(i=0;i<=5;i++){
        for(j=0;j<=i;j++){
            document.write('&nbsp;')
        }
        for(a=5; a>=(2*i-1);a--){
            document.write("*");
        }
        document.write('<br/>')
    }
}
function testing(){
    document.write("testing function<br/>");
    //rows
    for(var i=1; i<=5; i++){
      
        for(var j=5; j>=i; j--){
            document.write("&nbsp;")
        }
        for(var a=1; a<(2*i-1)+1;a++){
            document.write("*");
        }
        document.write("<br/>");
    }
}
function testinginverted(){

    document.write("testingInvertedTriangle<br/>")
    for( var i=0; i<=5; i++){
        for(var j=0; j<=i;j++){
            document.write("&nbsp;")
        }for( var a=5; a>=(2*i-1); a--){
            document.write("*");        
        }
        document.write("<br/>")
    }
}
function rohumbus(){
    //prints first part of rohumbs
    //rows incrementing
    for(var i=0; i<=5; i++){
        for(var j=5; j>=i; j--){
            //decrementing the rows and prints the spaces
            document.write("&nbsp;")
        }
        //for printing stars
        for(var a=0; a<=(2*i-1)+1; a++){
            document.write("*")
        }
        document.write("<br/>");
    }
    //prints second part of it
    // for(var z=0; z<=5; z++){
    //     //prints spaces
    //     for(var s=0; s<=z; s++ ){
    //         document.write("&nbsp;");
    //     }
    //     //prints stars
    //     for(var b=5; b>=(2*z-1);b--){
    //         document.write("*");
    //     }
    //     document.write("<br/>");
    // }
    for( var i=0; i<=5; i++){
        for(var j=0; j<=i;j++){
            document.write("&nbsp;")
        }for( var a=9; a>=(2*i-1); a--){
            document.write("*");        
        }
        document.write("<br/>")
    }
}

/*newtons school problem
questuion1 
we need to print this pattern with height and length 6 and need to qualify
many hidden test cases
pattern follows
0 4 8 12 16 20 
24 28 32 36 40 44
48 52 56 60 64 68 
72 76 80 84 86 92
96 100 104 108 112 116
120 124 128 132 136 140
 */
/*
 question2 
 print the pattern the pattern should have the function name NthPattern()
 and should accept the argument N and the pattern follows
 24 37 50 ........
  
 */

 //question 
 /*
 sample input 1
 output24
 sampleinput 3
 output 24 37 50 
 */
 function NthPattern(N){
     document.write('<br/>newtons problems<br/>');
     var result=24;
     for(i=1;i<=N;i++){
         if(i==1){
             document.write(24);
         }else{
             document.write(result= result+13 );
         }
         document.write(' ')
            
     }
 }

 function pattern(N){
     /*
     for more details check the question located at the top of the Nthpattern
     this function should contain a function anme with pattern and should have the argument as N

     */
//rows loop
document.write("<br/><br/>+4pattern<br/>")
var result=0;
for(var i=1; i<=N; i++){
    //columns
    for(var j=1; j<=N;j++){
        document.write(result+=4)
        document.write(' ');
    }
    document.write("<br/>")
}

 }
document.getElementById('root').innerHTML=rightangle();
document.getElementById('root').innerHTML=eqruilateralTriangle();
document.getElementById('root').innerHTML=printingsquare();
document.getElementById('root').innerHTML=printingsquare2();
document.getElementById('root').innerHTML=invertedtriangle();
document.getElementById('root').innerHTML=testing();
document.getElementById('root').innerHTML=testinginverted();
document.getElementById('root').innerHTML=rohumbus();
document.getElementById('root').innerHTML=NthPattern(3);
document.getElementById('root').innerHTML=pattern(6);




