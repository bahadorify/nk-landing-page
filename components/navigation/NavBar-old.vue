<template>
  <div>
    <b-navbar toggleable="lg" type="light">
      <b-navbar-brand href="/">
        <img class="nc-logo" src="/logo_nordikcoin.svg" alt="nordikcoin" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto font-weight-bold small">
          <!-- Less repititive way of centering links vertically? -->
          <b-nav-item class="d-flex align-items-center">
            <nuxt-link to="/#how-it-works">
              How it works
            </nuxt-link>
          </b-nav-item>
          <b-nav-item class="d-flex align-items-center">
            <nuxt-link to="/#why-us">
              Why us
            </nuxt-link>
          </b-nav-item>
          <b-nav-item href="#" class="d-flex align-items-center">
            Sign in
          </b-nav-item>
          <b-nav-item href="#">
            <button class="btn btn-secondary btn-sm font-weight-bold">
              Get Started
            </button>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>
.navbar {
  padding: 0.5rem 0.5rem;
}

.navbar-right {
  margin-right: 0;
}

.nc-logo {
  width: 250px;
}

@media only screen and (min-width: 992px) {
  .navbar {
    padding: 0.5rem 2rem;
  }
}
</style>
