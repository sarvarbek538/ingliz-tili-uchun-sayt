const validNames = {
    "Burxanova Kamola": "kamola.html",
    "Olimova Gulnoza": "gulnoza.html",
    "Djurayeva Dildora": "dildora.html",
    "Kuchkarova Dilnoza": "dilnoza.html",
    "Usmanova Nigora": "nigora.html",
    "Sayfullayeva Aziza": "aziza.html",
    "Djalilova Gavxaroy": "gavxaroy.html",
    "Sharipova Feruza": "feruza.html",
    "Dadamirzayeva Xamida": "xamida.html"
};

document.getElementById("searchButton").addEventListener("click", () => {
    const nameInput = document.getElementById("nameInput").value.trim();
    const loading = document.getElementById("loading");

    if (validNames[nameInput]) {
        loading.style.display = "block";

        setTimeout(() => {
            loading.style.display = "none";
            window.location.href = validNames[nameInput];
        }, 2000);
    } else {
        alert("Ism topilmadi! Iltimos, to'g'ri ism kiriting.");
    }
});
// JavaScript for toggling the loading spinner
document.getElementById('searchButton').addEventListener('click', function() {
    // Show loading spinner
    document.getElementById('loading').style.display = 'block';

    // Simulate search delay (for demo purposes)
    setTimeout(function() {
        // Hide loading spinner after delay
        document.getElementById('loading').style.display = 'none';
    }, 3000); // Simulate 3-second loading
});