<!DOCTYPE html>
<html>
	<head>
 
		<!-- CSS -->
		<link href="src/chatws.css" rel="stylesheet"/>
	</head>
	<body>
		<div id="konten">
			<div class="tabs"><div class="tab aktip" data-dip="chat">CHATS</div><div class="tab" data-dip="users">USERS</div></div>
			<div class="chat">
			<?php

				// setiap username di beri warna yang berbeda
				$colours = array('8FC7FF','8F8FFF','C78FFF','FF8FFF','FF8F8F','FFC78F','C7FF8F');
				$user_colour = array_rand($colours);
				
				$username = (!empty($_GET['name']) ? $_GET['name'] : '');
				$userlogin = (!empty($_GET['name']) ? '<div class="user '.$_GET['name'].'">'.$_GET['name'].' <a href="index.php?pergi='.$_GET['name'].'" class="keluar">Keluar</a></div>' : '');
	 
				// jika sudah login berarti menampilkan form chatbox
				if(!empty($username)){
			?>

					<div id='message_box'>
						<!-- menampilan message -->
					</div>
					<form id="msg_form">
						<input id="message" type="text" placeholder="Pesan.." />
					</form>

			<?php 

				}
	 
				// jika belum login berarti menampilkan form login
				else{
			?>

					<form action="index.php" method="GET">
						<input name="name" class="username" placeholder="Nama kamu" required/>
						<button id="button-blue">Masuk</button>
					</form>
					<div class="welcome">Contoh aplikasi chatting yang dibuat menggunakan PHP + jQuery + Websocket</div>
					<footer>Di kembangkan oleh <a href="http://ibacor.com/labs/chatws" target="_BLANK">iBacor</a></footer>
					 
			<?php 
				}
			?>
			
			</div>
			<div class="users" style='display:none'>
				<?php echo $userlogin ?>
			</div>
		</div>
		
		<!-- data user hidden -->
		<input id="u_name" type="hidden" value="<?php echo $username ?>"/>
		<input id="u_date" type="hidden" value="<?php echo date("Y/m/d h:i:sa") ?>"/>
		<input id="u_pergi" type="hidden" value="<?php echo (empty($_GET['pergi']) ? '' : $_GET['pergi']) ?>"/>
		<input id="u_color" type="hidden" value="<?php echo $colours[$user_colour] ?>"/>
	
		<!-- jQuery -->
		<script src="//code.jquery.com/jquery-2.1.3.min.js"></script>
		<script src="src/chatws.js"></script>
		<script>
			chatws(
				host = 'localhost', //host
				port = '9000', //port
				socketpath = 'demo/src/chatws.php' //socketpath
			);
		</script>
  
	</body>
</html>
