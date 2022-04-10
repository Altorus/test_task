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

    let error = ''

    if (!name) {
        error += "Вы не ввели Ф.И.О\n"
        $('#name_reg').addClass('danger-input')
    } else {
        $('#name_reg').removeClass('danger-input')
    }
    if (!email) {
        error += 'Вы не ввели почту\n'
        $('#email_reg').addClass('danger-input')
    } else {
        $('#email_reg').removeClass('danger-input')
    }
    if (!pass) {
        error += 'Вы не ввели пароль\n'
        $('#pass_reg').addClass('danger-input')
    } else {
        $('#pass_reg').removeClass('danger-input')

    }
    if (passRepit) {
        if (passRepit != pass) {
            error += 'Пароли не совпадают\n'
            $('#pass_repit_reg').addClass('danger-input')
        } else {
            $('#pass_repit_reg').removeClass('danger-input')
        }
    } else {
        error += 'Вы не ввели повтор пароля\n'
        $('#pass_repit_reg').addClass('danger-input')
    }

    if (error) {
        alert(error)
    } else {
        alert("OK")
    }
})
$('#btn-aut').click(() => {
    let name = $('#name_aut_input').val()
    let pass = $('#pass_aut_input').val()

    let error = ''

    if (!name) {
        error += "Вы не ввели Ф.И.О\n"
        $('#name_aut').addClass('danger-input')
    } else {
        $('#name_aut').removeClass('danger-input')
    }
    if (!pass) {
        error += 'Вы не ввели пароль\n'
        $('#pass_aut').addClass('danger-input')
    } else {
        $('#pass_aut').removeClass('danger-input')

    }

    if (error) {
        alert(error)
    } else {
        alert("OK")
    }
})