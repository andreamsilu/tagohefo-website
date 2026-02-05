<html class="light"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&amp;display=swap" rel="stylesheet"/>
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
            "display": ["Manrope"]
          },
          borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
        },
      },
    }
  </script>
</head>
<body class="bg-background-light dark:bg-background-dark font-display text-[#111817] dark:text-white min-h-screen">
<div class="relative flex h-auto w-full flex-col group/design-root overflow-x-hidden">
<div class="layout-container flex h-full grow flex-col">
<!-- Top Navigation Bar -->
<header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f4f4] dark:border-b-white/10 px-10 py-3 bg-background-light dark:bg-background-dark sticky top-0 z-50">
<div class="flex items-center gap-4 text-[#111817] dark:text-white">
<div class="size-4 text-primary">
<svg fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fill="currentColor" fill-rule="evenodd"></path>
<path clip-rule="evenodd" d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z" fill="currentColor" fill-rule="evenodd"></path>
</svg>
</div>
<h2 class="text-lg font-bold leading-tight tracking-[-0.015em]">TAGOHEFO</h2>
</div>
<div class="flex flex-1 justify-end gap-8">
<div class="flex items-center gap-9">
<a class="text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Home</a>
<a class="text-sm font-semibold leading-normal text-primary" href="#">Programs</a>
<a class="text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">About Us</a>
<a class="text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Contact</a>
<a class="text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">News</a>
</div>
<button class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-[#111817] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90">
<span class="truncate">Donate</span>
</button>
</div>
</header>
<main class="flex-1">
<div class="max-w-[960px] mx-auto px-4 py-10">
<!-- Page Heading -->
<div class="flex flex-wrap justify-between gap-3 mb-8">
<div class="flex min-w-72 flex-col gap-3">
<p class="text-[#111817] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Our Programs &amp; Initiatives</p>
<p class="text-[#618986] dark:text-gray-400 text-lg font-normal leading-normal max-w-2xl">
                We work at the heart of communities in Tanzania, providing essential health awareness and advocating for the protection of fundamental human rights.
              </p>
</div>
</div>
<!-- Text Grid (Program Cards) -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
<!-- GBV Prevention -->
<div class="flex flex-1 gap-5 rounded-xl border border-[#dbe6e5] dark:border-white/10 bg-white dark:bg-white/5 p-6 flex-col hover:border-primary transition-all shadow-sm">
<div class="text-primary">
<span class="material-symbols-outlined !text-4xl">shield_with_heart</span>
</div>
<div class="flex flex-col gap-2">
<h2 class="text-[#111817] dark:text-white text-xl font-bold leading-tight">Gender Based Violence Prevention</h2>
<p class="text-[#618986] dark:text-gray-400 text-sm font-normal leading-relaxed">
                  Breaking the silence through community education, safe houses, and legal support for survivors of physical, emotional, and economic abuse.
                </p>
</div>
</div>
<!-- Women & Children Protection -->
<div class="flex flex-1 gap-5 rounded-xl border border-[#dbe6e5] dark:border-white/10 bg-white dark:bg-white/5 p-6 flex-col hover:border-primary transition-all shadow-sm">
<div class="text-primary">
<span class="material-symbols-outlined !text-4xl">family_restroom</span>
</div>
<div class="flex flex-col gap-2">
<h2 class="text-[#111817] dark:text-white text-xl font-bold leading-tight">Women &amp; Children Protection</h2>
<p class="text-[#618986] dark:text-gray-400 text-sm font-normal leading-relaxed">
                  Ensuring a safe environment through legal advocacy, educational sponsorship, and empowerment programs for vulnerable women and youth.
                </p>
</div>
</div>
<!-- Health Awareness -->
<div class="flex flex-1 gap-5 rounded-xl border border-[#dbe6e5] dark:border-white/10 bg-white dark:bg-white/5 p-6 flex-col hover:border-primary transition-all shadow-sm">
<div class="text-primary">
<span class="material-symbols-outlined !text-4xl">vital_signs</span>
</div>
<div class="flex flex-col gap-2">
<h2 class="text-[#111817] dark:text-white text-xl font-bold leading-tight">Health Awareness</h2>
<p class="text-[#618986] dark:text-gray-400 text-sm font-normal leading-relaxed">
                  Promoting wellness through HIV/AIDS counseling, TB screening awareness, and nutritional guidance for families in rural regions.
                </p>
</div>
</div>
<!-- Good Governance -->
<div class="flex flex-1 gap-5 rounded-xl border border-[#dbe6e5] dark:border-white/10 bg-white dark:bg-white/5 p-6 flex-col hover:border-primary transition-all shadow-sm">
<div class="text-primary">
<span class="material-symbols-outlined !text-4xl">gavel</span>
</div>
<div class="flex flex-col gap-2">
<h2 class="text-[#111817] dark:text-white text-xl font-bold leading-tight">Good Governance</h2>
<p class="text-[#618986] dark:text-gray-400 text-sm font-normal leading-relaxed">
                  Encouraging transparency and accountability in local leadership to ensure resources are used effectively for the benefit of the community.
                </p>
</div>
</div>
<!-- Environmental Health -->
<div class="flex flex-1 gap-5 rounded-xl border border-[#dbe6e5] dark:border-white/10 bg-white dark:bg-white/5 p-6 flex-col hover:border-primary transition-all shadow-sm">
<div class="text-primary">
<span class="material-symbols-outlined !text-4xl">eco</span>
</div>
<div class="flex flex-col gap-2">
<h2 class="text-[#111817] dark:text-white text-xl font-bold leading-tight">Environmental Health</h2>
<p class="text-[#618986] dark:text-gray-400 text-sm font-normal leading-relaxed">
                  Advocating for clean water access and sustainable practices to prevent water-borne diseases and promote a healthy living environment.
                </p>
</div>
</div>
<!-- Economic Empowerment -->
<div class="flex flex-1 gap-5 rounded-xl border border-[#dbe6e5] dark:border-white/10 bg-white dark:bg-white/5 p-6 flex-col hover:border-primary transition-all shadow-sm">
<div class="text-primary">
<span class="material-symbols-outlined !text-4xl">payments</span>
</div>
<div class="flex flex-col gap-2">
<h2 class="text-[#111817] dark:text-white text-xl font-bold leading-tight">Economic Empowerment</h2>
<p class="text-[#618986] dark:text-gray-400 text-sm font-normal leading-relaxed">
                  Providing vocational training and micro-finance guidance to help women achieve financial independence and stability.
                </p>
</div>
</div>
</div>
<!-- CTA Section -->
<div class="bg-primary/10 dark:bg-primary/5 rounded-3xl overflow-hidden mb-16">
<div class="flex flex-col justify-end gap-6 px-4 py-16 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
<div class="flex flex-col gap-4 text-center items-center">
<h1 class="text-[#111817] dark:text-white tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                  Support Our Mission
                </h1>
<p class="text-[#618986] dark:text-gray-300 text-base font-normal leading-normal max-w-[600px]">
                  Your contribution helps us reach more communities in Tanzania, providing medical care, legal aid, and safety to those who need it most.
                </p>
</div>
<div class="flex flex-1 justify-center mt-4">
<div class="flex flex-1 gap-3 flex-wrap max-w-[480px] justify-center">
<button class="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-[#111817] text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-all">
<span class="truncate">Get Involved</span>
</button>
<button class="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-white dark:bg-background-dark border border-[#dbe6e5] dark:border-white/10 text-[#111817] dark:text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-gray-50 dark:hover:bg-white/5 transition-all">
<span class="truncate">Donate Now</span>
</button>
</div>
</div>
</div>
</div>
</div>
</main>
<!-- Footer -->
<footer class="flex flex-col gap-8 px-10 py-12 text-center border-t border-[#f0f4f4] dark:border-white/10">
<div class="flex flex-wrap items-center justify-center gap-10">
<a class="text-[#618986] dark:text-gray-400 text-base font-medium leading-normal hover:text-primary" href="#">Privacy Policy</a>
<a class="text-[#618986] dark:text-gray-400 text-base font-medium leading-normal hover:text-primary" href="#">Terms of Service</a>
<a class="text-[#618986] dark:text-gray-400 text-base font-medium leading-normal hover:text-primary" href="#">Volunteer</a>
</div>
<div class="flex flex-wrap justify-center gap-6">
<a class="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-[#618986] dark:text-gray-400 hover:text-primary hover:bg-primary/20 transition-all" href="#">
<span class="material-symbols-outlined">social_leaderboard</span>
</a>
<a class="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-[#618986] dark:text-gray-400 hover:text-primary hover:bg-primary/20 transition-all" href="#">
<span class="material-symbols-outlined">public</span>
</a>
<a class="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-[#618986] dark:text-gray-400 hover:text-primary hover:bg-primary/20 transition-all" href="#">
<span class="material-symbols-outlined">photo_camera</span>
</a>
<a class="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-[#618986] dark:text-gray-400 hover:text-primary hover:bg-primary/20 transition-all" href="#">
<span class="material-symbols-outlined">group</span>
</a>
</div>
<p class="text-[#618986] dark:text-gray-400 text-sm font-normal leading-normal">
          © 2024 Tanzania Gender and Good Health Foundation (TAGOHEFO). All rights reserved.
        </p>
</footer>
</div>
</div>

```</body></html>