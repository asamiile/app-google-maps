import { mount } from '@vue/test-utils'
import GoogleMaps from '@/components/GoogleMaps.vue'

describe('GoogleMaps', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(GoogleMaps)
    expect(wrapper.vm).toBeTruthy()
  })
})
