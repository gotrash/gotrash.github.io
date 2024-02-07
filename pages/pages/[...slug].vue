<template>
  <ContentDoc :style="{ 'min-height': '72vh' }" tag="main">
    <template #not-found>
      <div
        class="position-relative"
        :style="{
          'background-image': `url(${headerBg})`,
          'background-size': 'cover',
          'background-position': 'center center',
          'background-attachment': 'fixed'
        }"
      >
        <div class="overlay" style="top: 0; bottom: 0; left: 0; right: 0"></div>
        <b-container :style="{ 'padding-top': '6.4rem' }" fluid>
          <b-row :style="{ 'min-height': '50.0vh' }">
            <b-col
              align-self="center"
              class="text-center"
              cols="12"
              sm="10"
              offset-sm="1"
              md="8"
              offset-md="2"
              lg="6"
              offset-lg="3"
              xl="4"
              offset-xl="4"
            >
              <b-card class="rounded-lg p-3 mb-0" footer-bg-variant="light" header-bg-variant="light">
                <div class="text-center">
                  <h1 class="mb-3">Whoops!</h1>
                  <p class="h3 mx-auto mb-3" :style="{ 'max-width': '380px' }">
                    The page you were looking for couldn't be found
                  </p>
                </div>
              </b-card>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </template>
  </ContentDoc>
</template>

<script setup>
  definePageMeta({
    layout: "default"
  });
</script>
