<template>
  <section>
    <b-container fluid>
      <b-row class="py-5 bg-dark">
        <b-col>
          <b-container>
            <h5 class="font-weight-bolder mb-3">Useful Links</h5>
            <b-row class="mb-2">
              <b-col cols="12" md="4">
                <b-nav vertical>
                  <b-nav-item link-classes="px-1" :to="localePath({ name: 'slug', params: {slug: ['info','cookie-policy'] } })">Cookie Policy</b-nav-item>
                  <b-nav-item link-classes="px-1" :to="localePath({ name: 'slug', params: {slug: ['info','modern-slavery-statement'] } })"
                    >Modern Slavery Statement</b-nav-item
                  >
                  <b-nav-item link-classes="px-1" :to="localePath({ name: 'slug', params: {slug: ['info','privacy-policy'] } })">Privacy Policy</b-nav-item>
                  <b-nav-item link-classes="px-1" :to="localePath({ name: 'slug', params: {slug: ['info','sustainability-policy'] } })"
                    >Sustainability Policy</b-nav-item
                  >
                  <b-nav-item link-classes="px-1" :to="localePath({ name: 'slug', params: {slug: ['info','terms-and-conditions'] } })">Terms & Conditions</b-nav-item>
                </b-nav>
              </b-col>
              <b-col cols="12" md="4">
                <b-nav vertical>
                  <b-nav-item link-classes="px-1" :to="localePath({ name: 'about' })">About Us</b-nav-item>
                  <b-nav-item link-classes="px-1" :to="localePath({ name: 'slug', params: {slug: ['info','bug-bounty'] } })">Bug Bounty</b-nav-item>
                  <b-nav-item link-classes="px-1" :to="localePath({ name: 'contact-us' })">Contact Us</b-nav-item>
                </b-nav>
              </b-col>
              <b-col cols="12" md="4">
                <b-nav vertical>
                  <b-nav-item v-if="false" link-classes="px-1" :to="localePath({ name: 'customer-signup' })">Customer Signup</b-nav-item>
                  <b-nav-item v-if="false" link-classes="px-1" :to="localePath({ name: 'provider-signup' })">Provider Signup</b-nav-item>
                  <b-nav-item link-classes="px-1" :to="localePath({ name: 'slug', params: {slug: ['info','careers'] } })">Careers</b-nav-item>
                  <b-nav-item v-if="false" link-classes="px-1" :to="localePath({ name: 'business-signup' })">Business Signup</b-nav-item>
                  <b-nav-item link-classes="px-1" :to="localePath({ name: 'slug', params: {slug: ['info','ethical-concerns'] } })">Ethical Concerns</b-nav-item>
                </b-nav>
              </b-col>
            </b-row>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
