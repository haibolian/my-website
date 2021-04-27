import Vue from "vue"
import SvgIcon from "@/components/SvgIcon/index.vue"

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svgs', false, /\.svg$/)
requireAll(req)

Vue.component('SvgIcon',SvgIcon)