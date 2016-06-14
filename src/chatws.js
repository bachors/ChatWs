/*
- ChatWS
- iBacor.com
- 2016
*/

var chatws = function(k, l, m) {
	
	//create a new WebSocket object.
    var n = 'ws://' + k + ':' + l + '/' + m + '',
        socket = new WebSocket(n);
	
	//user data
    var o = $('#u_name').val(),
        u_date = $('#u_date').val(),
        u_pergi = $('#u_pergi').val(),
        u_color = $('#u_color').val();
		
    if (o != '') {
		// connection is open 
        socket.onopen = function(a) {
            var b = {
                mode: 'userlgn',
                message: 'bergabung dalam obrolan at',
                name: o,
                udate: u_date,
                color: ''
            };
			//convert and send data to server
            socket.send(JSON.stringify(b))
        }
    } else if (o == '' && u_pergi != '') {
		// pemberitahuan jika ada user yang logout
        socket.onopen = function(a) {
            var b = {
                mode: 'userlgn',
                message: 'meninggalkan obrolan at',
                name: u_pergi,
                udate: u_date,
                color: ''
            };
			//convert and send data to server
            socket.send(JSON.stringify(b))
        }
    }
	// melakukan proses ketika mengirim message
    $("#msg_form").on("submit", function() {
		// get user data
        var a = $('#message').val();
        var b = o;
        var c = u_date;
        if (a == "") {
            alert("Enter Some message Please!");
            return
        }
		//prepare json data
        var d = {
            mode: 'usermsg',
            message: a,
            name: b,
            udate: c,
            color: u_color
        };
		//convert and send data to server
        socket.send(JSON.stringify(d));
		//reset text
        $('#message').val('');
        return false
    });
	
	//menampilkan message yang diterima dari server?
    socket.onmessage = function(a) {
        var b = JSON.parse(a.data), //PHP sends Json data
			c = b.type,
			d = b.message,
			e = b.name,
			f = b.date,
			g = b.color;
        if (c == 'usermsg' && e != null) {
            var h = (e == o ? "bubble-right" : "bubble-left");
            var i = (e == o ? "" : g);
            $('#message_box').append('<div class="' + h + '"><p><span class="name" style="color:#' + i + '">' + e + '</span><span class="msgc">' + htmlEntities(d) + '</span><span class="dat">' + f + '</span></p></div>')
			// jika ada user baru yang login maka otomatis menampilkan.y di tab users
            if ($('.' + e).html() == null || $('.' + e).html() == undefined) {
                $('.users').append('<div class="user ' + e + '">' + e + '</div>')
            }
		} else if (c == 'userlgn' && e != null) {
            if (d.match(/meninggalkan/g)) {
                if ($('.er' + b.name).html() == null || $('.er' + b.name).html() == undefined) {
                    $('#message_box').append('<div class="bubble-center disconnected er' + e + '">' + e + ' ' + d + ' ' + f + '</div>')
                }
				// menghapus nama user yang logout di tab users
                $('.' + b.name).remove()
            } else {
                if ($('.kon' + b.name).html() == null || $('.kon' + b.name).html() == undefined) {
                    $('#message_box').append('<div class="bubble-center connected kon' + e + '">' + e + ' ' + d + ' ' + f + '</div>')
                }
                // jika ada user baru yang login maka otomatis menampilkan.y di tab users
                if ($('.' + b.name).html() == null || $('.' + b.name).html() == undefined) {
                    $('.users').append('<div class="user ' + b.name + '">' + b.name + '</div>')
                }
            }
        }
		
		/* menampilkan status connection (hapus jika tidak diperlukan) */
        if (c == 'system') {
            var j = (d.match(/disconnected/g) ? "disconnected" : "connected");
            $('#message_box').append('<div class="bubble-center ' + j + '">' + d + '</div>')
        }
		/*-------------------------------------------------------------*/
		
		// jika ada message baru maka ototmatis scroll ke bawah
        $("html, body").animate({
            scrollTop: $(document).height()
        }, 1000)
    };
    socket.onerror = function(a) {
        $('#message_box').append('<div class="bubble-center disconnected">Error Occurred - ' + a.data + '</div>')
    };
    socket.onclose = function(a) {
        $('#message_box').append('<div class="bubble-center disconnected">Connection Closed</div>')
    };

	// fungsi untuk mengencode message yang mempunyai tag html yang akan di tampilkan 
    function htmlEntities(a) {
        return String(a).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
    }	
	
	// pengaturan tombol tab
    $('.tab').click(function() {
        $('.tab').removeClass('aktip');
        $(this).addClass('aktip');
        var a = $(this).data('dip');
        if (a == "chat") {
            $('.chat').css('display', 'block');
            $('.users').css('display', 'none')
        } else {
            $('.chat').css('display', 'none');
            $('.users').css('display', 'block')
        }
        return false
    });
	
}