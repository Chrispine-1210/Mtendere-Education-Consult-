<?php
session_start();

// Database connection
$host = 'localhost';
$dbname = 'login_db';
$username = 'your_username';
$password = 'your_password';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    die("ERROR: Could not connect. " . $e->getMessage());
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];
    
    // Prepare SQL statement to prevent SQL injection
    $sql = "SELECT id, email, password FROM users WHERE email = :email";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':email', $email, PDO::PARAM_STR);
    $stmt->execute();
    
    if ($stmt->rowCount() == 1) {
        $row = $stmt->fetch();
        if (password_verify($password, $row['password'])) {
            $_SESSION['user_id'] = $row['id'];
            
            // Handle "Remember me" functionality
            if (isset($_POST['remember'])) {
                $token = bin2hex(random_bytes(16));
                setcookie('remember_token', $token, time() + 86400 * 30, "/");
                
                // Store token in database
                $update_sql = "UPDATE users SET remember_token = :token WHERE id = :id";
                $update_stmt = $pdo->prepare($update_sql);
                $update_stmt->bindParam(':token', $token, PDO::PARAM_STR);
                $update_stmt->bindParam(':id', $row['id'], PDO::PARAM_INT);
                $update_stmt->execute();
            }
            
            header("Location: dashboard.php");
            exit();
        } else {
            $error = "Invalid email or password";
        }
    } else {
        $error = "Invalid email or password";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Result</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <div class="login-form">
        <?php
        if (isset($error)) {
            echo "<p class='error'>$error</p>";
        }
        ?>
        <a href="index.html">Back to Login</a>
    </div>
</body>
</html>