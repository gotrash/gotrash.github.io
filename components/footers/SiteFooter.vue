<template>
  <footer id="site-footer">
    <b-container fluid>
      <b-row class="py-3" style="border-top: 2px solid #28a744">
        <b-col>
          <b-container>
            <b-row class="align-items-center">
              <b-col
                class="d-flex flex-column flex-lg-row align-items-center text-center text-md-left"
                cols="12"
                md="4"
                order="2"
                order-md="1"
              >
                <site-logo class="mr-md-3 mb-3 mb-md-0" color="#1D1D1D" />
                <h5>© GoTrash Ltd 2023.</h5>
              </b-col>
              <b-col
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

<script>
  export default {
    components: {
      SiteLogo: () => import("~/components/SiteLogo")
    }
  };
</script>
