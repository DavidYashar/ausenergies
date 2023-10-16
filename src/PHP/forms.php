<?php

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Origin:*');
class Aus {
    protected $names;
    protected $email;
    protected $phone;
    protected $product;
    protected $file;
    protected $message;
    protected $table = "aus";

    public function setNames($names){
        $this->names = $names;
    }

    public function getNames(){
        return $this->names;
    }
    public function setEmail($email){
        $this->email = $email;
    }

    public function getEmail(){
        return $this->email;
    }

    public function setPhone($phone){
        $this->phone = $phone;
    }

    public function getPhone(){
        return $this->phone;
    }

    public function setProduct($product){
        $this->product = $product;
    }

    public function getProduct(){
        return $this->product;
    }

    // public function setFile($file){
    //     $this->file = $file;
    // }

    // public function getFile(){
    //     return $this->file;
    // }


    public function setMessage($message){
        $this->message = $message;
    }

    public function getMessage(){
        return $this->message;
    }

    public function insertData(){
        $conn = mysqli_connect('localhost', 'root', '','oop' );
        if(!$conn){
            die("Connection failed: " . mysqli_connect_error());
            
        }else{
            echo "Connected successfully";
        }



            //handing file upload

            $uploadDir = './bills/';
            $this->file = $uploadDir.basename($_FILES['file']['name']);
            $uploadOk = 1;
            $imageFileType = strtolower(pathinfo($this->file, PATHINFO_EXTENSION));
            
            
        if(isset($_FILES['file'])){

            $check = getimagesize($_FILES["file"]["tmp_name"]);
            
            // $temp = "sample.png";
            

                if($check !== false) {
                    echo "File is an image - " . $check["mime"] . ".";
                    $uploadOk = 1;
                } else {
                    echo "File is not an image.";
                    $uploadOk = 0;
                }
            }
            
            //check file size
            if($_FILES['file']['size'] > 1000000){
                echo "File is too large";
                $uploadOk = 0;
            }
            //check file type
               if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"){
                     echo "Sorry, only JPG, JPEG, PNG files are allowed.";
                     $uploadOk = 0;
               }
            //check if $uploadOk is set to 0 by an error
              if($uploadOk == 0){
                echo "Sorry, your file was not uploaded.";
            //if everything is ok, try to upload file
                }else{
                   if(move_uploaded_file($_FILES['file']['tmp_name'], $this->file)){
                       echo "file". htmlspecialchars(basename($_FILES['file']['name']). "is uploaded");
                     }else{
                    echo "Sorry, tehre was an error";

                     }
                    }
                 
 //end of file upload handling

        $this->setNames(htmlspecialchars($_POST['names'], ENT_QUOTES, 'UTF-8'));
        $this->setEmail(htmlspecialchars($_POST['email'], ENT_QUOTES, 'UTF-8'));
        $this->setPhone(htmlspecialchars($_POST['phone'], ENT_QUOTES, 'UTF-8'));
        $this->setProduct(htmlspecialchars($_POST['product'], ENT_QUOTES, 'UTF-8'));
        
        $this->setMessage(htmlspecialchars($_POST['message'], ENT_QUOTES, 'UTF-8'));

        $stat = $conn->prepare("INSERT INTO ".$this->table."(names, email, phone, product, file, message) VALUES(?,?,?,?,?,?)");
        $stat->bind_param("ssisss", $this->names, $this->email, $this->phone ,$this->product, $this->file, $this->message);

         $result = $stat->execute();

        if($result){
                
             http_response_code(201); // Created
             echo  "Aus property created successfully.";
            } else if (http_response_code(400)){
                               
                echo  "Invalid product type.";
                
            } else {
            http_response_code(405); // Method Not Allowed
            echo  "Method not allowed for this endpoint.";
            }
            $stat->close();

}
}

?>
