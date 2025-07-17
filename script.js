class MyHeart {
    constructor() {
        this.you = "everything";
        this.mistakes = [];
        this.regret = true;
        this.love = true;
        this.personName = "";
        this.selectedSong = "";
        this.songMessage = "";
        
        // DOM elements
        this.messageArea = document.getElementById('message-area');
        this.sorryBtn = document.getElementById('sorry-btn');
        this.promiseBtn = document.getElementById('promise-btn');
        this.feelingsBtn = document.getElementById('feelings-btn');
        this.nameInput = document.getElementById('name-input');
        this.startBtn = document.getElementById('start-btn');
        this.nameContainer = document.getElementById('name-container');
        this.songSelectionContainer = document.getElementById('song-selection');
        this.contentContainer = document.getElementById('content-container');
        this.backgroundMusic = document.getElementById('background-music');
        
        // Memory quotes
        this.memories = [
            "Nhớ lần đầu mình gặp nhau không?",
            "Những buổi tối mình cùng nhau đi dạo...",
            "Nụ cười của em là điều đẹp nhất anh từng thấy",
            "Những lúc em buồn, anh chỉ muốn ôm em thật chặt"
        ];
        
        // Secret messages
        this.secretMessages = [
            "Em là ngôi sao sáng nhất trong vũ trụ của anh",
            "Anh nhớ em rất nhiều, em có biết không?",
            "Em là lý do anh mỉm cười mỗi ngày",
            "Tình yêu anh dành cho em sẽ không bao giờ thay đổi",
            "Anh muốn được nắm tay em đi hết quãng đời còn lại"
        ];
        
        // Event listeners
        this.sorryBtn.addEventListener('click', () => this.saySorry());
        this.promiseBtn.addEventListener('click', () => this.promise());
        this.feelingsBtn.addEventListener('click', () => this.shareFeelings());
        this.startBtn.addEventListener('click', () => this.showSongSelection());
        
        // Set up song selection
        this.setupSongSelection();
        
        // Set up scroll animations
        this.setupScrollAnimations();
        
        // Set up promises interaction
        this.setupPromisesInteraction();
        
        // Set up love reasons interaction
        this.setupLoveReasonsInteraction();
        
        // Set up secret star
        this.setupSecretStar();
        
        // Start memory cycle
        this.startMemoryCycle();
    }
    
    // Set up animations on scroll
    setupScrollAnimations() {
        // Check if we're in content view
        if (this.contentContainer.style.display !== 'none') {
            this.initScrollObserver();
        }
    }
    
    // Initialize Intersection Observer for scroll animations
    initScrollObserver() {
        // Get all elements we want to animate on scroll
        const timelineItems = document.querySelectorAll('.timeline-content');
        const memoryItems = document.querySelectorAll('.memory-item');
        const promiseBoxes = document.querySelectorAll('.promise-box');
        const loveReasonsSection = document.querySelector('.love-reasons-section');
        const poemSection = document.querySelector('.poem-section');
        const signature = document.querySelector('.signature');
        
        // Create options for the observer
        const options = {
            root: null, // use viewport
            rootMargin: '0px',
            threshold: 0.2 // 20% of the element visible
        };
        
        // Create and set up observer
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target); // Stop observing once animated
                }
            });
        }, options);
        
        // Observe all timeline items
        timelineItems.forEach(item => {
            observer.observe(item);
        });
        
        // Observe all memory items
        memoryItems.forEach(item => {
            observer.observe(item);
            // Make memory items visible initially for better UX
            setTimeout(() => {
                item.classList.add('animate');
            }, 500 + Array.from(memoryItems).indexOf(item) * 300);
        });
        
        // Observe all promise boxes
        promiseBoxes.forEach(box => {
            observer.observe(box);
            // Make promise boxes visible with staggered delay
            setTimeout(() => {
                box.classList.add('animate');
            }, 500 + Array.from(promiseBoxes).indexOf(box) * 200);
        });
        
        // Observe love reasons section
        if (loveReasonsSection) observer.observe(loveReasonsSection);
        
        // Observe poem section and signature
        if (poemSection) observer.observe(poemSection);
        if (signature) observer.observe(signature);
    }
    
    // Set up promises interaction
    setupPromisesInteraction() {
        const promiseBoxes = document.querySelectorAll('.promise-box');
        const promiseText = document.getElementById('promise-text');
        const promiseDisplay = document.querySelector('.promise-display');
        const promiseBoxPopup = document.getElementById('promise-box-popup');
        const closePromisePopup = document.querySelector('.close-promise-popup');
        const promiseBoxTitle = document.getElementById('promise-box-title');
        const promiseBoxIcon = document.getElementById('promise-box-icon');
        const promiseBoxText = document.getElementById('promise-box-text');
        
        // Chi tiết cho từng lời hứa
        const promiseDetails = [
            {
                title: "Lời Hứa #1",
                icon: "💝",
                text: "Anh hứa sẽ luôn lắng nghe em, dù em đang vui hay buồn. Anh sẽ là người đồng hành bên em trong mọi hoàn cảnh, là bờ vai để em dựa vào khi cần một chỗ dựa tinh thần. Anh sẽ không bao giờ lơ là những cảm xúc của em và luôn cố gắng thấu hiểu những điều em đang cảm thấy."
            },
            {
                title: "Lời Hứa #2",
                icon: "💌",
                text: "Anh hứa sẽ kiên nhẫn hơn và luôn tôn trọng cảm xúc của em. Anh biết đôi khi anh có thể bốc đồng và thiếu kiên nhẫn, nhưng anh sẽ cố gắng kiểm soát bản thân tốt hơn. Anh sẽ không bao giờ làm em phải buồn vì những lời nói thiếu suy nghĩ của mình nữa."
            },
            {
                title: "Lời Hứa #3",
                icon: "🎁",
                text: "Anh hứa sẽ cùng em đi du lịch nhiều nơi, tạo thêm những kỷ niệm đẹp. Chúng ta sẽ cùng nhau khám phá những địa điểm mới, trải nghiệm những điều thú vị và lưu giữ những khoảnh khắc đáng nhớ bên nhau. Mỗi chuyến đi sẽ là một hành trình đưa chúng ta đến gần nhau hơn."
            },
            {
                title: "Lời Hứa #4",
                icon: "💐",
                text: "Anh hứa sẽ luôn nhớ những ngày kỷ niệm quan trọng của chúng ta. Anh biết mình đã từng quên những ngày đặc biệt này và làm em buồn. Từ giờ, anh sẽ ghi nhớ và chuẩn bị những bất ngờ nhỏ trong những dịp đặc biệt để cho em thấy anh luôn trân trọng mối quan hệ của chúng ta."
            },
            {
                title: "Lời Hứa #5",
                icon: "💍",
                text: "Anh hứa sẽ trở thành phiên bản tốt nhất của mình, vì em và vì chúng ta. Anh sẽ không ngừng học hỏi, phát triển bản thân để xứng đáng với tình yêu của em. Anh muốn cùng em xây dựng một tương lai tươi sáng, nơi chúng ta có thể cùng nhau vun đắp hạnh phúc mỗi ngày."
            }
        ];
        
        promiseBoxes.forEach((box, index) => {
            box.addEventListener('click', () => {
                // Remove "open" class from all boxes
                promiseBoxes.forEach(b => b.classList.remove('open'));
                
                // Add "open" class to the clicked box
                box.classList.add('open');
                
                // Get the promise text from data attribute
                const promise = box.getAttribute('data-promise');
                
                // Update the promise display (phần cũ vẫn giữ lại)
                promiseText.style.opacity = '0';
                promiseDisplay.classList.remove('reveal');
                
                setTimeout(() => {
                    promiseText.textContent = promise;
                    promiseText.style.opacity = '1';
                    promiseDisplay.classList.add('reveal');
                }, 300);
                
                // Hiển thị popup với thông tin chi tiết
                if (promiseDetails[index]) {
                    promiseBoxTitle.textContent = promiseDetails[index].title;
                    promiseBoxIcon.textContent = promiseDetails[index].icon;
                    promiseBoxText.textContent = promiseDetails[index].text;
                    promiseBoxPopup.style.display = 'block';
                    
                    // Disable scroll khi popup hiển thị
                    document.body.style.overflow = 'hidden';
                }
                
                // Reset the open state after a delay
                setTimeout(() => {
                    box.classList.remove('open');
                }, 2000);
            });
        });
        
        // Xử lý đóng popup
        if (closePromisePopup) {
            closePromisePopup.addEventListener('click', () => {
                promiseBoxPopup.style.display = 'none';
                // Enable scroll lại khi đóng popup
                document.body.style.overflow = 'auto';
            });
        }
        
        // Đóng popup khi click bên ngoài
        if (promiseBoxPopup) {
            promiseBoxPopup.addEventListener('click', (event) => {
                if (event.target === promiseBoxPopup) {
                    promiseBoxPopup.style.display = 'none';
                    // Enable scroll lại khi đóng popup
                    document.body.style.overflow = 'auto';
                }
            });
        }
        
        // Thêm phím tắt Escape để đóng popup
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && promiseBoxPopup.style.display === 'block') {
                promiseBoxPopup.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // Set up song selection options
    setupSongSelection() {
        const songOptions = document.querySelectorAll('.song-option');
        songOptions.forEach(option => {
            option.addEventListener('click', () => {
                // Remove selected class from all options
                songOptions.forEach(opt => opt.classList.remove('selected'));
                
                // Add selected class to clicked option
                option.classList.add('selected');
                
                // Store selected song and message
                this.selectedSong = option.getAttribute('data-song');
                this.songMessage = option.getAttribute('data-message');
                
                // Allow a moment for the selection to be visible
                setTimeout(() => {
                    this.startExperience();
                }, 800);
            });
        });
    }
    
    // Show name screen and hide content
    showNameInput() {
        this.nameContainer.style.display = "block";
        this.songSelectionContainer.style.display = "none";
        this.contentContainer.style.display = "none";
    }
    
    // Show song selection screen
    showSongSelection() {
        // Get name
        const inputName = this.nameInput.value.trim();
        const validName = "Quỳnh Thy";
        
        // Check if name is valid
        if (inputName !== validName && inputName !== "Quỳnh Thy" && inputName !== "quỳnh thy" && inputName !== "QUỲNH THY" && inputName !== "Quynh Thy" && inputName !== "NaNa" && inputName !== "nana" && inputName !== "NANA") {
            // Show error message
            if (!document.getElementById('name-error')) {
                const errorMsg = document.createElement('p');
                errorMsg.id = 'name-error';
                errorMsg.textContent = 'Chỉ được nhập tên "Quỳnh Thy" (NaNaHime) hoặc "NaNa"';
                errorMsg.style.color = '#ff6b6b';
                errorMsg.style.marginTop = '10px';
                errorMsg.style.fontSize = '14px';
                this.nameContainer.appendChild(errorMsg);
                
                // Highlight input
                this.nameInput.style.borderColor = '#ff6b6b';
                
                // Shake animation
                this.nameInput.style.animation = 'shake 0.5s';
                setTimeout(() => {
                    this.nameInput.style.animation = '';
                }, 500);
            }
            return;
        }
        
        // Set the name based on input
        if (inputName.toLowerCase() === "nana") {
            this.personName = "NaNa";
        } else {
        this.personName = "Quỳnh Thy";
        }
        
        // Hide name input and show song selection
        this.nameContainer.style.display = "none";
        this.songSelectionContainer.style.display = "block";
    }
    
    // Start the experience after selecting song
    startExperience() {
        // Update audio source if a song is selected
        if (this.selectedSong) {
            this.backgroundMusic.src = this.selectedSong;
        }
        
        // Hide song selection and show content
        this.songSelectionContainer.style.display = "none";
        this.contentContainer.style.display = "flex";
        
        // Auto play music
        this.playBackgroundMusic();
        
        // Show welcome and song message
        if (this.songMessage) {
            this.displayMessages([
                `${this.personName} ơi, anh có điều muốn nói...`, 
                this.songMessage
            ]);
        } else {
        this.displayMessage(`${this.personName} ơi, anh có điều muốn nói...`);
        }
        
        // Create heart animation
        this.createHeartParticles();
        
        // Initialize scroll animations
        setTimeout(() => {
            this.setupScrollAnimations();
        }, 1000);
    }
    
    // Play background music
    playBackgroundMusic() {
        // Try multiple ways to ensure autoplay
        const playPromise = this.backgroundMusic.play();
        
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                // Auto-play was prevented
                // Show a "Play" button so that user can start playback manually
                console.log("Autoplay prevented by browser", error);
                
                // Create a temporary play button if autoplay is blocked
                const tempPlayBtn = document.createElement('button');
                tempPlayBtn.textContent = "Click để nghe nhạc";
                tempPlayBtn.className = "temp-music-btn";
                tempPlayBtn.style.position = "fixed";
                tempPlayBtn.style.top = "10px";
                tempPlayBtn.style.right = "10px";
                tempPlayBtn.style.zIndex = "999";
                tempPlayBtn.style.padding = "10px";
                tempPlayBtn.style.backgroundColor = "#9b59b6";
                tempPlayBtn.style.color = "white";
                tempPlayBtn.style.border = "none";
                tempPlayBtn.style.borderRadius = "5px";
                tempPlayBtn.style.cursor = "pointer";
                
                tempPlayBtn.onclick = () => {
                    this.backgroundMusic.play();
                    tempPlayBtn.remove();
                };
                
                document.body.appendChild(tempPlayBtn);
            });
        }
    }
    
    // Cycle through memories in the memories section
    startMemoryCycle() {
        const memoryText = document.querySelector('.memory-text');
        let memoryIndex = 0;
        
        // Initial memory
        memoryText.textContent = this.memories[0];
        
        // Change memory every few seconds
        setInterval(() => {
            memoryIndex = (memoryIndex + 1) % this.memories.length;
            
            // Fade out
            memoryText.style.opacity = "0";
            memoryText.style.transform = "translateY(10px)";
            
            // Change text and fade in after transition
            setTimeout(() => {
                memoryText.textContent = this.memories[memoryIndex];
                memoryText.style.opacity = "0.7";
                memoryText.style.transform = "translateY(0)";
            }, 500);
            
        }, 5000); // Change every 5 seconds
    }
    
    // Create animated heart particles on screen
    createHeartParticles() {
        const fallingHearts = document.querySelector('.falling-hearts');
        
        // Create more falling hearts
        for (let i = 0; i < 8; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = '❤';
            heart.style.position = 'absolute';
            heart.style.fontSize = Math.floor(Math.random() * 15 + 10) + 'px';
            heart.style.color = `rgba(231, 76, 60, ${Math.random() * 0.3 + 0.1})`;
            heart.style.left = Math.floor(Math.random() * 100) + '%';
            heart.style.top = '-30px';
            heart.style.animation = `fall ${Math.floor(Math.random() * 6 + 5)}s infinite linear ${Math.random() * 5}s`;
            fallingHearts.appendChild(heart);
        }
    }
    
    // Display a message with animation
    displayMessage(message) {
        // Clear previous messages
        this.messageArea.innerHTML = '';
        
        // Create paragraph for the message
        const paragraph = document.createElement('p');
        paragraph.className = 'message';
        paragraph.textContent = message;
        
        // Add to DOM
        this.messageArea.appendChild(paragraph);
        
        // Trigger animation
        setTimeout(() => paragraph.classList.add('fade-in'), 10);
    }
    
    // Display multiple messages with delay
    async displayMessages(messages) {
        this.messageArea.innerHTML = '';
        
        for (let i = 0; i < messages.length; i++) {
            const message = messages[i].replace("em", this.personName);
            
            // Create paragraph
            const paragraph = document.createElement('p');
            paragraph.className = 'message';
            paragraph.textContent = message;
            
            // Add to DOM
            this.messageArea.appendChild(paragraph);
            
            // Trigger animation
            setTimeout(() => paragraph.classList.add('fade-in'), 10);
            
            // Wait before showing next message
            if (i < messages.length - 1) {
                await new Promise(resolve => setTimeout(resolve, 2500));
            }
        }
    }
    
    // Say sorry method
    saySorry() {
        if (this.regret && this.love) {
            const messages = [
                `Anh xin lỗi ${this.personName} vì đã làm em tổn thương 😔`,
                `${this.personName} à, anh biết mình sai, và anh đang cố sửa từng chút một.`,
                `Anh không mong em tha thứ ngay đâu, chỉ mong em hiểu rằng trái tim anh đang rất đau.`,
                `Mỗi phút mỗi giây xa em, anh đều nhận ra mình đã sai và đánh mất điều quý giá nhất.`
            ];
            this.displayMessages(messages);
        } else {
            this.displayMessage("Trái tim anh tan vỡ không thể hoạt động... 💔");
        }
    }
    
    // Promise method
    promise() {
        const messages = [
            `${this.personName} à, anh hứa sẽ thay đổi, không vì lời nói suông, mà bằng hành động thực tế.`,
            `Anh sẽ lắng nghe em nhiều hơn, quan tâm đến cảm xúc của em hơn.`,
            `Nếu em cho anh một cơ hội, anh thề sẽ không làm em thất vọng nữa.`,
            `Anh muốn dành cả đời để chứng minh tình yêu của mình với em.`
        ];
        this.displayMessages(messages);
    }
    
    // Share deeper feelings
    shareFeelings() {
        const messages = [
            `${this.personName} ơi, anh nhớ em nhiều lắm...`,
            `Mỗi ngày không có em bên cạnh là một ngày anh không thấy ánh mặt trời.`,
            `Anh đã suy nghĩ rất nhiều về những gì đã xảy ra và anh hối hận thật sự.`,
            `Anh biết lời nói không thể xóa đi nỗi đau, nhưng anh mong em biết rằng anh yêu em vô điều kiện, yêu em dù lúc em đang buồn, dù lúc em đang vui, dù lúc em đang khóc, dù lúc em đang có khó khăn, dù lúc em đang có những điều không vui.`
        ];
        this.displayMessages(messages);
    }

    // Set up love reasons interaction
    setupLoveReasonsInteraction() {
        const loveReasonItems = document.querySelectorAll('.love-reason-item');
        const currentLoveReason = document.getElementById('current-love-reason');
        let currentIndex = 0;
        let isAutoScrolling = true;
        
        // Show first reason initially
        if (loveReasonItems.length > 0) {
            currentLoveReason.textContent = loveReasonItems[0].textContent;
            loveReasonItems[0].classList.add('active');
        }
        
        // Change reason every 3 seconds
        setInterval(() => {
            if (isAutoScrolling) {
                // Remove active class from current item
                loveReasonItems[currentIndex].classList.remove('active');
                
                // Update index
                currentIndex = (currentIndex + 1) % loveReasonItems.length;
                
                // Add active class to new item
                loveReasonItems[currentIndex].classList.add('active');
                
                // Update displayed reason with animation
                currentLoveReason.style.opacity = '0';
                setTimeout(() => {
                    currentLoveReason.textContent = loveReasonItems[currentIndex].textContent;
                    currentLoveReason.style.opacity = '1';
                }, 300);
            }
        }, 3000);
        
        // Allow clicking on reasons to display them
        loveReasonItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                // Stop auto scrolling temporarily
                isAutoScrolling = false;
                
                // Remove active class from all items
                loveReasonItems.forEach(i => i.classList.remove('active'));
                
                // Add active class to clicked item
                item.classList.add('active');
                
                // Update current index
                currentIndex = index;
                
                // Update displayed reason
                currentLoveReason.style.opacity = '0';
                setTimeout(() => {
                    currentLoveReason.textContent = item.textContent;
                    currentLoveReason.style.opacity = '1';
                }, 300);
                
                // Resume auto scrolling after 10 seconds
                setTimeout(() => {
                    isAutoScrolling = true;
                }, 10000);
            });
        });
        
        // Pause animation on hover
        const loveReasonWrapper = document.querySelector('.love-reason-wrapper');
        if (loveReasonWrapper) {
            loveReasonWrapper.addEventListener('mouseenter', () => {
                document.querySelector('.love-reason-items').style.animationPlayState = 'paused';
            });
            
            loveReasonWrapper.addEventListener('mouseleave', () => {
                document.querySelector('.love-reason-items').style.animationPlayState = 'running';
            });
        }
    }

    // Set up secret star
    setupSecretStar() {
        const secretStar = document.getElementById('secret-star');
        const secretMessagePopup = document.getElementById('secret-message-popup');
        const closeSecret = document.querySelector('.close-secret');
        const secretMessage = document.getElementById('secret-message');
        
        // Check if elements exist before setting up event listeners
        if (!secretStar || !secretMessagePopup || !closeSecret || !secretMessage) {
            console.error('Secret message elements not found!');
            return;
        }
        
        // Show popup when clicking star
        secretStar.addEventListener('click', () => {
            // Choose random secret message
            const randomIndex = Math.floor(Math.random() * this.secretMessages.length);
            secretMessage.textContent = this.secretMessages[randomIndex];
            
            // Show popup
            secretMessagePopup.style.display = 'block';
            
            // Add name to message if available
            if (this.personName) {
                secretMessage.textContent = secretMessage.textContent.replace("em", this.personName);
            }
        });
        
        // Close popup when clicking X
        closeSecret.addEventListener('click', () => {
            secretMessagePopup.style.display = 'none';
        });
        
        // Close popup when clicking outside
        secretMessagePopup.addEventListener('click', (event) => {
            if (event.target === secretMessagePopup) {
                secretMessagePopup.style.display = 'none';
            }
        });
    }
}

