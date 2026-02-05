<html class="light"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
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
<style>
        body {
            font-family: 'Manrope', sans-serif;
        }
    </style>
</head>
<body class="bg-background-light dark:bg-background-dark text-[#111817] dark:text-white min-h-screen">
<div class="relative flex h-auto w-full flex-col group/design-root overflow-x-hidden">
<div class="layout-container flex h-full grow flex-col">
<header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#dbe6e5] dark:border-zinc-800 px-10 py-3 bg-white dark:bg-[#102220] sticky top-0 z-50">
<div class="flex items-center gap-8">
<div class="flex items-center gap-4 text-[#111817] dark:text-primary">
<div class="size-6">
<svg fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fill="currentColor" fill-rule="evenodd"></path>
<path clip-rule="evenodd" d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z" fill="currentColor" fill-rule="evenodd"></path>
</svg>
</div>
<h2 class="text-[#111817] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">TAGOHEFO</h2>
</div>
<nav class="flex items-center gap-9">
<a class="text-[#111817] dark:text-gray-300 text-sm font-medium hover:text-primary transition-colors" href="#">Home</a>
<a class="text-[#111817] dark:text-gray-300 text-sm font-medium hover:text-primary transition-colors" href="#">About Us</a>
<a class="text-[#111817] dark:text-gray-300 text-sm font-medium hover:text-primary transition-colors" href="#">Programs</a>
<a class="text-[#111817] dark:text-white text-sm font-bold border-b-2 border-primary py-4" href="#">Resources</a>
<a class="text-[#111817] dark:text-gray-300 text-sm font-medium hover:text-primary transition-colors" href="#">Contact</a>
</nav>
</div>
<div class="flex flex-1 justify-end gap-8">
<label class="flex flex-col min-w-40 !h-10 max-w-64">
<div class="flex w-full flex-1 items-stretch rounded-lg h-full bg-[#f0f4f4] dark:bg-zinc-800">
<div class="text-[#618986] flex items-center justify-center pl-4">
<span class="material-symbols-outlined text-xl">search</span>
</div>
<input class="form-input flex w-full min-w-0 flex-1 border-none bg-transparent focus:ring-0 text-[#111817] dark:text-white placeholder:text-[#618986] px-4 text-base font-normal" placeholder="Search resources"/>
</div>
</label>
<button class="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-6 bg-primary text-[#111817] text-sm font-bold transition-transform active:scale-95">
                        Donate
                    </button>
</div>
</header>
<main class="flex-1 flex flex-col items-center">
<div class="w-full max-w-[960px] px-4">
<div class="flex flex-wrap gap-2 py-6">
<a class="text-[#618986] dark:text-gray-400 text-sm font-medium hover:text-primary" href="#">Home</a>
<span class="text-[#618986] dark:text-gray-400 text-sm font-medium">/</span>
<span class="text-[#111817] dark:text-white text-sm font-medium">Resource Center</span>
</div>
<div class="flex flex-wrap justify-between gap-3 pb-8">
<div class="flex min-w-72 flex-col gap-3">
<h1 class="text-[#111817] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Resource &amp; Document Center</h1>
<p class="text-[#618986] dark:text-gray-400 text-lg font-normal max-w-2xl">
                                Access our official documents, reports, and strategic plans supporting GBV prevention and health in Tanzania.
                            </p>
