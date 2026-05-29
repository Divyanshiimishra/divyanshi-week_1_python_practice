document.addEventListener("DOMContentLoaded", () => {

    
    const searchInput = document.getElementById("db-search");
    const timelineCards = document.querySelectorAll(".timeline-card");
    const genreBubbles = document.querySelectorAll(".bubble");
    const profileDrawer = document.getElementById("bookProfileDrawer");
    const closeDrawerBtn = document.getElementById("closeDrawerBtn");
    const bookTriggers = document.querySelectorAll(".book-trigger");

    
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            const query = e.target.value.toLowerCase().trim();

            timelineCards.forEach(card => {
                const searchTags = card.getAttribute("data-tags").toLowerCase();
                const cardTitle = card.querySelector("h4").textContent.toLowerCase();
                
                if (searchTags.includes(query) || cardTitle.includes(query)) {
                    card.style.display = "flex";
                } else {
                    card.style.display = "none";
                }
            });
        });
    }

    
    genreBubbles.forEach(bubble => {
        bubble.addEventListener("click", () => {
            
            genreBubbles.forEach(b => b.classList.remove("active-bubble"));
            
            bubble.classList.add("active-bubble");

            const categoryValue = bubble.getAttribute("data-target");
            if (categoryValue && searchInput) {
                searchInput.value = categoryValue;
                searchInput.dispatchEvent(new Event('input'));
            }
        });
    });

    const openDrawer = () => {
        profileDrawer.classList.add("active");
        
        if(window.innerWidth > 1200) {
            profileDrawer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    };

    const closeDrawer = () => {
        profileDrawer.classList.remove("active");
    };

    bookTriggers.forEach(trigger => {
        trigger.addEventListener("click", (e) => {
            e.preventDefault();
            openDrawer();
        });
    });

    if (closeDrawerBtn) {
        closeDrawerBtn.addEventListener("click", closeDrawer);
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeDrawer();
        }
    });
});