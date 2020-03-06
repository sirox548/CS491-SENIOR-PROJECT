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

if(isset($_POST['button'])){
    $resume = $_POST['resume'];

    $file = $_FILES['file'];
    $fileName = $_FILES['file']['name'];
    $fileTmpName = $_FILES['file']['tmp_name'];
    $fileSize = $_FILES['file']['size'];
    $fileError = $_FILES['file']['error'];
    $fileType = $_FILES['file']['type'];

    $fileExt = explode('.', $fileName);
    $fileActualExt = strtolower(end($fileExt));

    //allows the type of files user can upload
    $allowed = array('doc', 'pdf');

    //checks if theres an actual extension
    if(in_array($fileActualExt, $allowed)){
        if($fileError === 0){
            if($fileSize < 1000000){
                //to now let the file override simialr file names
                $fileNameNew =  uniqid('', true).".".$fileActualExt;
                $fileDestination = 'uploads/'.$fileNameNew;
                move_uploaded_file($fileTmpName, $fileDestination);

            }else{
                echo "Your file is too large";
            }
        }else {
            echo "There was an error uploading your file"
        }
    }else{
        echo "You cannot upload this type of file"
    }
}

//sql query to insert the resume file into the database
$sql = "INSERT INTO resume(fileupload) VALUES ('$resume')";
$query = mysqli_query($conn, $sql);

if($query){
    echo "Resume uploaded!";
}
else{
    echo "Error";
}

mysqli_close($conn);

?>


