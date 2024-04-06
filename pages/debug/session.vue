<template>
  <b-container fluid>
    <b-row>
      <b-col cols="12">
        <dl>
          <b-button @click="doGetSession">Get Session</b-button>
          <dt>Last Refreshed At</dt>
          <dd>{{ lastRefreshedAt }}</dd>
          <dt>CSRF Token</dt>
          <dd>{{ csrf }}</dd>
          <dt>Status</dt>
          <dd>
            <pre>
              <code>
                {{ status }}
              </code>
            </pre>
          </dd>
          <dt>Data</dt>
          <dd>
            <pre>
              <code>
                {{ data }}
              </code>
            </pre>
          </dd>
          <dt>Session</dt>
          <dd>
            <pre>
              <code>
                {{ session }}
              </code>
            </pre>
          </dd>
        </dl>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup>
  const { status, data, lastRefreshedAt, getCsrfToken, getSession } = useAuth();
  const csrf = await getCsrfToken();
  const session = ref({});

  const doGetSession = async () => {
    session.value = await getSession();
  };

  await doGetSession();
</script>
