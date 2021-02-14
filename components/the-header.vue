<template>
  <header class="bg-orange flex justify-between">
    <img class="logo" src="~/assets/funda-logo.svg" />
    <nav>
      <ul class="flex">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/login">Login</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="postcss" scoped>
.logo {
  width: 90px;
}
</style>