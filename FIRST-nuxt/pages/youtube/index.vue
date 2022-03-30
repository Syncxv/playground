<template>
  <div class="bg-blue-500 flex flex-col h-screen">
    <nav
      class="flex-none flex items-center justify-between bg-yt-700 h-14 px-6 text-sm text-gray-200"
    >
      <div class="flex items-center gap-6">
        <IconsMenu />
        <YoutubeLogo />
      </div>
      <div class="relative flex">
        <input
          class="search-input bg-gray-900 outline-none p-2 w-80"
          placeholder="Search"
          type="text"
        />
        <button class="border-none bg-gray-600 px-3">
          <IconsSearch />
        </button>
      </div>
      <div class="flex items-center gap-6">
        <div class="icons flex items-center gap-5">
          <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            class="w-6 h-6 fill-current"
          >
            <g class="style-scope yt-icon">
              <path
                d="M14,13h-3v3H9v-3H6v-2h3V8h2v3h3V13z M17,6H3v12h14v-6.39l4,1.83V8.56l-4,1.83V6 M18,5v3.83L22,7v8l-4-1.83V19H2V5H18L18,5 z"
                class="style-scope yt-icon"
              ></path>
            </g>
          </svg>
          <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            class="w-6 h-6 fill-current"
          >
            <g class="style-scope yt-icon">
              <path
                d="M16,4v4h4V4H16z M19,7h-2V5h2V7z M16,10v4h4v-4H16z M19,13h-2v-2h2V13z M10,4v4h4V4H10z M13,7h-2V5h2V7z M10,10v4h4v-4H10z M13,13h-2v-2h2V13z M16,16v4h4v-4H16z M19,19h-2v-2h2V19z M10,16v4h4v-4H10z M13,19h-2v-2h2V19z M4,4v4h4V4H4z M7,7H5V5h2V7z M4,10 v4h4v-4H4z M7,13H5v-2h2V13z M4,16v4h4v-4H4z M7,19H5v-2h2V19z"
                class="style-scope yt-icon"
              ></path>
            </g>
          </svg>
          <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            class="w-6 h-6 fill-current"
          >
            <g class="style-scope yt-icon">
              <path
                d="M10,20h4c0,1.1-0.9,2-2,2S10,21.1,10,20z M20,17.35V19H4v-1.65l2-1.88v-5.15c0-2.92,1.56-5.22,4-5.98V3.96 c0-1.42,1.49-2.5,2.99-1.76C13.64,2.52,14,3.23,14,3.96l0,0.39c2.44,0.75,4,3.06,4,5.98v5.15L20,17.35z M19,17.77l-2-1.88v-5.47 c0-2.47-1.19-4.36-3.13-5.1c-1.26-0.53-2.64-0.5-3.84,0.03C8.15,6.11,7,7.99,7,10.42v5.47l-2,1.88V18h14V17.77z"
                class="style-scope yt-icon"
              ></path>
            </g>
          </svg>
        </div>
        <img class="rounded-full cursor-pointer w-8 h-8" src="pfp.jpg" alt="" />
      </div>
    </nav>
    <div class="flex flex-1 overflow-y-hidden">
      <aside
        class="flex-none overflow-y-auto w-60 bg-yt-700 text-sm text-gray-200"
      >
        <ul>
          <li class="flex items-center gap-6 py-3 px-5 bg-yt-500 bg-opacity-50">
            <IconsHome />
            <a href="#">Home</a>
          </li>
          <li
            class="flex items-center gap-6 py-3 px-5 bg-opacity-50 hover:bg-yt-500"
          >
            <IconsCompas />
            <a href="#">Explore</a>
          </li>
          <li
            class="flex items-center gap-6 py-3 px-5 bg-opacity-50 hover:bg-yt-500"
          >
            <IconsShorts />
            <a href="#">Shorts</a>
          </li>
          <li
            class="flex items-center gap-6 py-3 px-5 bg-opacity-50 hover:bg-yt-500"
          >
            <IconsSubscriptions />
            <a href="#">Subscriptions</a>
          </li>
        </ul>
        <div class="divider my-3 w-full h-0.1 opacity-50 bg-gray-400"></div>
      </aside>
      <main class="flex-1 bg-yt-800">main sheet</main>
    </div>
  </div>
</template>
