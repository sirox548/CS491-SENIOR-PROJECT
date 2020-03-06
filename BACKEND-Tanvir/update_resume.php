<?php

$servername = "sql.njit.edu";
$dbusername = "";
$dbpassword = "";
$db = "";

// Create connection to database 
$conn = mysqli_connect($servername, $dbusername, $dbpassword, $db);
// Check connection to database 
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}


$sql = "UPDATE resume SET fileUpload='$updatedResume' WHERE resumeID='$resumeID";
$query = mysqli_query($conn, $sql);

if($query){
    echo "Resume updated!";
}
else{
    echo "Error";
}

mysqli_close($conn);

?>