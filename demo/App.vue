<template>
<div>
  <mu-appbar color="primary" title="Muse-UI-Toast"></mu-appbar>
  <div style="padding: 16px">
    <mu-button @click="$toast.message('Hello World!')">Message</mu-button>
    <mu-button color="success" @click="$toast.success('Hello World!')">success</mu-button>
    <mu-button color="info" @click="$toast.info('Hello World!')">info</mu-button>
    <mu-button color="warning" @click="$toast.warning('Hello World!')">warning</mu-button>
    <mu-button color="error" @click="$toast.error('Hello World!')">error</mu-button>
  </div>
</div>
</template>
<script>
export default {
  name: 'App'
};
</script>

