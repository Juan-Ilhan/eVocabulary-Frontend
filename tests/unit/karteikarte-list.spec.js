import { mount } from '@vue/test-utils'
import KarteikarteList from '@/components/KarteikarteList'
import Karteikarten from '@/views/Karteikarten'

describe('Testing PersonsCardList.vue', () => {
  it('should render a person card for each person', () => {
    // when
    const wrapper = mount(KarteikarteList, {
      propsData: {
        persons: [
          {
            id: 1,
            germanWord: 'Haus',
            englishWord: 'House',
            definition: 'Zum leben'
          },
          {
            id: 2,
            germanWord: 'Stuhl',
            englishWord: 'Chair',
            definition: 'Zum sitzen'
          }
        ]
      }
    })

    // then
    const karteiKarte = wrapper.findAllComponents(Karteikarten)
    expect(karteiKarte.length).toBe(2)
  })
})
