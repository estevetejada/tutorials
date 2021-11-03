import { mount, shallowMount } from '@vue/test-utils' import Parent from
'@/components/Parent.vue' describe('Parent.vue', () => { it('should render child
component', () => { const wrapper = mount(Parent) //mount busca en componentes
hijos, shallowMount no expect(wrapper.text()).toContain('Parent') }) })
