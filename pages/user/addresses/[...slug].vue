<template>
  <b-container class="p-3">
    <page-title-row :title="$t('PAGE_TITLE__USER_ADDRESSES__EDIT_ADDRESS')"
      :summary="$t('PAGE_SUMMARY__USER_ADDRESSES__EDIT_ADDRESS')" />


    <b-card>

      <!-- If we have an error or we're loading data, show an alert to the user -->
      <page-status-row v-if="pending" :busy="pending" busyMessage="USER_ADDRESSES.MESSAGE.LOADING_ADDRESS" />

      <!-- Otherwise, show the user address form -->
      <user-address-form v-else-if="address" v-model="address" @submit="onSubmit" />
    </b-card>

  </b-container>
</template>

<script setup>
import UserAddressForm from '@/components/forms/UserAddressForm.vue';
import UserAddressDto from '@/dto/UserAddressDto';
import { useCountriesStore } from '@/store/countries';
definePageMeta({
  layout: "user"
})
const { getSession } = useAuth();

const config = useRuntimeConfig();
const session = await getSession();

const route = useRoute();

const original = ref(new UserAddressDto());

const { data: address, pending, error } = await useFetch(
  `/user/addresses/${route.params.slug}`, {
  baseURL: config.public.apiUrl,
  headers: {
    Authorization: `Bearer ${session?.session?.access_token}`
  },
  lazy: true,
  server: false,
  default: () => {
    return {

    }
  },
  transform: data => {
    console.log(data);

    const dto = new UserAddressDto(data)

    console.log(dto);

    return dto
  }
}).then(({ data, pending, error }) => {

  original.value = data.clone();

  return { data, pending, error }
})

const onCancel = evt => {
  console.log("Cancel: %o", evt);
}
const onReset = evt => {
  console.log("Reset: %o", evt);
}
const onSubmit = evt => {
  console.log("Submitting: %o", evt);
}
</script>
