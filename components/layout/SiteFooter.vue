<template>
  <footer id="site-footer">
    <b-container fluid>
      <b-row class="py-3 bg-gray-100" style="border-top: 2px solid #28a744">
        <b-col>
          <b-container>
            <b-row class="align-items-center">
              <b-col class="text-center" cols="12" md="12" order="2" order-md="1">
                <h5 class="my-2">© GoTrash Ltd 2023.</h5>
              </b-col>
              <b-col
                v-if="false"
                class="text-center text-md-right mb-3 mb-md-0 d-flex align-items-center justify-content-center justify-content-md-end"
                order="1"
                order-md="2"
                cols="12"
                md="8"
              >
                <div>
                  <div>
                    <div><b class="font-weight-bolder h5 text-success">Company No:</b> 12345678</div>
                  </div>
                  <div>
                    <div><b class="font-weight-bolder h5 text-success">VAT No:</b> 123 4567 89</div>
                  </div>
                  <div>
                    <div><b class="font-weight-bolder h5 text-success">Waste Licence ID:</b> ABCD12345</div>
                  </div>
                </div>
              </b-col>
            </b-row>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>
