<template>
  <main class="main nb-full-width">
    <div class="container">
      <h1 class="mb-5">
        {{ $t('about.heading') }}
      </h1>
      <strong>{{ $t('about.strong') }}</strong>

      <p />

      <p>
        {{ $t('about.p1') }}
      </p>

      <p>
        {{ $t('about.p2') }}
      </p>

      <p>
        {{ $t('about.p3.customer') }}<br>{{ $t('about.p3.lang') }}<br>{{ $t('about.p3.schedule') }}<br>{{ $t('about.p3.email') }}<br>{{ $t('about.p3.phone') }}
      </p>

      <p />

      <p />
    </div>
  </main>
</template>

<script>
export default {
  layout: 'with-header'
}
</script>
