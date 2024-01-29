<template>
  <b-container fluid>
    <b-row>
      <b-col cols="12">
        <dl>
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
          <dt>Providers</dt>
          <dd>
            <pre>
              <code>
                {{ providers }}
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
  const { status, data, lastRefreshedAt, getCsrfToken, getProviders, getSession, signIn, signOut } = useAuth();
  const csrf = await getCsrfToken();
  const providers = await getProviders();
  const session = await getSession();
</script>
