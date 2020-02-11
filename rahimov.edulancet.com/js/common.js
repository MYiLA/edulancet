$(document).ready(function() {

	//Попап менеджер FancyBox
	// data-fancybox="gallery" создание галереи
	// data-caption="<b>Подпись</b><br>"  Подпись картинки
	// data-width="2048" реальная ширина изображения
	// data-height="1365" реальная высота изображения
	// data-type="ajax" загрузка контента через ajax без перезагрузки
	// data-type="iframe" загрузка iframe (содержимое с другого сайта)
	$(".fancybox").fancybox({
		hideOnContentClick: true,
		protect: false, //защита изображения от загрузки, щелкнув правой кнопкой мыши. 
		loop: true, // Бесконечная навигация по галерее
		arrows : true, // Отображение навигационные стрелки
		infobar : true, // Отображение инфобара (счетчик и стрелки вверху)
		toolbar : true, // Отображение панели инструментов (кнопки вверху)
		buttons : [ // Отображение панели инструментов по отдельности (кнопки вверху)
        // 'slideShow',
        // 'fullScreen',
        // 'thumbs',
        // 'share',
        //'download',
        //'zoom',
        'close'
    	],
    	touch : false,
    	animationEffect : "zoom", // анимация открытия слайдов "zoom" "fade" "zoom-in-out"
    	transitionEffect: 'slide', // анимация переключения слайдов "fade" "slide" "circular" "tube" "zoom-in-out" "rotate'
    	animationDuration : 500, // Длительность в мс для анимации открытия / закрытия
    	transitionDuration : 1366, // Длительность переключения слайдов
    	slideClass : '', // Добавить свой класс слайдам

	});


	// Маска для формы телефона
    $("input[type='tel']").inputmask({"mask": "+7 (999) 999-9999"});
    // <input type="tel" placeholder="+7 (___) ___-___" name="tel">


	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$(document).ready(function () {
    $("#form1").submit(function () {
        $.ajax({
            type: "POST"
            , url: "mail1.php"
            , data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $("#form1").trigger("reset");
            $.fancybox.open($("#pop"));
            setTimeout(function () {
                $.fancybox.close();
            }, 1500);
        });
        return false;
    });
    $("#form2").submit(function () {
        $.ajax({
            type: "POST"
            , url: "mail1.php"
            , data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $("#form2").trigger("reset");
            $.fancybox.open($("#pop"));
            setTimeout(function () {
                $.fancybox.close();
            }, 1500);
        });
        return false;
    });
    $("#form3").submit(function () {
        $.ajax({
            type: "POST"
            , url: "mail1.php"
            , data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $("#form3").trigger("reset");
            $.fancybox.open($("#pop"));
            setTimeout(function () {
                $.fancybox.close();
            }, 1500);
        });
        return false;
    });
    $("#form4").submit(function () {
        $.ajax({
            type: "POST"
            , url: "mail2.php"
            , data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $("#form4").trigger("reset");
            $.fancybox.open($("#pop"));
            setTimeout(function () {
                $.fancybox.close();
            }, 1500);
        });
        return false;
    });
	});

    //Плавный скролл до блока .div по клику на .scroll
    $('a[data-target="anchor"]').bind('click.smoothscroll', function(){
    	var target = $(this).attr('href'),
    		bl_top = $(target).offset().top;
    	$('body, html').animate({scrollTop: bl_top}, 700);
    	return false;
    });


	if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
		
	} else {
		document.body.classList.add('no-touch');
	}

	$('.tariffs-item .btn1').on('click', function () {
		var topic = $(this).attr('data-topic');
		$('.popup-input-topic').val(topic);
	});

	$('.main-header-menu-toggle').on('click', function () {
		$('.main-header-nav').slideToggle();
	});

	// Конпка вверх
    $(window).scroll(function() {
	    if($(this).scrollTop() != 0) {
	    $('#toTop').fadeIn();
	    } else {
	    $('#toTop').fadeOut();
	    }
	});

	$('#toTop').click(function() {
	    $('body,html').animate({scrollTop:0},800);
	});

});