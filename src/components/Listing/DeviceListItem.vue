<template>
    <b-card @click.prevent="toggleItem($event,data.id)" :class="{'d-flex flex-row':true,'active' : selectedItems.includes(data.id)}" no-body>
        <div class="pl-2 d-flex flex-grow-1 min-width-zero">
            <div class="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
                <router-link :to="`/app/device-configuration/device/${data.id}`" class="w-10 w-sm-100">
                    <p class="list-item-heading mb-1 truncate">{{data.name}}</p>
                </router-link>
                <p class="mb-1 text-muted text-small w-15 w-sm-100">{{data.description}}</p>
                <p class="mb-1 text-muted text-small w-15 w-sm-100">{{data.uuid}}</p>
            </div>
        </div>
    </b-card>
</template>
<script>
export default {
  props: ['data', 'selectedItems'],
  data () {
    return {}
  },
  methods: {
    toggleItem (event, itemId) {
      this.$emit('toggle-item', event, itemId)
    }
  }
}
</script>
