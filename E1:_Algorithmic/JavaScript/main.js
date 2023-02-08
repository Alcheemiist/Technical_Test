function MainIndex(range) 
{
    if (range < 1) 
    {
        console.log("Out Of Range");
        return
    }
    
    var str = ""
    
    for (let i = 1; i <=range; i++)
    {
         
           
        if (i % 3 == 0 || i % 5 == 0 || i % 7 == 0)
        {
            var marked = false
            if (i % 3 == 0)
            {
                str += "Hello"
                marked = true
            }
            if (i % 5 == 0)
            {
                str += (marked ?  " " : "")
                str += "World"
                marked = true
            }

            if (i % 7 == 0)
            {
                str += (marked ?  " " : "")
                str += "Yoo"
                marked = true
            }   
        }
        else
            str +=  i
        
        if (i != range)
            str += ", "
        else
            str += "."
        
        
    }
    console.log(str)
}

MainIndex(100)
