<template>
  <BaseContainer class="py-5">
    <BaseBreadcrumbs />
    <div
      class="grid items-start grid-cols-1 lg:grid-cols-sidebar-layout gap-8 xl:gap-10 py-3 lg:py-10"
    >
      <BaseSidebar />

      <section>
        <div class="grid gap-y-7 lg:gap-y-8">
          <div>
            <h1 class="font-medium text-4xl mb-4">{{ routeMeta.title }}</h1>
            <p class="max-w-xl">{{ routeMeta.description }}</p>
          </div>

          <slot />
        </div>
      </section>
    </div>
  </BaseContainer>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import BaseSidebar from '@/components/base/BaseSidebar.vue';
import BaseContainer from '@/components/base/BaseContainer.vue';
import BaseBreadcrumbs from '@/components/base/BaseBreadcrumbs.vue';

const router = useRouter();
const routeMeta = computed(() => router.currentRoute.value.meta);
</script>

<style lang="scss" scoped></style>
