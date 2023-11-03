<template>
  <b-card class="card-outline card-primary" no-body>
    <custom-card-header>Job Statistics</custom-card-header>
    <b-card-body class="p-0">
      <div class="d-flex">
        <div class="d-none d-md-flex flex-column border-right">
          <div class="py-3 px-3 px-xl-4 border-bottom text-center" title="The amount of jobs you have left feedback for">
            <div class="mb-3">
              <fa-icon icon="check" class="fa-fw fa-2xl text-success" />
            </div>
            <div class="lh-1 mx-auto" style="max-width: 100px">
              <small>Complete <span class="fw-bolder d-block pt-1" style="min-width: 60px">18</span></small>
            </div>
          </div>
          <div class="py-3 px-3 px-xl-4 border-bottom text-center"
            title="The amount of jobs you have not left feedback for">
            <div class="mb-3">
              <fa-icon icon="times" class="fa-fw fa-2xl text-success" />
            </div>
            <div class="lh-1 mx-auto" style="max-width: 100px">
              <small>Incomplete <span class="fw-bolder d-block pt-1" style="min-width: 60px">0</span></small>
            </div>
          </div>
          <div class="py-3 px-3 px-xl-4 border-bottom text-center"
            title="This is how many jobs that you could leave feedback for">
            <div class="mb-3">
              <fa-icon icon="infinity" class="fa-fw fa-2xl text-success" />
            </div>
            <div class="lh-1 mx-auto" style="max-width: 80px">
              <small>Total <span class="fw-bolder d-block pt-1" style="min-width: 60px">18</span></small>
            </div>
          </div>
        </div>
        <b-container fluid>
          <b-row>
            <b-col cols="12" class="py-2">
              <b-table-simple class="text-center" small caption-top responsive>
                <caption class="mb-2">Statistics related to the jobs you have added to GoTrash.</caption>
                <b-thead>
                  <b-tr>
                    <b-th></b-th>
                    <b-th style="word-wrap: break-word"><small>3 Months</small></b-th>
                    <b-th style="word-wrap: break-word"><small>6 Months</small></b-th>
                    <b-th style="word-wrap: break-word"><small>12 Months</small></b-th>
                  </b-tr>
                </b-thead>
                <b-tbody>
                  <b-tr class="lh-lg">
                    <b-td class="text-start"><small>Complete</small></b-td>
                    <b-td><small>{{ statistics.three.positive }}</small></b-td>
                    <b-td><small>{{ statistics.six.positive }}</small></b-td>
                    <b-td><small>{{ statistics.twelve.positive }}</small></b-td>
                  </b-tr>
                  <b-tr class="lh-lg">
                    <b-td class="text-start"><small>Incomplete</small></b-td>
                    <b-td><small>{{ statistics.three.negative }}</small></b-td>
                    <b-td><small>{{ statistics.six.negative }}</small></b-td>
                    <b-td><small>{{ statistics.twelve.negative }}</small></b-td>
                  </b-tr>
                  <b-tr class="lh-lg">
                    <b-td class="text-start"><small>Total</small></b-td>
                    <b-td><small>{{ statistics.three.total }}</small></b-td>
                    <b-td><small>{{ statistics.six.total }}</small></b-td>
                    <b-td><small>{{ statistics.twelve.total }}</small></b-td>
                  </b-tr>
                </b-tbody>
              </b-table-simple>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
import UserFeedbackStatisticsDto from '@/dto/UserFeedbackStatisticsDto';

export default {
  data() {
    return {
      loading: false,
      feedback: null,
      statistics: new UserFeedbackStatisticsDto()
    }
  },
  created() {
    this.loading = true;
  },
  mounted() {
    this.getData()
  },
  methods: {
    async getData() {
      this.loading = true;
      const { getSession } = useAuth();
      const session = await getSession();

      useApi("http://localhost:8090/user/feedback/statistics", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${session?.session?.access_token}`
        },
        lazy: true,
        server: false
      }).then(res => {
        const d = { ...res.data.value }

        this.statistics = new UserFeedbackStatisticsDto({
          three: {
            positive: d.threePos,
            negative: d.threeNeg
          }, six: {
            positive: d.sixPos,
            negative: d.sixNeg
          }, twelve: {
            positive: d.twelvePos,
            negative: d.twelveNeg
          }, total: {
            positive: d.totalPos,
            negative: d.totalNeg
          }
        });

        this.err = null;
      }).catch(_err => {
        console.error(_err);
        this.err = _err;
      }).finally(() => {
        this.loading = false;
      })
    }
  }
}
</script>
