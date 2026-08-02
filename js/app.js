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

        const data = {
            story: document.getElementById("story").value,
            contact: document.getElementById("author").value
        };

        try {

            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbyXQ1RF7csgqQ1Nj0gAEHHn1OdkyZpQc8cg-0MuSfuwhqVxrxJ61hDxhAfI9LuicWmHXA/exec",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                }
            );

            if (!response.ok) {
                throw new Error("Ошибка отправки");
            }

            alert(`Спасибо!

Ваше сообщение получено.

XOXO,
ВЕЙКСЕРФ СПЛЕТНИЦА`);

            form.reset();
            uploadText.textContent = "＋ Добавить фото или видео";

        } catch (error) {

            alert("Ошибка отправки. Попробуйте еще раз.");

            console.error(error);

        } finally {

            button.disabled = false;
            button.textContent = "♡ ОТПРАВИТЬ АНОНИМНО";

        }

    });

});
