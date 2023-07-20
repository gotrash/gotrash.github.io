<template>
  <main>
    <ContentDoc :path="$route.params.slug.join('/')" />
  </main>
</template>
