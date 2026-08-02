document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("gossipForm");
    const button = form.querySelector("button");

    const fileInput = document.getElementById("files");
    const uploadText = document.querySelector(".upload span");

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

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        button.disabled = true;
        button.textContent = "ОТПРАВКА...";

        try {

            const formData = new FormData();

            formData.append(
                "story",
                document.getElementById("story").value
            );

            formData.append(
                "contact",
                document.getElementById("author").value
            );

            const files = document.getElementById("files").files;

            for (let i = 0; i < files.length; i++) {
                formData.append("files", files[i]);
            }

            console.log("Отправляем форму");
            const response = await fetch(
                "https://wakesurf-gossip-api.wakesurf-gossipgirl.workers.dev/",
                {
                    method: "POST",
                    body: formData
                }
            );

            const result = await response.json();
            console.log(result);

            if (!result.success) {
                throw new Error(result.error || "Ошибка");
            }

            alert(`Спасибо!

Ваше сообщение получено.

XOXO,
ВЕЙКСЕРФ СПЛЕТНИЦА`);

            form.reset();
            uploadText.textContent = "＋ Добавить фото или видео";

        } catch (error) {

            console.error(error);

            alert("Ошибка отправки.");

        } finally {

            button.disabled = false;
            button.textContent = "♡ ОТПРАВИТЬ АНОНИМНО";

        }

    });

});
