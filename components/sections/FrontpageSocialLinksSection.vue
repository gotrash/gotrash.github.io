<template>
  <section>
    <b-container fluid>
      <b-row class="bg-light">
        <b-col>
          <b-container>
            <b-row>
              <b-col cols="12" md="4" class="py-5" order="2" order-md="1">
                <h4 class="ml-0 ml-md-2 mb-3" style="max-width: 420px">Registered Address</h4>
                <address class="ml-0 ml-md-2" style="max-width: 420px">
                  37 Slatey Road,<br />Oxton,<br />Wirral,<br />Merseyside.<br />CH43 4UE.
                </address>
              </b-col>
              <b-col cols="12" md="5" class="py-5" order="3" order-md="2">
                <h4 class="mb-3" style="max-width: 420px">Company Details</h4>
                <div v-if="false" style="max-width: 420px">
                  <p>Find us in the usual places using the links below...</p>
                </div>
                <div>
                  <div>
                    <div>
                      <div>
                        <b class="h6">Company No:</b> <span class="font-weight-bolder">12345678</span>
                      </div>
                    </div>
                    <div>
                      <div>
                        <b class="h6">VAT No:</b> <span class="font-weight-bolder">123 4567 89</span>
                      </div>
                    </div>
                    <div>
                      <div>
                        <b class="h6">Waste Licence ID:</b> <span class="font-weight-bolder">ABCD12345</span>
                      </div>
                    </div>
                  </div>
                </div>
              </b-col>
              <b-col cols="12" md="3" class="py-5" order="1" order-md="3">
                <h4 class="ml-0 ml-md-2 mb-3" style="max-width: 420px">Social Links</h4>
                <div class="ml-0 ml-md-2" style="max-width: 420px">
                  <p>Find us in the usual places using the links below...</p>
                </div>
                <div>
                  <b-nav>
                    <b-nav-item
                      title="Blog"
                      :to="localePath({ name: 'blog' })"
                      :link-attrs="{ style: 'width: 2rem; height: 2rem; line-height: 2rem' }"
                      link-classes="text-center m-2 rounded rounded-circle border border-light p-0"
                    >
                      <fa-icon icon="rss" />
                    </b-nav-item>
                    <b-nav-item
                      title="Github"
                      href="https://github.com/gotrash"
                      target="_blank"
                      :link-attrs="{ style: 'width: 2rem; height: 2rem; line-height: 2rem' }"
                      link-classes="text-center m-2 rounded rounded-circle border border-light p-0"
                    >
                      <fa-icon :icon="['fab', 'github']" />
                    </b-nav-item>
                    <b-nav-item
                      title="Twitter"
                      href="https://twitter.com/GoTrashUk"
                      target="_blank"
                      :link-attrs="{ style: 'width: 2rem; height: 2rem; line-height: 2rem' }"
                      link-classes="text-center m-2 rounded rounded-circle border border-light p-0"
                    >
                      <fa-icon :icon="['fab', 'twitter']" />
                    </b-nav-item>
                    <b-nav-item
                      title="Youtube"
                      href="https://youtube.com/@go-trash"
                      target="_blank"
                      :link-attrs="{ style: 'width: 2rem; height: 2rem; line-height: 2rem' }"
                      link-classes="text-center m-2 rounded rounded-circle border border-light p-0"
                    >
                      <fa-icon :icon="['fab', 'youtube']" />
                    </b-nav-item>
                  </b-nav>
                </div>
              </b-col>
            </b-row>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
