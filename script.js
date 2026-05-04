// ===== ÊÐÎÊ 1: ÇÁÅÐÅÆÅÍÍß Â localStorage =====
localStorage.setItem("userAgent", navigator.userAgent);
localStorage.setItem("platform", navigator.platform);
localStorage.setItem("language", navigator.language);

// ===== ÊÐÎÊ 2: ÂÈÂ²Ä Â FOOTER =====
let footer = document.getElementById("footer");

for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);

    footer.innerHTML += `<p>${key}: ${value}</p>`;
}

// ===== ÊÐÎÊ 3: ÊÎÌÅÍÒÀÐ² (ÂÀÐ²ÀÍÒ 26) =====
fetch("https://jsonplaceholder.typicode.com/posts/26/comments")
    .then(response => response.json())
    .then(data => {
        let commentsDiv = document.getElementById("comments");

        data.forEach(comment => {
            commentsDiv.innerHTML += `
                <div style="border:1px solid gray; padding:10px; margin:10px 0;">
                    <p><b>Name:</b> ${comment.name}</p>
                    <p><b>Email:</b> ${comment.email}</p>
                    <p><b>Response:</b><br>${comment.body}</p>
                </div>
            `;
        });
    });

// ===== ÊÐÎÊ 4: ÌÎÄÀËÊÀ ×ÅÐÅÇ 1 ÕÂ =====
setTimeout(() => {
    document.getElementById("modal").style.display = "block";
}, 60000);

// ===== ÊÐÎÊ 5: ÊÍÎÏÊÀ ÒÅÌÈ =====
function toggleTheme() {
    document.body.classList.toggle("dark");
}

// ===== ÊÐÎÊ 6: ÀÂÒÎ ÒÅÌÀ =====
function applyThemeByTime() {
    let hour = new Date().getHours();

    if (hour >= 7 && hour < 21) {
        document.body.classList.remove("dark");
    } else {
        document.body.classList.add("dark");
    }
}

// âèêëèêàºìî îäðàçó ïðè çàïóñêó
applyThemeByTime();