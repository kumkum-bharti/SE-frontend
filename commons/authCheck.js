document.addEventListener("DOMContentLoaded", function() {
    const Auth = {
        isLoggedIn() {
            const token = localStorage.getItem("token");
            return token && token.trim().length > 0;
        },
        updateUI() {
            const loginButton = document.getElementById("loginButton");
            const logoutButton = document.getElementById("logoutButton");
            // Show login only when token is absent
            if (this.isLoggedIn()) {
                if (loginButton) loginButton.style.display = "none";
                if (logoutButton) logoutButton.style.display = "block";
            } else {
                if (loginButton) loginButton.style.display = "block";
                if (logoutButton) logoutButton.style.display = "none";
            }
        },
        logout() {
            // Before logging out, sync the wishlist
            WishlistSync.syncWishlist(() => {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                this.updateUI();
                window.location.href = "/LOGIN/login.html";
            });
        }
    };

    window.Auth = Auth;
    Auth.updateUI();
});