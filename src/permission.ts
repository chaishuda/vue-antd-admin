import router from '@/router'
import NProgress from '@/utils/system/nprogress'
import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'
router.beforeEach((_to: RouteLocationNormalized, _from: RouteLocationNormalized, next: NavigationGuardNext) => {
    NProgress.start()
    next()
})

router.afterEach(() => {
    NProgress.done()
})
