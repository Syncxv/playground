<template>
  <div class="bg-blue-500 flex flex-col h-screen">
    <nav
      class="flex-none flex items-center justify-between bg-gray-800 h-14 px-6 text-sm text-white"
    >
      <div class="flex items-center gap-6">
        <Menu />
        <YoutubeLogo />
      </div>
      <div class="flex">
        <input
          class="bg-gray-900 outline-none p-2 w-80"
          placeholder="Search"
          type="text"
        />
        <button class="border-none bg-gray-600 px-3">
          <Search />
        </button>
      </div>
      <div>three</div>
    </nav>
    <main class="flex 1">main sheet</main>
  </div>
</template>