// Gallery functions for Ky Niem 1
let currentImageIndex = 0;
let slideshowInterval = null;
let isPlaying = false;

// Gallery functions for Ky Niem 2
let currentImageIndex2 = 0;
let slideshowInterval2 = null;
let isPlaying2 = false;

// Gallery functions for Ky Niem 3
let currentImageIndex3 = 0;
let slideshowInterval3 = null;
let isPlaying3 = false;

function openGallery(index) {
    // Hiển thị gallery popup
    const galleryPopup = document.getElementById('gallery-popup');
    galleryPopup.style.display = 'block';
    
    // Hiển thị ảnh được chọn
    showImage(index);
    
    // Tắt scroll của body
    document.body.style.overflow = 'hidden';
    
    // Cập nhật tổng số ảnh
    const totalImages = document.querySelectorAll('#gallery-popup .gallery-img').length;
    document.getElementById('total-images').textContent = totalImages;
    
    // Dừng slideshow khi mở gallery
    stopSlideshow();
}

function closeGallery() {
    const galleryPopup = document.getElementById('gallery-popup');
    galleryPopup.style.display = 'none';
    
    // Bật lại scroll của body
    document.body.style.overflow = 'auto';
    
    // Dừng slideshow khi đóng gallery
    stopSlideshow();
}

