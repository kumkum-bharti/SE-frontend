const WishlistSync = (function() {
    // Count of items added since last sync
    let addedCount = 0;

    function syncWishlist(callback) {
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user || !user.wishlist) {
            if (callback) callback();
            return;
        }
        // Replace with your actual API endpoint URL:
        const apiUrl = window.APP_CONFIG ? window.APP_CONFIG.baseUrl + "api/v1.0/wishlist" : "/api/v1.0/wishlist";
        fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ wishlist: user.wishlist })
        })
        .then(response => response.json())
        .then(data => {
            console.log("Wishlist synced", data);
            // Reset counter after successful sync
            addedCount = 0;
            if (callback) callback();
        }).catch(error => {
            console.error("Wishlist sync error", error);
            if (callback) callback();
        });
    }

    function productAdded() {
        addedCount++;
        if (addedCount >= 2) {
            syncWishlist();
        }
    }

    // Expose functions globally
    return {
        syncWishlist,
        productAdded
    };
})();