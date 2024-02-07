<template>
  <section class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-lg-6">
          <h1>{{ $t(pageTitleTranslation) }}</h1>
        </div>
        <div class="col-lg-6">
          <BBreadcrumb class="float-lg-end" :items="breadcrumbItems" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  const { t } = useI18n();

  const props = defineProps(["breadcrumbItems", "pageTitleTranslation"]);

  useHead({
    title: t("NAV__USER_PROFILE")
  });
</script>
