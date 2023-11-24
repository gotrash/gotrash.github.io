<template>
  <section>
    <div></div>
    <b-container fluid>
      <b-row class="bg-gray-100">
        <b-col>
          <b-container>
            <b-row>
              <b-col cols="12">
                <carousel
                  class="py-6"
                  per-page="3"
                  :pagination-enabled="false"
                  navigation-enabled
                  :scroll-per-page="false"
                >
                  <slide class="text-center">
                    <h4 class="mx-auto mb-3 font-weight-bold" style="max-width: 420px">Blog Article Title</h4>
                    <div class="mx-auto" style="max-width: 420px">
                      <p>
                        This would be some awesome blog article text, detailing some sort of regulation, standard or
                        information that the general public might like to know.
                      </p>
                      <p>
                        This would be some awesome blog article text, detailing some sort of regulation, standard or
                        information that the general public might like to know.
                      </p>
                    </div>
                  </slide>
                  <slide class="text-center">
                    <h4 class="mx-auto mb-3 font-weight-bold" style="max-width: 420px">Blog Article Title</h4>
                    <div class="mx-auto" style="max-width: 420px">
                      <p>
                        This would be some awesome blog article text, detailing some sort of regulation, standard or
                        information that the general public might like to know.
                      </p>
                      <p>
                        This would be some awesome blog article text, detailing some sort of regulation, standard or
                        information that the general public might like to know.
                      </p>
                    </div>
                  </slide>
                  <slide class="text-center">
                    <h4 class="mx-auto mb-3 font-weight-bold" style="max-width: 420px">Blog Article Title</h4>
                    <div class="mx-auto" style="max-width: 420px">
                      <p>
                        This would be some awesome blog article text, detailing some sort of regulation, standard or
                        information that the general public might like to know.
                      </p>
                      <p>
                        This would be some awesome blog article text, detailing some sort of regulation, standard or
                        information that the general public might like to know.
                      </p>
                    </div>
                  </slide>
                  <slide class="text-center">
                    <h4 class="mx-auto mb-3 font-weight-bold" style="max-width: 420px">Blog Article Title</h4>
                    <div class="mx-auto" style="max-width: 420px">
                      <p>
                        This would be some awesome blog article text, detailing some sort of regulation, standard or
                        information that the general public might like to know.
                      </p>
                      <p>
                        This would be some awesome blog article text, detailing some sort of regulation, standard or
                        information that the general public might like to know.
                      </p>
                    </div>
                  </slide>
                  <slide class="text-center">
                    <h4 class="mx-auto mb-3 font-weight-bold" style="max-width: 420px">Blog Article Title</h4>
                    <div class="mx-auto" style="max-width: 420px">
                      <p>
                        This would be some awesome blog article text, detailing some sort of regulation, standard or
                        information that the general public might like to know.
                      </p>
                      <p>
                        This would be some awesome blog article text, detailing some sort of regulation, standard or
                        information that the general public might like to know.
                      </p>
                    </div>
                  </slide>
                  <slide class="text-center">
                    <h4 class="mx-auto mb-3 font-weight-bold" style="max-width: 420px">Blog Article Title</h4>
                    <div class="mx-auto" style="max-width: 420px">
                      <p>
                        This would be some awesome blog article text, detailing some sort of regulation, standard or
                        information that the general public might like to know.
                      </p>
                      <p>
                        This would be some awesome blog article text, detailing some sort of regulation, standard or
                        information that the general public might like to know.
                      </p>
                    </div>
                  </slide>
                </carousel>
              </b-col>
            </b-row>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
  export default defineComponent({
    data() {
      return {
        slide: 0,
        sliding: null
      };
    },
    methods: {
      onSlideStart() {
        this.sliding = true;
      },
      onSlideEnd() {
        this.sliding = false;
      }
    }
  });
</script>
