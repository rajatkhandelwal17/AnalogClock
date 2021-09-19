setInterval(() => {
    d = new Date();                // THIS FUNCTION GIVES EXACT DATE OR TIME..WE STORED IN d
    htime = d.getHours();          // A VARIABLE NAMED htime STORING HOURS OF EXACT TIME
    mtime = d.getMinutes();        // A VARIABLE NAMED mtime STORING MINUTES OF EXACT TIME
    stime = d.getSeconds();        // A VARIABLE NAMED stime STORING SECONDS OF EXACT TIME

//  For Hour Hand:

//      We know that in 12hr, Hour hand is rotating 360°. It's a logical Concept.
//      So, for 1 hour, what will we do?
//      Ans: We will divide 360 by 12
//      1hr ➜ 360/12 = 30 DEG
//      So for 1 hour, it will rotate 30°.

// When the minute hand is moving, automatically the hour hand is also moving with it.

//      1 hour = 60min
//      So in 60min, it will rotate 30°. Every 1 minute it is rotating by a half degree 
//      1 minute ➜ (1/2)°
//      So for m min, there will be m°/2 rotation
//      m ➜  m°/2 rotation

//      So our basic formula : h Hours = ( 30h + m/2 ) 



//      For Minute Hand:

//      For this we know in 60 minutes it is rotating 360°.
//      So in 1 minute how much will it rotate?
//      We will divide 360 by 60. So in 1 minute, it will rotate by 6°.
//      1min ➜ 6°
//      So for m minute hand, it will rotate by 6m°

//      So our basic formula : m Minutes = 6m DEG 



//      For Second Hand :

//      In 60 seconds it is rotating by 360°. So finding for 1 sec will divide 360° by 6°.
//      1 second ➜ 6°
//      It is rotating by 6° every 1 second. So for s seconds, it will rotate by 6s°

//      So our basic formula : s Seconds = 6s DEG 

    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;          // ROTATING HOUR, MIN, SEC HANDS...
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);