function showImage(index) {
    const images = document.querySelectorAll('#gallery-popup .gallery-img');
    
    // Ẩn tất cả ảnh
    images.forEach(img => img.classList.remove('active'));
    
    // Hiển thị ảnh được chọn
    currentImageIndex = index;
    
    // Xử lý trường hợp vượt quá số lượng ảnh
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    
    // Hiển thị ảnh hiện tại
    images[currentImageIndex].classList.add('active');
    
    // Cập nhật số ảnh hiện tại và tổng số ảnh
    document.getElementById('current-image').textContent = currentImageIndex + 1;
    document.getElementById('total-images').textContent = images.length;
}

function changeImage(step) {
    showImage(currentImageIndex + step);
}

function startSlideshow() {
    if (!slideshowInterval) {
        slideshowInterval = setInterval(() => {
            changeImage(1);
        }, 3000); // Chuyển ảnh sau mỗi 3 giây
    }
    isPlaying = true;
    document.getElementById('play-icon').textContent = "⏸";
}

function stopSlideshow() {
    if (slideshowInterval) {
        clearInterval(slideshowInterval);
        slideshowInterval = null;
    }
    isPlaying = false;
    if (document.getElementById('play-icon')) {
        document.getElementById('play-icon').textContent = "▶";
    }
}

