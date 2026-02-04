<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#11d4c4",
                        "background-light": "#f6f8f8",
                        "background-dark": "#102220",
                    },
                    fontFamily: {
                        "display": ["Manrope", "sans-serif"]
                    },
                    borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
                },
            },
        }
    </script>
<style>
        body { font-family: 'Manrope', sans-serif; }
    </style>
</head>
<body class="bg-background-light dark:bg-background-dark font-display transition-colors duration-300">
<div class="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
<div class="layout-container flex h-full grow flex-col">
<!-- TopNavBar Component -->
<div class="px-4 md:px-40 flex justify-center py-5 bg-white dark:bg-background-dark border-b border-solid border-[#f0f4f4] dark:border-white/10">
<div class="layout-content-container flex flex-col max-w-[960px] flex-1">
<header class="flex items-center justify-between whitespace-nowrap px-4 py-3">
<div class="flex items-center gap-4 text-[#111817] dark:text-white">
<div class="size-8 text-primary">
<svg fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fill="currentColor" fill-rule="evenodd"></path>
<path clip-rule="evenodd" d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z" fill="currentColor" fill-rule="evenodd"></path>
</svg>
</div>
<h2 class="text-xl font-bold leading-tight tracking-[-0.015em]">TAGOHEFO</h2>
</div>
<div class="flex flex-1 justify-end gap-8">
<div class="hidden md:flex items-center gap-9">
<a class="text-[#111817] dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Home</a>
<a class="text-primary text-sm font-bold leading-normal" href="#">About Us</a>
<a class="text-[#111817] dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Our Work</a>
<a class="text-[#111817] dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">News</a>
<a class="text-[#111817] dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Contact</a>
</div>
<button class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:brightness-110">
<span class="truncate">Donate</span>
</button>
</div>
</header>
</div>
</div>
<main class="flex-1">
<div class="px-4 md:px-40 flex flex-1 justify-center py-5">
<div class="layout-content-container flex flex-col max-w-[960px] flex-1">
<!-- HeadlineText Component -->
<h1 class="text-[#111817] dark:text-white tracking-light text-[36px] font-bold leading-tight px-4 text-center pb-3 pt-6">About TAGOHEFO</h1>
<!-- BodyText Component -->
<p class="text-[#111817] dark:text-gray-300 text-lg font-normal leading-relaxed pb-8 pt-1 px-4 text-center max-w-3xl mx-auto">
                        Tanzania Gender and Good Health Foundation (TAGOHEFO) is a non-governmental organization dedicated to addressing gender-based violence and improving public health across Tanzania. We believe in a society where equity and health are accessible to every individual.
                    </p>
<!-- HeaderImage Component -->
<div class="@container mb-12">
<div class="@[480px]:px-4 @[480px]:py-3">
<div class="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-gray-200 dark:bg-gray-800 @[480px]:rounded-xl min-h-[360px] shadow-lg border border-white/10" data-alt="Tanzanian community members gathered for health workshop" style='background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 40%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAPEP5ES5AhrbefwVK_vZckmqicoTp3XkjO4K0L-_Qslp8tcWy3gMakwuuxOD2gsbFPD9x7bgJ2U2LNLM5hcpgBlkXRvNked84E3AHhgzd8H6RMS6az1qDXPx5IC8xJEdThqQrET8NOyKVaWMGZAblgWJlIX3mO6vFzng1LC49JZnNmCOm3okH7JxVNpBcJY_ME4o6T9mkD76VovlIcFvn2zeZPv_70Hyn4L2DrL7aBKD4DOigbir_5UQBH8knvbd1qBTLVymryi6g");'>
<div class="flex p-8"><p class="text-white tracking-light text-[32px] font-bold leading-tight">Empowering Communities for a Better Future</p></div>
</div>
</div>
</div>
<!-- Vision & Mission Section -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 mb-16">
<div class="bg-white dark:bg-background-dark p-8 rounded-xl shadow-sm border border-gray-100 dark:border-white/5 flex flex-col items-center text-center">
<div class="bg-primary/10 p-4 rounded-full mb-6">
<span class="material-symbols-outlined text-primary text-4xl">visibility</span>
</div>
<h3 class="text-2xl font-bold mb-4 text-[#111817] dark:text-white">Our Vision</h3>
<p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                                To see a Tanzanian society that is free from gender-based violence and where every person enjoys the highest attainable standard of health.
                            </p>