</div>
</div>
<div class="pb-6">
<div class="flex border-b border-[#dbe6e5] dark:border-zinc-800 gap-8">
<a class="flex flex-col items-center justify-center border-b-[3px] border-b-primary text-[#111817] dark:text-white pb-3 pt-4" href="#">
<p class="text-sm font-bold tracking-[0.015em]">All Documents</p>
</a>
<a class="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#618986] dark:text-gray-400 pb-3 pt-4 hover:text-primary transition-colors" href="#">
<p class="text-sm font-bold tracking-[0.015em]">Governance</p>
</a>
<a class="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#618986] dark:text-gray-400 pb-3 pt-4 hover:text-primary transition-colors" href="#">
<p class="text-sm font-bold tracking-[0.015em]">Annual Reports</p>
</a>
<a class="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#618986] dark:text-gray-400 pb-3 pt-4 hover:text-primary transition-colors" href="#">
<p class="text-sm font-bold tracking-[0.015em]">Strategic Plans</p>
</a>
</div>
</div>
<section class="mb-12">
<h2 class="text-[#111817] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-6 pt-4">Governance &amp; legal</h2>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<div class="flex items-center justify-between p-5 rounded-xl border border-[#dbe6e5] dark:border-zinc-800 bg-white dark:bg-background-dark hover:shadow-sm transition-shadow">
<div class="flex items-center gap-4">
<div class="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary">
<span class="material-symbols-outlined text-3xl">description</span>
</div>
<div>
<p class="text-[#111817] dark:text-white font-bold">TAGOHEFO Constitution</p>
<p class="text-[#618986] dark:text-gray-400 text-xs">PDF • 2.4 MB • Updated Jan 2024</p>
</div>
</div>
<button class="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary text-primary font-bold text-sm hover:bg-primary/5 transition-colors">
<span class="material-symbols-outlined text-lg">download</span>
                                    Download
                                </button>
</div>
<div class="flex items-center justify-between p-5 rounded-xl border border-[#dbe6e5] dark:border-zinc-800 bg-white dark:bg-background-dark hover:shadow-sm transition-shadow">
<div class="flex items-center gap-4">
<div class="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary">
<span class="material-symbols-outlined text-3xl">verified_user</span>
</div>
<div>
<p class="text-[#111817] dark:text-white font-bold">Code of Conduct</p>
<p class="text-[#618986] dark:text-gray-400 text-xs">PDF • 1.1 MB • Updated Feb 2024</p>
</div>
</div>
<button class="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary text-primary font-bold text-sm hover:bg-primary/5 transition-colors">
<span class="material-symbols-outlined text-lg">download</span>
                                    Download
                                </button>
</div>
</div>
</section>
<section class="mb-12">
<h2 class="text-[#111817] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-6 pt-4">Annual Reports</h2>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<div class="flex items-center justify-between p-5 rounded-xl border border-[#dbe6e5] dark:border-zinc-800 bg-white dark:bg-background-dark hover:shadow-sm transition-shadow">
<div class="flex items-center gap-4">
<div class="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary">
<span class="material-symbols-outlined text-3xl">analytics</span>
</div>
<div>
<p class="text-[#111817] dark:text-white font-bold">Annual Impact Report 2023</p>
<p class="text-[#618986] dark:text-gray-400 text-xs">PDF • 5.8 MB • Jan 2024</p>
</div>
</div>
<button class="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary text-primary font-bold text-sm hover:bg-primary/5 transition-colors">
<span class="material-symbols-outlined text-lg">download</span>
                                    Download
                                </button>
</div>
<div class="flex items-center justify-between p-5 rounded-xl border border-[#dbe6e5] dark:border-zinc-800 bg-white dark:bg-background-dark hover:shadow-sm transition-shadow">
<div class="flex items-center gap-4">
<div class="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary">
<span class="material-symbols-outlined text-3xl">analytics</span>
</div>
<div>
<p class="text-[#111817] dark:text-white font-bold">Financial Audit 2023</p>
<p class="text-[#618986] dark:text-gray-400 text-xs">PDF • 3.2 MB • Mar 2024</p>
</div>
</div>
<button class="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary text-primary font-bold text-sm hover:bg-primary/5 transition-colors">
<span class="material-symbols-outlined text-lg">download</span>
                                    Download
                                </button>
</div>
</div>
</section>
<section class="mb-12">
<h2 class="text-[#111817] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-6 pt-4">Strategic Plans</h2>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<div class="flex items-center justify-between p-5 rounded-xl border border-[#dbe6e5] dark:border-zinc-800 bg-white dark:bg-background-dark hover:shadow-sm transition-shadow">
<div class="flex items-center gap-4">
<div class="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary">
<span class="material-symbols-outlined text-3xl">trending_up</span>
</div>
<div>
<p class="text-[#111817] dark:text-white font-bold">Five Year Strategic Plan (2024-2029)</p>
<p class="text-[#618986] dark:text-gray-400 text-xs">PDF • 4.5 MB • Updated Dec 2023</p>
</div>
</div>
<button class="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary text-primary font-bold text-sm hover:bg-primary/5 transition-colors">
<span class="material-symbols-outlined text-lg">download</span>
                                    Download
                                </button>
