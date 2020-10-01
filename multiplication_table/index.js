  for(i = 1; i <= 10; i++)
    {
      var j=1;   
          document.write(i + "*" + j + "=" + (j*i) + " ");
          if(i>j){
            while(j!=i){
              ++j;
              document.write(i + "*" + j + "=" + (j*i) + " ");   
            }
          }
          document.write("<br>");
    }