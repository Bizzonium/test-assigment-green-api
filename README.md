# Тестовое задание от GREEN API

## Описание проекта
Репозиторий является простейшим монорепо с двумя микросервисами на фреймворке NestJS.

Микросервис `api` при получении GET-запроса на эндпоинт `/api/ping` отправляет `ping` сообщение со временем запроса в очередь RabbitMQ и ждёт ответа.

Затем микросервис `processor` обрабатывает `ping` сообщение, ждёт 3 секунды и возвращает в ответ время ответа с дельтой времени.

Если микросервис `api` не получит ответ в течении 10 секунд, то клиенту отправляется ошибка "таймаут запроса".



https://github.com/Bizzonium/test-assigment-green-api/assets/8555356/6642bcc4-fbf9-4d8b-950b-019dfee2919b



## Задача
В рамках выполнения тестового задания требуется разработать механизм асинхронной обработки
HTTP запросов и опубликовать исходники проекта на Github для дальнейшего анализа и проверки.
Время на выполнения задания: 3 дня.

### Требования:
1. Требуется разработать механизм асинхронной обработки HTTP запросов
2. Требуется использовать стек NodeJS, RabbitMQ
3. Требуется оформить в виде репозитория на Github
4. Требуется приложить инструкцию по локальному развертыванию проекта
5. Требуется реализовать логирование для целей отладки и мониторинга
6. Требуется разработать микросервис М1 для обработки входящих HTTP запросов
7. Требуется разработать микросервис М2 для обработки заданий из RabbitMQ

### Алгоритм работы:
- Получаем HTTP запрос на уровне микросервиса М1.
- Транслируем HTTP запрос в очередь RabbitMQ. Запрос трансформируется в задание.
- Обрабатываем задание микросервисом М2 из очереди RabbitMQ.
- Помещаем результат обработки задания в RabbitMQ.
- Возвращаем результат HTTP запроса как результат выполнения задания из RabbitMQ.

### Принципиальная схема:
![image](https://github.com/Bizzonium/test-assigment-green-api/assets/8555356/ec723f7d-9925-455a-835a-de7eafd1cacc)

## Инструкция по локальному развёртыванию проекта
1. Запустите RabbitMQ с помощью Docker или systemd, или другим способом
   ```
   docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.10-management
   ```
2. Склонируйте репозиторий
   ```
   git clone git@github.com:Bizzonium/test-assigment-green-api.git
   ```
3. Перейдите в директорую
   ```
   cd test-assigment-green-api
   ```
4. Установите зависимости
   ```
   pnpm install -r
   ```
5. Запустите параллельно микросервисы api и processor в dev-режиме.
   ```
   pnpm start:dev
   ```
   Также можно запускать через debug (F5) в VS Code.
