<template>
    <div>
<logout-user> </logout-user>
<update-profile> </update-profile>
<delete-profile> </delete-profile>
    </div>
</template>

<script>
import UpdateProfile from "../components/UpdateProfile.vue"
import DeleteProfile from "../components/DeleteProfile.vue"
import LogoutUser from "../components/Logout.vue"
    export default {
    name: "profile-page",

    components: {
        UpdateProfile,
        DeleteProfile,
        LogoutUser,
    },
    }
</script>

<style lang="sass" scoped>

</style>