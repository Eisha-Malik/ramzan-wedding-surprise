
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc,
    onSnapshot
} from "https://www.gstatic.com/firebasejs/13.1.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyD966d66V9_lk8ZPM48xvM_OHIRm5TKLYQ",
    authDomain: "ramzan-walima-surprise.firebaseapp.com",
    projectId: "ramzan-walima-surprise",
    storageBucket: "ramzan-walima-surprise.firebasestorage.app",
    messagingSenderId: "446815094341",
    appId: "1:446815094341:web:fb8d75365f53fe2528c52c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const wishesCollection = collection(db, "guest_wishes");

const wishForm = document.getElementById("wishForm");
const guestName = document.getElementById("guestName");
const guestWish = document.getElementById("guestWish");
const wishesList = document.getElementById("wishesList");

// Save guest wishes
wishForm.addEventListener("submit", async function(event) {
    event.preventDefault();

    const name = guestName.value.trim();
    const message = guestWish.value.trim();

    if (!name || !message) return;

    try {
        await addDoc(wishesCollection, {
            name: name,
            message: message
        });

        wishForm.reset();
        alert("Your beautiful wish has been submitted! ❤️");

    } catch (error) {
        console.error("Error saving wish:", error);
        alert("Sorry! Your wish could not be submitted.");
    }
});

// Display all wishes and update them live
onSnapshot(wishesCollection, function(snapshot) {

    wishesList.innerHTML = "<h2>Love From Our Guests 💕</h2>";

    snapshot.forEach(function(doc) {
        const wish = doc.data();

        const card = document.createElement("div");
        card.className = "wish-card";

        const name = document.createElement("h3");
        name.textContent = wish.name;

        const message = document.createElement("p");
        message.textContent = wish.message;

        card.appendChild(name);
        card.appendChild(message);

        wishesList.appendChild(card);
    });

}, function(error) {
    console.error("Error loading wishes:", error);
    wishesList.textContent = "Could not load wishes. Please try again.";
});
