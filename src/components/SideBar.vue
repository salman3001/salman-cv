<script lang="ts" setup>
import Badge from "./Badge.vue";
</script>

|
<template>
  <div class="p-5 pt-0 w-[40%] space-y-8">
    <div class="flex justify-center h-48">
      <img src="/Pic.jpg" alt="Dp" class="h-full" />
    </div>
    <div class="space-y-2">
      <a href="mailto:Salman.k3001@gmail.com" class="flex gap-2 w-full">
        <v-icon fill="#cd6161" name="io-mail-sharp" />
        Salman.K3001@gmail.com
      </a>
      <a href="tel:+971529551244" class="flex gap-2 w-full">
        <v-icon fill="#cd6161" name="bi-telephone-fill" />
        +971529551244
      </a>
      <a
        href="https://salman3001.github.io/portfolio/"
        class="flex gap-2 w-full"
      >
        <v-icon fill="#cd6161" name="md-locationon" />
        salman3001.github.io/portfolio
      </a>
      <a @click:prevent="" class="flex gap-2 w-full">
        <v-icon fill="#cd6161" name="ri-global-fill" />
        Sharjah , Uniter Arab Emirates
      </a>
      <a
        href="https://github.com/salman3001/"
        target="_blank"
        class="flex gap-2 w-full"
      >
        <v-icon fill="#cd6161" name="bi-github" />
        github.com/salman3001
      </a>
      <a
        href="https://www.linkedin.com/in/salman-k-b922a2144"
        target="_blank"
        class="flex gap-2 w-full"
      >
        <v-icon fill="#cd6161" name="bi-linkedin" />
        linkedin.com/in/salman-k-b922a2144
      </a>
    </div>
    <div>
      <h2 class="text-xl font-bold text-primary uppercase">Skills</h2>
      <div class="border-t-[1px] border-primary"></div>
      <ul class="pt-6 font-bold space-y-4">
        <li class="space-x-1">
          <Badge title="HTML" />
          <Badge title="CSS" />
          <Badge title="Javascript" />
        </li>
        <li class="space-x-1">
          <Badge title="Typescript" />
          <Badge title="PHP" />
        </li>
        <li class="space-x-1">
          <Badge title="React Js" />
          <Badge title="Next Js" />
        </li>
        <li class="space-x-1">
          <Badge title="Vue Js" />
        </li>
        <li class="space-x-1">
          <Badge title="Laravel" />
        </li>
        <li class="space-x-1">
          <Badge title="Node Js" />
          <Badge title="Express Js" />
        </li>
        <li class="space-x-1">
          <Badge title="Nest Js" />
          <Badge title="Adonis Js" />
        </li>
        <li class="space-x-1">
          <Badge title="MongoDb" />
          <Badge title="My Sql" />
        </li>
        <li class="space-x-1">
          <Badge title="Redux" />
          <Badge title="RTK Query" />
          <Badge title="Axios" />
        </li>
        <li class="space-x-1">
          <Badge title="MUI" />
          <Badge title="BootStarp" />
          <Badge title="Tailwind" />
        </li>
        <li class="space-x-1">
          <Badge title="Authentications" />
          <Badge title="Authorization" />
        </li>
        <li class="space-x-1">
          <Badge title="Roles" />
          <Badge title="Permissions" />
        </li>
        <li class="space-x-1">
          <Badge title="SEO" />
          <Badge title="Docker" />
        </li>
      </ul>
    </div>
  </div>
</template>