function toggleSlideshow() {
    if (isPlaying) {
        stopSlideshow();
    } else {
        startSlideshow();
    }
}

// Functions for Ky Niem 2 Gallery
function openGallery2(index) {
    // Hiển thị gallery popup
    const galleryPopup = document.getElementById('gallery-popup-2');
    galleryPopup.style.display = 'block';
    
    // Hiển thị ảnh được chọn
    showImage2(index);
    
    // Tắt scroll của body
    document.body.style.overflow = 'hidden';
    
    // Cập nhật tổng số ảnh
    const totalImages = document.querySelectorAll('#gallery-popup-2 .gallery-img').length;
    document.getElementById('total-images-2').textContent = totalImages;
    
    // Dừng slideshow khi mở gallery
    stopSlideshow2();
}

function closeGallery2() {
    const galleryPopup = document.getElementById('gallery-popup-2');
    galleryPopup.style.display = 'none';
    
    // Bật lại scroll của body
    document.body.style.overflow = 'auto';
    
    // Dừng slideshow khi đóng gallery
    stopSlideshow2();
}

function showImage2(index) {
    const images = document.querySelectorAll('#gallery-popup-2 .gallery-img');
    
    // Ẩn tất cả ảnh
    images.forEach(img => img.classList.remove('active'));
    
    // Hiển thị ảnh được chọn
    currentImageIndex2 = index;
    
    // Xử lý trường hợp vượt quá số lượng ảnh
    if (currentImageIndex2 >= images.length) {
        currentImageIndex2 = 0;
    } else if (currentImageIndex2 < 0) {
        currentImageIndex2 = images.length - 1;
    }
    
    // Hiển thị ảnh hiện tại
    images[currentImageIndex2].classList.add('active');
    
    // Cập nhật số ảnh hiện tại và tổng số ảnh
    document.getElementById('current-image-2').textContent = currentImageIndex2 + 1;
    document.getElementById('total-images-2').textContent = images.length;
}

