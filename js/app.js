// =======================
// Загрузка страницы
// =======================

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("gossipForm");
    const button = form.querySelector("button");
    const fileInput = document.getElementById("files");
    const uploadText = document.querySelector(".upload span");

    // Показываем выбранные файлы

    fileInput.addEventListener("change", () => {

        if (fileInput.files.length === 0) {

            uploadText.textContent = "＋ Добавить фото или видео";

            return;

        }

        if (fileInput.files.length === 1) {

            uploadText.textContent = "✓ " + fileInput.files[0].name;

            return;

        }

        uploadText.textContent =
            "✓ Выбрано файлов: " + fileInput.files.length;

    });

    // Пока отправку просто имитируем

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        button.disabled = true;

        button.textContent = "ОТПРАВКА...";

        setTimeout(() => {

            alert(
`Спасибо!

Ваше сообщение получено.

XOXO,
ВЕЙКСЕРФ СПЛЕТНИЦА`
            );

            form.reset();

            uploadText.textContent =
                "＋ Добавить фото или видео";

            button.disabled = false;

            button.textContent =
                "♡ ОТПРАВИТЬ АНОНИМНО";

        }, 1200);

    });

});
