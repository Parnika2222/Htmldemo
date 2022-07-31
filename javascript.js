m=0;
var y;
function start()

{
    y=setInterval(run,100);
    
    function run()
    {
        if(m==900)
        {
            clearInterval(y);
            m=0;
        }
        else
        {

        
        m+=10;
        document.getElementById("img")//.style.visibility="visible";
        var target=document.getElementById("img");
        target.style.marginLeft=m+'px';
        }
}
}
function stop()
{
clearInterval(y)
}
