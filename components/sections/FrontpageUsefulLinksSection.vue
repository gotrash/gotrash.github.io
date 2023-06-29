<template>
  <section>
    <b-container fluid>
      <b-row class="py-5 bg-gray-300">
        <b-col>
          <b-container>
            <h5 class="font-weight-bolder mb-3">Useful Links</h5>
            <b-row class="mb-2">
              <b-col cols="12" md="4">
                <b-nav vertical>
                  <b-nav-item link-classes="px-1" :to="{ name: 'cookie-policy' }">Cookie Policy</b-nav-item>
                  <b-nav-item link-classes="px-1" :to="{ name: 'modern-slavery-statement' }"
                    >Modern Slavery Statement</b-nav-item
                  >
                  <b-nav-item link-classes="px-1" :to="{ name: 'privacy-policy' }">Privacy Policy</b-nav-item>
                  <b-nav-item link-classes="px-1" :to="{ name: 'sustainability-policy' }"
                    >Sustainability Policy</b-nav-item
                  >
                  <b-nav-item link-classes="px-1" :to="{ name: 'terms-and-conditions' }">Terms & Conditions</b-nav-item>
                </b-nav>
              </b-col>
              <b-col cols="12" md="4">
                <b-nav vertical>
                  <b-nav-item link-classes="px-1" :to="{ name: 'about-us' }">About Us</b-nav-item>
                  <b-nav-item link-classes="px-1" :to="{ name: 'bug-bounty' }">Bug Bounty</b-nav-item>
                  <b-nav-item link-classes="px-1" :to="{ name: 'contact-us' }">Contact Us</b-nav-item>
                </b-nav>
              </b-col>
              <b-col cols="12" md="4">
                <b-nav vertical>
                  <b-nav-item link-classes="px-1" :to="{ name: 'customer-signup' }">Customer Signup</b-nav-item>
                  <b-nav-item link-classes="px-1" :to="{ name: 'provider-signup' }">Provider Signup</b-nav-item>
                  <b-nav-item link-classes="px-1" :to="{ name: 'careers' }">Careers</b-nav-item>
                  <b-nav-item link-classes="px-1" :to="{ name: 'business-signup' }">Business Signup</b-nav-item>
                  <b-nav-item link-classes="px-1" :to="{ name: 'ethical-concerns' }">Ethical Concerns</b-nav-item>
                </b-nav>
              </b-col>
            </b-row>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