</div>
<div class="flex items-center justify-between p-5 rounded-xl border border-[#dbe6e5] dark:border-zinc-800 bg-white dark:bg-background-dark hover:shadow-sm transition-shadow">
<div class="flex items-center gap-4">
<div class="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary">
<span class="material-symbols-outlined text-3xl">public</span>
</div>
<div>
<p class="text-[#111817] dark:text-white font-bold">GBV Advocacy Framework</p>
<p class="text-[#618986] dark:text-gray-400 text-xs">PDF • 2.1 MB • Sep 2023</p>
</div>
</div>
<button class="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary text-primary font-bold text-sm hover:bg-primary/5 transition-colors">
<span class="material-symbols-outlined text-lg">download</span>
                                    Download
                                </button>
</div>
</div>
</section>
<div class="my-16 p-8 rounded-2xl bg-[#11d4c4]/10 border border-[#11d4c4]/20 flex items-center justify-between">
<div>
<h3 class="text-xl font-bold text-[#111817] dark:text-white">Looking for something else?</h3>
<p class="text-[#618986] dark:text-gray-400 mt-1">If you need a specific document not listed here, please contact our team.</p>
</div>
<button class="px-8 py-3 bg-[#111817] dark:bg-primary text-white dark:text-[#111817] font-bold rounded-xl transition-transform active:scale-95">
                            Contact Us
                        </button>
</div>
</div>
</main>
<footer class="w-full bg-white dark:bg-[#102220] border-t border-[#dbe6e5] dark:border-zinc-800 py-12">
<div class="max-w-[960px] mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
<div class="col-span-1 md:col-span-1">
<div class="flex items-center gap-3 text-primary mb-4">
<span class="material-symbols-outlined">health_and_safety</span>
<span class="text-lg font-bold text-[#111817] dark:text-white tracking-tight">TAGOHEFO</span>
</div>
<p class="text-sm text-[#618986] dark:text-gray-400 leading-relaxed">
                            Tanzania Gender and Good Health Foundation is dedicated to advocating for gender equality and healthy living.
                        </p>
</div>
<div>
<h4 class="font-bold mb-4 text-[#111817] dark:text-white">Quick Links</h4>
<ul class="space-y-2 text-sm text-[#618986] dark:text-gray-400">
<li><a class="hover:text-primary" href="#">Home</a></li>
<li><a class="hover:text-primary" href="#">Our Impact</a></li>
<li><a class="hover:text-primary" href="#">Our Programs</a></li>
<li><a class="hover:text-primary" href="#">Volunteer</a></li>
</ul>
</div>
<div>
<h4 class="font-bold mb-4 text-[#111817] dark:text-white">Resources</h4>
<ul class="space-y-2 text-sm text-[#618986] dark:text-gray-400">
<li><a class="hover:text-primary text-primary font-bold" href="#">Document Center</a></li>
<li><a class="hover:text-primary" href="#">Publications</a></li>
<li><a class="hover:text-primary" href="#">FAQ</a></li>
<li><a class="hover:text-primary" href="#">Privacy Policy</a></li>
</ul>
</div>
<div>
<h4 class="font-bold mb-4 text-[#111817] dark:text-white">Contact</h4>
<ul class="space-y-2 text-sm text-[#618986] dark:text-gray-400">
<li class="flex items-center gap-2"><span class="material-symbols-outlined text-xs">mail</span> info@tagohefo.or.tz</li>
<li class="flex items-center gap-2"><span class="material-symbols-outlined text-xs">call</span> +255 123 456 789</li>
<li class="flex items-center gap-2"><span class="material-symbols-outlined text-xs">location_on</span> Dar es Salaam, Tanzania</li>
</ul>
</div>
</div>
<div class="max-w-[960px] mx-auto px-4 mt-12 pt-8 border-t border-[#dbe6e5] dark:border-zinc-800 text-center text-xs text-[#618986] dark:text-gray-500">
                    © 2024 Tanzania Gender and Good Health Foundation. All rights reserved.
                </div>
</footer>
</div>
</div>
</body></html>