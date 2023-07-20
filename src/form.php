<?php
        $to = "";
        $subject = 'Обратный звонок'; //Заголовок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>company: '.$_POST['company'].'</p>
                        <p>Email: '.$_POST['email'].'</p>
                        <p>Сообщение: '.$_POST['comment'].'</p>                                   
                    </body>
                </html>'; //Текст сообщения
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя
        $resp = mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail

        echo $resp;
?>