function changeImage2(step) {
    showImage2(currentImageIndex2 + step);
}

function startSlideshow2() {
    if (!slideshowInterval2) {
        slideshowInterval2 = setInterval(() => {
            changeImage2(1);
        }, 3000); // Chuyển ảnh sau mỗi 3 giây
    }
    isPlaying2 = true;
    document.getElementById('play-icon-2').textContent = "⏸";
}

function stopSlideshow2() {
    if (slideshowInterval2) {
        clearInterval(slideshowInterval2);
        slideshowInterval2 = null;
    }
    isPlaying2 = false;
    if (document.getElementById('play-icon-2')) {
        document.getElementById('play-icon-2').textContent = "▶";
    }
}

function toggleSlideshow2() {
    if (isPlaying2) {
        stopSlideshow2();
    } else {
        startSlideshow2();
    }
}

// Functions for Ky Niem 3 Gallery
function openGallery3(index) {
    // Hiển thị gallery popup
    const galleryPopup = document.getElementById('gallery-popup-3');
    galleryPopup.style.display = 'block';
    
    // Hiển thị ảnh được chọn
    showImage3(index);
    
    // Tắt scroll của body
    document.body.style.overflow = 'hidden';
    
    // Cập nhật tổng số ảnh
    const totalImages = document.querySelectorAll('#gallery-popup-3 .gallery-img').length;
    document.getElementById('total-images-3').textContent = totalImages;
    
    // Dừng slideshow khi mở gallery
    stopSlideshow3();
}

