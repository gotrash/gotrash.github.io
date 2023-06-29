<template>
  <section>
    <b-container fluid>
      <b-row class="bg-success">
        <b-col class="text-center text-white py-5">
          <h2 class="mx-auto mb-3" style="max-width: 420px">Make life easy for yourself</h2>
          <div class="mx-auto" style="max-width: 420px; font-size: 1.2rem">
            <p>{{ $t("GENERAL.MESSAGE.DOWNLOAD_FOR_BENEFITS") }}</p>
          </div>
          <div>
            <img
              class="mx-sm-1 d-block d-sm-inline-block mx-auto mb-2 mb-sm-0"
              style="max-width: 160px"
              :src="require('~/assets/images/google-play-badge.png')"
            />
            <img
              class="mx-sm-1 d-block d-sm-inline-block mx-auto mb-2 mb-sm-0"
              style="max-width: 160px"
              :src="require('~/assets/images/google-play-badge.png')"
            />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
