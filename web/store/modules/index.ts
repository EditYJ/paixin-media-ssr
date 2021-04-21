import { Module } from 'vuex'
import { ComponentsArr } from '@/interface/page-index'
import { GlobalStoreProps } from '@/store/index'

const indexStore: Module<ComponentsArr, GlobalStoreProps> = {
  namespaced: true,
  state: {
    components: [
      {
        itemMap: [
          {
            action: {
              type: 'JUMP_TO_SHOW',
              extra: {
                value: '40efbfbd41381b3d11ef',
                videoId: '1',
              },
            },
            mark: {
              text: '全网独播',
            },
            subtitle: 'null',
            title: '<牧野诡事>摸金祖师战拘魂法王',
            img: '//liangcang-material.alicdn.com/prod/upload/830787353c084045881a3db599319cc7.jpg',
            summary: '',
          },
        ],
      },
    ],
  },
  mutations: {
    setData(state, payload) {
      state.components = payload.data.components
    },
  },
  actions: {
    initialData({ commit }, { payload }) {
      commit('setData', payload)
    },
  },
}

export { indexStore }
