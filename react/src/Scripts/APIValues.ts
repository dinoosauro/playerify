export default {
    spotify: {
        clientId: localStorage.getItem("Playerify-CustomClientID") || "282dc0486ba74b6d8a9acde0fee407f4",
        scope: "user-modify-playback-state user-read-playback-state"
    },
    unsplash: {
        serverLink: "https://playerify-serverless.deno.dev/unsplash"
    }
}