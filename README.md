# test-native-app

Приложение Notes

В преложении реализовал следующий функционал:

Ортисовка добаленных заметок; 
Сортировка заметок (закрпленные по времени закрепления от позднего к раннему, незакрепленные от позже добавленных к ранее добавленным);
Свайп вправо позоляет закрепить заметку;
Свайп влево позволяет удалить заметку;
Клик по кнопке "Добавить" открывает экан добавления заметки с пустыми полями;
Клик по заметке открывает экран добавления заметки с текстом заметки;
Кнопка "Сохранить заметку/сохранить изменения" появляется при изменении одного из полей;
На экране добавления/редактирования присутсвует кнопка "Назад";
Клик по кнопке "Назад" возвращает на экран списка заметок без редактирования/добавления новой заметки.

Всё управление состоянием приложения реализовано через redux. Не использовал redux-toolkit, потому что не пользовался им ранее и тратить ограниченное время на то, чтобы пересесть не стал. Хотя займет это немного времени.

Не использовал typescript, потому что не работаю с typescript. Это must have и best practise. Просто откладывал его изучение.
Понимаю необходимость использования, так как TS позвоялет привести JS к строгой типизации, от отсутствия которой приложения, написанные на JS могут страдать на этапе разработки.

Как оцениваю результат работы?
Слабая ситилизация, так как с начала работы делал упор на реализацию функционала. К тому же время ушло на то, чтобы вспомнить необходимые React Native Components, их назначение, особенности и props.
С точки зрения React, реализовал все по лучшим практикам. Держал состояние каждого отдельного компонента с помощью хука useState, а необходимые операции по отрисовке в хуке useEffect c пустым списком зависимостей (ComponentDidMount) и определенных списком зависимостей.

