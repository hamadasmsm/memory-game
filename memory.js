// document.getElementsByTagName("img")[0].onclick=function ()
// {
//     document.getElementsByTagName("img")[0].src="memory Game/1.gif"

// }
var counter=0
var obj1,n1
function show(obj,n)
{
    counter++;
    obj.src="memory Game/"+n+".gif"

    if (counter==1)
    {
        obj1=obj
        n1=n
    }
    else if(counter==2)
    {
        setTimeout(function(){

        var obj2=obj
        n2=n
        counter=0
        if(obj1.src==obj2.src)
        {

        }
        else
        {
            obj1.src="memory Game/Moon.gif"
            obj2.src="memory Game/Moon.gif"
        }

        },1000) 

    }

}