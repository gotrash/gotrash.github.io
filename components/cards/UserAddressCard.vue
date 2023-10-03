<template>
  <b-card class="bg-light" no-body>
    <b-card-body>
      <b-row>
        <b-col class="mb-3 mb-lg-0">
          <ul class="ml-2 mb-0 fa-ul text-muted">
            <li class="small">
              <span class="fa-li">
                <fa-icon icon="building" class="fa-lg text-success" />
              </span>
              <b>{{ $t("USER_ADDRESSES.LABEL.ADDRESS") }}</b><br />
              <span v-html="addressFormatter(address)"></span>
            </li><br />
            <li class="small">
              <span class="fa-li">
                <fa-icon icon="calendar" class="text-success fa-lg" />
              </span>
              <b>{{ $t("GENERAL.LABEL.UPDATED_AT") }}</b><br />
              <span v-html="dateFormatter(address.updatedAt)"></span>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-card-body>
    <b-card-footer class="p-2">
      <div class="ms-auto text-end">
        <b-button :title="$t('USER_ADDRESSES.LABEL.DELETE_ADDRESS')" block @click="onDeleteClicked(address)"
          class="ms-auto d-block d-sm-inline btn btn-sm bg-danger me-0 me-sm-2 mb-2 mb-sm-0">
          <fa-icon icon="trash" class="text-light" />
        </b-button>
        <b-link :title="$t('USER_ADDRESSES.LABEL.VIEW_ADDRESS')"
          :to="localePath({ name: 'user-addresses-slug', params: { slug: address.id } })"
          class="btn btn-sm btn-success text-light">
          <fa-icon icon="map-marker" class="text-light" /> {{ $t('USER_ADDRESSES.LABEL.VIEW_ADDRESS') }}
        </b-link>
      </div>
    </b-card-footer>
  </b-card>
</template>

<script setup>
import { addressFormatter, dateFormatter } from '@/utils/formatters';

const props = defineProps({
  address: {
    type: Object,
    required: true
  }
})

const onDeleteClicked = address => {
  console.log("Deleting: %o", address)
}
</script>