function closeGallery3() {
    const galleryPopup = document.getElementById('gallery-popup-3');
    galleryPopup.style.display = 'none';
    
    // Bật lại scroll của body
    document.body.style.overflow = 'auto';
    
    // Dừng slideshow khi đóng gallery
    stopSlideshow3();
}

function showImage3(index) {
    const images = document.querySelectorAll('#gallery-popup-3 .gallery-img');
    
    // Ẩn tất cả ảnh
    images.forEach(img => img.classList.remove('active'));
    
    // Hiển thị ảnh được chọn
    currentImageIndex3 = index;
    
    // Xử lý trường hợp vượt quá số lượng ảnh
    if (currentImageIndex3 >= images.length) {
        currentImageIndex3 = 0;
    } else if (currentImageIndex3 < 0) {
        currentImageIndex3 = images.length - 1;
    }
    
    // Hiển thị ảnh hiện tại
    images[currentImageIndex3].classList.add('active');
    
    // Cập nhật số ảnh hiện tại và tổng số ảnh
    document.getElementById('current-image-3').textContent = currentImageIndex3 + 1;
    document.getElementById('total-images-3').textContent = images.length;
}

function changeImage3(step) {
    showImage3(currentImageIndex3 + step);
}

function startSlideshow3() {
    if (!slideshowInterval3) {
        slideshowInterval3 = setInterval(() => {
            changeImage3(1);
        }, 3000); // Chuyển ảnh sau mỗi 3 giây
    }
    isPlaying3 = true;
    document.getElementById('play-icon-3').textContent = "⏸";
}

