window.addEventListener('DOMContentLoaded', function() {

    let data = [];
    let c = 0;
    let h = [];
    let d = new Date();

    const block = document.querySelector('.post_block');
    let content = '';
    content += '<h2 class="title">Полк имени Кадырова обратился к Путину после статей о "казнях" в Чечне</h2>';
    content += '<img src="img/view_skrin677777777777777777.jpg" alt="">';
    content += '<p class="text">Бойцы полка имени Ахмада Кадырова при МВД Чечни обратились к Владимиру Путину после публикации о "казнях" в ркспублике</p>';
    content += '<div class="block_icon">';
    content += '<i class="fas fa-envelope message"></i>';
    content += '<span class="number">0</span>';
    content += '</div>';
    
    block.innerHTML = content;

    const messageBtn = document.querySelector('.block_icon');
    messageBtn.addEventListener('click', () => {
        const messageBlock = document.querySelector('.message_block');
        let message = '';
        message += '<div class="form">';
        message += '<input type="text" placeholder="Ведите ваше иимя" class="input" id="form_name">';
        message += '<input type="text" placeholder="Введите заголовок" class="input" id="form_title">';
        message += '<input type="text" placeholder="Введите сообщение" class="input" id="form_message">';
        message += '<button class="form_btn input">Отправить</button>';
        message += '</div>';
        messageBlock.innerHTML = message;

        const fomrBtn = document.querySelector('.form_btn');
        const formName = document.querySelector('#form_name');
        const formTitle = document.querySelector('#form_title');
        const formMessage = document.querySelector('#form_message');

        fomrBtn.addEventListener('click', () => {
            if(formName.value == '') {
                alert('Заполните имя');
            }else if(formTitle.value == '') {
                alert('Заполните заголовок');
            }else if(formMessage.value == '') {
                alert('Заполните сообщение');
            }else {
                let name = formName.value;
                let title = formTitle.value;
                let message = formMessage.value;
                data.push(name, title, message);
                
                const messages = document.querySelector('.messages');
                let mess = '';
                mess += '<h4 class="mess_name">Автор: ' + data[0] + '</h4>';
                mess += '<h2 class="mess_title">Заголовок: ' + data[1] + '</h2>';
                mess += '<p class="mess">Сообщение: ' + data[2] + '</p>';
                mess += 'Время отправки: ' + d.getDate() + '.' + d.getMonth() + '.' + d.getFullYear() + 'г. ' + d.getHours() + ':' + d.getMinutes();
                mess += '<div class="bl">';
                mess += '<a class="link">подробнее</a>';
                mess += '<span class="pro">не прочитано</span>';
                mess += '</div>';
                mess += '<hr>';

                messages.innerHTML += mess;
                
                let g = document.querySelector('.mess_name');
                
                h.push(g);
                let count = h.length;
                c = count;
                let num = document.querySelector('.number');
                num.innerText = c;

                let link = document.querySelectorAll('.link');
                for(let i = 0; i < link.length; i++) {
                    link[i].addEventListener('click', () => {
                        link[i].nextElementSibling.innerText = 'прочитано';
                    });
                }

                let inputs = document.querySelectorAll('input[type=text]');
                for(let i = 0; i < inputs.length; i++) {
                    inputs[i].value = '';
                }
            }
        });
    });
    
    
    
    
    
    
});