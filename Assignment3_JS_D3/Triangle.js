var n=10;
for(var i=0;i<n;i++) {
         for(var j=0;j<n-i;j++) {
            process.stdout.write(" ");
          }
        for(var k=0;k<=2*i;k++) {

            process.stdout.write("*");
        }
      
    process.stdout.write("\n");
    }