function stopSlideshow3() {
    if (slideshowInterval3) {
        clearInterval(slideshowInterval3);
        slideshowInterval3 = null;
    }
    isPlaying3 = false;
    if (document.getElementById('play-icon-3')) {
        document.getElementById('play-icon-3').textContent = "▶";
    }
}

function toggleSlideshow3() {
    if (isPlaying3) {
        stopSlideshow3();
    } else {
        startSlideshow3();
    }
}

// Khởi tạo trình xử lý sự kiện cho phím tắt
document.addEventListener('keydown', function(event) {
    const galleryPopup = document.getElementById('gallery-popup');
    const galleryPopup2 = document.getElementById('gallery-popup-2');
    const galleryPopup3 = document.getElementById('gallery-popup-3');
    
    // Gallery 1
    if (galleryPopup && galleryPopup.style.display === 'block') {
        if (event.key === 'Escape') {
            closeGallery();
            stopSlideshow();
        } else if (event.key === 'ArrowLeft') {
            changeImage(-1);
        } else if (event.key === 'ArrowRight') {
            changeImage(1);
        } else if (event.key === ' ') { // Phím space để bật/tắt slideshow
            toggleSlideshow();
            event.preventDefault(); // Ngăn không cho trang cuộn xuống
        }
    }
    
    // Gallery 2
    if (galleryPopup2 && galleryPopup2.style.display === 'block') {
        if (event.key === 'Escape') {
            closeGallery2();
            stopSlideshow2();
        } else if (event.key === 'ArrowLeft') {
            changeImage2(-1);
        } else if (event.key === 'ArrowRight') {
            changeImage2(1);
        } else if (event.key === ' ') { // Phím space để bật/tắt slideshow
            toggleSlideshow2();
            event.preventDefault(); // Ngăn không cho trang cuộn xuống
        }
    }

    // Gallery 3
    if (galleryPopup3 && galleryPopup3.style.display === 'block') {
        if (event.key === 'Escape') {
            closeGallery3();
            stopSlideshow3();
        } else if (event.key === 'ArrowLeft') {
            changeImage3(-1);
        } else if (event.key === 'ArrowRight') {
            changeImage3(1);
        } else if (event.key === ' ') { // Phím space để bật/tắt slideshow
            toggleSlideshow3();
            event.preventDefault(); // Ngăn không cho trang cuộn xuống
        }
    }
});

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add transition to memories
    const memoryText = document.querySelector('.memory-text');
    if (memoryText) {
        memoryText.style.transition = 'all 0.5s ease';
    }
    
    // Create the heart instance
    const me = new MyHeart();
    
    // Set up secret star (redundant call to ensure it's initialized even if the class initialization fails)
    setupSecretStar();
    
    // Start with name input
    me.showNameInput();
    
    // Thêm sự kiện vuốt cho gallery
    setupTouchEvents();
});

