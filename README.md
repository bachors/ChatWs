# ChatWs
Contoh aplikasi chatting sederhana yang dibuat menggunakan PHP + jQuery + Websocket.
<p>Dulu saya pernah share <a href="http://ibacor.com/blog/create-public-chat-with-php-mysql-and-ajax">aplikasi chtting menggunakan AJAX</a> (long poling), sekarang saya akan share aplikasi chatting menggunakan WebSocket secara realtime tanpa harus reload setiap detik bahkan tanpa database. Tapi sobat juga bisa menambahkan database untuk menyimpan histori chattingan jadi setiap user yang baru login bisa melihat semua pesan sebelum dia login. Mungkin next time saya akan share yang versi database.y :)</p>
<h2>Usage</h2>
<h3>CSS</h3>
<pre>&lt;link href="src/chatws.css" rel="stylesheet"/&gt;</pre>
<h3>jQuery</h3>
<pre>&lt;script src="//code.jquery.com/jquery-2.1.3.min.js"&gt;&lt;/script&gt;
&lt;script src="src/chatws.js"&gt;&lt;/script&gt;</pre>
<h2>Configuration:</h2>
<h3>index.php</h3>
<pre>&lt;script&gt;
chatws(
    host = 'localhost', //host
    port = '9000', //port
    socketpath = 'demo/src/chatws.php' //socketpath
);
&lt;/script&gt;</pre>
<h3>src/chatws.php</h3>
<pre>$host = 'localhost'; //host
$port = '9000'; //port
$socketpath = 'demo/src/chatws.php'; //socketpath
$magickey = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11'; //magickey</pre>
<h3>Install WebSocket Server</h3>
Sekarang kita jalankan script chatws.php nya. Jika sobat menggunakan XAMPP seperti saya silahkan buka aplikasi.y lalu klik tombol Shell. Setelah muncul shell commands sobat jalankan perintah brikut:
<pre>php -q htdocs/demo/src/chatws.php</pre>
<img src="https://4.bp.blogspot.com/-WCs-chqL9Gg/V2A2pKKZbsI/AAAAAAAABqQ/s7FFFnILzEIP5SMq1MhrKKlJWVOz9asXwCLcB/s1600/sdfsdfsssdff1.jpg"/>
<p>Atau sobat juga bisa menggunakan CMD (command prompt).</p>
<h3>Done</h3>
<p>Sekarang tinggal buka di web browser <code>http://localhost/demo/index.php</code> :)</p>
<img src="https://3.bp.blogspot.com/-fyL8r_BtjC0/V2BAqa9XaCI/AAAAAAAABqg/u2YKS_Z0RS8a4wVT2vqHGbJU7i41MQZmwCLcB/s1600/dsdeeeew.jpg"/>
<a href="http://ibacor.com/sosmed/youtube?video=nNBEAygY-B0"><h2>DEMO</h2></a>
