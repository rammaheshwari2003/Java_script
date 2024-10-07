<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    

    <!-- <h1 id="head">Welcome to cybrom!</h1>
        <button onclick="display()">Click Here</button>


        <script>
            function display(){
                document.getElementById("head").innerHTML="Har Ghar Tiranga!";
                
            }
            </script> -->



    <!-- innerHTML get vlaue  -->

            Enter Age: <input type="number"  id="ag">
            <button onclick="display()">Click Here</button>
            <h1 id="head">Display Your Age</h1>

            <script>
                function display(){
                    var age=document.getElementById("ag").value;
                    document.getElementById("head").innerHTML="Hi i am "+age+" Year old!!!";
                }
            </script>

</body>
</html>