</div>
<div class="bg-white dark:bg-background-dark p-8 rounded-xl shadow-sm border border-gray-100 dark:border-white/5 flex flex-col items-center text-center">
<div class="bg-primary/10 p-4 rounded-full mb-6">
<span class="material-symbols-outlined text-primary text-4xl">rocket_launch</span>
</div>
<h3 class="text-2xl font-bold mb-4 text-[#111817] dark:text-white">Our Mission</h3>
<p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                                To implement sustainable programs that promote gender equality, advocate for human rights, and improve healthcare delivery through community engagement.
                            </p>
</div>
</div>
<!-- SectionHeader Component -->
<div class="text-center">
<h2 class="text-[#111817] dark:text-white text-[28px] font-bold leading-tight tracking-[-0.015em] px-4 pb-12 pt-5">Our Core Values</h2>
</div>
<!-- Core Values Grid -->
<div class="grid grid-cols-1 sm:grid-cols-3 gap-6 px-4 mb-20">
<div class="flex flex-col items-center text-center p-6 bg-white dark:bg-background-dark rounded-lg border border-gray-100 dark:border-white/5 shadow-sm">
<span class="material-symbols-outlined text-primary text-5xl mb-4">verified_user</span>
<h4 class="font-bold text-lg text-[#111817] dark:text-white mb-2">Integrity</h4>
<p class="text-sm text-gray-500 dark:text-gray-400">Operating with honesty and transparency in all our actions and partnerships.</p>
</div>
<div class="flex flex-col items-center text-center p-6 bg-white dark:bg-background-dark rounded-lg border border-gray-100 dark:border-white/5 shadow-sm">
<span class="material-symbols-outlined text-primary text-5xl mb-4">favorite</span>
<h4 class="font-bold text-lg text-[#111817] dark:text-white mb-2">Compassion</h4>
<p class="text-sm text-gray-500 dark:text-gray-400">Showing empathy and care for the vulnerable communities we serve every day.</p>
</div>
<div class="flex flex-col items-center text-center p-6 bg-white dark:bg-background-dark rounded-lg border border-gray-100 dark:border-white/5 shadow-sm">
<span class="material-symbols-outlined text-primary text-5xl mb-4">balance</span>
<h4 class="font-bold text-lg text-[#111817] dark:text-white mb-2">Equality</h4>
<p class="text-sm text-gray-500 dark:text-gray-400">Ensuring fair treatment and equal opportunities for everyone, regardless of gender.</p>
</div>
</div>
<!-- Registration Info (Bottom) -->
<div class="px-4 py-10 mb-10 border-t border-gray-200 dark:border-white/10 text-center">
<div class="inline-flex items-center gap-2 bg-gray-100 dark:bg-white/5 px-4 py-2 rounded-full">
<span class="material-symbols-outlined text-gray-400 text-sm">info</span>
<p class="text-gray-500 dark:text-gray-400 text-sm font-medium">
                                TAGOHEFO is a registered Non-Governmental Organization in Tanzania under the NGO Act of 2002.
                            </p>
</div>
</div>
</div>
</div>
</main>
<footer class="bg-white dark:bg-background-dark py-8 px-4 md:px-40 border-t border-gray-200 dark:border-white/10">
<div class="max-w-[960px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 dark:text-gray-400 text-xs">
<p>© 2024 Tanzania Gender and Good Health Foundation. All rights reserved.</p>
<div class="flex gap-6">
<a class="hover:text-primary" href="#">Privacy Policy</a>
<a class="hover:text-primary" href="#">Terms of Service</a>
</div>
</div>
</footer>
</div>
</div>
</body></html>