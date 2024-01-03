<template>
  <section class="py-5">
    <div class="max-w-[1300px] mx-auto px-5">
      <BaseBreadcrumbs />
      <div class="grid grid-cols-1 lg:grid-cols-sidebar-layout gap-5">
        <BaseSidebar />
        <div>
          <div class="mb-8">
            <h1 class="font-medium text-4xl mb-4">{{ title }}</h1>
            <p class="max-w-xl">{{ description }}</p>
          </div>
          <RouterView />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseSidebar from "@/components/base/BaseSidebar.vue";
import BaseBreadcrumbs from "@/components/base/BaseBreadcrumbs.vue";
import { RouterView, useRouter, onBeforeRouteUpdate } from "vue-router";
</script>
