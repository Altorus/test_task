$('.js-tab-trigger').click(function() {
    var id = $(this).attr('data-tab'),
        content = $('.js-tab-content[data-tab="' + id + '"]');

    $('.js-tab-trigger.active').removeClass('active'); // 1
    $(this).addClass('active'); // 2

    $('.js-tab-content.active').removeClass('active'); // 3
    content.addClass('active'); // 4
});

// валидация
$('#btn-reg').click(() => {
    let name = $('#name_reg_input').val()
    let email = $('#email').val()
    let pass = $('#pass_reg_input').val()
    let passRepit = $('#pass_repit').val()
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

    let error = ''

    if (!name) {
        error += "Вы не ввели Ф.И.О<br>"
        $('#name_reg').addClass('danger-input vivify shake')
    } else {
        $('#name_reg').removeClass('danger-input vivify shake')
    }
    if (!email) {
        error += 'Вы не ввели почту<br>'
        $('#email_reg').addClass('danger-input vivify shake')
    } else {
        if (!email.match(pattern)) {
            error += 'Почта не соответствует требованиям<br>'
            $('#email_reg').addClass('danger-input vivify shake')
        } else {
            $('#email_reg').removeClass('danger-input vivify shake')
        }
    }
    if (!pass) {
        error += 'Вы не ввели пароль<br>'
        $('#pass_reg').addClass('danger-input vivify shake')
    } else {
        $('#pass_reg').removeClass('danger-input vivify shake')

    }
    if (passRepit) {
        if (passRepit != pass) {
            error += 'Пароли не совпадают<br>'
            $('#pass_repit_reg').addClass('danger-input vivify shake')
        } else {
            $('#pass_repit_reg').removeClass('danger-input vivify shake')
        }
    } else {
        error += 'Вы не ввели повтор пароля<br>'
        $('#pass_repit_reg').addClass('danger-input vivify shake')
    }

    if (error) {
        $('#req_reg').html(error)
    } else {
        alert("OK")
    }
})
$('#btn-aut').click(() => {
    let name = $('#name_aut_input').val()
    let pass = $('#pass_aut_input').val()

    let error = ''

    if (!name) {
        error += "Вы не ввели Ф.И.О<br>"
        $('#name_aut').addClass('danger-input vivify shake')
    } else {
        $('#name_aut').removeClass('danger-input vivify shake')
    }
    if (!pass) {
        error += 'Вы не ввели пароль<br>'
        $('#pass_aut').addClass('danger-input vivify shake')
    } else {
        $('#pass_aut').removeClass('danger-input vivify shake')

    }

    if (error) {
        console.log($('#req_aut'))
    } else {
        alert("OK")
    }
})