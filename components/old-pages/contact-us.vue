<template>
  <main class="main nb-full-width">
    <div class="container">
      <h1 class="mb-5">
        {{ $t('contact.heading') }}
      </h1>
      {{ $t('contact.feel') }}

      <p>
        support@nordikcoin.com<br>{{ $t('contact.phone') }}<br>{{ $t('contact.schedule') }}
      </p>

      <p><br>{{ $t('contact.address') }}</p>

      <p>{{ $t('contact.licence') }}</p>

      <pre class="wp-block-code"><code>OmniMatrix OÜ
Reg.code : 14674630
VT000095</code></pre>

      <p>{{ $t('contact.malta') }}</p>

      <pre class="wp-block-code"><code>OmniMatrix LTD
Level 3, Valetta building
Valetta, VLT 110
Malta</code></pre>

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
