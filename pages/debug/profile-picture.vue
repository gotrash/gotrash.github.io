<template>
  <b-container fluid>
    <b-row>
      <b-col cols="12" class="p-0">
        <div class="d-flex align-items-center" style="height: calc(75vh - 120px)">
          <div class="h-100 w-50 bg-fuchsia text-light d-flex align-items-center justify-content-around">
            <simple-user-profile-picture size="4rem" />
          </div>
          <div class="h-100 w-50 bg-cyan text-light d-flex align-items-center justify-content-around">
            <simple-user-profile-picture animation-mode="pulse" icon-size="2x" size="4rem" />
          </div>
          <div class="h-100 w-50 bg-purple text-light d-flex align-items-center justify-content-around">
            <simple-user-profile-picture size="4rem" />
          </div>
          <div class="h-100 w-50 bg-warning d-flex align-items-center justify-content-around">
            <simple-user-profile-picture animation-mode="pulse" icon-size="2x" size="4rem" />
          </div>
          <div class="h-100 w-50 bg-danger text-light d-flex align-items-center justify-content-around">
            <simple-user-profile-picture size="4rem" />
          </div>
          <div class="h-100 w-50 bg-success d-flex align-items-center justify-content-around">
            <simple-user-profile-picture animation-mode="pulse" icon-size="2x" size="4rem" />
          </div>
          <div class="h-100 w-50 bg-dark text-light d-flex align-items-center justify-content-around">
            <simple-user-profile-picture size="4rem" />
          </div>
          <div class="h-100 w-50 bg-light d-flex align-items-center justify-content-around">
            <simple-user-profile-picture animation-mode="pulse" icon-size="2x" size="4rem" />
          </div>
          <div class="h-100 w-50 bg-maroon text-light d-flex align-items-center justify-content-around">
            <simple-user-profile-picture size="4rem" />
          </div>
        </div>
      </b-col>
      <b-col
        cols="12"
        md="6"
        lg="4"
        class="bg-fuchsia d-flex align-items-center justify-content-around"
        style="height: calc(70vh - 120px)"
      >
        <simple-user-profile-picture icon-size="2x" size="4rem" />
      </b-col>
      <b-col
        cols="12"
        md="6"
        lg="4"
        class="bg-cyan d-flex align-items-center justify-content-around"
        style="height: calc(70vh - 120px)"
      >
        <simple-user-profile-picture animation-mode="pulse" icon-size="2x" size="4rem" />
      </b-col>
      <b-col
        cols="12"
        md="6"
        lg="4"
        class="bg-purple d-flex align-items-center justify-content-around"
        style="height: calc(70vh - 120px)"
      >
        <simple-user-profile-picture icon-size="2x" size="4rem" />
      </b-col>
      <b-col
        cols="12"
        md="6"
        lg="4"
        class="bg-warning d-flex align-items-center justify-content-around"
        style="height: calc(70vh - 120px)"
      >
        <simple-user-profile-picture animation-mode="pulse" icon-size="2x" size="4rem" />
      </b-col>
      <b-col
        cols="12"
        md="6"
        lg="4"
        class="bg-danger d-flex align-items-center justify-content-around"
        style="height: calc(70vh - 120px)"
      >
        <simple-user-profile-picture icon-size="2x" size="4rem" />
      </b-col>
      <b-col
        cols="12"
        md="6"
        lg="4"
        class="bg-success d-flex align-items-center justify-content-around"
        style="height: calc(70vh - 120px)"
      >
        <simple-user-profile-picture animation-mode="pulse" icon-size="2x" size="4rem" />
      </b-col>
      <b-col
        cols="12"
        md="6"
        lg="4"
        class="bg-dark d-flex align-items-center justify-content-around"
        style="height: calc(70vh - 120px)"
      >
        <simple-user-profile-picture icon-size="2x" size="4rem" />
      </b-col>
      <b-col
        cols="12"
        md="6"
        lg="4"
        class="bg-light d-flex align-items-center justify-content-around"
        style="height: calc(70vh - 120px)"
      >
        <simple-user-profile-picture animation-mode="pulse" icon-size="2x" size="4rem" />
      </b-col>
      <b-col
        cols="12"
        md="6"
        lg="4"
        class="bg-maroon d-flex align-items-center justify-content-around"
        style="height: calc(70vh - 120px)"
      >
        <simple-user-profile-picture icon-size="2x" size="4rem" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup>
  definePageMeta({ layout: "default" });
  import SimpleUserProfilePicture from "~/components/views/SimpleUserProfilePicture";
</script>