// Set up touch events for gallery
function setupTouchEvents() {
    // Set up for Gallery 1
    const galleryPopup = document.getElementById('gallery-popup');
    if (galleryPopup) {
        setupSwipeForGallery(galleryPopup, changeImage);
    }
    
    // Set up for Gallery 2
    const galleryPopup2 = document.getElementById('gallery-popup-2');
    if (galleryPopup2) {
        setupSwipeForGallery(galleryPopup2, changeImage2);
    }
    
    // Set up for Gallery 3
    const galleryPopup3 = document.getElementById('gallery-popup-3');
    if (galleryPopup3) {
        setupSwipeForGallery(galleryPopup3, changeImage3);
    }
}

// Set up swipe for specific gallery
function setupSwipeForGallery(galleryElement, changeFunc) {
    let touchStartX = 0;
    let touchEndX = 0;
    const minSwipeDistance = 50; // Minimum distance to register as swipe
    
    galleryElement.addEventListener('touchstart', function(event) {
        touchStartX = event.changedTouches[0].screenX;
    }, false);
    
    galleryElement.addEventListener('touchend', function(event) {
        touchEndX = event.changedTouches[0].screenX;
        handleSwipe();
    }, false);
    
    function handleSwipe() {
        // Calculate swipe distance
        const swipeDistance = touchEndX - touchStartX;
        
        // If minimum swipe distance is met, change image
        if (Math.abs(swipeDistance) > minSwipeDistance) {
            if (swipeDistance > 0) {
                // Swipe right - show previous image
                changeFunc(-1);
            } else {
                // Swipe left - show next image
                changeFunc(1);
            }
        }
    }
}

// Backup function for secret star in case class initialization fails
function setupSecretStar() {
    const secretStar = document.getElementById('secret-star');
    const secretMessagePopup = document.getElementById('secret-message-popup');
    const closeSecret = document.querySelector('.close-secret');
    const secretMessage = document.getElementById('secret-message');
    
    // Check if elements exist before setting up event listeners
    if (!secretStar || !secretMessagePopup || !closeSecret || !secretMessage) {
        console.error('Secret message elements not found!');
        return;
    }
    
    const secretMessages = [
        "Em là ngôi sao sáng nhất trong vũ trụ của anh",
        "Anh nhớ em rất nhiều, em có biết không?",
        "Em là lý do anh mỉm cười mỗi ngày",
        "Tình yêu anh dành cho em sẽ không bao giờ thay đổi",
        "Anh muốn được nắm tay em đi hết quãng đời còn lại"
    ];
    
    // Show popup when clicking star
    secretStar.addEventListener('click', () => {
        // Choose random secret message
        const randomIndex = Math.floor(Math.random() * secretMessages.length);
        secretMessage.textContent = secretMessages[randomIndex];
        
        // Show popup
        secretMessagePopup.style.display = 'block';
    });
    
    // Close popup when clicking X
    closeSecret.addEventListener('click', () => {
        secretMessagePopup.style.display = 'none';
    });
    
    // Close popup when clicking outside
    secretMessagePopup.addEventListener('click', (event) => {
        if (event.target === secretMessagePopup) {
            secretMessagePopup.style.display = 'none';
        }
    });
} 